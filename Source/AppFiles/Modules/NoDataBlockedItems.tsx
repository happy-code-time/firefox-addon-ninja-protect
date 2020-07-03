import * as React from 'react';

import getTranslations from '../../../Translations';

import { addonRoot } from '../Functions/addonPrefix';

class NoDataBlockedItems extends React.Component 
{
    render(){
        const translations: { [key: string]: any } = getTranslations();

        return (
            <div className="NoDataBlockedItems">
                <img alt="image" src={`${addonRoot()}/logo/shield-128.png`} />
                <h1 className="h1-title">
                    {
                        translations.NoDataBlockedItems
                    }
                </h1>
            </div>
        );
    }
};

export default NoDataBlockedItems;