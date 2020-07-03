import * as React from 'react';

import ListGlobalModule from '../../../AppFiles/Modules/ListGlobalModule';

import WebsiteContainer from '../../../AppFiles/Modules/WebsiteContainer';

class BlacklistIframesSourcesPage extends React.Component {
  render(): JSX.Element {
    return (
      <WebsiteContainer
      loginRequired={false}
      contentData={
        <ListGlobalModule 
          storageName='blacklistedElementsIframesSources'
        />
      }
    />
    );
  }
}

export default BlacklistIframesSourcesPage;
