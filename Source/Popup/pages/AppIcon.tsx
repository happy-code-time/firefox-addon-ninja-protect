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

class AppIcon extends React.Component {

    public translations: {
        [key: string]: any
    };

    public state: {
        [key: string]: any
    };

    constructor(props) {
        super(props);
        this.translations = getTranslations();
    }

    render(): JSX.Element {
        return (
            <div className="ContentBody ContentStaticHeight">
                <div className="h1-box">
                    <h1>
                        {
                            this.translations.ninjaIcon
                        }
                    </h1>
                    <a
                        className="dashboard-link"
                        target='_blank'
                        href='http://www.icons-land.com'
                    >
                        http://www.icons-land.com
                    </a>
                </div>
            </div>
        );
    }
}

export default AppIcon;