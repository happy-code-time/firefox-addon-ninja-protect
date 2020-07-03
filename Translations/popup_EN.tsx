import * as React from 'react';

import { addonPrefix } from '../Source/AppFiles/Functions/addonPrefix';

const EN = {
  itemRemovedFromList: 'Entry has been removed from current list',
  currntlyIs: 'Klick the box below to',
  currntlyIsOff: 'activate',
  currntlyIsOn: 'deactivate',
  title_html_blocker: 'Blocker',
  blocker_msg_7: "Content blocker block's HTML content that's belong to the current visited website.  External content cannot be blocked, like: iframes. To block an element, activate the blocker then click on an HTML element on the website. All blocked elements can be deleted on the dashboard in the 'Blocked elements' section.",
  title_reset: 'Factory reset',
  reset_done: 'Reset of this application are done and factory configuration are restored.',
  reset:'Klick this text to make an factory reset of this extension. All your custom lists entries, configuration and the global statistic will be deleted, so please make an export of your lists, settings and statistic. After this process make an import from the dashboard page.',
  menu_title_ninja: 'Ninja Icon',
  ninjaIcon: 'Ninja Icon of this extensions are token from',
  turnOn: 'Turn NinjaProtect on',
  turnOff: 'Turn NinjaProtect off',
  links: 'Links',
  deleteAllIframes: 'Delete iframes from current website',
  deleteAllCookies: 'Delete Cookies from current website',
  notLoggedInStatisticMessage: 'You are working locally. Login to persist the statistic otherwise the statistic cannot be done backwards.',
  today_blocked: 'Current day statistic of blocked elements',
  menu_text_statistic: 'Statistic of blocked items',
  menu_text_statistic_small: 'Statistic',
  menu_text_requests: 'Requests',
  addon_not_available: 'This website are not supporting extensions',
  NoDataBlockedItems: 'No blocked data',
  NoDataBlockedItemsToday: 'No blocked data from today available',
  home_chat: 'Chat with friends - without tracking',
  home_messages: 'Send messages - without tracking',
  home_security: 'Keep yourself secure in the internet - block trackers',
  home_images: 'Images download - without tracking',
  /** 
   * Left menu
   */
  menu_text_export: 'Export',
  menu_title_export: 'Navigate to the export area',
  menu_text_import: 'Import',
  menu_title_import: 'Navigate to the import area',
  messages_main: 'Messages',
  menu_text_messages: 'Messages',
  menu_title_messages: 'Navigate to the messages area',
  menu_text_notifications: 'Notifications',
  menu_title_notifications: 'Navigate to the notifications area',
  menu_text_favourites: 'Friends',
  menu_title_favourites: 'Navigate to the friends area',
  menu_text_add_favourites: 'Search',
  menu_title_add_favourites: 'Navigate to the friends search area',
  chat_main: 'Chat',
  menu_text_chat: 'Chat',
  menu_title_chat: 'Navigate to the chat area',
  menu_text_security: 'Domain',
  menu_text_security_main: 'List',
  menu_title_security: 'Navigate to the domain management area',
  menu_text_security_settings: 'Settings',
  menu_title_security_settings: 'Navigate to the security settings area',
  menu_text_cookies: 'Cookies',
  menu_title_cookies: 'Navigate to the cookies area',
  menu_text_home: 'Home',
  menu_title_home: 'Navigate to the homepage area',
  menu_text_iframes: 'Iframes',
  menu_title_iframes: 'Navigate to the iframes area',
  menu_text_security_examples: 'Examples',
  menu_title_security_examples: 'Navigate to the security examples area',
  menu_text_download_images: 'Download images',
  menu_title_download_images: 'Navigate to the images download area',
  menu_text_images: 'Images',
  menu_text_images_favourites: 'Saved images',
  menu_title_images_favourites: 'Navigate to the saved images area',
  accountPrivacyTerms: 'Privacy policy',
  /** 
   * GLOBAL ERROR MESSEAGES
   */
  globalNetworkError: 'Network error.',
  globalProcessError: 'Process error.',
  globalUserDoesNotExsists: 'User Account does not exsists',
  globalInvalidEmailsAdress: 'Invalid email address format',
  globalErrormessagePrefix: 'An error occured which causes the application to not work properly.',
  globalErrormessageCloseButton: 'Dismiss',
  globalErrormessageLearnMoreButton: 'Learn more',
  globalInvalidCountry: 'Invalid country',
  globalInvalidLanguage: 'Invalid language',
  globalErrorCodeTitle: 'Error code',
  globalErrorCode_1: 'Network error. When a network error occured this mean an "ajax" request failed. Check your network connection or that because the remote service currently not available.',
  globalErrorCode_2: 'App process error. It means that the ajax requests response provided an invalid structure for the application.',
  globalErrorCode_3: 'Response other then expected. Its mean the requested value of the current applications context are invalid.',
  code: 'Code',
  listNotSynchronizedUserNotLoggedIn: 'You are working locally. Login to synchronize your list.',
  notLoggedIn: 'Not logged in information',
  listSynchronized_one: 'Synchronized',
  /**
   * Popup - Cookies popup page
   */
  titleDeleteCookie: 'Delete single cookie',
  cookie_msg_1: 'Domain:',
  cookie_msg_2: 'Name:',
  cookie_msg_3: 'Value:',
  cookie_msg_4: 'Delete all cookies. It is possible that you will be logged out from the current website.',
  cookiesNoData: 'No cookies available',
  // user account
  avatarErrorFileType: 'Unrecognized file type',
  avatarErrorFileSize: 'File size exceeds limit of 5MB for avatar',
  avatarErrorFileTypeSupport: 'Only jpg, png and gif file types are allowed',
  /**
   * Blacklist overview
   */
  blacklist: 'Blacklists',
  whitelist: 'Whitelists',
  blacklistedElementsWords: 'Blacklist Words',
  blacklistedElementsDomians: 'Blacklist Domains',
  blacklistedElementsUrlsIncludes: 'Blacklist Urls includes',
  blacklistedElementsTrackers: 'Blacklist Trackers',
  blacklistedElementsCookies: 'Blacklist Cookies',
  blacklistedElementsClass: 'Block HTML by class',
  blacklistedElementsId: 'Block HTML by id',
  blacklistedElementsHref: 'Block HTML by href',
  menuBlacklistedElementsClass: 'Block by class',
  menuBlacklistedElementsId: 'Block by id',
  menuBlacklistedElementsHref: 'Block by href',
  blacklistedElementsIframes: 'Blacklist Iframes',
  blacklistedElementsIframesSources: 'Blacklist Iframe Sources',
  blacklistedElementsIframesNames: 'Blacklist Iframe Names',
  copiedToClipBoard: 'Copied to clipboard',
  action_title_copyToClipboard: 'Copy list to clipboard',
  action_title_exportToFile: 'Export list to JSON field',
  action_title_deleteList: 'Empty list globally',
  action_title_copyToClipboard_single: 'Copy value to clipboard',
  action_title_delete_single: 'Remove entry',
  forThisFunctionLogin: 'To perform this action, please login',
  emptyListDone: 'List has been emptied',
  restoreDefaultValue: 'Restore list to its default value',
  whitelistedElementsDomains: 'Whitelist Domains',
  blockedElements: 'Content Blocker',
  /**
   * Security settings
   */
  securityIsOn: 'This extension is ON or OFF.',
  scanTextOnWebsite: 'If you turn this option OFF, then all words are NOT scanned. The Blacklist: Words, Attributes, Attributes Words are ignored.',
  makeSearchInSourceCode: 'Scan words in the source code of a given HTML element (innerHTML) or only in the text of HTML elements (innerText).',
  mutationCheck: 'Check websites HTML elements after the page was loaded (DOM Mutations listener - grabbing all elements changed by Javascript libraries).',
  ignoreTagStyle: 'Ignore the code inside the "Style" tags (<style> tag) while scanning process based on blacklist words.',
  ignoreTagScript: 'Ignore the code inside the "SCRIPT" tags (<script> tag) while scanning process based on blacklist words.',
  ignoreTagLink: 'Ignore the code inside the "Link" tags (<link> tag) while scanning process based on blacklist words.',
  ignoreTagMeta: 'Ignore the code inside the "Meta" tags (<meta> tag) while scanning process based on blacklist words.',
  replacer: 'Replace each single danger words character with this entry. The danger words comes from your customized "Blacklist Words".',
  maximumOfDangerWords: 'After this value is reached - count based on blacklists: words, Block HTML by class, Block HTML by id and Block HTML by href (each blocked element causes the count to rise +1), the website will be blocked. Minimum value is 1, maximum value is 300.',
  limitlessScan: 'Ignore the maximum count of all blocked elements. Blocked elements are counted based on this blacklists: "Blocked Content", "Blacklist Words", "Block by class", "Block by id" and "Block by href". The website will not be blocked (ignore the value above). If you activate this function, the security content can slow down the performance of your browser.',
  deleteCookies: 'Autodelete all cookies based on the blacklist Cookies on each website ? Cookies are delete if you open or close an tab an while browsing each 5 seconds.',
  /**
   * Popup - home
   */
  popupMainTitle: 'Black ninja statistic',
  popup_blocked_trackers: 'Blocked trackers',
  popup_blocked_cookies: 'Blocked cookies',
  popup_blocked_words: 'Blocked words',
  popup_blocked_requests: 'Blocked requests',
  popup_blocked_iframes: 'Blocked iframes',
  popup_blocked_dom: 'Blocked HTML',
  popup_blocked_websites: 'Blocked websites',
  popup_title_dashboard: 'Dashboard',
  popup_title_global_chart: 'Global statistic',
  /**
   * Popup - Iframes page
   */
  titleDeleteIframe: 'Delete single iframe',
  iframe_msg_1: 'Source:',
  iframe_msg_2: 'Id:',
  iframe_msg_3: 'className:',
  iframesNoData: 'No iframes available',

  /**
   * Popup - security
   */
  popup_add_blacklistedElementsTrackers: 'Add current domain to the blacklist trackers. All tries to access this domain will be blocked.',
  popup_remove_blacklistedElementsTrackers: 'Remove current domain from the blacklist trackers.',
  popup_add_blacklistedElementsDomians: 'Add current domain to the blacklist domains. All tries to access this domain or services from this domain will be blocked.',
  popup_remove_blacklistedElementsDomians: 'Remove current domain from the blacklist domains.',
  popup_add_blacklistedElementsCookies: 'Add current domain to the blacklist cookies. All cookies will be removed, if the website has been loaded, then for each 5 seconds and finally if you are leaving the current website all cookies deleted.',
  popup_remove_blacklistedElementsCookies: 'Remove current domain from the blacklist cookies.',
  popup_add_blacklistedElementsIframes: 'Add current domain to blacklist iframes and remove all iframes if the website tries to attach/ include an external iframe.',
  popup_remove_blacklistedElementsIframes: 'Remove current domain from the blacklist iframes.',
  popup_add_blacklistedElementsIframesSources: 'Add current listed url to blacklist Iframes Sources and remove all iframes if the website tries to attach/ include an external iframe.',
  popup_remove_blacklistedElementsIframesSources: 'Remove current listed url from the blacklist Iframes Sources.',
  popup_add_whitelistedElementsDomains: 'Add current domain to the whitelist domains and allow everything (no request are blocked, no blacklist words check, no cookie deletion and no auto iframe deletion).',
  popup_remove_whitelistedElementsDomains: 'Remove current domain from the whitelist domains.',

  popup_add_blacklistedElementsTrackers_popup: 'Add current entry to the blacklist trackers. All tries to access this domain will be blocked.',
  popup_remove_blacklistedElementsTrackers_popup: 'Remove current entry from the blacklist trackers.',
  popup_add_blacklistedElementsDomians_popup: 'Add current entry to the blacklist domains. All tries to access this domain or services from this domain will be blocked.',
  popup_remove_blacklistedElementsDomians_popup: 'Remove current entry from the blacklist domains.',
  popup_add_blacklistedElementsCookies_popup: 'Add current entry to the blacklist cookies. All cookies will be removed, if the website has been loaded, then for each 5 seconds and finally if you are leaving the current website all cookies deleted.',
  popup_remove_blacklistedElementsCookies_popup: 'Remove current entry from the blacklist cookies.',
  popup_add_blacklistedElementsIframes_popup: 'Add current entry to blacklist iframes and remove all iframes if the website tries to attach/ include an external iframe..',
  popup_remove_blacklistedElementsIframes_popup: 'Remove current entry from the blacklist iframes.',
  popup_add_blacklistedElementsIframesSources_popup: 'Add current entry to blacklist Iframes Sources  and remove all iframes if the website tries to attach/ include an external iframe..',
  popup_remove_blacklistedElementsIframesSources_popup: 'Remove current entry from the blacklist Iframes Sources.',
  popup_add_whitelistedElementsDomains_popup: 'Add current entry to the whitelist domains and allow everything (no request are blocked, no blacklist words check, no cookie deletion and no auto iframe deletion).',
  popup_remove_whitelistedElementsDomains_popup: 'Remove current entry from the whitelist domains.',

  popup_reload_target: 'Reload website',
  extendsblacklist: (
    <span>
      While loading a website, the domain is scanned through a blacklist filter. If the domain is blacklisted, it will be blocked. To ensure maximum security, an extended blacklist can be added with another 20,822 entries. The content of the list is here:
      <a target='_blank' href={`${addonPrefix()}/extendedblacklist.txt`}>
        extendedblacklist.txt
        </a>
    </span>
  ),
  extendspornlist: (
    <span>
      While loading a website, the domain is scanned through a blacklist filter. If the domain is blacklisted, it will be blocked. To ensure maximum security, an extended pornlist can be added with another 6,668 entries. The content of the list is here:
      <a target='_blank' href={`${addonPrefix()}/extendedpornlist.txt`}>
        extendedpornlist.txt
      </a>
    </span>
  ),
  /**
   * Security examples
   */
  blacklistedElementsCookies_html: (
    <span className="box-content">
      <div className="box-content--div">
        <p className="element-p">
          You can add here an cookie name or an domain name which should be deleted on each website.
          Default this list has 640 entries with predefined cookie names or domain names
          that using cookies for tracking purposes and there are automatically deleted by the security content.
        </p>
        <ul>
          <li>
            Example of list entry: <span className="colored-example-element">GPS</span>. If you visit the website: https://www.youtube.com, then the cookie with the name <span className="colored-example-element">GPS</span> are deleted
          </li>
          <li>
            Example of list entry: <span className="colored-example-element">www.7search.com</span>. If you visit the website: https://www.7search.com, then <span className="colored-example-element">all cookies</span> from this website are deleted
          </li>
        </ul>
      </div>
    </span>
  ),
  blacklistedElementsDomians_html: (
    <span className="box-content">
      <div className="box-content--div">
        <p className="element-p">
          This is an domain name based blacklist.
          All domains from this list are blocked while visiting there websites.
        </p>
        <ul>
          <li>
            Example of list entry: <span className="colored-example-element">ytimg.com</span> and if yout try to access the website <span className="colored-example-element">https://ytimg.com</span> then the website are blocked
          </li>
          <li>
            Example of list entry: <span className="colored-example-element">github.com</span> and if yout try to access the website <span className="colored-example-element">https://github.com</span> then the website are blocked
          </li>
        </ul>
      </div>
    </span>
  ),
  blacklistedElementsUrlsIncludes_html: (
    <span className="box-content">
      <div className="box-content--div">
        <p className="element-p">
          This is an domain name and part of url based blacklist.
          All domains from this list and all matched entries from the websites url are blocked if an match was found.
        </p>
        <ul>
          <li>
            Example of list entry: <span className="colored-example-element">package</span>. If you visit the website: https://www.npmjs.com/<span className="colored-example-element">package</span>/gulp-babel then the website are blocked
          </li>
          <li>
            Example of list entry: <span className="colored-example-element">test</span>. If you visit the website: https://www.google.com/search?q=<span className="colored-example-element">test</span>, then the website are blocked
          </li>
          <li>
            Example of list entry: <span className="colored-example-element">q</span>. If you visit the website: https://www.google.com/search?<span className="colored-example-element">q</span>=test, then the website are blocked
          </li>
          <li>
            Example of list entry: <span className="colored-example-element">hub.com</span>. If you visit the website: https://www.git<span className="colored-example-element">hub.com</span>, then the website are blocked
          </li>
        </ul>
      </div>
    </span>
  ),
  blacklistedElementsIframes_html: (
    <span className="box-content">
      <div className="box-content--div">
        <p className="element-p">
          If you visit an website an the websites domain name are inside this list then all iframes are removed.
        </p>
        <ul>
          <li>
            Example of list entry: <span className="colored-example-element">gazeta.pl</span> - if you visit the website: https://www.gazeta.pl then all iframes on the website https://<span className="colored-example-element">gazeta.pl</span> are removed
          </li>
        </ul>
      </div>
    </span>
  ),
  blacklistedElementsIframesSources_html: (
    <span className="box-content">
      <div className="box-content--div">
        <p className="element-p">
          If you visit an website an the website includes iframes and this iframes attribute "src" (source) includes one of an entry from this list, then the arget iframe will be removed.
        </p>
        <ul>
          <li>
            Example of list entry: <span className="colored-example-element">https://dmp.theadex.com/r/</span>. If you visit the website: https://www.gazeta.pl and if the website includes iframes and the iframes "src" (source) includes an entry from this list <span className="colored-example-element">https://dmp.theadex.com/r/</span>230/1121/?c=4225222955758066709, then this iframe are removed from the website
          </li>
        </ul>
      </div>
    </span>
  ),
  blacklistedElementsIframesNames_html: (
    <span className="box-content">
      <div className="box-content--div">
        <p className="element-p">
          If you visit an website an the website includes iframes and this iframes attribute "name" includes one of an entry from this list, then the arget iframe will be removed.
        </p>
        <ul>
          <li>
            Example of list entry: <span className="colored-example-element">googleads</span>. If you visit the website: https://www.gazeta.pl and if the website includes iframes and the iframes "name" includes an entry from this list <span className="colored-example-element">googleads</span>_sync, then this iframe are removed from the website
          </li>
        </ul>
      </div>
    </span>
  ),
  blacklistedElementsTrackers_html: (
    <span className="box-content">
      <div className="box-content--div">
        <p className="element-p">
          If you visit a website, and the website has implemented other (third party)
          services or tracking services and the domain name match with an domain name from this list
          or the whole url path match with an entry from this list then
          the request will be blocked.
        </p>
        <ul>
          <li>
            Example of list entry: <span className="colored-example-element">cdn.mouseflow.com</span>. If an website will connect to an external service and the domain name contains: https://<span className="colored-example-element">cdn.mouseflow.com</span> then the request are blocked
          </li>
          <li>
            Example of list entry: <span className="colored-example-element">rsrc.php/v3/y4/r/-PAXP-deijE.gif</span>. If an website will connect to an external service and the url request contains: https://static.xx.fbcdn.net/<span className="colored-example-element">rsrc.php/v3/y4/r/-PAXP-deijE.gif</span> then the request are blocked
          </li>
        </ul>
      </div>
    </span>
  ),
  blacklistedElementsWords_html: (
    <span className="box-content">
      <div className="box-content--div">
        <p className="element-p">
          The security content will find each word from this blacklist and each word will be replace by the "replacer" defined in the "settings" section.
          If the security content has found an danger word, from the "Blacklist: Words" in any HTML tag,
          then the HTML tags attributes are scanned. If any attribute name from this list does not matches with entrys from the "Blacklist: attributes", then
          the security content will find each word, inside the attributes value, from this list and replace each character with the replacer
          defined in the "settings section.
        </p>
        <ul>
          <li>
            For example, if the word <span className="colored-example-element">guns</span> are in this blacklist, then if you visit a website, then this word will be replaced
            <br />
            Example input: "we have <span className="colored-example-element">guns</span> in ..."
            <br />
            Example output: "we have <span className="colored-example-element">####</span> in ..."
          </li>
          <li>
            For example, if the word <span className="colored-example-element">seven</span> are in this blacklist, then if you visit a website, then this will be replaced
            <br />
            Example input: "<span className="colored-example-element">seven</span> years old ..."
            <br />
            Example output: "<span className="colored-example-element">#####</span> years old ..."
          </li>
        </ul>
      </div>
    </span>
  ),
  blacklistedElementsClass_html: (
    <span className="box-content">
      <div className="box-content--div">
        <p className="element-p">
          Blocking DOM Elements (tags) based on its attribute: class.
        </p>
        <ul>
          <li>
            Example of list entry: <span className="colored-example-element">font-bold</span>. When you visit an website and a single tag has the attributes class an the class value includes this text: "font-bold", example: {'<span class="font-bold"> Text </span>'}, then this tag (DOM element) will be removed from the current visited website
          </li>
        </ul>
      </div>
    </span>
  ),
  blacklistedElementsHref_html: (
    <span className="box-content">
      <div className="box-content--div">
        <p className="element-p">
          Blocking "A" tag Elements based on its attribute: href.
        </p>
        <ul>
          <li>
            Example of list entry: <span className="colored-example-element">redirect?</span>. When you visit an website and a single tag {'<a>'} has the attributes href an the href`s value includes this text: "redirect?", example: {'<a href="https://xv345bhFD.com/redirect?client=http://example.com">link</a>'}, then this tag (DOM element) will be removed from the current visited website
          </li>
        </ul>
      </div>
    </span>
  ),
  blacklistedElementsId_html: (
    <span className="box-content">
      <div className="box-content--div">
        <p className="element-p">
          Blocking DOM Elements (tags) based on its attribute: id.
        </p>
        <ul>
          <li>
            Example of list entry: <span className="colored-example-element">extern-logo</span>. When you visit an website and a single tag has the attributes id an the id value includes this text: "extern-logo", example: {'<img id="extern-logo"/>'}, then this tag (DOM element) will be removed from the current visited website
          </li>
        </ul>
      </div>
    </span>
  ),
  whitelistedElementsDomains_html: (
    <span className="box-content">
      <div className="box-content--div">
        <p className="element-p">
          Make nothing for selected domain names.
        </p>
        <ul>
          <li>
            Example of list entry: <span className="colored-example-element">google.com</span> then the website https://www.<span className="colored-example-element">google.com</span> are allowed and no checks are made
          </li>
          <li>
            Example of list entry: <span className="colored-example-element">npmjs.com</span> then the website https://www.<span className="colored-example-element">npmjs.com</span>/package/gulp-babel are allowed and no checks are made
          </li>
        </ul>
      </div>
    </span>
  ),
  example: 'Examples',
  /**
   * Images download 
   */
  imagesPopupTitle: 'Images on current website',
  imagesNoData: 'No valid images found',
  imagesNoDataFavourites: 'No saved images found',
  imagesLoadingTabs: 'Loading active tabs...',
  current_tabs_title: 'Current tabs',
  filter: 'Filter',
  filter_all: 'All',
  itemsPerSite: 'Per site',
  itemsPerSiteSuffix: 'images',
  page: 'Page',
  of: 'of',
  images: 'images',
  current_favourites_images: 'Currently saved images',
  open_in_new_tab: 'Open in new tab',
  download: 'Download',
  downloadSmall: 'download',
  delete_all: 'Delete all',
  notLoggedInImagesFavouritesAdd: 'Only logged in users are able to add images to the favourites list',
  notLoggedInImagesFavouritesManage: 'Only logged in users are able to manage the favourites list',
  tabsNoData: 'No valid tabs available',
  imagesLoadingData: 'Loading images...',
  /*
   * List actions 
   */
  infoItemAdded: 'Item has been added to the current list',
  infoItemRemoved: 'Item has been removed from list',
  infoArrayIs0: 'List are empty, but you want to remove an value',
  infoIncorrectValue: 'Value is incorrect',
  infoItemInList: 'Item allready in list',

  country: 'Country',
  countriesNotFoundText: 'Sorry, no countries found',
  dropText: 'Drop here',
  error: 'Error',
  searchPlaceholder: 'Search for value here...',
  search: 'Search',
  list: 'List',
  addPlaceholder: 'Value...',
  addNewEntryTitle: 'Add new entry',
  no_data_list: 'No entries',
  no_data_list_search: 'No search result',
  loading: 'Loading...',
  home_security_1: 'Blocking danger and tracking cookies',
  home_security_2: 'Blocking danger and tracking requests',
  home_security_3: 'Blocking trackers',
  home_security_4: 'Blocking danger porn websites',
  home_security_5: 'Blocking custom danger words',
  home_security_6: 'Blocking custom websites HTML content',
  upload: 'Drag & Drop NinjaProtect`s json file here...',
  export: 'Export',
  exportAll: 'of global lists and settings',
  dangerCount: 'Protecting you!',
  dangerCountPrefix: 'The maximum number of danger blocked elements has been reached and is currently',
  dangerUrlPrefix: 'The current url or part of the given url are danger. Blocking by blacklist entry',
  domain: 'Domain without www. Example: react-divcreator.cba.pl',
  tag: 'Tag name. For example: div',
  languages: 'Languages'
};

export default EN;
