import * as React from 'react';

import ModulePrivacyTerms from '../../AppFiles/Modules/ModulePrivacyTerms';

import getTranslations from '../../../Translations/index';

import WebsiteContainer from '../../AppFiles/Modules/WebsiteContainer';

class PrivacyTerms extends React.Component {

  public translations: {
    [ key: string ]: any
  };

  constructor (props: {}) {
    super(props);

    this.translations=getTranslations();
  }

  render(): JSX.Element {
    return (
      <WebsiteContainer
      loginRequired={false}
      contentData={
        <ModulePrivacyTerms
          translations={ this.translations }
        />
      }
    />
    );
  }
}

export default PrivacyTerms;
