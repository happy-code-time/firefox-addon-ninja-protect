import * as React from 'react';

import NoDataStatistic from '../../AppFiles/Modules/NoDataStatistic';

import getTranslations from '../../../Translations/index';

import Chart from 'chart.js';

import { addonPrefixDashboard } from '../../AppFiles/Functions/addonPrefix';

interface WebsiteContainerProps {
    contentData?: string | any;
    loginRequired: boolean;
    redirectAfterLogin?: string;
}

class Statistic extends React.Component<WebsiteContainerProps> {

    public translations: {
        [key: string]: any
    };

    public state: {
        [key: string]: any
    };

    public contentNode: any;

    public canvasNode: any;

    constructor(props: WebsiteContainerProps) {

        super(props);
        this.getDataFromContentScript = this.getDataFromContentScript.bind(this);
        this.translations = getTranslations();
        this.canvasNode = React.createRef();

        const DATE = new Date();
        const year = DATE.getFullYear();
        const month = (DATE.getMonth() + 1) >= 10 ? (DATE.getMonth() + 1) : '0' + (DATE.getMonth() + 1);
        const day = DATE.getDate() >= 10 ? DATE.getDate() : '0' + DATE.getDate()
        const generatedDay = `${year}-${month}-${day}`;

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
            total: 0,
            /**
             * Pager
             */
            currentPage: 0,
            itemsPerSite: 5,
            globalCount: 0,
            statistic: {},
            statisticDb: []
        };
    }

    componentDidMount() {
        this.getDataFromContentScript();
    }

    getDataFromContentScript() {
        const data: string | null = localStorage.getItem('data') ? localStorage.getItem('data') : null;

        if (data) {
            // @ts-ignore
            browser.runtime.sendMessage({
                action: 'get-popup-security-data'
            })
                .then(response => {
                    const { statistic } = response;

                    this.setState({
                        statistic
                    }, this.generateCanvasData);

                })
                .catch(e => {

                });
        }
    }

    generateCanvasData() {
        const { statistic } = this.state;
        const DATE = new Date();
        const year = DATE.getFullYear();
        const month = (DATE.getMonth() + 1) >= 10 ? (DATE.getMonth() + 1) : '0' + (DATE.getMonth() + 1);
        const day = DATE.getDate() >= 10 ? DATE.getDate() : '0' + DATE.getDate()
        const generatedDay = `${year}-${month}-${day}`;
        /**
         * Total and dates for chart
         */
        if (this.canvasNode && undefined !== statistic[generatedDay]) {

            const objectKeys = Object.keys(statistic[generatedDay]);
            let total = 0;

            objectKeys.map(key => {
                total += statistic[generatedDay][key];
            });

            const blocked_iframe = statistic[generatedDay].iframe ? statistic[generatedDay].iframe : 0;
            const blocked_urlInclude = statistic[generatedDay].urlInclude ? statistic[generatedDay].urlInclude : 0;
            const blocked_cookie = statistic[generatedDay].cookie ? statistic[generatedDay].cookie : 0;
            const blocked_word = statistic[generatedDay].word ? statistic[generatedDay].word : 0;
            //
            const blocked_tracker = statistic[generatedDay].tracker ? statistic[generatedDay].tracker : 0;
            const blocked_url = statistic[generatedDay].url ? statistic[generatedDay].url : 0;
            const blocked_trackers = blocked_url + blocked_tracker;
            //
            const blocked_id = statistic[generatedDay].id ? statistic[generatedDay].id : 0;
            const blocked_href = statistic[generatedDay].href ? statistic[generatedDay].href : 0;
            const blocked_class = statistic[generatedDay].class ? statistic[generatedDay].class : 0;
            const blocked_dom = blocked_id + blocked_href + blocked_class;

            const blocked_blackDomain = statistic[generatedDay].domain ? statistic[generatedDay].domain : 0;

            this.setState({
                totalAll: total
            }, () => {
                const barChartData = {
                    labels: [
                        this.translations.popup_blocked_iframes, //'Iframes', 
                        this.translations.popup_blocked_requests,//'Requests', 
                        this.translations.popup_blocked_cookies,//'Cookies', 
                        this.translations.popup_blocked_words,//'Words', 
                        this.translations.popup_blocked_trackers,//'Trackers', 
                        this.translations.popup_blocked_websites,//'Domains', 
                        this.translations.popup_blocked_dom//'Class, Href, Id'
                    ],
                    datasets: [
                        {
                            label: '',
                            backgroundColor: '#FDB734',
                            stack: '',
                            data: [
                                blocked_iframe,
                                blocked_urlInclude,
                                blocked_cookie,
                                blocked_word,
                                blocked_trackers,
                                blocked_blackDomain,
                                blocked_dom
                            ]
                        }
                    ]
                };

                if(this.canvasNode && this.canvasNode.current){
                    const ctx = this.canvasNode.current.getContext('2d');

                    new Chart(ctx, {
                        type: 'bar',
                        data: barChartData,
                        options: {
                            title: {
                                display: false,
                                text: 'Today blocked elements'
                            },
                            legend: {
                                display: false
                            },
                            tooltips: {
                                mode: 'index',
                                intersect: false
                            },
                            responsive: true,
                            scales: {
                                xAxes: [{
                                    stacked: true,
                                }],
                                yAxes: [{
                                    stacked: false
                                }]
                            }
                        }
                    });
                }
            });
        }
    }

    fadePopupBoxOutPopup(){
        setTimeout( () => {
            window.close();
        }, 200);
    }

    render(): JSX.Element {
        const { totalAll } = this.state;

        return (
            <div
                ref={(node) => this.contentNode = node}
                className="ContentBody ContentStaticHeight Statistic"
            >
                {
                    !totalAll &&
                    <NoDataStatistic />
                }
                {
                    undefined !== totalAll && 0 !== totalAll &&
                    <div className="code-box-holder">
                        <h1 className="ff-title">
                            {`${this.translations.today_blocked}`}
                        </h1>
                        <div className={0 == totalAll ? 'canvas d-none' : 'canvas'}>
                            <canvas id="myChart" ref={this.canvasNode} />
                        </div>
                    </div>
                }
                <a
                    className="dashboard-link"
                    onClick={(e) => this.fadePopupBoxOutPopup()}
                    target='_blank'
                    href={`${addonPrefixDashboard()}#/statistic`}
                >
                    {
                        this.translations.popup_title_global_chart
                    }
                </a>
            </div>
        );
    }
}

export default Statistic;
