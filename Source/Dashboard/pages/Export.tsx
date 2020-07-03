import * as React from 'react';

import WebsiteContainer from '../../AppFiles/Modules/WebsiteContainer';

import ModuleExport from '../../AppFiles/Modules/ModuleExport';

class Home extends React.Component {

  constructor(props: {}){
    super(props);
  }

  render(): JSX.Element {
    return (
      <WebsiteContainer
        loginRequired={false}
        contentData={<ModuleExport/>}
      />
    );
  }
}

export default Home;
