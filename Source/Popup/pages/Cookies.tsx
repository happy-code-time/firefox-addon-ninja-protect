import * as React from 'react';

import getTranslations from '../../../Translations/index';

import customKey from '../../AppFiles/Functions/customKey';

import NoDataCookies from '../../AppFiles/Modules/NoDataCookies';

import LoadingAnimation from '../../AppFiles/Modules/LoadingAnimation';

interface WebsiteContainerProps {
    contentData?: string | any;
    loginRequired: boolean;
    redirectAfterLogin?: string;
}

class Cookies extends React.Component<WebsiteContainerProps> {

    public Redirection: {
        [key: string]: any
    };

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
        this.getCookies = this.getCookies.bind(this);
        this.deleteAllCookies = this.deleteAllCookies.bind(this);

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
            blocked_trackers: 0,
            blocked_cookies: 0,
            blocked_words: 0,
            blocked_requests: 0,
            cookies: [],
            cookiesJsx: []
        };

        this.translations = getTranslations();
    }

    componentDidMount() {
        this.getCookies();
    }

    getCookies() {
        // @ts-ignore
        browser.runtime.sendMessage({
            action: 'get-active-tab-cookies'
        })
            .then(cookies => {
                this.setState({
                    cookies
                }, () => {
                    this.buildCookiesJsx();
                });
            })
            .catch(e => {

            })
    }

    buildCookiesJsx() {
        const cookiesJsx = [];
        const { cookies } = this.state;

        cookies.map((cookie, i) => {
            const { domain, name, value } = cookie;

            cookiesJsx.push(
                <ul key={customKey()} className="custom-ul-box">
                    <li>
                        <span
                            title={this.translations.titleDeleteCookie}
                            className="animation-css"
                        >
                            <i
                                className="fas fa-trash-alt trash"
                                onClick={(e) => { this.deleteAllCookies(i) }}
                            ></i>
                        </span>
                    </li>
                    <li className="flex">
                        <span className="left">
                            {
                                this.translations.cookie_msg_1
                            }
                        </span>
                        <span className="right">
                            {domain}
                        </span>
                    </li>
                    <li className="flex">
                        <span className="left">
                            {
                                this.translations.cookie_msg_2
                            }
                        </span>
                        <span className="right">
                            {name}
                        </span>
                    </li>
                    <li className="flex">
                        <span className="left">
                            {
                                this.translations.cookie_msg_3
                            }
                        </span>
                        <span className="right">
                            {value}
                        </span>
                    </li>
                </ul>
            )
        });

        this.setState({
            cookiesJsx
        });
    }

    deleteAllCookies(index: number = -1) {
        const { cookies } = this.state;

        if (cookies && cookies.length) {
            this.setState({
                showLoading: true
            }, () => {
                if (-1 !== index) {
                    cookies.map((cookie, i) => {

                        if (i == index) {
                            // @ts-ignore
                            browser.runtime.sendMessage({
                                action: 'remove-cookie',
                                name: cookie.name.trim()
                            })
                                .catch(() => {
                                    this.setState({
                                        showLoading: false
                                    });
                                });
                        }
                    });
                }
                else {
                    cookies.map(cookie => {
                        // @ts-ignore
                        browser.runtime.sendMessage({
                            action: 'remove-cookie',
                            name: cookie.name.trim()
                        })
                            .catch(() => {
                                this.setState({
                                    showLoading: false
                                });
                            });
                    });
                }

                this.setState({
                    showLoading: false
                }, () => {
                    this.getCookies();
                });
            });
        }
    }

    render(): JSX.Element {
        const { showLoading, cookies, cookiesJsx } = this.state;

        if (showLoading) {
            return <LoadingAnimation />;
        }

        if (0 == cookiesJsx.length) {
            return (
                <div className="ContentBody ContentStaticHeight">
                    <NoDataCookies
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
                            this.translations.deleteAllCookies
                        }
                    </h1>
                    {
                        0 !== cookies.length &&
                        <i
                            onClick={(e) => this.deleteAllCookies()}
                            className="fas fa-recycle delete-all"
                            title="Delete all cookies"
                        ></i>
                    }
                    {
                        cookiesJsx
                    }
                </div>
            </div>
        );
    }
}

export default Cookies;