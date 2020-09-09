import * as React from 'react';

import AddonNotAvailable from '../../AppFiles/Modules/AddonNotAvailable';

import getTranslations from '../../../Translations/index';

import { addonRoot } from '../../AppFiles/Functions/addonPrefix';

interface WebsiteContainerProps {
    contentData?: string | any;
    loginRequired: boolean;
    redirectAfterLogin?: string;
}
class Blocker extends React.Component {

    public translations: {
        [key: string]: any
    };

    public state: {
        [key: string]: any
    };

    constructor(props: WebsiteContainerProps) {
        super(props);
        this.checkAddonsAvailability = this.checkAddonsAvailability.bind(this);
        this.htmlBlocker = this.htmlBlocker.bind(this);
        
        this.state = {
            addonNotAvailable: false,
            htmlBlockerIsActive: false
        };
        this.translations = getTranslations();
    }

    componentDidMount() {
        this.checkAddonsAvailability();
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
            })
            .catch(() => {
                this.setState({
                    addonNotAvailable: true
                });
            });

        // @ts-ignore
        browser.runtime
            .sendMessage({
                action: 'get-htmlBlockerIsActive',
            })
            .then(htmlBlockerIsActive => {
                return this.setState({
                    htmlBlockerIsActive
                });
            })
            .catch(() => {
                this.setState({
                    htmlBlockerIsActive: false
                });
            });
    }

    htmlBlocker(){
        if (this.state.htmlBlockerIsActive) {
            // @ts-ignore
            browser.runtime.sendMessage({
                action: 'block-item-off'
            })
                .then(() => {
                    this.setState({
                        htmlBlockerIsActive: false
                    })
                })
                .catch(error => {

                });
        } else {
            // @ts-ignore
            browser.runtime.sendMessage({
                action: 'block-item-on'
            })
                .then(() => {
                    window.close();
                })
                .catch(error => {

                });
        }
    }

    render(): JSX.Element {
        const { addonNotAvailable, htmlBlockerIsActive } = this.state;

        if(addonNotAvailable){
            return <AddonNotAvailable />;
        }

        return (
            <div className="ContentBody">
                <div className="Ninja Reset">
                    <img alt="image" src={`${addonRoot()}logo/shield-128.png`} />
                    {/* <p>
                        {
                            `${this.translations.currntlyIs} ${htmlBlockerIsActive ? this.translations.currntlyIsOn : this.translations.currntlyIsOff}`
                        }
                    </p> */}
                    <h1 className="ff-title" onClick={() => this.htmlBlocker()}>
                        {
                            this.translations.blocker_msg_7
                        }
                    </h1>
                </div>
            </div>
        );
    }
}

export default Blocker;