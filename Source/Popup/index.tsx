import React, { Component } from 'react';

import { HashRouter, Switch, Route } from 'react-router-dom';

import ReactDOM from 'react-dom';

import ModuleSideBar from '../AppFiles/Modules/SideBar';

import Redirection from '../AppFiles/Functions/redirect/Redirection';

import WebsiteContainer from '../AppFiles/Modules/Modules/WebsiteContainer';

import Menu from '../AppFiles/Modules/Menu';

import Home from './pages/Home';

import Cookies from './pages/Cookies';

import Security from './pages/Security';

import Iframes from './pages/Iframes';

import Requests from './pages/Requests';

import Statistic from './pages/Statistic';

import GlobalMessages from '../AppFiles/Modules/Modules/GlobalMessages';

import ModuleLanguages from '../AppFiles/Modules/PopupBoxes/ModuleLanguages';

import ModulePopupBoxLinks from '../AppFiles/Modules/ModulePopupBoxLinks';

import AppIcon from './pages/AppIcon';

import Reset from './pages/Reset';

import Blocker from './pages/Blocker';

import getTranslations from '../../Translations';

import { addonPrefixPopup, addonRoot, addonPrefixDashboard } from '../AppFiles/Functions/addonPrefix';

import { appNameShort, version } from '../AppFiles/Globals';

import '../Sass/popup/index.scss';

class App extends Component {
  public Redirection: {
    [key: string]: any;
  };

  public translations: {
    [key: string]: any;
  };

  public state: {
    [key: string]: any;
  };

  constructor(props: {}) {
    super(props);
    this.togglePower = this.togglePower.bind(this);
    
    this.state = {
      documentWidth: 700,
      securityIsOn: false,
      animationLoading: false,
    };

    this.Redirection = new Redirection();
    this.translations = getTranslations();
  }

  componentDidMount() {
    this.Redirection.redirect();
    this.togglePower(true);
  }

  togglePower(initialRequest = false) {
    if (initialRequest) {
      // @ts-ignore
      return browser.runtime
        .sendMessage({ action: 'get-powermode' })
        .then((securityIsOn: boolean | null) => {
          this.setState({
            securityIsOn,
          });
        })
        .catch();
    }

    this.setState(
      {
        securityIsOn: !this.state.securityIsOn,
      },
      () => {
        // @ts-ignore
        browser.runtime.sendMessage({ action: 'set-powermode', powermode: this.state.securityIsOn });
      }
    );
  }

  render() {
    const { documentWidth, securityIsOn } = this.state;

    return (
      <div id="app-holder" style={{ width: `${documentWidth}px` }}>
        <WebsiteContainer
          persistUserSelection={false} // set local sotrage on click
          clearPersistUserSelection={true} // do not remove the local storage on component did mount
          sidebarMinifiedAt={600}
          sidebarMaxifiedAt={650}
          displayMinifyMaxifyIcon={false}
          moduleSidebar={
            <ModuleSideBar
              image={<img alt="image" src={`${addonRoot()}logo/shield-64.png`} />}
              textLong={appNameShort}
              textShort={`v${version}`}
              moduleMenu={
                <Menu
                  reactRouter={false}
                  childrenPaddingX={18}
                  data={
                    [
                      {
                        attributes: {
                          title: this.translations.menu_title_home,
                        },
                        text: this.translations.menu_text_home,
                        icon: <i className='fas fa-user-ninja' />,
                        href: `${addonPrefixPopup()}#/`,
                      },
                      {
                        text: this.translations.title_html_blocker,
                        icon: <i className='fas fa-crosshairs' />,
                        href: `${addonPrefixPopup()}#/blocker`,
                      },
                      {
                        attributes: {
                          title: this.translations.menu_title_security,
                        },
                        text: this.translations.menu_text_security,
                        icon: <i className='fas fa-shield-alt' />,
                        href: `${addonPrefixPopup()}#/security`,
                      },
                      {
                        attributes: {
                          title: this.translations.menu_title_cookies,
                        },
                        text: this.translations.menu_text_cookies,
                        icon: <i className='fas fa-cookie' />,
                        href: `${addonPrefixPopup()}#/cookies`,
                      },
                      {
                        attributes: {
                          title: this.translations.menu_title_iframes,
                        },
                        text: this.translations.menu_text_iframes,
                        icon: <i className='far fa-window-restore' />,
                        href: `${addonPrefixPopup()}#/iframes`,
                      },
                      {
                        text: this.translations.menu_text_requests,
                        icon: <i className='fas fa-globe-americas' />,
                        href: `${addonPrefixPopup()}#/requests`,
                      },
                      {
                        text: this.translations.menu_text_statistic_small,
                        icon: <i className='fas fa-chart-bar' />,
                        href: `${addonPrefixPopup()}#/statistic`,
                      },
                      {
                        text: this.translations.title_reset,
                        icon: <i className='fas fa-skull' />,
                        href: `${addonPrefixPopup()}#/reset`,
                      },
                      {
                        text: this.translations.menu_title_ninja,
                        icon: <i className='fas fa-icons' />,
                        href: `${addonPrefixPopup()}#/icons`,
                      }
                    ]
                  }
                />
              }
            />
          }
          headerData={
            <span>
              <ModuleLanguages />
              <ModulePopupBoxLinks
                location='popup'
                titleBox={this.translations.links}
                masterLink={`${addonPrefixDashboard()}#/`}
                masterIcon={<i className='fas fa-angle-right' />}
                masterText={this.translations.popup_title_dashboard}
                masterAttributes={
                  {
                    'target': '_blank',
                    'onClick': () => { setTimeout(() => { window.close() }, 100) }
                  }
                }

                data={
                  [
                    {
                      href: 'https://addons.mozilla.org/de/firefox/addon/ninja-protect/',
                      icon: <i className='fab fa-firefox-browser' />,
                      text: 'Firefox Hub',
                      attributes: {
                        'target': '_blank'
                      }
                    }
                  ]
                }
              />
              <span style={ { float: 'left' } } title={securityIsOn ? this.translations.turnOff : this.translations.turnOn} className="relative popup-box-main">
                <i onClick={e => this.togglePower()} className={`fas fa-power-off power popup-box-icon ${securityIsOn ? 'color-green' : 'color-red'}`} />
              </span>
            </span>
          }
          contentData={
            <span>
                <HashRouter>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/cookies" component={Cookies} />
                    <Route exact path="/security" component={Security} />
                    <Route exact path="/iframes" component={Iframes} />
                    <Route exact path="/requests" component={Requests} />
                    <Route exact path="/statistic" component={Statistic} />
                    <Route exact path="/icons" component={AppIcon} />
                    <Route exact path="/reset" component={Reset} />
                    <Route exact path="/blocker" component={Blocker} />
                  </Switch>
                </HashRouter>
            </span>
          }
        />
        <GlobalMessages
          messageKey='messagesApp'
          timer={1000}
          codeMapping={{
            '-2': {
              title: this.translations.notLoggedIn,
              displayErrorCode: false,
              text: {
                prefix: '',
                suffix: '',
                attributes: {},
              },
              close: {
                text: this.translations.globalErrormessageCloseButton,
                attributes: {},
              },
              link: {},
            },
            '-1': {
              title: this.translations.error,
              displayErrorCode: false,
              text: {
                prefix: '',
                suffix: '',
                attributes: {},
              },
              close: {
                text: this.translations.globalErrormessageCloseButton,
                attributes: {},
              },
              link: {},
            },
            0: {
              title: <i className="fas fa-thumbs-up mr-2" />,
              displayErrorCode: false,
              text: {
                prefix: '',
                suffix: '',
                attributes: {},
              },
              close: {
                text: this.translations.globalErrormessageCloseButton,
                attributes: {},
              },
              link: {},
            },
            1: {
              title: this.translations.code,
              displayErrorCode: true,
              text: {
                prefix: this.translations.globalErrormessagePrefix,
                suffix: '',
                attributes: {},
              },
              close: {
                text: this.translations.globalErrormessageCloseButton,
                attributes: {},
              },
              link: {
                text: this.translations.globalErrormessageLearnMoreButton,
                useTagLink: false,
                // href: `${addonPrefixDashboard()}#error-messages-learn-more`,
                attributes: {
                  target: '_blank',
                },
              },
            },
            2: {
              title: this.translations.code,
              displayErrorCode: true,
              text: {
                prefix: this.translations.globalErrormessagePrefix,
                suffix: '',
                attributes: {},
              },
              close: {
                text: this.translations.globalErrormessageCloseButton,
                attributes: {},
              },
              link: {
                text: this.translations.globalErrormessageLearnMoreButton,
                useTagLink: false,
                // href: `${addonPrefixDashboard()}#error-messages-learn-more`,
                attributes: {
                  target: '_blank',
                },
              },
            },
            3: {
              title: this.translations.code,
              displayErrorCode: true,
              text: {
                prefix: this.translations.globalErrormessagePrefix,
                suffix: '',
                attributes: {},
              },
              close: {
                text: this.translations.globalErrormessageCloseButton,
                attributes: {},
              },
              link: {
                text: this.translations.globalErrormessageLearnMoreButton,
                useTagLink: false,
                // href: `${addonPrefixDashboard()}#error-messages-learn-more`,
                attributes: {
                  target: '_blank',
                },
              },
            },
          }}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
             