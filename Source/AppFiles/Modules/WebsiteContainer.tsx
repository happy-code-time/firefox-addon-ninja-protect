import * as React from 'react';

import getTranslations from '../../../Translations/index';

class WebsiteContainer extends React.Component {

    public Redirection: {
        [key: string]: any
    };

    public translations: {
        [key: string]: any
    };

    public state: {
        [key: string]: any
    };

    public props: {
        [key: string]: any
    };

    constructor(props) {
        super(props);

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
            redirectAfterLogin: this.props.redirectAfterLogin ? this.props.redirectAfterLogin : ''
        };

        this.translations = getTranslations();
    }

    render(): JSX.Element {
        return (
            <div className="ContentBody">
                {
                    false == this.state.loginRequired && this.state.contentData
                }
            </div>
        );
    }
}

export default WebsiteContainer;
