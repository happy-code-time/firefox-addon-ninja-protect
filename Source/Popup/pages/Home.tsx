import * as React from 'react';

import NoDataBlockedItems from '../../AppFiles/Modules/NoDataBlockedItems';

import AddonNotAvailable from '../../AppFiles/Modules/AddonNotAvailable';

import getTranslations from '../../../Translations/index';

import copyToClipBoard from '../../AppFiles/Functions/copyToClipboard';

import customKey from '../../AppFiles/Functions/customKey';

import { addonPrefixDashboard, addonRoot } from '../../AppFiles/Functions/addonPrefix';

interface WebsiteContainerProps {
    contentData?: string | any;
    loginRequired: boolean;
    redirectAfterLogin?: string;
}
class Home extends React.Component<WebsiteContainerProps> {

    public Redirection: {
        [key: string]: any
    };

    public translations: {
        [key: string]: any
    };

    public state: {
        [key: string]: any
    };

    public buildHomepageInterval: any;

    public canvasNode: any;

    constructor(props: WebsiteContainerProps) {
        super(props);
        this.getDataFromContentScript = this.getDataFromContentScript.bind(this);
        this.setIntervals = this.setIntervals.bind(this);
        this.showItems = this.showItems.bind(this);
        this.removeBlockedDataInfo = this.removeBlockedDataInfo.bind(this);
        this.checkAddonsAvailability = this.checkAddonsAvailability.bind(this);
        this.canvasNode = React.createRef();

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
            blocked_iframes: 0,
            blocked_dom: 0,
            security: {},
            tabid: null,
            data: '',
            totalAll: 0,
            addonNotAvailable: false
        };

        this.translations = getTranslations();
    }

    componentDidMount() {
        this.checkAddonsAvailability();
    }

    componentWillUnmount() {
        clearInterval(this.buildHomepageInterval);
    }

    checkAddonsAvailability() {
        // @ts-ignore
        browser.runtime
            .sendMessage({
                action: 'check-addons-availablitity',
            })
            .then(response => {
                if (!response) {
                    return this.setState({
                        addonNotAvailable: true
                    });
                }

                this.setIntervals();
            })
            .catch(() => {
                this.setState({
                    addonNotAvailable: true
                });
            });
    }

    setIntervals() {
        clearInterval(this.buildHomepageInterval);
        this.getDataFromContentScript();

        this.buildHomepageInterval = setInterval(() => {
            this.getDataFromContentScript();
        }, 3000);
    }

    getDataFromContentScript() {
        const data: string | null = localStorage.getItem('data') ? localStorage.getItem('data') : null;

        if (data) {
            // @ts-ignore
            browser.runtime.sendMessage({
                action: 'get-active-tab'
            })
                .then(tabid => {
                    if (undefined !== tabid && null !== tabid && -1 !== tabid) {
                        const parsedDatadata = JSON.parse(data);
                        const { security } = parsedDatadata;
                        let blocked_trackers = 0;
                        let blocked_cookies = 0;
                        let blocked_requests = 0;
                        let blocked_words = 0;
                        let blocked_iframes = 0;
                        let blocked_dom = 0;

                        /**
                         * Calculate cookies
                         */
                        if (undefined !== security.cookies[`${tabid}`]) {
                            blocked_cookies += security.cookies[`${tabid}`].length;
                        }

                        /**
                         * Calculate trackers
                         */
                        if (undefined !== security.trackers[`${tabid}`]) {
                            blocked_trackers += security.trackers[`${tabid}`].length;
                        }

                        /**
                         * Calculate urls, urlsIncludes
                         */
                        if (undefined !== security.urls[`${tabid}`]) {
                            blocked_trackers += security.urls[`${tabid}`].length;
                        }

                        if (undefined !== security.urlsIncludes[`${tabid}`]) {
                            blocked_requests += security.urlsIncludes[`${tabid}`].length;
                        }

                        /**
                         * Calculate words
                         */
                        if (undefined !== security.blacklistedWords[`${tabid}`]) {
                            blocked_words += security.blacklistedWords[`${tabid}`].length;
                        }

                        /**
                         * Calculate iframes
                         */
                        if (undefined !== security.iframes[`${tabid}`]) {
                            blocked_iframes += security.iframes[`${tabid}`].length;
                        }

                        /**
                         * Calculate dom
                         */
                        if (undefined !== security.id[`${tabid}`]) {
                            blocked_dom += security.id[`${tabid}`].length;
                        }

                        if (undefined !== security.class[`${tabid}`]) {
                            blocked_dom += security.class[`${tabid}`].length;
                        }

                        if (undefined !== security.href[`${tabid}`]) {
                            blocked_dom += security.href[`${tabid}`].length;
                        }

                        this.setState({
                            blocked_cookies,
                            blocked_trackers,
                            blocked_requests,
                            blocked_words,
                            blocked_iframes,
                            blocked_dom,
                            security,
                            tabid
                        });
                    }
                })
                .catch(e => {

                })
        }
    }

    showItems(type) {
        const { security, tabid } = this.state;
        let blocked = [];

        if ('trackers' == type) {
            if (undefined !== security.urls[`${tabid}`]) {
                security.urls[`${tabid}`].map(item => {
                    blocked.push(
                        <li key={customKey()}>
                            <div>
                                <i
                                    className="fas fa-clone"
                                    onClick={(e) => copyToClipBoard(e, item, document.documentElement.scrollTop)}
                                    title={this.translations.action_title_copyToClipboard_single}
                                ></i>
                            </div>
                            Blocked tracker: {item}
                        </li>
                    );
                });
            }
            if (undefined !== security.trackers[`${tabid}`]) {
                security.trackers[`${tabid}`].map(item => {
                    blocked.push(
                        <li key={customKey()}>
                            <div>
                                <i
                                    className="fas fa-clone"
                                    onClick={(e) => copyToClipBoard(e, item, document.documentElement.scrollTop)}
                                    title={this.translations.action_title_copyToClipboard_single}
                                ></i>
                            </div>
                            Blocked tracker: {item}
                        </li>
                    );
                });
            }
        }

        if ('requests' == type) {
            if (undefined !== security.urlsIncludes[`${tabid}`]) {
                security.urlsIncludes[`${tabid}`].map(item => {
                    blocked.push(
                        <li key={customKey()}>
                            <div>
                                <i
                                    className="fas fa-clone"
                                    onClick={(e) => copyToClipBoard(e, item, document.documentElement.scrollTop)}
                                    title={this.translations.action_title_copyToClipboard_single}
                                ></i>
                            </div>
                            Blocked url: {item}
                        </li>
                    );
                });
            }
        }

        if ('cookies' == type) {
            if (undefined !== security.cookies[`${tabid}`]) {
                security.cookies[`${tabid}`].map(item => {
                    blocked.push(
                        <li key={customKey()}>
                            <div>
                                <i
                                    className="fas fa-clone"
                                    onClick={(e) => copyToClipBoard(e, item, document.documentElement.scrollTop)}
                                    title={this.translations.action_title_copyToClipboard_single}
                                ></i>
                            </div>
                            Blocked cookie name: {item}
                        </li>
                    );
                });
            }
        }

        if ('words' == type) {
            if (undefined !== security.blacklistedWords[`${tabid}`]) {
                security.blacklistedWords[`${tabid}`].map(item => {
                    blocked.push(
                        <li key={customKey()}>
                            <div>
                                <i
                                    className="fas fa-clone"
                                    onClick={(e) => copyToClipBoard(e, item, document.documentElement.scrollTop)}
                                    title={this.translations.action_title_copyToClipboard_single}
                                ></i>
                            </div>
                            Blocked word: {item}
                        </li>
                    );
                });
            }
        }

        if ('iframes' == type) {
            if (undefined !== security.iframes[`${tabid}`]) {
                security.iframes[`${tabid}`].map(item => {
                    blocked.push(
                        <li key={customKey()}>
                            <div>
                                <i
                                    className="fas fa-clone"
                                    onClick={(e) => copyToClipBoard(e, item, document.documentElement.scrollTop)}
                                    title={this.translations.action_title_copyToClipboard_single}
                                ></i>
                            </div>
                            {
                                item
                            }
                        </li>
                    );
                });
            }
        }

        if ('dom' == type) {
            if (undefined !== security.class[`${tabid}`]) {
                security.class[`${tabid}`].map(item => {
                    blocked.push(
                        <li key={customKey()}>
                            <div>
                                <i
                                    className="fas fa-clone"
                                    onClick={(e) => copyToClipBoard(e, item, document.documentElement.scrollTop)}
                                    title={this.translations.action_title_copyToClipboard_single}
                                ></i>
                            </div>
                            {`${this.translations.popup_blocked_dom}: ${item}`}
                        </li>
                    );
                });
            }
            if (undefined !== security.id[`${tabid}`]) {
                security.id[`${tabid}`].map(item => {
                    blocked.push(
                        <li key={customKey()}>
                            <div>
                                <i
                                    className="fas fa-clone"
                                    onClick={(e) => copyToClipBoard(e, item, document.documentElement.scrollTop)}
                                    title={this.translations.action_title_copyToClipboard_single}
                                ></i>
                            </div>
                            {`${this.translations.popup_blocked_dom}: ${item}`}
                        </li>
                    );
                });
            }
            if (undefined !== security.href[`${tabid}`]) {
                security.href[`${tabid}`].map(item => {
                    blocked.push(
                        <li key={customKey()}>
                            <div>
                                <i
                                    className="fas fa-clone"
                                    onClick={(e) => copyToClipBoard(e, item, document.documentElement.scrollTop)}
                                    title={this.translations.action_title_copyToClipboard_single}
                                ></i>
                            </div>
                            {`${this.translations.popup_blocked_dom}: ${item}`}
                        </li>
                    );
                });
            }
        }

        if (0 == blocked.length) {
            blocked.push(
                <NoDataBlockedItems
                    key={customKey()}
                />
            );
        }

        this.setState({
            data: (
                <div className="Data">
                    <i className="fas fa-times close" onClick={this.removeBlockedDataInfo}></i>

                    <ul>
                        {
                            blocked
                        }
                    </ul>
                </div>
            )
        });
    }

    removeBlockedDataInfo() {
        this.setState({
            data: ''
        });
    }

    fadePopupBoxOutPopup() {
        setTimeout(() => {
            window.close();
        }, 200);
    }

    render(): JSX.Element {
        const { addonNotAvailable } = this.state;

        if(addonNotAvailable){
            return <AddonNotAvailable />;
        }

        return (
            <div className="ContentBody">
                <div key={customKey()} className="Ninja">
                    <img alt="image" src={`${addonRoot()}logo/shield-128.png`} />
                </div>
                {
                    '' !== this.state.data && this.state.data
                }
                <div className="stats">
                    <div className="box" onClick={(e) => this.showItems('trackers')}>
                        <p>
                            {
                                this.translations.popup_blocked_trackers
                            }
                        </p>
                        <span>
                            {
                                this.state.blocked_trackers
                            }
                        </span>
                    </div>
                    <div className="box" onClick={(e) => this.showItems('requests')}>
                        <p>
                            {
                                this.translations.popup_blocked_requests

                            }
                        </p>
                        <span>
                            {
                                this.state.blocked_requests
                            }
                        </span>
                    </div>
                    <div className="box" onClick={(e) => this.showItems('cookies')}>
                        <p>
                            {
                                this.translations.popup_blocked_cookies
                            }
                        </p>
                        <span>
                            {
                                this.state.blocked_cookies
                            }
                        </span>
                    </div>
                    <div className="box" onClick={(e) => this.showItems('words')}>
                        <p>
                            {
                                this.translations.popup_blocked_words
                            }
                        </p>
                        <span>
                            {
                                this.state.blocked_words
                            }
                        </span>
                    </div>
                    <div className="box" onClick={(e) => this.showItems('iframes')}>
                        <p>
                            {
                                this.translations.popup_blocked_iframes
                            }
                        </p>
                        <span>
                            {
                                this.state.blocked_iframes
                            }
                        </span>
                    </div>
                    <div className="box" onClick={(e) => this.showItems('dom')}>
                        <p>
                            {
                                this.translations.popup_blocked_dom
                            }
                        </p>
                        <span>
                            {
                                this.state.blocked_dom
                            }
                        </span>
                    </div>
                </div>
                <a
                    className="dashboard-link"
                    onClick={(e) => this.fadePopupBoxOutPopup()}
                    target='_blank'
                    href={`${addonPrefixDashboard()}#/`}
                >
                    {
                        this.translations.popup_title_dashboard
                    }
                </a>
                <form style={{
                    display: 'none !important',
                    opacity: 0,
                    position: 'absolute',
                    width: 0,
                    height: 0,
                    overflow: 'hidden'
                }}>
                    <textarea
                        id="copy-to-clipboard"
                        value=''
                        readOnly={true}
                    />
                </form>
            </div>
        );
    }
}

export default Home;
