import * as React from 'react';

import WebsiteContainer from '../../AppFiles/Modules/WebsiteContainer';

import ModuleHome from '../../AppFiles/Modules/ModuleHome';

class Home extends React.Component {

  constructor(props: {}){
    super(props);
  }

  render(): JSX.Element {
    return (
      <WebsiteContainer
        loginRequired={false}
        contentData={<ModuleHome/>}
      />
    );
  }
}

export default Home;
