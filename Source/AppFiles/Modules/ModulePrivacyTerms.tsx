import * as React from 'react';

import getPrivacyTerms_de from './privacyterms/de';

import getPrivacyTerms_en from './privacyterms/en';

import getPrivacyTerms_pl from './privacyterms/pl';


class ModulePrivacyTerms extends React.Component {

    public translations: {
        [ key: string ]: any
    };

    public state: {
        [ key: string ]: any
    };

    public props: {
        [ key: string ]: any
    };

    constructor (props) {
        super(props);

        this.state={
            language: localStorage.getItem('applanguage') ? localStorage.getItem('applanguage') : 'en'
        };

        this.translations=props.translations;
    }

    currentYear(){
        const date = new Date();
        const year = date.getFullYear();
        let value = '2020';

        if(2020 !== year){
            value = `2020 - ${year}`;
        }

        return value;
    }

    render(): JSX.Element {
        return (
            <div className="PrivacyTerms flex flex-column">
                {
                    'de'==this.state.language && getPrivacyTerms_de()
                }
                {
                    'pl'==this.state.language && getPrivacyTerms_pl()
                }
                {
                    'pl' !== this.state.language && 'de' !== this.state.language && getPrivacyTerms_en()
                }
            </div>
        );
    }
}

export default ModulePrivacyTerms;
