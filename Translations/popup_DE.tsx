import * as React from 'react';

import { addonPrefix } from '../Source/AppFiles/Functions/addonPrefix';

const DE = {
  addToBlacklistIframesIncluds: 'Zu der Schwarzen Iframes Includes Liste hinzufügen',
  removeFromBlacklistIframesIncluds: 'Von der Schwarzen Iframes Includes Liste entfernen',
  addToBlacklistCookies: 'Zu der Schwarzen Cookies Liste hinzufügen',
  removeFromBlacklistCookies: 'Von der Schwarzen Cookies Liste entfernen',
  itemRemovedFromList: 'Eintrag wurde aus der Liste entfernt',
  currntlyIs: 'Klicken Sie die Box unten um den Blocker zu',
  currntlyIsOff: 'aktivieren',
  currntlyIsOn: 'deaktivieren',
  title_html_blocker: 'Blocker',
  blocker_msg_7: "Content Blocker kann DOM Elemente der genutzten Website blockieren. Um dieses Feature zu nutzen aktiviere den Content Blocker und klicke auf ein Element das blockiert werden soll. Alle geblockten HTML Elemente können wieder hergestellt werden im Dashboard auf der Seite 'Blockiertes HTML'.",
  title_reset: 'Reset',
  reset_done: 'Die Applikation wurde auf Ihre Werkeinstellungen zurücksetzten.',
  reset:'Klick um diese Erweiterung auf die Werkeinstellungen zurücksetzten. Alle deine gespeicherten Daten und Einstellungen werden gelöscht. Bitte exporiere vor diesem Prozess deine Daten und Einstellungen um diese später (über das Dashboard) wieder zu importieren.',
  menu_title_ninja: 'Ninja Icon',
  ninjaIcon: 'Das Icon dieser Erweiterung wurde entnommen von',
  turnOn: 'Protector anschalten',
  turnOff: 'Protector ausschalten',
  links: 'Links',
  deleteAllIframes: 'Iframes aus dieser Webseite enfernen',
  deleteAllCookies: 'Cookies verwalten',
  notLoggedInStatisticMessage: 'Sie arbeiten lokal. Bitte loggen Sie sich ein damit die Statistik rückwärts festgehalten werden kann.',
  today_blocked: 'Heutige Statistik der blockierten Elemente',
  menu_text_statistic: 'Statistik aller blockierten Elemente ',
  menu_text_statistic_small: 'Statistik',
  menu_text_requests: 'Anfragen',
  addon_not_available: 'Diese Webseite unterstützt keine Addons',
  NoDataBlockedItemsToday: 'Keine blockierten Elemente von heute verfügbar',
  NoDataBlockedItems: 'Keine blockierten Daten',
  home_chat: 'Mit Freunden chatten - ohne Tracking',
  home_messages: 'Nachrichten senden - ohne Tracking',
  home_security: 'Sicherheit im Internet - Blockierung von Trackern',
  home_images: 'Fotos herunterladen - kein Tracking',
  /** 
   * Left menu
   */
  menu_text_export: 'Export',
  menu_title_export: 'Navigiere zu dem Export',
  menu_text_import: 'Import',
  menu_title_import: 'Navigiere zu dem Import',
  messages_main: 'Nachrichten',
  menu_text_messages: 'Nachrichten',
  menu_title_messages: 'Navigiere zu den Nachrichten',
  menu_text_notifications: 'Benachrichtigungen',
  menu_title_notifications: 'Navigiere zu den Benachrichtigungen',
  menu_text_favourites: 'Freunde',
  menu_title_favourites: 'Navigiere zu den Freunde',
  menu_text_add_favourites: 'Suche',
  menu_title_add_favourites: 'Navigiere zu der Freunden Suche',
  chat_main: 'Chat',
  menu_text_chat: 'Chat',
  menu_title_chat: 'Navigiere zu dem Chat',
  menu_text_security: 'Domäne',
  menu_text_security_main: 'Liste',
  menu_title_security: 'Navigiere zu dem Bereich Domänen Verwaltung',
  menu_text_security_settings: 'Einstellungen',
  menu_title_security_settings: 'Navigiere zu dem Bereich Sicherheits Einstellungen',
  menu_text_cookies: 'Cookies',
  menu_title_cookies: 'Navigiere zu dem Bereich Cookies',
  menu_text_home: 'Startseite',
  menu_title_home: 'Navigiere zur Startseite',
  menu_text_iframes: 'Iframes',
  menu_title_iframes: 'Navigiere zu dem Bereich Iframes',
  menu_text_security_examples: 'Beispiele',
  menu_title_security_examples: 'Navigiere zu dem Bereich Sichereich Beispiele',
  menu_text_download_images: 'Fotos download',
  menu_title_download_images: 'Navigiere zu dem Bereich Fotos herunterladen',
  menu_text_images: 'Fotos',
  menu_text_images_favourites: 'Gespeicherte Fotos',
  menu_title_images_favourites: 'Navigiere zu dem Bereich gespiecherte Fotos',
  accountPrivacyTerms: 'Nutzungsbedingungen',
  /** 
   * GLOBAL ERROR MESSEAGES
   */
  globalNetworkError: 'Netzwerk Fehler.',
  globalProcessError: 'Interner Fehler.',
  globalUserDoesNotExsists: 'Benutzerkonto existiert nicht',
  globalInvalidEmailsAdress: 'Ungültiges E-Mail-Adressformat',
  globalErrormessagePrefix: 'Es wurde ein Fehler gefunden, der dazu führt, dass die Anwendung nicht ordnungsgemäß funktioniert.',
  globalErrormessageCloseButton: 'Ignorieren',
  globalErrormessageLearnMoreButton: 'Mehr lesen',
  globalInvalidCountry: 'Fehlerhaftes Land',
  globalInvalidLanguage: 'Fehlerhafte Sprache',
  globalErrorCodeTitle: 'Fehlercode',
  globalErrorCode_1: 'Netzwerkfehler. Wenn ein Netzwerkfehler aufgetreten ist, ist eine "Ajax" -Anforderung fehlgeschlagen. Überprüfen Sie Ihre Netzwerkverbindung oder das, da der Remote-Dienst derzeit nicht verfügbar ist.',
  globalErrorCode_2: 'App-Prozessfehler. Dies bedeutet, dass die Antwort auf Ajax-Anforderungen eine ungültige Struktur für die Anwendung bereitgestellt hat.',
  globalErrorCode_3: 'Antwort anders als erwartet. Der Mittelwert des angeforderten Werts des aktuellen Anwendungskontexts ist ungültig.',
  code: 'Code',
  listNotSynchronizedUserNotLoggedIn: 'Du arbeitest lokal. Logge dich ein um die Liste zu synchronisieren.',
  notLoggedIn: 'Nicht eingeloggt Information',
  listSynchronized_one: 'Synchronisiert',
  /**
   * Popup - Cookies popup page
   */
  titleDeleteCookie: 'Einzelnes Cookie Element löschen',
  titleCopyCookieValue: 'Wert von dem Cookie in den zwischen speichern',
  cookie_msg_1: 'Domäne:',
  cookie_msg_2: 'Name:',
  cookie_msg_3: 'Wert:',
  cookie_msg_4: 'Alle Cookies löschen. Es ist gut möglich das du danach aus der Seite ausgeloggst wirst.',
  cookiesNoData: 'Keine Cookies vorhanden',
  /**
   * Blacklist overview
   */
  blacklist: 'Schwarze Listen',
  whitelist: 'Weiße Listen',
  blacklistedElementsWords: 'Blacklist Wörter',
  blacklistedElementsDomians: 'Blacklist Domänen',
  blacklistedElementsUrlsIncludes: 'Blacklist Url Adressen',
  blacklistedElementsTrackers: 'Blacklist Trackers',
  blacklistedElementsCookies: 'Blacklist Cookies',
  blacklistedElementsClass: 'Blockierung von HTML für class',
  blacklistedElementsId: 'Blockierung von HTML für id',
  blacklistedElementsHref: 'Blockierung von HTML für href',
  menuBlacklistedElementsClass: 'Blockierung für class',
  menuBlacklistedElementsId: 'Blockierung für id',
  menuBlacklistedElementsHref: 'Blockierung für href',
  blacklistedElementsIframes: 'Blacklist Iframes',
  blacklistedElementsIframesSources: 'Blacklist Iframe Quellen',
  blacklistedElementsIframesNames: 'Blacklist Iframe Namen',
  copiedToClipBoard: 'In die Zwischenablage kopiert',
  action_title_copyToClipboard: 'Liste in Zwischenablage kopieren',
  action_title_exportToFile: 'Liste in JSON-Feld exportieren',
  action_title_deleteList: 'Liste global leeren',
  action_title_copyToClipboard_single: 'Wert in Zwischenablage kopieren',
  action_title_delete_single: 'Eintrag löschen',
  forThisFunctionLogin: 'Um diese Aktion auszuführen, melden Sie sich bitte an',
  emptyListDone: 'Liste wurde geleert',
  restoreDefaultValue: 'Stellen Sie die Liste auf den Standardwert zurück',
  whitelistedElementsDomains: 'Whitelist Domänen',
  blockedElements: 'Content Blocker',
  /**
   * Security settings
   */
  securityIsOn: 'Diese Erweiterung ist AN oder AUS.',
  scanTextOnWebsite: 'Wenn Sie diese Option ausschalten, werden alle Wörte auf den Websiten NICHT gescannt. Schwarze Liste: Wörte/ Attribute/ Attribute Wörter - werden ignoriert.',
  allowOnlyHttpsProtocol: 'Erlaube nur den Besuch von HTTPS Websites - also der Zugriff auf alle HTTP Webseiten wird blockiert.',
  allowOnlyHttpProtocol: 'Erlaube nur den Besuch von HTTP Websites - also der Zugriff auf alle HTTPS Webseiten wird blockiert.',
  makeSearchInSourceCode: 'Scannen Sie Wörter im Quellcode eines bestimmten HTML-Elements (innerHTML) oder nur im Text von HTML-Elementen (innerText).',
  mutationCheck: 'Überprüfen der HTML-Elemente von Websites nach dem Laden der Seite (DOM Mutationen von HTML Elementen in der Regel durchgeführt von Javascript Bibliotheken).',
  ignoreTagStyle: 'Den Kod innerhalb von den "STYLE" Tags (<style> Tag) beim Scan Prozess ignorieren anhand der Schwarzen Liste Wörter.',
  ignoreTagScript: 'Den Kod innerhalb von den "Script" Tags (<script> Tag) beim Scan Prozess ignorieren anhand der Schwarzen Liste Wörter.',
  ignoreTagLink: 'Den Kod innerhalb von den "Link" Tags (<link> Tag) beim Scan Prozess ignorieren anhand der Schwarzen Liste Wörter.',
  ignoreTagMeta: 'Den Kod innerhalb von den "Meta" Tags (<meta> Tag) beim Scan Prozess ignorieren anhand der Schwarzen Liste Wörter.',
  replacer: 'Ersetze jedes einzelne Gefahrenwortzeichen durch diesen Eintrag. Die Gefahrenwörter sind Wörte aus Ihrer eigen definierten Schwarzen Liste Wörter.',
  maximumOfDangerWords: 'Nach Erreichen dieses Wertes - anhand der schwarzen Listen: Blacklist Wörte, Blockierung von HTML für class, Blockierung von HTML für href oder Blockierung von HTML für id, dann wird die Website gesperrt. Der Minimalwert ist 1, der Maximalwert ist 300.',
  limitlessScan: 'Ignorieren Sie die maximale Anzahl von blockierten Gefahren anhand den Schwarzen Listen: Blacklist Wörte, Blockierung von HTML für class, Blockierung von HTML für href oder Blockierung von HTML für id. Die Website wird nicht blockiert (ignorieren Sie den obigen Wert). Wenn Sie diese Funktion aktivieren, kann Protection die Leistung Ihres Browsers beeinträchtigen.',
  deleteCookies: 'Lösche alle Cookies anhand der Schwarzen Liste Cookies auf jeder Webseite ? Cookie werden gelöscht beim Öffnen oder Schließen eines Tabs und wärend des Browsings alle 5 Sekunden.',

  /**
   * Popup - home
   */
  popupMainTitle: 'Schwarze Ninja Statistik',
  popup_blocked_trackers: 'Blockierte Tracker',
  popup_blocked_cookies: 'Blockierte Cookies',
  popup_blocked_words: 'Blockierte Wörter',
  popup_blocked_requests: 'Blockierte Anfragen',
  popup_blocked_iframes: 'Blockierte Iframes',
  popup_blocked_dom: 'Blockiertes HTML',
  popup_blocked_websites: 'Blockierte Webseiten',
  popup_title_dashboard: 'Dashboard',
  popup_title_global_chart: 'Globale Statistik',
  /**
   * Popup - Iframes page
   */
  titleDeleteIframe: 'Löschen Sie einen einzelnen Iframe',
  iframe_msg_1: 'Quelle:',
  iframe_msg_2: 'Id:',
  iframe_msg_3: 'className:',
  iframesNoData: 'Keine Iframes vorhanden',

  /**
   * Popup - security
   */
  popup_add_blacklistedElementsTrackers: 'Fügen Sie den Blacklist-Trackern die aktuelle Domain hinzu. Alle Versuche, auf diese Domain zuzugreifen, werden blockiert.',
  popup_remove_blacklistedElementsTrackers: 'Entfernen Sie die aktuelle Domain aus der Blacklist Trackern.',
  popup_add_blacklistedElementsDomians: 'Fügen Sie der Blacklist-Domain die aktuelle Domain hinzu. Alle Versuche, von dieser Domain aus auf diese Domain oder Dienste zuzugreifen, werden blockiert.',
  popup_remove_blacklistedElementsDomians: 'Entfernen Sie die aktuelle Domain aus der Blacklist Domänen.',
  popup_add_blacklistedElementsCookies: 'Fügen Sie den Blacklist-Cookies die aktuelle Domain hinzu. Alle Cookies werden beim Laden der Website entfernt, dann alle 5 Sekunden und wenn die Website verlassen wird.',
  popup_remove_blacklistedElementsCookies: 'Entfernen Sie die aktuelle Domain aus der Blacklist Cookies.',
  popup_add_blacklistedElementsIframes: 'Aktuelle Domain zur Blacklist hinzufügen iframes.',
  popup_remove_blacklistedElementsIframes: 'Entfernen Sie die aktuelle Domain aus der Blacklist Iframes. Alle Iframes werden gelöscht sobald diese Website versucht externen Content zu laden.',
  popup_add_blacklistedElementsIframesSources: 'Aktuelle Url zur Blacklist Iframes Sources hinzufügen.',
  popup_remove_blacklistedElementsIframesSources: 'Entfernen Sie die aktuelle Url aus der Blacklist Iframes Sources. Alle Iframes werden gelöscht sobald diese Website versucht externen Content zu laden.',
  popup_add_whitelistedElementsDomains: 'Fügen Sie der Whitelist-Domain die aktuelle Domain hinzu und lassen Sie alles zu (keine Anfrage wird blockiert, keine Blacklist-Wortprüfung, keine Cookie-Löschung und keine automatische Iframe-Löschung).',
  popup_remove_whitelistedElementsDomains: 'Entfernen Sie die aktuelle Domain aus der Whitelist Domänen.',

  popup_add_blacklistedElementsTrackers_popup: 'Fügen Sie den aktuellen Eintrag zu der List  Blacklist Trackern hinzu. Alle Versuche, auf diese Domain zuzugreifen, werden blockiert.',
  popup_remove_blacklistedElementsTrackers_popup: 'Entfernen Sie den Eintrag aus der Blacklist Tracker.',
  popup_add_blacklistedElementsDomians_popup: 'Fügen Sie den aktuellen Eintrag zu der List  Blacklist Domains hinzu. Alle Versuche, von dieser Domain aus auf diese Domain oder Dienste zuzugreifen, werden blockiert.',
  popup_remove_blacklistedElementsDomians_popup: 'Entfernen Sie den Eintrag aus der Blacklist Domänen.',
  popup_add_blacklistedElementsCookies_popup: 'Fügen Sie den aktuellen Eintrag zu der List  Blacklist Cookies hinzu. Alle Cookies werden beim Laden der Website entfernt, dann alle 5 Sekunden und wenn die Website verlassen wird.',
  popup_remove_blacklistedElementsCookies_popup: 'Entfernen Sie den Eintrag aus der Blacklist Cookie.',
  popup_add_blacklistedElementsIframes_popup: 'Fügen Sie den aktuellen Eintrag zu der List  Blacklist Iframes hinzu. Alle Iframes werden gelöscht sobald diese Website versucht externen Content zu laden.',
  popup_remove_blacklistedElementsIframes_popup: 'Entfernen Sie den Eintrag aus der Blacklist Iframes.',
  popup_add_blacklistedElementsIframesSources_popup: 'Fügen Sie den aktuellen Eintrag zu der List  Blacklist Iframes Sources hinzu.',
  popup_remove_blacklistedElementsIframesSources_popup: 'Entfernen Sie den Eintrag aus der Blacklist Iframes Sources. Alle Iframes werden gelöscht sobald diese Website versucht externen Content zu laden.',
  popup_add_whitelistedElementsDomains_popup: 'Fügen Sie der Whitelist-Domain die aktuelle Domain hinzu und lassen Sie alles zu (keine Anfrage wird blockiert, keine Blacklist-Wortprüfung, keine Cookie-Löschung und keine automatische Iframe-Löschung).',
  popup_remove_whitelistedElementsDomains_popup: 'Entfernen Sie die aktuelle Domain aus der Whitelist Domänen.',

  popup_reload_target: 'Reload website',
  extendsblacklist: (
    <span>
      Wärend des Laden einer Webseite, wird die Domäne über ein Blacklist Filter durchgefürfelt. Wenn die Domäne auf der Schwarzen Liste steht, wird diese blockiert. Um die maximale Sicherheit zu gewärleisten kann eine Erweiterte Blacklist hinzugefügt werden it weiteren 20822 Einträgen. Der Inhalt der Liste steht hier:
      <a target='_blank' href={`${addonPrefix()}/extendedblacklist.txt`}>
        extendedblacklist.txt
        </a>
    </span>
  ),
  extendspornlist: (
    <span>
      Wärend des Laden einer Webseite, wird die Domäne über ein Blacklist Filter durchgefürfelt. Wenn die Domäne auf der Schwarzen Liste steht, wird diese blockiert. Um die maximale Sicherheit zu gewärleisten kann eine Erweiterte Pornlist hinzugefügt werden it weiteren 6668 Einträgen. Der Inhalt der Liste steht hier:
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
          Sie können hier einen Cookie-Namen oder einen Domain-Namen hinzufügen, der auf jeder Website gelöscht werden soll.
          Standardmäßig enthält diese Liste 635 Einträge mit vordefinierten Cookie-Namen oder Domain-Namen
          dass die Verwendung von Cookies für Tracking-Zwecke und dort automatisch durch den Sicherheitsinhalt gelöscht werden.
        </p>
        <ul>
          <li>
            Beispiel Eintrag in der Liste: <span className="colored-example-element">GPS</span>. Wenn Sie danach die Webseite besuchen: https://www.youtube.com, dann wird der Cookie mit dem Name <span className="colored-example-element">GPS</span> gelöscht
          </li>
          <li>
            Beispiel Eintrag in der Liste: <span className="colored-example-element">www.7search.com</span>. Wenn Sie danach die Webseite besuchen: https://www.7search.com, dann werden <span className="colored-example-element">alle Cookies</span>  von der Seite gelöscht.
          </li>
        </ul>
      </div>
    </span>
  ),
  blacklistedElementsDomians_html: (
    <span className="box-content">
      <div className="box-content--div">
        <p className="element-p">
          Dies ist eine auf Domainnamen basierende Blacklist.
          Alle Domains aus dieser Liste werden beim Besuch ihrer Websites blockiert.
        </p>
        <ul>
          <li>
            Beispiel Eintrag in der Liste: <span className="colored-example-element">ytimg.com</span> wenn Sie dann die Webseite besuchen <span className="colored-example-element">https://ytimg.com</span> wird der Zugruff verweigert.
          </li>
          <li>
            Beispiel Eintrag in der Liste: <span className="colored-example-element">github.com</span> wenn Sie dann die Webseite besuchen <span className="colored-example-element">https://github.com</span> wird der Zugruff verweigert.
          </li>
        </ul>
      </div>
    </span>
  ),
  blacklistedElementsUrlsIncludes_html: (
    <span className="box-content">
      <div className="box-content--div">
        <p className="element-p">
          Dies ist ein Domainname und Teil der URL-basierten Blacklist.
          Alle Domains aus dieser Liste und alle übereinstimmenden Einträge aus der Website-URL werden blockiert, wenn eine Übereinstimmung gefunden wurde.
        </p>
        <ul>
          <li>
            Beispiel Eintrag in der Liste: <span className="colored-example-element">package</span>. Wenn Sie danach die Webseite besuchen: https://www.npmjs.com/<span className="colored-example-element">package</span>/gulp-babel  wird der Zugruff verweigert.
          </li>
          <li>
            Beispiel Eintrag in der Liste: <span className="colored-example-element">test</span>. Wenn Sie danach die Webseite besuchen: https://www.google.com/search?q=<span className="colored-example-element">test</span>,  wird der Zugruff verweigert.
          </li>
          <li>
            Beispiel Eintrag in der Liste: <span className="colored-example-element">q</span>. Wenn Sie danach die Webseite besuchen: https://www.google.com/search?<span className="colored-example-element">q</span>=test,  wird der Zugruff verweigert.
          </li>
          <li>
            Beispiel Eintrag in der Liste: <span className="colored-example-element">hub.com</span>. Wenn Sie danach die Webseite besuchen: https://www.git<span className="colored-example-element">hub.com</span>,  wird der Zugruff verweigert.
          </li>
        </ul>
      </div>
    </span>
  ),
  blacklistedElementsIframes_html: (
    <span className="box-content">
      <div className="box-content--div">
        <p className="element-p">
          Wenn Sie eine Website besuchen und sich der Domainname der Website in dieser Liste befindet, werden alle Iframes entfernt.
        </p>
        <ul>
          <li>
            Beispiel Eintrag in der Liste: <span className="colored-example-element">gazeta.pl</span>. Wenn Sie danach die Webseite besuchen: https://www.gazeta.pl werden alle Iframes von der Seite https://<span className="colored-example-element">gazeta.pl</span> entfernt
          </li>
        </ul>
      </div>
    </span>
  ),
  blacklistedElementsIframesSources_html: (
    <span className="box-content">
      <div className="box-content--div">
        <p className="element-p">
          Wenn Sie eine Website besuchen und der Attribut "src" also Source (Quelle des Servers) eines Iframes einen Eintrag aus dieser Liste beinhaltet, wird das Iframe aus der Website entfernt.
        </p>
        <ul>
          <li>
            Beispiel Eintrag in der Liste: <span className="colored-example-element">https://dmp.theadex.com/r/</span>. Wenn Sie danach die Webseite besuchen: https://www.gazeta.pl und irgendein Iframe Element das Attribut src (source), den Source beinhaltet <span className="colored-example-element">https://dmp.theadex.com/r/</span>230/1121/?c=4225222955758066709, wird das Iframe aus der Seite komplett entfernt
          </li>
        </ul>
      </div>
    </span>
  ),
  blacklistedElementsIframesNames_html: (
    <span className="box-content">
      <div className="box-content--div">
        <p className="element-p">
          Wenn Sie eine Website besuchen und der Attribut "name" eines Iframes einen Eintrag aus dieser Liste beinhaltet, wird das Iframe aus der Website entfernt.
        </p>
        <ul>
          <li>
            Beispiel Eintrag in der Liste: <span className="colored-example-element">googleads</span>. Wenn Sie danach die Webseite besuchen: https://www.gazeta.pl und irgendein Iframe Element das Attribut name, die Zeichenkette beinhaltet <span className="colored-example-element">googleads</span>_sync, wird das Iframe aus der Seite komplett entfernt
          </li>
        </ul>
      </div>
    </span>
  ),
  blacklistedElementsTrackers_html: (
    <span className="box-content">
      <div className="box-content--div">
        <p className="element-p">
          Wenn Sie eine Website besuchen und die Website andere implementiert hat (Dritte)
          Dienste oder Tracking-Dienste und der Domainname stimmen mit einem Domainnamen aus dieser Liste überein
          oder der gesamte URL-Pfad stimmt dann mit einem Eintrag aus dieser Liste überein
          Die Anfrage wird blockiert.
        </p>
        <ul>
          <li>
            Beispiel Eintrag in der Liste: <span className="colored-example-element">cdn.mouseflow.com</span>. Egal welche Webseite Sie besuchen, falls eine Webseite versuche einen Service von https://<span className="colored-example-element">cdn.mouseflow.com</span>/lib/track.js abzurufen, wird diese Abfrage blockiert
          </li>
          <li>
            Beispiel Eintrag in der Liste: <span className="colored-example-element">rsrc.php/v3/y4/r/-PAXP-deijE.gif</span>. Egal welche Webseite Sie besuchen, falls eine Webseite versuche einen Service von: https://static.xx.fbcdn.net/<span className="colored-example-element">rsrc.php/v3/y4/r/-PAXP-deijE.gif</span>  abzurufen, wird diese Abfrage blockiert
          </li>
        </ul>
      </div>
    </span>
  ),
  blacklistedElementsWords_html: (
    <span className="box-content">
      <div className="box-content--div">
        <p className="element-p">
          Der Sicherheitsinhalt findet jedes Wort aus dieser schwarzen Liste und jedes Wort wird durch den im Abschnitt "Einstellungen" definierten "Ersetzer" ersetzt.
          Wenn der Sicherheitsinhalt ein Gefahrenwort aus der "Blacklist: Words" in einem HTML-Tag gefunden hat,
          Anschließend werden die HTML-Tag-Attribute gescannt. Wenn ein Attributname aus dieser Liste nicht mit Einträgen aus der "Blacklist: Attribute" übereinstimmt, dann
          Der Sicherheitsinhalt findet jedes Wort innerhalb des Attributwerts aus dieser Liste und ersetzt jedes Zeichen durch das Ersetzerzeichen
          definiert im Abschnitt "Einstellungen".
        </p>
        <ul>
          <li>
            Zum Beispiel, wenn das Wort "guns" in dieser schwarzen Liste vorhanden ist und Sie eine Website besuchen, dann wird das Wort "guns" ersetzt werden.
            <br />
            Beispiel Eingabe: "we have <span className="colored-example-element">guns</span> in ...".
            <br />
            Beispielausgabe: "we have <span className="colored-example-element">####</span> in ..."
          </li>
          <li>
            Zum Beispiel, wenn das Wort "seven" in dieser schwarzen Liste vorhanden ist und Sie eine Website besuchen, dann wird das Wort "seven" ersetzt werden.
            <br />
            Beispiel Eingabe: "<span className="colored-example-element">seven</span> years old ...".
            <br />
            Beispielausgabe: "<span className="colored-example-element">#####</span> years old ...".
          </li>
        </ul>
      </div>
    </span>
  ),
  blacklistedElementsClass_html: (
    <span className="box-content">
      <div className="box-content--div">
        <p className="element-p">
          Blockieren von DOM-Elementen (Tags) basierend auf dem Attribut: class.
        </p>
        <ul>
          <li>
            Beispiel Eintrag: "font-bold". Wenn du eine Webseite besuchtst und irgendein DOM Element das Attribut class mit dem Wert 'font-bold' befüllt ist (z.B.: {'<span class="font-bold"> Text </span>'}) dann wird das Element aus der Webseite enfernt.
          </li>
        </ul>
      </div>
    </span>
  ),
  blacklistedElementsHref_html: (
    <span className="box-content">
      <div className="box-content--div">
        <p className="element-p">
          Blockieren von "A" -Tag-Elementen basierend auf ihrem Attribut: href.
        </p>
        <ul>
          <li>
            Beispiel Eintrag: "redirect?". Wenn du ein Webseite besuchtst und das DOM Element {'<a>'} das Attribut href mit dem Wert 'redirect?' befüllt hat (z.B.: {'<a href="https://xv345bhFD.com/redirect?client=http://example.com">link</a>'}), dann wird das Element aus der Webseite enfernt.
          </li>
        </ul>
      </div>
    </span>
  ),
  blacklistedElementsId_html: (
    <span className="box-content">
      <div className="box-content--div">
        <p className="element-p">
          Blockieren von DOM-Elementen (Tags) basierend auf dem Attribut: zd.
        </p>
        <ul>
          <li>
            Beispiel Eintrag: "extern-logo". Wenn du eine Webseite besuchtst und irgendein DOM Element das Attribut id mit dem Wert 'extern-logo' befüllt ist (z.B.: {'<img id="extern-logo"/>'}), dann wird das Element aus der Webseite enfernt.
          </li>
        </ul>
      </div>
    </span>
  ),
  whitelistedElementsDomains_html: (
    <span className="box-content">
      <div className="box-content--div">
        <p className="element-p">
          Machen Sie nichts für ausgewählte Domainnamen.
        </p>
        <ul>
          <li>
            Beispiel Eintrag in der Liste: <span className="colored-example-element">google.com</span> wenn Sie dann die Webseite besuchen https://www.<span className="colored-example-element">google.com</span> findet keine Überprüfung jeglicher Art statt
          </li>
          <li>
            Beispiel Eintrag in der Liste: <span className="colored-example-element">npmjs.com</span> wenn Sie dann die Webseite besuchen https://www.<span className="colored-example-element">npmjs.com</span>/package/gulp-babel findet keine Überprüfung jeglicher Art statt
          </li>
        </ul>
      </div>
    </span>
  ),
  blockedElements_html: (
    <span className="box-content">
      <div className="box-content--div">
        <p className="element-p">
          Content Blocker kann DOM Elemente der genutzten Website blockieren. Um dieses Feature zu nutzen aktiviere den Content Blocker von dem Popup Fenster, dieser Erweiterung und klicke auf ein Element das blockiert werden soll. Alle blockierten HTML Elemente können wieder hergestellt/ gelöscht werden in dem unteren Bereich.
        </p>
      </div>
    </span>
  ),
  example: 'Beispiele',
  /**
   * Images download 
   */
  imagesPopupTitle: 'Fotos wurden gefunden',
  imagesNoData: 'Keine validen Fotos vorhanden',
  imagesNoDataFavourites: 'Keine gespeicherten Fotos vorhanden',
  imagesLoadingTabs: 'Aktive tabs werden geladen...',
  current_tabs_title: 'Offene Tabs',
  filter: 'Filtern',
  filterLastRequests: 'Letzte 50 Anfragen filtern',
  filter_all: 'Alle',
  itemsPerSite: 'Je Seite',
  itemsPerSiteSuffix: 'Fotos',
  page: 'Seite',
  of: 'von',
  images: 'Fotos',
  current_favourites_images: 'Derzeit gespeicherte Fotos',
  open_in_new_tab: 'Im neuen Tab öffnen',
  download: 'Herunterladen',
  downloadSmall: 'download',
  delete_all: 'Alle löschen',
  notLoggedInImagesFavouritesAdd: 'Nur angemeldete Benutzer können Bilder zur Favoritenliste hinzufügen',
  notLoggedInImagesFavouritesManage: 'Nur angemeldete Benutzer können die Favoritenliste verwalten',
  tabsNoData: 'Keine validen Tabs vorhanden',
  imagesLoadingData: 'Fotos werden geladen...',
  no_data_available: 'Keine Daten vorhanden',
  /*
   * List actions 
   */
  infoItemAdded: 'Eintrag wurde in die Liste hinzugefügt',
  infoItemRemoved: 'Eintrag wurde aus der Liste entfernt',
  infoArrayIs0: 'Liste ist leer, daher kann kein Element entfernt werden',
  infoIncorrectValue: 'Wert ist nicht valide',
  infoItemInList: 'Eintrag bereits in der Liste vorhanden',

  country: 'Land',
  countriesNotFoundText: 'Sorry, dieses Land habe ich nicht gefunden',
  dropText: 'Hier loslassen',
  error: 'Fehler',
  searchPlaceholder: 'Suchen...',
  search: 'Suche',
  list: 'Liste',
  addPlaceholder: 'Wert...',
  addNewEntryTitle: 'Neuen Eintrag hinzufügen',
  no_data_list: 'Keine Einträge vorhanden',
  no_data_list_search: 'Keine Suchergebnisse vorhanden',
  loading: 'Laden...',
  home_security_3: 'Blockierung von Anfragen',
  home_security_2: 'Blockierung von Cookies',
  home_security_1: 'Blockierung von Trackern',
  home_security_4: 'Blockierung von Pornographischen Seiten',
  home_security_5: 'Blockierung von Wörtern',
  home_security_6: 'Blockierung von Webseiten Content',
  upload: 'Drag & Drop die Protector json Datei hier...',
  export: 'Export',
  exportAll: 'der globalen Listen und Einstellungen',
  dangerCount: 'Ich beschütze dich!',
  dangerCountPrefix: 'Die maximale Anzahl der Gefahren Elemente wurde erreicht und beträgt aktuell',
  dangerUrlPrefix: 'Die URL oder ein Teil der URL ist gefährlich und befindet sich in einer der schwarzen Listen',
  domain: 'Domänen Name ohne www. Beispiel: react-divcreator.cba.pl',
  tag: 'Tag Name. Beispiel: div',
  languages: 'Sprachen'
};

export default DE;
