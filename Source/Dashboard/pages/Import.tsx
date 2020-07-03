import * as React from 'react';

import WebsiteContainer from '../../AppFiles/Modules/WebsiteContainer';

import ModuleImport from '../../AppFiles/Modules/ModuleImport';

class Import extends React.Component {

  constructor(props: {}){
    super(props);
  }

  render(): JSX.Element {
    return (
      <WebsiteContainer
        loginRequired={false}
        contentData={<ModuleImport/>}
      />
    );
  }
}

export default Import;