import * as React from 'react';

import ModuleSecurity from '../../AppFiles/Modules/ModuleSecurity';

import WebsiteContainer from '../../AppFiles/Modules/WebsiteContainer';

class Security extends React.Component {
  render(): JSX.Element {
    return (
      <WebsiteContainer
      loginRequired={false}
      contentData={
        <ModuleSecurity/>
      }
    />
    );
  }
}

export default Security;
