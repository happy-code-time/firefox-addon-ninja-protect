import * as React from 'react';

import ModuleFullScreenLoading from '../../AppFiles/Modules/ModuleFullScreenLoading';

import InputAnimation from '../../AppFiles/Modules/InputAnimation';

import getTranslations from '../../../Translations/index';

import customKey from '../../AppFiles/Functions/customKey';

import addItemToList from '../../AppFiles/Functions/storage/addItemToList';

import removeItemFromList from '../../AppFiles/Functions/storage/removeItemFromList';

import addToStore from '../../Store/addToStore';

import { addonRoot } from '../../AppFiles/Functions/addonPrefix';

import copyToClipBoard from '../../AppFiles/Functions/copyToClipboard';

interface WebsiteContainerProps {
    contentData?: string | any;
    loginRequired: boolean;
    redirectAfterLogin?: string;
}

class Requests extends React.Component<WebsiteContainerProps> {

    public translations: {
        [key: string]: any
    };

    public state: {
        [key: string]: any
    };

    public contentNode: any;

    constructor(props: WebsiteContainerProps) {
        super(props);
        this.getDataFromContentScript = this.getDataFromContentScript.bind(this);
        this.buildBooleanStorageMappingJsx = this.buildBooleanStorageMappingJsx.bind(this);
        this.changeList = this.changeList.bind(this);
        this.filterData = this.filterData.bind(this);

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
            booleanStorageMappingJsx: [],
            animationLoading: false,
            requestHistory: [],
            blacklistedElementsTrackers: [],
            blacklistedElementsDomians: [],
            blacklistedElementsCookies: [],
            whitelistedElementsDomains: [],
            blacklistedElementsIframes: [],
            blacklistedElementsIframesSources: [],
            filter: '',
            dataGeneration: false
        };
    }

    componentDidMount() {
        this.getDataFromContentScript();
    }

    getDataFromContentScript() {
        const data: string | null = localStorage.getItem('data') ? localStorage.getItem('data') : null;

        if (data) {
            this.setState({
                dataGeneration: true
            }, () => {
                // @ts-ignore
                browser.runtime.sendMessage({
                    action: 'get-popup-security-data'
                })
                    .then(response => {
                        const {
                            requestHistory,
                            blacklistedElementsTrackers,
                            blacklistedElementsDomians,
                            blacklistedElementsCookies,
                            whitelistedElementsDomains,
                            blacklistedElementsIframes,
                            blacklistedElementsIframesSources
                        } = response;

                        this.setState({
                            requestHistory,
                            blacklistedElementsTrackers,
                            blacklistedElementsDomians,
                            blacklistedElementsCookies,
                            whitelistedElementsDomains,
                            blacklistedElementsIframes,
                            blacklistedElementsIframesSources
                        }, () => {
                            this.buildBooleanStorageMappingJsx();
                        });
                    })
                    .catch(e => {
                        this.setState({
                            dataGeneration: false
                        })
                    })
            });
        }
    }

    changeList(storageName: string, action: string, value: string) {
        this.setState({
            animationLoading: true
        }, async () => {

            let response: { error: boolean, message: string, data: [] } = {
                error: false,
                message: '',
                data: []
            };

            if ('add' == action) {
                response = await addItemToList(storageName, value);
            }
            else {
                response = await removeItemFromList(storageName, value);
            }

            if (true == response.error) {
                addToStore(response.message, -1);

                return this.setState({
                    animationLoading: false,
                    dataGeneration: false
                });
            }

            this.setState({
                animationLoading: false
            }, this.getDataFromContentScript);
        })
    }

    filterData(filter) {
        this.setState({
            filter: filter.trim()
        }, this.getDataFromContentScript);
    }

    buildBooleanStorageMappingJsx() {
        const booleanStorageMappingJsx = [];

        this.setState({
            booleanStorageMappingJsx
        }, () => {

            const getOnlyDomainName = url => {
                if (url) {
                    return url.split('/')[2];
                }
                return '';
            };

            const {
                requestHistory,
                blacklistedElementsTrackers,
                blacklistedElementsDomians,
                blacklistedElementsCookies,
                whitelistedElementsDomains,
                blacklistedElementsIframes,
                blacklistedElementsIframesSources,
                filter
            } = this.state;

            requestHistory.map(url => {
                const domain = getOnlyDomainName(url);

                if (!url || !domain) {
                    return null;
                }

                const isWhiteDomain = whitelistedElementsDomains.includes(domain);
                const isBlackDomain = blacklistedElementsDomians.includes(domain);
                const isBlackCookies = blacklistedElementsCookies.includes(domain);
                const isBlackTrack = blacklistedElementsTrackers.includes(url);
                const isBlackIframes = blacklistedElementsIframes.includes(url);
                const isBlackIframesS = blacklistedElementsIframesSources.includes(url);

                if ('' !== filter && (-1 == domain.indexOf(filter) && -1 == url.indexOf(filter))) {
                    return null;
                }

                booleanStorageMappingJsx.push(
                    <div key={customKey()} className="code-box-holder">
                        <h1>
                            {
                                url
                            }
                        </h1>
                        <ul key={customKey()} className="ul-description">
                            <li>
                                {
                                    document.queryCommandSupported &&
                                    <i
                                        title="Copy to clipboard"
                                        className="fas fa-paste button-action clipboard"
                                        onClick={(e) => copyToClipBoard(e, url, undefined)}
                                    ></i>
                                }
                            </li>
                            <li>
                                {
                                    domain
                                }
                            </li>
                        </ul>
                        <ul key={customKey()} className="ul-description">
                            <li>
                                {
                                    isWhiteDomain &&
                                    <i
                                        className="far fa-thumbs-down"
                                        onClick={(e) => this.changeList('whitelistedElementsDomains', 'remove', domain)}
                                    ></i>
                                }
                                {
                                    !isWhiteDomain &&
                                    <i
                                        className="far fa-thumbs-up"
                                        onClick={(e) => this.changeList('whitelistedElementsDomains', 'add', domain)}
                                    ></i>
                                }
                            </li>
                            <li>
                                {
                                    isWhiteDomain && `${this.translations.popup_remove_whitelistedElementsDomains_popup}`
                                }
                                {
                                    !isWhiteDomain && `${this.translations.popup_add_whitelistedElementsDomains_popup}`
                                }
                            </li>
                        </ul>
                        <ul key={customKey()} className="ul-description">
                            <li>
                                {
                                    isBlackDomain &&
                                    <i
                                        className="far fa-thumbs-down"
                                        onClick={(e) => this.changeList('blacklistedElementsDomians', 'remove', domain)}
                                    ></i>
                                }
                                {
                                    !isBlackDomain &&
                                    <i
                                        className="far fa-thumbs-up"
                                        onClick={(e) => this.changeList('blacklistedElementsDomians', 'add', domain)}
                                    ></i>
                                }
                            </li>
                            <li>
                                {
                                    isBlackDomain && `${this.translations.popup_remove_blacklistedElementsDomians_popup}`
                                }
                                {
                                    !isBlackDomain && `${this.translations.popup_add_blacklistedElementsDomians_popup}`
                                }
                            </li>
                        </ul>
                        <ul key={customKey()} className="ul-description">
                            <li>
                                {
                                    isBlackCookies &&
                                    <i
                                        className="far fa-thumbs-down"
                                        onClick={(e) => this.changeList('blacklistedElementsCookies', 'remove', domain)}
                                    ></i>
                                }
                                {
                                    !isBlackCookies &&
                                    <i
                                        className="far fa-thumbs-up"
                                        onClick={(e) => this.changeList('blacklistedElementsCookies', 'add', domain)}
                                    ></i>
                                }
                            </li>
                            <li>
                                {
                                    isBlackCookies && `${this.translations.popup_remove_blacklistedElementsCookies_popup}`
                                }
                                {
                                    !isBlackCookies && `${this.translations.popup_add_blacklistedElementsCookies_popup}`
                                }
                            </li>
                        </ul>
                        <ul key={customKey()} className="ul-description">
                            <li>
                                {
                                    document.queryCommandSupported &&
                                    <i
                                        title="Copy to clipboard"
                                        className="fas fa-paste button-action clipboard"
                                        onClick={(e) => copyToClipBoard(e, url, undefined)}
                                    ></i>
                                }
                            </li>
                            <li>
                                {
                                    url
                                }
                            </li>
                        </ul>
                        <ul key={customKey()} className="ul-description">
                            <li>
                                {
                                    isBlackTrack &&
                                    <i
                                        className="far fa-thumbs-down"
                                        onClick={(e) => this.changeList('blacklistedElementsTrackers', 'remove', url)}
                                    ></i>
                                }
                                {
                                    !isBlackTrack &&
                                    <i
                                        className="far fa-thumbs-up"
                                        onClick={(e) => this.changeList('blacklistedElementsTrackers', 'add', url)}
                                    ></i>
                                }
                            </li>
                            <li>
                                {
                                    isBlackTrack && `${this.translations.popup_remove_blacklistedElementsTrackers_popup}`
                                }
                                {
                                    !isBlackTrack && `${this.translations.popup_add_blacklistedElementsTrackers_popup}`
                                }
                            </li>
                        </ul>
                        <ul key={customKey()} className="ul-description">
                            <li>
                                {
                                    isBlackIframes &&
                                    <i
                                        className="far fa-thumbs-down"
                                        onClick={(e) => this.changeList('blacklistedElementsIframes', 'remove', url)}
                                    ></i>
                                }
                                {
                                    !isBlackIframes &&
                                    <i
                                        className="far fa-thumbs-up"
                                        onClick={(e) => this.changeList('blacklistedElementsIframes', 'add', url)}
                                    ></i>
                                }
                            </li>
                            <li>
                                {
                                    isBlackIframes && `${this.translations.popup_remove_blacklistedElementsIframes_popup}`
                                }
                                {
                                    !isBlackIframes && `${this.translations.popup_add_blacklistedElementsIframes_popup}`
                                }
                            </li>
                        </ul>
                        <ul key={customKey()} className="ul-description">
                            <li>
                                {
                                    isBlackIframesS &&
                                    <i
                                        className="far fa-thumbs-down"
                                        onClick={(e) => this.changeList('blacklistedElementsIframesSources', 'remove', url)}
                                    ></i>
                                }
                                {
                                    !isBlackIframesS &&
                                    <i
                                        className="far fa-thumbs-up"
                                        onClick={(e) => this.changeList('blacklistedElementsIframesSources', 'add', url)}
                                    ></i>
                                }
                            </li>
                            <li>
                                {
                                    isBlackIframesS && `${this.translations.popup_remove_blacklistedElementsIframesSources_popup}`
                                }
                                {
                                    !isBlackIframesS && `${this.translations.popup_add_blacklistedElementsIframesSources_popup}`
                                }
                            </li>
                        </ul>
                    </div>
                );
            });

            this.setState({
                booleanStorageMappingJsx
            }, () => {
                this.setState({
                    dataGeneration: false
                });
            });
        });
    }

    reloadTarget(event: any) {
        event.preventDefault();

        //@ts-ignore
        browser.runtime.sendMessage({
            action: 'reload-target'
        });
    }

    render(): JSX.Element {
        const { animationLoading, booleanStorageMappingJsx, filter, dataGeneration } = this.state;

        if (animationLoading) {
            return <ModuleFullScreenLoading />;
        }

        return (
            <div
                ref={(node) => this.contentNode = node}
                className="ContentBody Requests ContentStaticHeight"
            >
                <div className="count">
                    {
                        booleanStorageMappingJsx.length
                    }
                </div>
                <InputAnimation
                    placeholder='Filter...'
                    type="text"
                    currentValue={filter}
                    callback={this.filterData}
                />
                {
                    dataGeneration &&
                    <div className="NoDataAvailable">
                        <img alt="image" src={`${addonRoot()}/logo/shield-128.png`} />
                        <h1 className="h1-title ff-title text-center">
                            {
                                this.translations.loading
                            }
                        </h1>
                    </div>
                }
                {
                    0 === booleanStorageMappingJsx.length && !dataGeneration &&
                    <div className="NoDataAvailable">
                        <img alt="image" src={`${addonRoot()}/logo/shield-128.png`} />
                        <h1 className="h1-title ff-title text-center">
                            {
                                this.translations.no_data_available
                            }
                        </h1>
                    </div>
                }
                {
                    0 !== booleanStorageMappingJsx.length && !dataGeneration && booleanStorageMappingJsx
                }
                <form style={{
                    display: 'none !important',
                    opacity: 0,
                    position: 'fixed',
                    width: 0,
                    height: 0,
                    overflow: 'hidden'
                }}>
                    <textarea
                        id="copy-to-clipboard"
                        value=''
                        readOnly={true}
                        style={{
                            display: 'none !important',
                            opacity: 0,
                            position: 'fixed',
                            width: 0,
                            height: 0,
                            overflow: 'hidden'
                        }}    
                    />
                </form>
            </div>
        );
    }
}

export default Requests;
