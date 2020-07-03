import React, { Component } from 'react';

import ReactDOM from 'react-dom';

import { addonRoot, addonPrefixDashboard } from '../AppFiles/Functions/addonPrefix';

import getTranslations from '../../Translations/index';

import '../Sass/dashboard/blockedcount.scss';

class App extends Component {

  public state: {
    [key: string]: any;
  };

  public translations: {
    [key: string]: any;
  };

  constructor(props){
    super(props);

    this.state = {
      data: '...'
    };

    this.translations = getTranslations();
  }

  componentDidMount(){
    //@ts-ignore
    browser.runtime.sendMessage({
      action: 'get-max-danger-count'
    })
    .then( dangerCount => {
      this.setState({
        dangerCount
      })
    })
    .catch( () => {});

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const data = urlParams.get('data');

    this.setState({
      data
    });
  }

  render() {
    const { data } = this.state;

    return (
      <div
        className="Blocked"
        style={
          {
            backgroundImage: `url(${addonRoot()}/logo/geran-de-klerk-2q-IVjbdm9I-unsplash.jpg`
          }
        }
      >
        <div className="header">
          <h2>
            {
              `${this.translations.dangerUrlPrefix}: ${data}`
            }
          </h2>
          <h1>
            {
              `${this.translations.dangerCount}`
            }
          </h1>
        </div>
        <div className="footer">
            <a href={`${addonPrefixDashboard()}#/security-settings`}>
              {
                this.translations.popup_title_dashboard
              }
            </a>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
