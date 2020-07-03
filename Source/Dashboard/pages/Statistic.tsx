import * as React from 'react';

import ModuleFullScreenLoading from '../../AppFiles/Modules/ModuleFullScreenLoading';

import NoDataStatistic from '../../AppFiles/Modules/NoDataStatistic';

import getTranslations from '../../../Translations/index';

import Chart from 'chart.js';

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
            animationLoading: false,
            total: 0,
            /**
             * Pager
             */
            currentPage: 0,
            itemsPerSite: 5,
            globalCount: 0,
            statistic: {},
            statisticDb: [],
            removeNode: false
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
                        statistic,
                        removeNode: true
                    }, this.generateCanvasData);

                })
                .catch(e => {

                });
        }
    }

    generateCanvasData() {
        const ignoreKeys = ['timestamp', 'day_name'];
        const { statistic, currentPage, itemsPerSite } = this.state;
        const days = Object.keys(statistic);
        let data = [];

        days.map(d => {
            data.push(
                {
                    data: statistic[d],
                    date: d,
                    day_name: statistic[d].day_name
                }
            );
        });

        const globalCount = Object.keys(statistic).length;
        const labels = [];
        let totalAll = 0;
        /**
         * Total and dates for chart
         */
        const start = currentPage * itemsPerSite;
        const end = start + itemsPerSite;

        data.sort((a, b) => {
            if (a.data.timestamp < b.data.timestamp) {
                return 1;
            }
            if (a.data.timestamp > b.data.timestamp) {
                return -1;
            }

            return 0;
        });

        data = data.slice(start, end);
        data = data.reverse();

        data.map(singleData => {

            let total = 0;
            let singleDay = singleData.data;
            const day_name = singleData.day_name;
            const objectKeys = Object.keys(singleDay);

            objectKeys.map(key => {
                if (!ignoreKeys.includes(key)) {
                    total += singleDay[key];
                    totalAll += singleDay[key];
                }
            });

            const date = singleData.date;
            labels.push(`🕛  ${day_name}    📅 ${date}    🛡 ${total}`);
        });

        /**
         * Iframes
         */
        let singleDataBlock_iframes = [];

        data.map(singleData => {
            let singleDay = singleData.data;
            const blocked_data = singleDay.iframe ? singleDay.iframe : 0;
            singleDataBlock_iframes.push(blocked_data);
        });

        /**
         * Requests - urlinclude
         */
        let singleDataBlock_requests = [];

        data.map(singleData => {
            let singleDay = singleData.data;
            const blocked_data = singleDay.urlInclude ? singleDay.urlInclude : 0;
            singleDataBlock_requests.push(blocked_data);
        });

        /**
         * Cookie 
         */
        let singleDataBlock_cookies = [];

        data.map(singleData => {
            let singleDay = singleData.data;
            const blocked_data = singleDay.cookie ? singleDay.cookie : 0;
            singleDataBlock_cookies.push(blocked_data);
        });

        /**
         * Words
         */
        let singleDataBlock_words = [];

        data.map(singleData => {
            let singleDay = singleData.data;
            const blocked_data = singleDay.word ? singleDay.word : 0;
            singleDataBlock_words.push(blocked_data);
        });

        /**
         * Url + Trackers = Trackers
         */
        let singleDataBlock_trackers = [];

        data.map(singleData => {
            let singleDay = singleData.data;
            const blocked_data_url = singleDay.url ? singleDay.url : 0;
            const blocked_data_tra = singleDay.tracker ? singleDay.tracker : 0;
            const blocked_data = blocked_data_url + blocked_data_tra;
            singleDataBlock_trackers.push(blocked_data);
        });

        /**
         * Blocked blacklisted domains 
         */
        let singleDataBlock_domains = [];

        data.map(singleData => {
            let singleDay = singleData.data;
            const blocked_data = singleDay.domain ? singleDay.domain : 0;
            singleDataBlock_domains.push(blocked_data);
        });


        /**
         * ID + Href + Class = dom
         */
        let singleDataBlock_dom = [];

        data.map(singleData => {
            let singleDay = singleData.data;
            const blocked_id = singleDay.id ? singleDay.id : 0;
            const blocked_href = singleDay.href ? singleDay.href : 0;
            const blocked_class = singleDay.class ? singleDay.class : 0;
            const blocked_dom = blocked_id + blocked_href + blocked_class;
            singleDataBlock_dom.push(blocked_dom);
        });

        var barChartData = {
            labels,
            datasets: [
                {
                    label: this.translations.popup_blocked_iframes,
                    backgroundColor: 'rgba(255, 99, 132, 0.7)',
                    data: singleDataBlock_iframes,
                    fill: false
                },
                {
                    label: this.translations.popup_blocked_requests,
                    backgroundColor: 'rgba(255, 159, 64, 0.7)',
                    data: singleDataBlock_requests,
                    fill: false
                },
                {
                    label: this.translations.popup_blocked_cookies,
                    backgroundColor: 'rgba(255, 205, 86, 0.7)',
                    data: singleDataBlock_cookies,
                    fill: false
                },
                {
                    label: this.translations.popup_blocked_words,
                    backgroundColor: 'rgba(75, 192, 192, 0.7)',
                    data: singleDataBlock_words,
                    fill: false
                },
                {
                    label: this.translations.popup_blocked_trackers,
                    backgroundColor: 'rgba(54, 162, 235, 0.7)',
                    data: singleDataBlock_trackers,
                    fill: false
                },
                {
                    label: this.translations.popup_blocked_websites,
                    backgroundColor: 'rgba(153, 102, 255, 0.7)',
                    data: singleDataBlock_domains,
                    fill: false
                },
                {
                    label: this.translations.popup_blocked_dom,
                    backgroundColor: 'rgba(201, 203, 207, 0.7)',
                    data: singleDataBlock_dom,
                    fill: false
                }
            ],
            borderColor: [
                "rgb(255, 99, 132)",
                "rgb(255, 159, 64)",
                "rgb(255, 205, 86)",
                "rgb(75, 192, 192)",
                "rgb(54, 162, 235)",
                "rgb(153, 102, 255)",
                "rgb(201, 203, 207)"
            ],
            borderWidth: 1
        };

        this.setState({
            total: totalAll,
            globalCount,
            animationLoading: false,
            removeNode: false
        }, () => {

            if (this.canvasNode) {
                const ctx = this.canvasNode.getContext('2d');

                new Chart(ctx, {
                    type: 'bar',
                    data: barChartData,
                    options: {
                        label: {
                            display: true,
                            text: 'Total blocked elements'
                        },
                        legend: {
                            display: true
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
                                stacked: true,
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }
                });
            }
        });
    }

    /**
     * Change page - previous
     */
    changePagePrev() {
        let { currentPage } = this.state;

        if (currentPage !== 0) {
            this.setState({
                currentPage: this.state.currentPage - 1,
                animationLoading: true,
            }, this.getDataFromContentScript);
        }
    }

    /**
     * Change page - next
     */
    changePageNext() {
        let { itemsPerSite, currentPage, globalCount } = this.state;

        let mainPage = currentPage;
        mainPage++;

        if (itemsPerSite * mainPage < globalCount) {
            this.setState({
                currentPage: this.state.currentPage + 1,
                animationLoading: true
            }, this.getDataFromContentScript);
        }
    }

    /**
     * Get paging functionality
     */
    getPaging() {
        let { itemsPerSite, currentPage, globalCount } = this.state;
        let mainPage = currentPage;
        mainPage++;

        return (
            <div className="paging">
                <span className="buttons">
                    <i
                        onClick={(e) => this.changePagePrev()}
                        className={currentPage !== 0 ? 'fas fa-angle-left previous-button' : 'fas fa-angle-left previous-button deactivated'}
                    >
                    </i>
                    <i
                        onClick={(e) => this.changePageNext()}
                        className={itemsPerSite * mainPage < globalCount ? 'fas fa-angle-right next-button' : 'fas fa-angle-right next-button deactivated'}
                    >
                    </i>
                </span>
            </div>
        );
    }

    render(): JSX.Element {
        const { animationLoading, totalAll, removeNode } = this.state;

        return (
            <div
                ref={(node) => this.contentNode = node}
                className="ContentBody ContentStaticHeight Statistic"
            >
                {
                    animationLoading && <ModuleFullScreenLoading />
                }
                <div className="code-box-holder">
                    <h1 className="ff-title">
                        {`${this.translations.menu_text_statistic}`}
                    </h1>
                    {
                        0 == totalAll &&
                        <NoDataStatistic />
                    }
                    {
                        this.getPaging()
                    }
                    {
                        !removeNode &&
                        <div className={0 == totalAll ? 'canvas d-none' : 'canvas'}>
                            <canvas key="myChart" id="myChart" ref={node => this.canvasNode = node} />
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default Statistic;
