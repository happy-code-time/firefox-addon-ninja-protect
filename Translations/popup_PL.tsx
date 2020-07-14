import * as React from 'react';

import { addonPrefix } from '../Source/AppFiles/Functions/addonPrefix';

const PL = {
  itemRemovedFromList: 'Wpis został usunięty z listy',
  currntlyIs: 'Kliknij tekst poniżej aby wykonać',
  currntlyIsOff: 'włączenie',
  currntlyIsOn: 'wyłączenie',
  title_html_blocker: 'Blocker',
  blocker_msg_7: "Content Blocker pozwala na zablokowanie treści bieżącej strony internetowej. Aby zablokować dany element drzewa DOM, włącz usługę Content Blocker potem wybierz element ze strony internetowej. Wszystkie zablokowane elementy mogą zostać skasowane w 'Dashboard' w sekcji 'Zablkowany HTML'.",
  title_reset: 'Reset',
  reset_done: 'Reset applikacji do ustawień fabrycznych został przeprowadzony pomyślnie.',
  reset:'Kliknij ten tekst aby przeprowadzić reset tej wtyczki do ustawień fabrycznych. Wszystkie twoja dane z list, ustawienia i statystyka zostana usunięte. Przejdz najpierw do działu eksportu danych aby po tym resecie móc wykonać import danych.',
  menu_title_ninja: 'Ikonka Ninja',
  ninjaIcon: 'Ikonka Ninja tego rozszerzenia została wzięta z',
  turnOn: 'Włącz Protector Ninja',
  turnOff: 'Wyłącz Protector Ninja',
  links: 'Linki',
  deleteAllIframes: 'Usuń ramki z bierzącej strony',
  deleteAllCookies: 'Usuń ciasteczka z bierzącej strony',
  notLoggedInStatisticMessage: 'Pracujesz lokalnie. Zaloguj się aby zachować statystykę wstecz.',
  today_blocked: 'Statystyka zablokowanych elementów dnia dzisiejszego',
  menu_text_statistic: 'Statystyka zablokowanych elementów',
  menu_text_statistic_small: 'Statystyka',
  menu_text_requests: 'Zapytania',
  addon_not_available: 'Domena nie zezwala na używanie wtyczek',
  NoDataBlockedItems: 'Brak zablokowanych informacji',
  NoDataBlockedItemsToday: 'Brak informacji o zablokowanych elementach z dnia dzisiejszego',
  home_chat: 'Chat z kolegami - bez śledzenia',
  home_messages: 'Wysyłaj wiadomości - bez śledzenia',
  home_security: 'Ochrona w internecie - blokowanie śledzących',
  home_images: 'Pobieraj zdjęcia - bez śledzenia',
  /** 
   * Left menu
   */
  menu_text_export: 'Eksport',
  menu_title_export: 'Przejdź do obszaru eksportu',
  menu_text_import: 'Import',
  menu_title_import: 'Przejdź do obszaru importu',
  messages_main: 'Wiadomości',
  menu_text_messages: 'Wiadomości',
  menu_title_messages: 'Przejdź do obszaru wiadomości',
  menu_text_notifications: 'Powiadomienia',
  menu_title_notifications: 'Przejdź do obszaru powiadomień',
  favourites_main: 'Znajomości',
  menu_text_favourites: 'Znajomi',
  menu_title_favourites: 'Przejdź do obszaru znajomi',
  menu_text_add_favourites: 'Wyszukaj',
  menu_title_add_favourites: 'Przejdź do obszaru szukania znajomych',
  chat_main: 'Chat',
  menu_text_chat: 'Chat',
  menu_title_chat: 'Przejdź do obszaru chatu',
  menu_text_security: 'Domena',
  menu_text_security_main: 'Lista',
  menu_title_security: 'Przejdź do obszaru zarządzania domeną',
  menu_text_security_settings: 'Ustawienia',
  menu_title_security_settings: 'Przejdź do obszaru ustawień ochrony',
  menu_text_cookies: 'Cisteczka',
  menu_title_cookies: 'Przejdź do obszaru ciasteczek',
  menu_text_home: 'Strona główna',
  menu_title_home: 'Przejdź do strony głównej',
  menu_text_iframes: 'Ramki',
  menu_title_iframes: 'Przejdź do obszaru ramek',
  menu_text_security_examples: 'Przykłady',
  menu_title_security_examples: 'Przejdź do obszaru przykładów ochrony',
  menu_text_download_images: 'Pobierz zdjęcia',
  menu_title_download_images: 'Przejdź do obszaru poboru zdjęć',
  menu_text_images: 'Zdjęcia',
  menu_text_images_favourites: 'Zapisane zdjęcia',
  menu_title_images_favourites: 'Przejdź do obszaru zapisanych zdjęć',
  accountPrivacyTerms: 'Warunki prywatności',
  /** 
   * GLOBAL ERROR MESSEAGES
   */
  globalNetworkError: 'Błąd sieci.',
  globalProcessError: 'Błąd procesu.',
  globalUserDoesNotExsists: 'Konto użytkownika nie istnieje',
  globalInvalidEmailsAdress: 'Nieprawidłowy format adresu e-mail',
  globalErrormessagePrefix: 'Znaleziono błąd, który powoduje, że aplikacja nie działa poprawnie.',
  globalErrormessageCloseButton: 'Ignoruj',
  globalErrormessageLearnMoreButton: 'Czytaj więcej',
  globalInvalidCountry: 'Niepoprawny kraj',
  globalInvalidLanguage: 'Niepoprawny język',
  globalErrorCodeTitle: 'Kod błędu',
  globalErrorCode_1: 'Błąd sieci. Gdy wystąpił błąd sieci, oznacza to, że żądanie „ajax” nie powiodło się. Sprawdź połączenie sieciowe lub to, ponieważ usługa zdalna jest obecnie niedostępna.',
  globalErrorCode_2: 'Błąd procesu aplikacji. Oznacza to, że odpowiedź na żądania ajax podała nieprawidłową strukturę aplikacji.',
  globalErrorCode_3: 'Odpowiedź inna niż oczekiwana. Oznacza to, że żądana wartość bieżącego kontekstu aplikacji jest nieprawidłowa.',
  code: 'Kod',
  listNotSynchronizedUserNotLoggedIn: 'Pracujesz lokalnie. Zaloguj się aby synchronizować listę.',
  notLoggedIn: 'Informacja niezalogowania',
  listSynchronized_one: 'Synchronizowano',
  /**
   * Cookies popup page
   */
  titleDeleteCookie: 'Skasuj pojedyncze ciasteczko',
  titleCopyCookieValue: 'Kopiuj wartość do schowka',
  cookie_msg_1: 'Domena:',
  cookie_msg_2: 'Nazwa:',
  cookie_msg_3: 'Wartość:',
  cookie_msg_4: 'Kasuj wszystkie ciasteczka. Jest możliwe że zostaniesz wylogowany z bieżącej strony.',
  cookiesNoData: 'Brak ciasteczek',
  // user account
  avatarErrorFileType: 'Nierozpoznany typ pliku',
  avatarErrorFileSize: 'Rozmiar pliku przekracza limit 5 MB dla programu Avatar',
  avatarErrorFileTypeSupport: 'Dozwolone są tylko typy plików jpg, png i gif',

  /**
   * Blacklist overview
   */
  blacklist: 'Czarne listy',
  whitelist: 'Białe listy',
  blacklistedElementsWords: 'Czarna lista Słowa',
  blacklistedElementsDomians: 'Czarna lista Domeny',
  blacklistedElementsUrlsIncludes: 'Czarna lista Adresy url',
  blacklistedElementsTrackers: 'Czarna lista Trackery',
  blacklistedElementsCookies: 'Czarna lista Ciasteczka',
  blacklistedElementsClass: 'Blokuj HTML dla class',
  blacklistedElementsId: 'Blokuj HTML dla id',
  blacklistedElementsHref: 'Blokuj HTML dla href',
  menuBlacklistedElementsClass: 'Blokuj HTML dla class',
  menuBlacklistedElementsId: 'Blokuj HTML dla id',
  menuBlacklistedElementsHref: 'Blokuj HTML dla href',
  blacklistedElementsIframes: 'Czarna lista Ramki',
  blacklistedElementsIframesSources: 'Czarna lista Ramki źródło',
  blacklistedElementsIframesNames: 'Czarna lista Ramki nazwa',
  copiedToClipBoard: 'Skopiowano do schowka',
  action_title_copyToClipboard: 'Skopiuj listę do schowka',
  action_title_exportToFile: 'Eksportuj listę do pliku o formacie JSON',
  action_title_deleteList: 'Wyczyść listę globalnie',
  action_title_copyToClipboard_single: 'Skopiuj wartość do schowka',
  action_title_delete_single: 'Usuń wpis',
  forThisFunctionLogin: 'Zaloguj się, aby wykonać tę akcję',
  emptyListDone: 'Lista została wyczyszczona',
  restoreDefaultValue: 'Zresetuj listę do wartości domyślnych',
  whitelistedElementsDomains: 'Biała lista Domeny',
  blockedElements: 'Blocker HTML',
  /**
   * Security settings
   */
  securityIsOn: 'Ta wtyczka jest włączona lub wyłączona.',
  scanTextOnWebsite: 'Jeśli wyłączysz tę opcję, wtedy wszystkie słowa na stronie internetowej NIE są skanowane. Czarna lista: Słowa, są ignorowane.',
  allowOnlyHttpsProtocol: 'Zezwalaj na odwiedzanie tylko stron internetowych HTTPS - czyli strony z protokołem HTTP zostaną zablokowane.',
  allowOnlyHttpProtocol: 'Zezwalaj na odwiedzanie tylko stron internetowych HTTP - czyli strony z protokołem HTTPS zostaną zablokowane.',
  makeSearchInSourceCode: 'Skanuj słowa w kodzie źródłowym danego elementu HTML (innerHTML) lub tylko w tekscie elementach HTML (innerText).',
  mutationCheck: 'Sprawdzanie elementów HTML strony internetowej ma nastąpić również po załadowaniu strony (DOM mutacje na elementach HTML zazwyczaj poprzez biblioteki Javascript).',
  ignoreTagStyle: 'Ignoruj kod zawarty w tagach "STYLE" (<style> tag) podczas skanowania na podstawie czarnej listy "Słowa".',
  ignoreTagScript: 'Ignoruj kod zawarty w tagach "SCRIPT" (<script> tag) podczas skanowania na podstawie czarnej listy "Słowa".',
  ignoreTagLink: 'Ignoruj kod zawarty w tagach "Link" (<link> tag) podczas skanowania na podstawie czarnej listy "Słowa".',
  ignoreTagMeta: 'Ignoruj kod zawarty w tagach "Meta" (<meta> tag) podczas skanowania na podstawie czarnej listy "Słowa".',
  replacer: 'Zastąp każdy znak niebezpiecznego słowa (niebezpieczne słowa pochodzą z czarnej listy Słowa) tym wpisem.',
  maximumOfDangerWords: 'Po osiągnięciu tej wartości - poprzez sumę zablokowanych elementów na stronie na podstawie czarnych list: Czarna lista Słowa, Blokuj HTML dla class, Blokuj HTML dla href oraz Blokuj HTML dla id (każdy zablokowany element zwiększa wartości licznika o +1) wtedy strona internetowa zostanie zablokowana. Minimalna wartość to 1, maksymalna to 300.',
  limitlessScan: 'Zignoruj maksymalną liczbę zablokowanych niebezpiecznych elementów na podstawie czarnych list: Czarna lista Słowa, Blokuj HTML dla class, Blokuj HTML dla href oraz Blokuj HTML dla id. Strona nie zostanie zablokowana (zignoruj powyższą wartość). Jeśli aktywujesz tę funkcję, Protection może spowolnić działanie przeglądarki.',
  deleteCookies: 'Kasuj automatycznie wszystkie ciasteczka na podstawie czarnej listy Ciasteczka na wszytkich stronach. Ciasteczka kasowane są gdy otwierasz lub zamykasz stronę internetową i podczas przeglądania co 5 sekund.',

  /**
   * Popup - home
   */
  popupMainTitle: 'Czarny ninja statystyka',
  popup_blocked_trackers: 'Zablokowani trackerzy',
  popup_blocked_cookies: 'Zablokowane ciasteczka',
  popup_blocked_words: 'Zablokowane łowa',
  popup_blocked_requests: 'Zablokowane zapytania',
  popup_blocked_iframes: 'Zablokowane ramki',
  popup_blocked_dom: 'Zablokowany HTML',
  popup_blocked_websites: 'Zablokowane strony',
  popup_title_dashboard: 'Statystyka',
  popup_title_global_chart: 'Globalna statystyka',
  /**
   * Popup - Iframes page
   */
  titleDeleteIframe: 'Usuń pojedynczy element iframe',
  iframe_msg_1: 'Źródło:',
  iframe_msg_2: 'Id:',
  iframe_msg_3: 'className:',
  iframesNoData: 'Brak ramek',

  /**
   * Popup - security
   */
  popup_add_blacklistedElementsTrackers: 'Dodaj bieżącą domenę do trackerów czarnej listy. Wszystkie próby uzyskania dostępu do tej domeny są zablokowane.',
  popup_remove_blacklistedElementsTrackers: 'Usuń bieżącą domenę z czarnej listy - Trackerów.',
  popup_add_blacklistedElementsDomians: 'Dodaj bieżące domeny do domeny czarnej listy domen. Wszystkie próby uzyskania dostępu do tej domeny lub usług z tej domeny są blokowane.',
  popup_remove_blacklistedElementsDomians: 'Usuń bieżącą domenę z czarnej listy - Domen.',
  popup_add_blacklistedElementsCookies: 'Dodaj bieżącą domenę do czarnej listy plików cookie. Wszystkie ciasteczka są usuwane podczas załadowania strony, potem co 5 sekund oraz odczas opusczania witryny.',
  popup_remove_blacklistedElementsCookies: 'Usuń bieżącą domenę z czarnej listy - Ciasteczka',
  popup_add_blacklistedElementsIframes: 'Dodaj bieżącą domenę do czarnej listy - Ramḱi. Wszystkie ramki sa usuwane ze strony, gdy ta probuje wczytac źródło zewnętrzengo serwisu (ramki).',
  popup_remove_blacklistedElementsIframes: 'Usuń bieżącą domenę z czarnej listy - Ramki.',
  popup_add_blacklistedElementsIframesSources: 'Dodaj bieżący adres url do czarnej listy - Ramki źródło. Wszystkie ramki sa usuwane ze strony, gdy ta probuje wczytac źródło zewnętrzengo serwisu (ramki).',
  popup_remove_blacklistedElementsIframesSources: 'Usuń bieżący adres url z czarnej listy - Ramki źródło.',
  popup_add_whitelistedElementsDomains: 'Dodaj bieżący wpis białej listy Domen. ezwól na wszystko (żadne żądanie nie jest blokowane, brak sprawdzania słów na czarnej liście, brak usuwania plików cookie i automatyczne usuwanie iframe).',
  popup_remove_whitelistedElementsDomains: 'Usuń bieżącą domenę z białej listy Domen.',

  popup_add_blacklistedElementsTrackers_popup: 'Dodaj bieżący wpis do czarnej listy Trackerów. Wszystkie próby uzyskania dostępu do tej domeny są zablokowane.',
  popup_remove_blacklistedElementsTrackers_popup: 'Usuń bieżący wpis z czarnej listy Trackerów.',
  popup_add_blacklistedElementsDomians_popup: 'Dodaj bieżący wpis do czarnej listy Domen. Wszystkie próby uzyskania dostępu do tej domeny lub usług z tej domeny są blokowane.',
  popup_remove_blacklistedElementsDomians_popup: 'Usuń bieżący wpis z czarnej listy Domen.',
  popup_add_blacklistedElementsCookies_popup: 'Dodaj bieżący wpis do czarnej listy Ciasteczka. Wszystkie ciasteczka są usuwane podczas załadowania strony, potem co 5 sekund oraz odczas opusczania witryny.',
  popup_remove_blacklistedElementsCookies_popup: 'Usuń bieżący wpis z czarnej listy Ciasteczka',
  popup_add_blacklistedElementsIframes_popup: 'Dodaj bieżący wpis do czarnej listy Ramḱi. Wszystkie ramki sa usuwane ze strony, gdy ta probuje wczytac źródło zewnętrzengo serwisu (ramki).',
  popup_remove_blacklistedElementsIframes_popup: 'Usuń bieżący wpis z czarnej listy Ramki.',
  popup_add_blacklistedElementsIframesSources_popup: 'Dodaj bieżący wpis do czarnej listy Ramki źródło. Wszystkie ramki sa usuwane ze strony, gdy ta probuje wczytac źródło zewnętrzengo serwisu (ramki).',
  popup_remove_blacklistedElementsIframesSources_popup: 'Usuń bieżący wpis z czarnej listy Ramki źródło.',
  popup_add_whitelistedElementsDomains_popup: 'Dodaj bieżący wpis białej listy Domen. Zezwól na wszystko (żadne żądanie nie jest blokowane, brak sprawdzania słów na czarnej liście, brak usuwania plików cookie i automatyczne usuwanie iframe).',
  popup_remove_whitelistedElementsDomains_popup: 'Usuń bieżący wpis z białej listy Domen.',

  popup_reload_target: 'Załaduj ponownie stronę',
  extendsblacklist: (
    <span>
      Podczas ładowania witryny domena jest skanowana przez filtr czarnej listy. Jeśli domena jest na czarnej liście, zostanie zablokowana. Aby zapewnić maksymalne bezpieczeństwo, można dodać rozszerzoną czarną listę z kolejnymi 20822 wpisami. Treść listy znajduje się tutaj:
      <a target='_blank' href={`${addonPrefix()}/extendedblacklist.txt`}>
        extendedblacklist.txt
        </a>
    </span>
  ),
  extendspornlist: (
    <span>
      Podczas ładowania witryny domena jest skanowana przez filtr czarnej listy. Jeśli domena jest na czarnej liście, zostanie zablokowana. Aby zapewnić maksymalne bezpieczeństwo, można dodać rozszerzoną czarną listę domen pornograficznych z kolejnymi 6668 wpisami. Treść listy znajduje się tutaj:
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
          Tutaj powinno się wpisać nazwę ciasteczka aby na każdej stronie internetowej każde ciasteczko o podanej nazwie zostało skasowane lub
          nazwa domeny na której każde ciasteczka mają zostać skasowane.
          Standardowo lista ma ponad 350 wpisów niebezpiecznych nazew domen lub usług śledzących, którą są automatycznie kasowane.
        </p>
        <ul>
          <li>
            Przykładowy wpis w tej liście: <span className="colored-example-element">GPS</span>. Jeśli odwiedzisz stronę internetową: https://www.youtube.com, wtedy ciasteczko o nazwie <span className="colored-example-element">GPS</span> zostanie skasowane
          </li>
          <li>
            Przykładowy wpis w tej liście: <span className="colored-example-element">www.7search.com</span>. Jeśli odwiedzisz stronę internetową: https://www.7search.com, wtedy <span className="colored-example-element">wszystkie ciasteczka</span> zostaną skasowane
          </li>
        </ul>
      </div>
    </span>
  ),
  blacklistedElementsDomians_html: (
    <span className="box-content">
      <div className="box-content--div">
        <p className="element-p">
          To jest czarna lista oparta jest na nazwie domeny.
          Wszystkie domeny z tej listy są blokowane podczas odwiedzania tej witryny.
        </p>
        <ul>
          <li>
            Przykładowy wpis w tej liście: <span className="colored-example-element">ytimg.com</span>.Jeśli odwiedzisz stronę internetową  <span className="colored-example-element">https://ytimg.com</span> strona internetowa zostanie zablokowana
          </li>
          <li>
            Przykładowy wpis w tej liście: <span className="colored-example-element">github.com</span>. Jeśli odwiedzisz stronę internetową <span className="colored-example-element">https://github.com</span> strona internetowa zostanie zablokowana
          </li>
        </ul>
      </div>
    </span>
  ),
  blacklistedElementsUrlsIncludes_html: (
    <span className="box-content">
      <div className="box-content--div">
        <p className="element-p">
          Czarna listy oparta na adresach URL lub część adresu url.
          Wszystkie nazwy domen z tej listy oraz wszystkie części z adresu URL sa brane pod uwagę podczas odwiedzania storny internetwej.
          Jezeli adres strony internetowej zawiera jakikolwiek znak lub ciąg znaków z tej listy wtedy dostęp do strony internetowej zostanie zablokowany.
        </p>
        <ul>
          <li>
            Przykładowy wpis w tej liście: <span className="colored-example-element">package</span>. Jeśli odwiedzisz stronę internetową: https://www.npmjs.com/<span className="colored-example-element">package</span>/gulp-babel wtedy dostęp do strony internetowej zostanie zablokowany
          </li>
          <li>
            Przykładowy wpis w tej liście: <span className="colored-example-element">test</span>. Jeśli odwiedzisz stronę internetową: https://www.google.com/search?q=<span className="colored-example-element">test</span> wtedy dostęp do strony internetowej zostanie zablokowany
          </li>
          <li>
            Przykładowy wpis w tej liście: <span className="colored-example-element">q</span>. Jeśli odwiedzisz stronę internetową: https://www.google.com/search?<span className="colored-example-element">q</span>=test wtedy dostęp do strony internetowej zostanie zablokowany
          </li>
          <li>
            Przykładowy wpis w tej liście: <span className="colored-example-element">hub.com</span>. Jeśli odwiedzisz stronę internetową: https://www.git<span className="colored-example-element">hub.com</span> wtedy dostęp do strony internetowej zostanie zablokowany
          </li>
        </ul>
      </div>
    </span>
  ),
  blacklistedElementsIframes_html: (
    <span className="box-content">
      <div className="box-content--div">
        <p className="element-p">
          Czarna lista nazw domen na których (stronach internetowych) maja zostać usunięte ramki (iframe).
        </p>
        <ul>
          <li>
            Przykładowy wpis w tej liście: <span className="colored-example-element">gazeta.pl</span>. Jeśli odwiedzisz stronę internetową: https://www.<span className="colored-example-element">gazeta.pl</span> wtedy wszystkie ramki zostaną usunięte
          </li>
        </ul>
      </div>
    </span>
  ),
  _html: (
    <span className="box-content">
      <div className="box-content--div">
        <p className="element-p">
          Czarna lista źródeł ramek domen, które maja zostać usunięte na każdej stronie.
        </p>
        <ul>
          <li>
            Przykładowy wpis w tej liście: <span className="colored-example-element">https://dmp.theadex.com/r/</span>. Jeśli odwiedzisz stronę internetową: https://www.gazeta.pl a załadowanej ramki (tag: iframe) źródło zawiera: <span className="colored-example-element">https://dmp.theadex.com/r/</span>230/1121/?c=4225222955758066709, wtedy ramka zostanie usunięta ze strony
          </li>
        </ul>
      </div>
    </span>
  ),
  blacklistedElementsIframesNames_html: (
    <span className="box-content">
      <div className="box-content--div">
        <p className="element-p">
          Czarna lista nazew ramek, które maja zostać usunięte na każdej stronie.
        </p>
        <ul>
          <li>
            Przykładowy wpis w tej liście: <span className="colored-example-element">googleads</span>. Jeśli odwiedzisz stronę internetową: https://www.gazeta.pl a załadowanej ramki (tag: iframe) nazwa zawiera: <span className="colored-example-element">googleads</span>_sync, wtedy ramka zostanie usunięta ze strony
          </li>
        </ul>
      </div>
    </span>
  ),
  blacklistedElementsTrackers_html: (
    <span className="box-content">
      <div className="box-content--div">
        <p className="element-p">
          Jeśli odwiedzisz witrynę internetową, a witryna wdrożyła śledzenie
          usługi i nazwa domeny jest zgodna z jedną z nazw domen z tej listy lub
          cała ścieżka adresu url jest zgodna z jednym z wpisów z tej listy to
          żądanie zostanie zablokowane.
        </p>
        <ul>
          <li>
            Przykładowy wpis w tej liście: <span className="colored-example-element">cdn.mouseflow.com</span>. Jeśli witryna połączy się z usługą zewnętrzną i adres zapytania zawiera nazwę domeny: https://<span className="colored-example-element">cdn.mouseflow.com</span> to zapytania zostanie zablokowane
          </li>
          <li>
            Przykładowy wpis w tej liście: <span className="colored-example-element">rsrc.php/v3/y4/r/-PAXP-deijE.gif</span>. Jeśli witryna połączy się z usługą zewnętrzną i adres zapytania zawiera nazwę domeny: https://static.xx.fbcdn.net/<span className="colored-example-element">rsrc.php/v3/y4/r/-PAXP-deijE.gif</span> to zapytania zostanie zablokowane
          </li>
        </ul>
      </div>
    </span>
  ),
  blacklistedElementsWords_html: (
    <span className="box-content">
      <div className="box-content--div">
        <p className="element-p">
          Konteks ochrony tej aplikacji znajdzie każde słowo z tej czarnej listy, a każde słowo zostanie zastąpione przez „zamiennik” zdefiniowany w sekcji „Ustawienia ochrony .
        </p>
        <ul>
          <li>
            Na przykład, jeśli słowo "pistolet" znajduje się na tej czarnej liście, to jeśli odwiedzisz stronę internetową, słowo „pistolet” zostanie zastąpione.
            <br />
            Przykład przed: "mam <span className="colored-example-element">pistolet</span> w szafie.".
            <br />
            Przykład po: "mam <span className="colored-example-element">########</span> w szafie."
          </li>
          <li>
            Na przykład, jeśli słowo "zakupy" znajduje się na tej czarnej liście, to jeśli odwiedzisz stronę internetową, słowo zakupy zostanie zastąpione.
            <br />
            Przykład przed: "moje <span className="colored-example-element">zakupy</span> są w samochodzie.".
            <br />
            Przykład po: "moje <span className="colored-example-element">######</span> są w samochodzie."
          </li>
        </ul>
      </div>
    </span>
  ),
  blacklistedElementsClass_html: (
    <span className="box-content">
      <div className="box-content--div">
        <p className="element-p">
          Blokowanie tagów drzewa DOM na podstawie jego identifikatora: class.
        </p>
        <ul>
          <li>
            Przykładowy wpis na tej liście: "font-bold". Jeśli odwiedzisz jakąkolwiek stronę internetową wtedy wsyzstkie elementy zawierające atrybut class o wartości 'font-bold' (np: {'<span class="font-bold"> Text </span>'}) zostaną usunięte ze strony internetowej.
          </li>
        </ul>
      </div>
    </span>
  ),
  blacklistedElementsHref_html: (
    <span className="box-content">
      <div className="box-content--div">
        <p className="element-p">
          Blokowanie tagów "A" drzewa DOM na podstawie jego identifikatora: href.
        </p>
        <ul>
          <li>
            Przykładowy wpis na tej liście: "redirect?". Jeśli odwiedzisz jakąkolwiek stronę internetową wtedy wsyzstkie elementy drzewa DOM {'<a>'} zawierające atrybut href o wartości 'redirect?' (np: {'<a href="https://xv345bhFD.com/redirect?client=http://example.com">link</a>'}) zostaną usunięte ze strony internetowej.
          </li>
        </ul>
      </div>
    </span>
  ),
  blacklistedElementsId_html: (
    <span className="box-content">
      <div className="box-content--div">
        <p className="element-p">
          Blokowanie tagów drzewa DOM na podstawie jego identifikatora: id.
        </p>
        <ul>
          <li>
            Przykładowy wpis na tej liście: "extern-logo". Jeśli odwiedzisz jakąkolwiek stronę internetową wtedy wsyzstkie elementy zawierające atrybut id o wartości 'extern-logo' (np: {'<img id="extern-logo"/>'}) zostaną usunięte ze strony internetowej.
          </li>
        </ul>
      </div>
    </span>
  ),
  whitelistedElementsDomains_html: (
    <span className="box-content">
      <div className="box-content--div">
        <p className="element-p">
          Nie rób nic dla wybranych nazw domen.
        </p>
        <ul>
          <li>
            Przykładowy wpis w tej liście: <span className="colored-example-element">google.com</span>. Jeśli odwiedzisz stronę internetową: https://www.<span className="colored-example-element">google.com</span> nie są wykonywane żadne procesy ani nie jesteś chroniony
          </li>
          <li>
            Przykładowy wpis w tej liście: <span className="colored-example-element">npmjs.com</span>. Jeśli odwiedzisz stronę internetową: https://www.<span className="colored-example-element">npmjs.com</span>/package/gulp-babel, nie są wykonywane żadne procesy ani nie jesteś chroniony
          </li>
        </ul>
      </div>
    </span>
  ),
  blockedElements_html: (
    <span className="box-content">
      <div className="box-content--div">
        <p className="element-p">
          Content Blocker pozwala na zablokowanie treści bieżącej strony internetowej. Aby zablokować dany element drzewa DOM, włącz usługę Content Blocker z okna "Popup" tego rozszerzenia potem wybierz element ze strony internetowej. Wszystkie zablokowane elementy mogą zostać skasowane z listy poniżej.
        </p>
      </div>
    </span>
  ),
  example: 'Przykłady',
  /**
   * Images download 
   */
  imagesPopupTitle: 'Znaleziono zdjęcia',
  imagesNoData: 'Brak poprawnych zdjęć',
  imagesNoDataFavourites: 'Brak zapisanych zdjęć',
  imagesLoadingTabs: 'Ładowanie aktywnych okienek...',
  current_tabs_title: 'Aktualne okna',
  filter: 'Filtruj',
  filterLastRequests: 'Filtruj ostatnie 50 zapytań',
  filter_all: 'Wszystkie',
  itemsPerSite: 'Co stronę',
  itemsPerSiteSuffix: 'zdjęć',
  page: 'Strona',
  of: 'z',
  images: 'zdjęć',
  current_favourites_images: 'Tymczasem zapisane zdjęcia',
  open_in_new_tab: 'Otwórz w nowym okientku',
  download: 'Pobierz',
  downloadSmall: 'pobierz',
  delete_all: 'Usuń wszysko',
  notLoggedInImagesFavouritesAdd: 'Tylko zalogowani użytkownicy mogą dodawać zdjęcia do listy ulubionych',
  notLoggedInImagesFavouritesManage: 'Tylko zalogowani użytkownicy mogą zarządzać listą ulubionych',
  tabsNoData: 'Brak poprawnych okienek',
  imagesLoadingData: 'Ładowanie zdjęć...',
  no_data_available: 'Brak danych',
  /*
   * List actions 
   */
  infoItemAdded: 'Wpis został dodany do listy',
  infoItemRemoved: 'Wpis został usunięty z listy',
  infoArrayIs0: 'Lista jest pusta, więc nie można usunąć żadnego elementu',
  infoIncorrectValue: 'Wartość jest nieprawidłowa',
  infoItemInList: 'Wpis już istnieje na liście',
  country: 'Kraj',
  countriesNotFoundText: 'Przepraszam, nie znalazłem takiego kraju',
  dropText: 'Upuść tutaj',
  error: 'Błąd',
  searchPlaceholder: 'Szukaj...',
  search: 'Szukaj',
  list: 'Lista',
  addPlaceholder: 'Wartość...',
  addNewEntryTitle: 'Dodaj nowy wpis',
  no_data_list: 'Brak wpisów',
  no_data_list_search: 'Brak wyników szukania',
  loading: 'Ładowanie...',
  home_security_1: 'Blokowanie niebezpiecznych ciasteczek',
  home_security_2: 'Blokowanie niebezpiecznych zapytan',
  home_security_3: 'Blokowanie niebezpiecznych usług śledczych',
  home_security_4: 'Blokowanie niebezpiecznych stron pornograficznych',
  home_security_5: 'Blokowanie niebezpiecznych słow',
  home_security_6: 'Blokowanie niebezpiecznych zawartości stron internetowych',
  upload: 'Przeciągnij i upuść plik json Protector Ninja tutaj...',
  export: 'Eksport',
  exportAll: 'globalnych list i ustawien',
  dangerCount: 'Chronię cię!',
  dangerCountPrefix: 'Osiągnięto maksymalna liczbę niebezpiecznych elementów, która jest obecnie',
  dangerUrlPrefix: 'Adres strony albo część adresu strony internetowej jest niebezpieczny i znajduje się w jednej z czarnej listy',
  domain: 'Nazwa domena bez www. Na przykład: react-divcreator.cba.pl',
  tag: 'Nazwa tagu. Na przykład: div',
  languages: 'Języki'
};

export default PL;
