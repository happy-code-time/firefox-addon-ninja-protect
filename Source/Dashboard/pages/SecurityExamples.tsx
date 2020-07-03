import * as React from 'react';

import WebsiteContainer from '../../AppFiles/Modules/WebsiteContainer';

import getTranslations from '../../../Translations/index';

import getSecurityList from '../../AppFiles/Functions/getSecurityList';

import customKey from '../../AppFiles/Functions/customKey';

class SecurityExamples extends React.Component {

  public state: {
    [ key: string ]: any
  };

  public translations: {
    [ key: string ]: any
  };

  constructor (props: {}) {
    super(props);

    this.state = {
      examples : getSecurityList()
    };

    this.translations=getTranslations();
  }

  render(): JSX.Element {
    return (
      <WebsiteContainer
      loginRequired={false}
      contentData={
        <div className="Examples flex flex-column">
          {
            this.state.examples.map( obj => {
              const { translated, img, name } = obj; 
              const jsx = this.translations[`${name}_html`];

              return (
                <div key={customKey()} className="example">
                  <h1 className="ff-title h1 text-center">
                    {
                      translated
                    }
                  </h1>
                  {
                    jsx
                  }
                </div>
              )
            })
          }
        </div>
      }
    />
    );
  }
}

export default SecurityExamples;
