import * as React from 'react';

import getTranslations from '../../../Translations/index';

import addToStore from '../../Store/addToStore';

import { addonRoot } from '../../AppFiles/Functions/addonPrefix';

interface WebsiteContainerProps {
    contentData?: string | any;
    loginRequired: boolean;
    redirectAfterLogin?: string;
}
class Reset extends React.Component {

    public translations: {
        [key: string]: any
    };

    public state: {
        [key: string]: any
    };

    constructor(props: WebsiteContainerProps) {
        super(props);

        this.state = {};
        this.translations = getTranslations();
    }

    reset(){
        //@ts-ignore
        browser.runtime.sendMessage({
            action: 'app-reset'
        })
        .then(()=>{
            addToStore(this.translations.reset_done, 0);
        })
        .catch( (e) => {
            addToStore(`${this.translations.reset_error}: ${e}`, 1);
        });
    }

    render(): JSX.Element {
        return (
            <div className="ContentBody">
                <div className="Ninja Reset">
                    <img alt="image" src={`${addonRoot()}logo/shield-128.png`} />
                    <h1 className="ff-title" onClick={() => this.reset()}>
                        {
                            this.translations.reset
                        }
                    </h1>
                </div>
            </div>
        );
    }
}

export default Reset;

