import * as React from 'react';

import ListGlobalModule from '../../../AppFiles/Modules/ListGlobalModule';

import WebsiteContainer from '../../../AppFiles/Modules/WebsiteContainer';

class BlackCookiesPage extends React.Component {
  render(): JSX.Element {
    return (
      <WebsiteContainer
      loginRequired={false}
      contentData={
        <ListGlobalModule 
          storageName='blacklistedElementsCookies'
        />
      }
    />
    );
  }
}

export default BlackCookiesPage;
