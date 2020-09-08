import React, { Component } from 'react';

import { HashRouter, Switch, Route } from 'react-router-dom';

import ReactDOM from 'react-dom';

import ModuleSideBar from '../AppFiles/Modules/SideBar';

import GlobalMessages from '../AppFiles/Modules/Modules/GlobalMessages';

import Home from './pages/Home';

import Export from './pages/Export';

import Import from './pages/Import';

import Statistic from './pages/Statistic';

import ErrorMessagesLearnMore from './pages/ErrorMessagesLearnMore';

import BlackWordsPage from './pages/blacklists/BlackWordsPage';

import BlackUrlsPage from './pages/blacklists/BlackUrlsPage';

import BlackUrlsIncludesPage from './pages/blacklists/BlackUrlsIncludesPage';

import BlackUrlsTrackersPage from './pages/blacklists/BlackUrlsTrackersPage';

import BlackCookiesPage from './pages/blacklists/BlackCookiesPage';

import BlacklistedClassPage from './pages/blacklists/BlacklistedClassPage';

import BlacklistedIdPage from './pages/blacklists/BlacklistedIdPage';

import BlacklistedHrefPage from './pages/blacklists/BlacklistedHrefPage';

import BlacklistIframesPage from './pages/blacklists/BlacklistIframesPage';

import BlacklistIframesSourcesPage from './pages/blacklists/BlacklistIframesSourcesPage';

import BlacklistIframesNamesPage from './pages/blacklists/BlacklistIframesNamesPage';

import WhitelistDomainsPage from './pages/whitelist/WhitelistDomainsPage';

import SecuritySettings from './pages/SecuritySettings';

import WebsiteContainer from '../AppFiles/Modules/Modules/WebsiteContainer';

import Menu from '../AppFiles/Modules/Menu';

import ModuleLanguages from '../AppFiles/Modules/PopupBoxes/ModuleLanguages';

import ModulePopupBoxLinks from '../AppFiles/Modules/ModulePopupBoxLinks';

import Reset from './pages/Reset';

import Blocker from './pages/Blocker';

import getTranslations from '../../Translations/index';

import { addonRoot, addonPrefixDashboard } from '../AppFiles/Functions/addonPrefix';

import { appNameShort, version } from '../AppFiles/Globals';

import '../Sass/dashboard/index.scss';

class App extends Component {
  public Redirection: {
    [key: string]: any;
  };

  public state: {
    [key: string]: any;
  };

  public translations: {
    [key: string]: any;
  };

  constructor(props: {}) {
    super(props);
    this.togglePower = this.togglePower.bind(this);
    
    this.state = {
      securityIsOn: false
    }

    this.translations = getTranslations();
  }

  componentDidMount() {
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
    const { securityIsOn } = this.state;

    return (
      <div className="Main block">
        <WebsiteContainer
          persistUserSelection={false} // set local sotrage on click
          clearPersistUserSelection={true} // do not remove the local storage on component did mount
          sidebarMinifiedAt={720}
          sidebarMaxifiedAt={1024}
          displayMinifyMaxifyIcon={true}
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
                        text: this.translations.title_html_blocker,
                        icon: <i className='fas fa-hand-pointer' />,
                        href: `${addonPrefixDashboard()}#/blocker`,
                      },
                      {
                        icon: <i className="fab fa-black-tie"></i>,
                        text: this.translations.blacklistedElementsCookies,
                        href: `${addonPrefixDashboard()}#/blacklist-cookies`
                      },
                      {
                        icon: <i className="fab fa-black-tie"></i>,
                        text: this.translations.blacklistedElementsDomians,
                        href: `${addonPrefixDashboard()}#/blacklist-urls`
                      },
                      {
                        icon: <i className="fab fa-black-tie"></i>,
                        text: this.translations.blacklistedElementsUrlsIncludes,
                        href: `${addonPrefixDashboard()}#/blacklist-urls-includes`
                      },
                      {
                        icon: <i className="fab fa-black-tie"></i>,
                        text: this.translations.blacklistedElementsTrackers,
                        href: `${addonPrefixDashboard()}#/blacklist-trackers`
                      },
                      {
                        icon: <i className="fab fa-black-tie"></i>,
                        text: this.translations.blacklistedElementsIframes,
                        href: `${addonPrefixDashboard()}#/blacklist-iframes`
                      },
                      {
                        icon: <i className="fab fa-black-tie"></i>,
                        text: this.translations.blacklistedElementsIframesSources,
                        href: `${addonPrefixDashboard()}#/blacklist-iframes-sources`
                      },
                      {
                        icon: <i className="fab fa-black-tie"></i>,
                        text: this.translations.blacklistedElementsIframesNames,
                        href: `${addonPrefixDashboard()}#/blacklist-iframes-names`
                      },
                      {
                        icon: <i className="fab fa-black-tie"></i>,
                        text: this.translations.blacklistedElementsWords,
                        href: `${addonPrefixDashboard()}#/blacklist-words`
                      },
                      {
                        icon: <i className="fab fa-black-tie"></i>,
                        text: this.translations.menuBlacklistedElementsClass,
                        href: `${addonPrefixDashboard()}#/360-dom-blocker-class`
                      },
                      {
                        icon: <i className="fab fa-black-tie"></i>,
                        text: this.translations.menuBlacklistedElementsHref,
                        href: `${addonPrefixDashboard()}#/360-dom-blocker-href`
                      },
                      {
                        icon: <i className="fab fa-black-tie"></i>,
                        text: this.translations.menuBlacklistedElementsId,
                        href: `${addonPrefixDashboard()}#/360-dom-blocker-id`
                      },
                      {
                        icon: <i className="fas fa-feather"></i>,
                        text: this.translations.whitelistedElementsDomains,
                        href: `${addonPrefixDashboard()}#/whitelist-domains`,
                      },
                      {
                        text: this.translations.menu_text_import,
                        icon: <i className='fas fa-cloud-upload-alt' />,
                        href: `${addonPrefixDashboard()}#/import`,
                      },
                      {
                        text: this.translations.menu_text_export,
                        icon: <i className='fas fa-cloud-download-alt' />,
                        href: `${addonPrefixDashboard()}#/export`,
                      },
                      {
                        text: this.translations.title_reset,
                        icon: <i className="fas fa-skull" />,
                        href: `${addonPrefixDashboard()}#/reset`,
                      },
                      {
                        text: this.translations.menu_text_security_settings,
                        icon: <i className='fas fa-cog' />,
                        href: `${addonPrefixDashboard()}#/security-settings`,
                      },
                      {
                        text: this.translations.menu_text_statistic_small,
                        icon: <i className='fas fa-chart-bar' />,
                        href: `${addonPrefixDashboard()}#/statistic`,
                      },
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
                data={
                  [
                    {
                      href: 'https://addons.mozilla.org/de/firefox/addon/master-protector/',
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
            <HashRouter>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/statistic" component={Statistic} />
                <Route exact path="/blacklist-words" component={BlackWordsPage} />
                <Route exact path="/blacklist-urls" component={BlackUrlsPage} />
                <Route exact path="/blacklist-urls-includes" component={BlackUrlsIncludesPage} />
                <Route exact path="/blacklist-trackers" component={BlackUrlsTrackersPage} />
                <Route exact path="/blacklist-cookies" component={BlackCookiesPage} />
                <Route exact path="/blacklist-iframes" component={BlacklistIframesPage} />
                <Route exact path="/blacklist-iframes-sources" component={BlacklistIframesSourcesPage} />
                <Route exact path="/blacklist-iframes-names" component={BlacklistIframesNamesPage} />
                <Route exact path="/360-dom-blocker-class" component={BlacklistedClassPage} />
                <Route exact path="/360-dom-blocker-href" component={BlacklistedHrefPage} />
                <Route exact path="/360-dom-blocker-id" component={BlacklistedIdPage} />
                <Route exact path="/whitelist-domains" component={WhitelistDomainsPage} />
                <Route exact path="/security-settings" component={SecuritySettings} />
                <Route exact path="/error-messages-learn-more" component={ErrorMessagesLearnMore} />
                <Route exact path="/export" component={Export} />
                <Route exact path="/import" component={Import} />
                <Route exact path="/reset" component={Reset} />
                <Route exact path="/blocker" component={Blocker} />
              </Switch>
            </HashRouter>
          }
        />
        <GlobalMessages
          messageKey='messagesApp'
          timer={2000}
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
                href: `${addonPrefixDashboard()}#error-messages-learn-more`,
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
                href: `${addonPrefixDashboard()}#error-messages-learn-more`,
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
                href: `${addonPrefixDashboard()}#error-messages-learn-more`,
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