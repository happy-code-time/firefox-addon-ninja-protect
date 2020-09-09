import * as React from 'react';

import ModuleFullScreenLoading from '../../AppFiles/Modules/ModuleFullScreenLoading';

import getTranslations from '../../../Translations/index';

import customKey from '../../AppFiles/Functions/customKey';

import addItemToList from '../../AppFiles/Functions/storage/addItemToList';

import removeItemFromList from '../../AppFiles/Functions/storage/removeItemFromList';

import addToStore from '../../Store/addToStore';

interface WebsiteContainerProps {
    contentData?: string | any;
    loginRequired: boolean;
    redirectAfterLogin?: string;
}
class Security extends React.Component<WebsiteContainerProps> {

    public translations: {
        [key: string]: any
    };

    public state: {
        [key: string]: any
    };

    public env?: string;
    public remoteHost?: string;
    public currentUser?: string;
    public currentUserHash?: string;
    public contentNode: any;

    constructor(props: WebsiteContainerProps) {
        super(props);
        this.getDataFromContentScript = this.getDataFromContentScript.bind(this);
        this.buildBooleanStorageMappingJsx = this.buildBooleanStorageMappingJsx.bind(this);
        this.changeList = this.changeList.bind(this);

        this.translations = getTranslations();

        this.state = {
            minifiedSecondSideBar: true,
            isMinified: true,
            sidebarMin: true,
            contentMin: true,
            minifiedSaver: true,
            language: 'en',
            activeTab: {},
            contentData: this.props.contentData ? this.props.contentData : '',
            loginRequired: this.props.loginRequired,
            redirectAfterLogin: this.props.redirectAfterLogin ? this.props.redirectAfterLogin : '',
            /**
             * Stats
             */
            domain: '',
            tabid: -1,
            url: '',
            data: {},
            blacklistedElementsTrackers: false,
            blacklistedElementsDomians: false,
            blacklistedElementsCookies: false,
            whitelistedElementsDomains: false,
            blacklistedElementsIframes: false,
            booleanStorageMapping: [
                {
                    storageName: 'blacklistedElementsTrackers',
                    add: this.translations.popup_add_blacklistedElementsTrackers,
                    remove: this.translations.popup_remove_blacklistedElementsTrackers
                },
                {
                    storageName: 'blacklistedElementsDomians',
                    add: this.translations.popup_add_blacklistedElementsDomians,
                    remove: this.translations.popup_remove_blacklistedElementsDomians
                },
                {
                    storageName: 'blacklistedElementsCookies',
                    add: this.translations.popup_add_blacklistedElementsCookies,
                    remove: this.translations.popup_remove_blacklistedElementsCookies
                },
                {
                    storageName: 'blacklistedElementsIframes',
                    add: this.translations.popup_add_blacklistedElementsIframes,
                    remove: this.translations.popup_remove_blacklistedElementsIframes
                },
                {
                    storageName: 'whitelistedElementsDomains',
                    add: this.translations.popup_add_whitelistedElementsDomains,
                    remove: this.translations.popup_remove_whitelistedElementsDomains
                }
            ],
            booleanStorageMappingJsx: [],
            animationLoading: false
        };
    }

    componentDidMount() {
        this.getDataFromContentScript()
    }

    getDataFromContentScript() {
        const data: string | null = localStorage.getItem('data') ? localStorage.getItem('data') : null;

        if (data) {
            // @ts-ignore
            browser.runtime.sendMessage({
                action: 'get-popup-security-data'
            })
                .then(response => {
                    const {
                        tabid,
                        url,
                        domain,
                        data,
                        isBlackTrackers,
                        isBlackDomains,
                        isBlackCookies,
                        isWhiteDomains,
                        isWhiteIframes
                    } = response;

                    this.setState({
                        tabid,
                        url,
                        data,
                        domain,
                        blacklistedElementsTrackers: isBlackTrackers,
                        blacklistedElementsDomians: isBlackDomains,
                        blacklistedElementsCookies: isBlackCookies,
                        whitelistedElementsDomains: isWhiteDomains,
                        blacklistedElementsIframes: isWhiteIframes
                    }, () => {
                        this.buildBooleanStorageMappingJsx();
                    });
                })
                .catch(e => {

                })
        }
    }

    changeList(storageName: string, action: string) {
        this.setState({
            animationLoading: true
        }, () => {
            const { booleanStorageMapping } = this.state;

            /**
             * Change item locally to update the element now
             * then regular DB ajax request
             */
            if ('add' == action) {
                booleanStorageMapping[storageName] = true;
            }
            else {
                booleanStorageMapping[storageName] = false;
            }

            this.setState({
                [storageName]: booleanStorageMapping[storageName],
                booleanStorageMapping
            }, async () => {

                let { data } = this.state;
                let response: { error: boolean, message: string, data: [] } = {
                    error: false,
                    message: '',
                    data: []
                };

                if ('add' == action) {
                    response = await addItemToList(storageName, this.state.domain);
                }
                else {
                    response = await removeItemFromList(storageName, this.state.domain);
                }

                if (true == response.error) {
                    addToStore(response.message, -1);

                    return this.setState({
                        animationLoading: false
                    });
                }

                this.setState({
                    inputValue: '',
                    data,
                    animationLoading: false
                }, () => {
                    this.buildBooleanStorageMappingJsx();
                });
            });
        })
    }

    buildBooleanStorageMappingJsx() {
        const { booleanStorageMapping } = this.state;
        const booleanStorageMappingJsx = [];

        booleanStorageMapping.map(object => {

            if (this.state[object.storageName]) {
                booleanStorageMappingJsx.push(
                    <ul key={customKey()} className="ul-description">
                        <li>
                            <i
                                className="far fa-thumbs-down"
                                onClick={(e) => this.changeList(object.storageName, 'remove')}
                            ></i>
                        </li>
                        <li>
                            {
                                object.remove
                            }
                        </li>
                    </ul>
                )
            } else {
                booleanStorageMappingJsx.push(
                    <ul key={customKey()} className="ul-description">
                        <li>
                            <i
                                className="far fa-thumbs-up"
                                onClick={(e) => this.changeList(object.storageName, 'add')}
                            ></i>
                        </li>
                        <li>
                            {
                                object.add
                            }
                        </li>
                    </ul>
                )
            }
        });

        this.setState({ booleanStorageMappingJsx });
    }

    // reloadTarget(event: any) {
    //     event.preventDefault();

    //     //@ts-ignore
    //     browser.runtime.sendMessage({
    //         action: 'reload-target'
    //     });
    // }

    render(): JSX.Element {
        const { animationLoading } = this.state;

        if (animationLoading) {
            return <ModuleFullScreenLoading />;
        }

        return (
            <div
                ref={(node) => this.contentNode = node}
                className="ContentBody Security ContentStaticHeight"
            >
                <div className="code-box-holder">
                    <h1 className="ff-title">
                        {
                            this.state.domain
                        }
                    </h1>
                    {
                        this.state.booleanStorageMappingJsx
                    }
                    {/* <div className="links">
                        <a
                            className="dashboard-link"
                            onClick={(e) => this.reloadTarget(e)}
                        >
                            {
                                this.translations.popup_reload_target
                            }
                        </a>
                    </div> */}
                </div>
            </div>
        );
    }
}

export default Security;
