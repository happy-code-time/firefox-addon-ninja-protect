import * as React from 'react';

import ModuleSecuritySettings from '../../AppFiles/Modules/ModuleSecuritySettings';

import WebsiteContainer from '../../AppFiles/Modules/WebsiteContainer';

import getTranslations from '../../../Translations/index';

class SecuritySettings extends React.Component {

  public translations: {
    [ key: string ]: any
  };

  public remoteHost?: string;
  public currentUser?: string;
  public currentUserHash?: string;

  constructor (props: {}) {
    super(props);

    this.translations=getTranslations();
  }

  render(): JSX.Element {
    return (
      <WebsiteContainer
      loginRequired={false}
      contentData={
        <ModuleSecuritySettings
          translations={ this.translations }
        />
      }
    />
    );
  }
}

export default SecuritySettings;
