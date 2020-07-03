import * as React from 'react';

import ListGlobalModule from '../../../AppFiles/Modules/ListGlobalModule';

import WebsiteContainer from '../../../AppFiles/Modules/WebsiteContainer';

class BlackWordsPage extends React.Component {
  render(): JSX.Element {
    return (
      <WebsiteContainer
      loginRequired={false}
      contentData={
        <ListGlobalModule 
          storageName='blacklistedElementsWords'
        />
      }
    />
    );
  }
}

export default BlackWordsPage;
