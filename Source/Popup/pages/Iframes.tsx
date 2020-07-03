import * as React from 'react';

import getTranslations from '../../../Translations/index';

import customKey from '../../AppFiles/Functions/customKey';

import NoDataIframes from '../../AppFiles/Modules/NoDataIframes';

import LoadingAnimation from '../../AppFiles/Modules/LoadingAnimation';

interface WebsiteContainerProps {
    contentData?: string | any;
    loginRequired: boolean;
    redirectAfterLogin?: string;
}

class Iframes extends React.Component<WebsiteContainerProps> {

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
    public nodeSideBar: Node;
    public isRegular: boolean;
    public isResponsive: boolean;
    public redirectAfterLogin: string;

    constructor(props: WebsiteContainerProps) {
        super(props);
        this.getIframes = this.getIframes.bind(this);
        this.deleteAllIframes = this.deleteAllIframes.bind(this);
        this.buildIframesJsx = this.buildIframesJsx.bind(this);

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
            iframes: [],
            iframesJsx: []
        };

        this.translations = getTranslations();
    }

    componentDidMount() {
        this.getIframes();
    }

    getIframes() {
        // @ts-ignore
        browser.runtime.sendMessage({
            action: 'get-active-tab-iframes'
        })
            .then(iframes => {
                this.setState({
                    iframes: iframes ? iframes : []
                }, () => {
                    this.buildIframesJsx();
                });
            })
            .catch(e => {

            })
    }

    buildIframesJsx() {
        const iframesJsx = [];
        const { iframes } = this.state;

        iframes.map((iframe, i) => {
            const { src, id, className } = iframe;

            iframesJsx.push(
                <ul key={customKey()} className="custom-ul-box">
                    <li>
                        <span
                            title={this.translations.titleDeleteIframe}
                            className="animation-css"
                        >
                            <i
                                className="fas fa-trash-alt trash"
                                onClick={(e) => { this.deleteAllIframes(i) }}
                            ></i>
                        </span>
                    </li>
                    <li className="flex">
                        <span className="left">
                            {
                                this.translations.iframe_msg_1
                            }
                        </span>
                        <span className="right">
                            {src}
                        </span>
                    </li>
                    <li className="flex">
                        <span className="left">
                            {
                                this.translations.iframe_msg_2
                            }
                        </span>
                        <span className="right">
                            {id}
                        </span>
                    </li>
                    <li className="flex">
                        <span className="left">
                            {
                                this.translations.iframe_msg_3
                            }
                        </span>
                        <span className="right">
                            {className}
                        </span>
                    </li>
                </ul>
            )
        });

        this.setState({
            iframesJsx
        });
    }

    deleteAllIframes(index: number = -1) {
        const { iframes } = this.state;

        if (iframes && iframes.length) {
            this.setState({
                showLoading: true
            }, () => {
                if (-1 !== index && undefined !== iframes[index]) {
                    // @ts-ignore
                    browser.runtime.sendMessage({
                        action: 'remove-iframe',
                        iframe: iframes[index]
                    })
                        .then(() => {
                            this.setState({
                                showLoading: false
                            }, () => {
                                this.getIframes();
                            });
                        })
                        .catch(() => {
                            this.setState({
                                showLoading: false
                            });
                        });
                }
                else {
                    // @ts-ignore
                    browser.runtime.sendMessage({
                        action: 'remove-all-iframes'
                    })
                        .then(() => {
                            this.setState({
                                showLoading: false
                            }, () => {
                                this.getIframes();
                            });
                        })
                        .catch(() => {
                            this.setState({
                                showLoading: false
                            });
                        });
                }
            });
        }
    }

    render(): JSX.Element {
        const { showLoading, iframesJsx } = this.state;

        if (showLoading) {
            return <LoadingAnimation />;
        }

        if (0 == iframesJsx.length) {
            return (
                <div className="ContentBody ContentStaticHeight">
                    <NoDataIframes
                        key={customKey()}
                    />
                </div>
            );
        }

        return (
            <div className="ContentBody ContentStaticHeight">
                <div className="h1-box">
                    <h1>
                        {
                            this.translations.deleteAllIframes
                        }
                    </h1>
                    {
                        0 !== this.state.iframes.length &&
                        <i
                            onClick={(e) => this.deleteAllIframes()}
                            className="fas fa-recycle delete-all"
                            title="Delete all iframes"
                        ></i>
                    }
                    {
                        this.state.iframesJsx
                    }
                </div>
            </div>
        );
    }
}

export default Iframes;