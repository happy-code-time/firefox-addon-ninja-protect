const notCleanedHtmlBlocker = ['a', 'b', 'base', 'bdi', 'bdo', 'blockquote', 'button', 'caption', 'cite', 'code', 'col', 'colgroup', 'style', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figure', 'form', 'footer', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'hgroup', 'i', 'iframe', 'img', 'input', 'ins', 'hidden', 'kbd', 'link', 'label', 'legend', 'li', 'meta', 'map', 'mark', 'menuitem', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'p', 'pre', 's', 'select', 'small', 'source', 'span', 'strong', 'sub', 'tbody', 'td', 'title', 'textarea', 'tfoot', 'th', 'tr', 'track', 'u', 'ul', 'var', 'script', 'style', 'ytd-badge-supported-renderer', 'dom-repeat', 'ytd-thumbnail', 'yt-formatted-string', 'dom-module', 'template', 'yt-img-shadow', 'yt-icon', 'div'];
let countForHtmlBlocker = 0;
var allowedTagHtmlBlocker = [];
notCleanedHtmlBlocker.map(tag => {
  if (!allowedTagHtmlBlocker.includes(tag)) {
    allowedTagHtmlBlocker.push(tag);
  }
});

// #####################################################################################################################################################
/**
 * Main blocker script to block html elements of website
 */
// #####################################################################################################################################################
var blockerProtwectionPlusHasBeenActived = false;

class Blocker {
  constructor() {
    this.blockedElements = [];
    this.elementsBorderValue = "";
    this.elementsBackgroundValue = "";
    this.elementsColorValue = "";
    this.showLogging = false;
  }

  /**
   * initialize main function to block html element
   */
  async init() {
    try {
      blockerProtwectionPlusHasBeenActived = true;
      this.generatePicker();
      this.attachCursorsLinesToTheDocument();
      this.createCssStyleProperties();
      this.addKeyDownEventToTheDocument();
    } catch (error) {
      this.log(error, 'init')
    }
  }

  log(error = {}, msg = '') {
    if (this.showLogging) {
      console.error(`${error} | ${msg}`)
    }
  }

  /**
   * Some website have body as 1 child and the direct
   * childs of the body tag are not accessable
   * - no we fixing it
   */
  setBodyStyle() {
    try {
      const self = this;

      if (document.body) {

        const bodyStyleMapping = {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          minHeight: '100vh',
          height: 'auto',
          overflow: 'auto',
          boxSizing: 'border-box',
          padding: '20px',
          border: '20px solid dodgerblue',
          zIndex: 99,
          display: 'flex',
          flexDirection: 'column'
        };
        const styleKeys = Object.keys(bodyStyleMapping);

        for (let x = 0; x <= styleKeys.length - 1; x++) {
          document.body.style[styleKeys[x]] = bodyStyleMapping[styleKeys[x]];
        }
      }
    } catch (error) {
      this.log(error, 'setBodyStyle')
    }
  }

  /**
   * Generate pickers functionality
   */
  generatePicker() {
    const self = this;
    const nodes = document.all;
    this.setBodyStyle();

    try {

      for (let a = 0; a <= nodes.length - 1; a++) {
        nodes[a].addEventListener('click', self.grabItemsDataAndStoreIt);
        nodes[a].addEventListener('dblclick', (event) => {
          event.stopImmediatePropagation();
          event.stopPropagation();
          return false;
        });
      }

      const aElements = document.querySelectorAll('a');

      for (let x = 0; x <= aElements.length - 1; x++) {
        let element = aElements[x];

        if (element.hasAttribute('href')) {
          element.setAttribute('origin-href', element.getAttribute('href'));
          element.removeAttribute('href');
          element.setAttribute('href', 'javascript:void(0)');
        }
        if (element.hasAttribute('target')) {
          element.setAttribute('origin-target', element.getAttribute('target'));
          element.removeAttribute('target');
        }
      }
    } catch (error) {
      this.log(error, 'generatePicker')
    }
  }

  attachCursorsLinesToTheDocument() {
    if (null === document.getElementById('ninja-cursor-lines-x')) {
      const divX = document.createElement('DIV');
      divX.id = 'ninja-cursor-lines-x';
      const divY = document.createElement('DIV');
      divY.id = 'ninja-cursor-lines-y';

      document.body.appendChild(divX);
      document.body.appendChild(divY);

      document.addEventListener('mousemove', (event) => {

        if (blockerProtwectionPlusHasBeenActived) {
          if (event.x && event.y) {
            divX.style.left = (event.x - 2) + 'px';
            divY.style.top = (event.y - 2) + 'px';
          }
        }
      });
    }
  }

  /**
   * disable event propagation ...
   */
  returnNull(e) {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    return null;
  }
  /**
   * if the user click ESC then turn the blocker off
   */
  addKeyDownEventToTheDocument() {
    const self = this;
    try {
      document.addEventListener("keydown", self.keyDownListener);
    } catch (error) { }
  }
  /**
   * handle the key down event
   */
  keyDownListener(event) {
    try {
      if ("Escape" === event.key && 27 === event.keyCode) {
        blockerProtwectionPlusHasBeenActived = false;

        const divX = document.getElementById('ninja-cursor-lines-x');
        const divY = document.getElementById('ninja-cursor-lines-y');

        if (divX) {
          divX.parentNode.removeChild(divX);
        }
        if (divY) {
          divY.parentNode.removeChild(divY);
        }

        /**
         * reset blockers status
         */
        browser.runtime.sendMessage({ action: "block-item-off" }).catch(error => { });
        /**
         * show message on the screen for the user
         */
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        return null;
      }
    } catch (error) { }
  }
  /**
   * If the user make a click on the actual document
   * then the actual element will be blocked
   * the unique information about the element
   * will be stored in the background storage area
   * the domain will be stored in an array
   * an the element information will be stored in an array
   * as object
   * @param {object} event
   */
  async grabItemsDataAndStoreIt(event) {
    event.stopImmediatePropagation();
    event.stopPropagation();
    const attributesToIgnore = ['origin-href', 'href', 'target', 'origin-target'];

    try {
      let itemTarget = event.target;
      let targetId = (event.target.originalTarget && event.target.originalTarget.id) ? event.target.originalTarget.id : '';

      if (targetId) {
        if ('ninja-cursor-lines-x' == targetId || 'ninja-cursor-lines-y' == targetId || 'ninja-cursor-lines-dot' == targetId) {
          return null;
        }
      }

      if ('HTML' !== itemTarget.nodeName && 'BODY' !== itemTarget.nodeName && 'MENUITEM' !== itemTarget.nodeName) {
        let target = event.target;

        let html = target.innerHTML ? target.innerHTML : '::html::';
        let text = target.innerText ? target.innerText : '::text::';
        let id = target.id ? target.id : '::id::';
        let childElementCount = target.childElementCount ? target.childElementCount : '::childElementCount::';
        let childNodesLength = target.childNodes ? target.childNodes.length : '::childNodes.length::';
        let className = target.className ? target.className : '::className::';
        let localName = target.localName ? target.localName : '::localName::';
        let attributes = '::attributes::';

        if (target.attributes.length) {
          for (let x = 0; x <= target.attributes.length - 1; x++) {
            const attrName = target.attributes[x].name;

            if (!attributesToIgnore.includes(attrName)) {
              attributes += `${attrName}::${target.attributes[x].value}::`;
            }
          }
        }
        /**##
         * add item as object to the blocked elements
         */
        let randomId = Math.random();
        randomId = randomId.toString();
        randomId = randomId.replace(".", "");

        let valueToStore = {
          domain: window.location.hostname,
          uniqueHtml: html,
          uniqueText: text,
          tag: localName.toLowerCase(),
          targetId: id,
          attributes,
          unique: `${id}${childElementCount}${childNodesLength}${className}${localName}${attributes}`,
          id: `${randomId}${randomId}${randomId}${randomId}`
        };
        /**
         * remove from viewport
         */
        itemTarget.style.display = "none";
        itemTarget.remove();

        browser.runtime
          .sendMessage({
            action: 'block-element-from-webpage',
            value: valueToStore,
            host: window.location.hostname
          }).catch(error => {
            // console.info(error);
          });
      }
    } catch (error) {
      //console.info(error);
    }
  }
  /**
   * inject css properties
   * for the blocker
   */
  createCssStyleProperties() {
    try {
      if (null == document.getElementById("protectors-style-injection")) {

        let css = document.createElement("LINK");
        css.setAttribute('rel', 'stylesheet');
        css.setAttribute('href', browser.extension.getURL("Distribution/Static/css/blocker.css"))
        css.type = "text/css";
        document.body.classList.add("should-make-the-cursor-crosshair");

        if (document.getElementsByTagName("head")[0]) {
          document.getElementsByTagName("head")[0].appendChild(css);
        }
      }
    } catch (error) { }
  }
  /**
   * remove blocker
   */
  destroy() {
    try {
      document.removeEventListener("click", this.grabItemsDataAndStoreIt);
      document.removeEventListener("keydown", this.keyDownListener);

      if (document.getElementById("protectors-style-injection")) {
        document.getElementById("protectors-style-injection").remove();
      }
      if (document.getElementById("ninja-block-html-element-is-active")) {
        document
          .getElementById("ninja-block-html-element-is-active")
          .remove();
      }
    } catch (error) { }
  }
  /**
   * destroy blocker before creation
   * to brevent duplications
   */
  initialiseProtectorsBlockerOption(init) {
    try {
      this.destroy();

      if (init) {
        this.init();
      }

    } catch (error) {
      //console.info(error);
    }
  }
}

var globalBlockedDangerCount = 0;
var htmlBlockerInterval;
var mainDomBlockerInterval;

var checkWebsiteToBlock = function (maximumOfDangerWords = 100) {
  if (globalBlockedDangerCount >= maximumOfDangerWords) {
    window.location.href = `${browser.extension.getURL('/Distribution/DangerCount/index.html')}`;
  }
};

/**
 * Reset status for tracking etc....
 * stored temporary in the background script
 */
// @ts-ignore
browser.runtime.sendMessage({ action: 'reset-data' });

// /**
//  * If user leaves the tab
//  */
// window.onbeforeunload = () => {
//   // @ts-ignore
//   browser.runtime.sendMessage({ action: 'reset-data' });
// };

class Security {
  constructor() {
    this.userData = undefined;
    this.urlLocation = window.location;
  }

  /**
   * Get stored elements from the background script
   */
  getBackgroundstorage() {
    // @ts-ignore
    return browser.runtime
      .sendMessage({
        action: 'get-user-settings-dashboard',
      })
      .then(response => response)
      .catch(error => { });
  }

  /**
   * Main initialisation function
   */
  async initProcess() {
    this.userData = await this.getBackgroundstorage();

    if (this.userData && this.userData.securityIsOn) {
      await this.checkDomainBlacklisted();
      await this.checkDomainWhitelisted();

      if (this.userData.securityIsOn) {
        this.setOnClickEventListenerToTheDom();
        await this.checkBlacklistedWords();
        await this.initialiseMutationCheck();
        this.setIntervals();
      }
    }
  }

  async setIntervals() {
    const self = this;
    clearInterval(mainDomBlockerInterval);
    clearInterval(htmlBlockerInterval);
    
    await self.domBlocker360();
    await self.removeAllIframes();
    await self.removeAllIframesBasedOnSource();

    mainDomBlockerInterval = setInterval(async () => {
      if (true == this.userData.securityIsOn) {
        await self.domBlocker360();
        await self.removeAllIframes();
        await self.removeAllIframesBasedOnSource();
      }
    }, 5000);

    this.checkHTMLItemsToBlock();
    
    htmlBlockerInterval = setInterval(async () => {
      if (true == this.userData.securityIsOn) {
        await this.checkHTMLItemsToBlock();
      }
    }, 10000);
  }

  async removeAllIframesBasedOnSource() {
    try {
      /**
       * Check if source of the iframe 
       * is on the blacklist Iframes sources
       */
      const allIframesNow = document.querySelectorAll("IFRAME");

      for (let x = 0; x <= allIframesNow.length - 1; x++) {
        const node = allIframesNow[x];
        const { src } = node;

        if (src) {
          const isBlacklisted = await browser.runtime.sendMessage({ action: 'check-iframe', src }).then(r => r).catch(r => false);

          if (isBlacklisted) {
            // @ts-ignore
            await browser.runtime.sendMessage({
              action: 'add-to-statistic-new-blocked-iframe',
              value: `Classname: ${allIframesNow[x].classname ? allIframesNow[x].classname : ''}\nId: ${allIframesNow[x].id ? allIframesNow[x].id : ''}\nName: ${allIframesNow[x].name ? allIframesNow[x].name : ''}\nSource: ${allIframesNow[x].src ? allIframesNow[x].src : ''}`
            })
              .then(r => r).catch(r => false);
            allIframesNow[x].remove();
          }
        }
      }
    }
    catch (e) {
      // console.log(e);
    }
  }
  /**
   * Get only domain name
   * @param {string} url
   */
  getOnlyDomainName(url) {
    if (url) {
      return url.split('/')[2];
    }
    return '';
  }

  async removeAllIframesForwards() {
    const allIframesNow = document.querySelectorAll("IFRAME");

    for (let x = 0; x <= allIframesNow.length - 1; x++) {
      // @ts-ignore
      await browser.runtime.sendMessage({
        action: 'add-to-statistic-new-blocked-iframe',
        value: `Classname: ${allIframesNow[x].classname ? allIframesNow[x].classname : ''}\nId: ${allIframesNow[x].id ? allIframesNow[x].id : ''}\nName: ${allIframesNow[x].name ? allIframesNow[x].name : ''}\nSource: ${allIframesNow[x].src ? allIframesNow[x].src : ''}`
      })
        .then(r => r).catch(r => false);
      allIframesNow[x].remove();
    }
  }

  /**
   * Remove all iframes except iframes
   * from global whitelsited
   */
  async removeAllIframes(passedIframe = null) {
    // @ts-ignore
    const isHostBlacklisted = await browser.runtime.sendMessage({ action: 'get-iframe-status', href: window.location.href }).then(r => r).catch(r => false);
    const { blacklisted } = isHostBlacklisted;

    /**
     * Regular check
     */
    const allIframesNow = document.querySelectorAll("IFRAME");

    if (null !== passedIframe) {
      for (let x = 0; x <= allIframesNow.length - 1; x++) {
        const node = allIframesNow[x];
        const { src = '', id = '', className = '', name = '' } = node;

        if (passedIframe.src == src && passedIframe.id == id && passedIframe.className == className && passedIframe.name == name) {
          // @ts-ignore
          await browser.runtime.sendMessage({
            action: 'add-to-statistic-new-blocked-iframe',
            value: `Classname: ${passedIframe.classname ? passedIframe.classname : ''}\nId: ${passedIframe.id ? passedIframe.id : ''}\nName: ${passedIframe.name ? passedIframe.name : ''}\nSource: ${passedIframe.src ? passedIframe.src : ''}`
          })
            .then(r => r).catch(r => false);
          allIframesNow[x].remove();
        }
      }
    }

    else {
      /**
       * Check blacklist
       */
      if (blacklisted) {
        this.removeAllIframesForwards();
      }
    }
  }

  /**
   * Check if the website using a react-router
   * and if the url changed then reload the protector functionalitty
   */
  setOnClickEventListenerToTheDom() {
    document.removeEventListener('click', this.checkLocation);
    document.addEventListener('click', this.checkLocation);
  }

  /**
   * Check blacklist
   */
  async checkDomainBlacklisted() {
    // @ts-ignore
    return await browser.runtime
      .sendMessage({
        action: 'check-is-domain-blacklisted',
        href: window.location.href,
      })
      .then(response => {
        const { foundMatch, reason } = response;

        if (foundMatch) {

          browser.runtime.sendMessage({
            action: 'add-to-statistic-new-blocked-domain',
          });

          window.location.href = `${browser.extension.getURL('/Distribution/DangerUrl/index.html')}?data=${reason}`;
        }

        return foundMatch;
      })
      .catch(error => {
        // console.log(error);
        return error;
      });
  }

  /**
   * Check blacklist
   */
  checkDomainWhitelisted() {
    // @ts-ignore
    return browser.runtime
      .sendMessage({
        action: 'check-is-domain-whitelisted',
        href: window.location.href,
      })
      .then(response => {
        if (true == response) {
          this.userData.securityIsOn = false;
        }
      })
      .catch(() => {
        return false;
      });
  }

  /**
   * Check html items fro danger words
   */
  async checkBlacklistedWords() {
    const defaultCheckItems = [
      'a',
      'audio',
      'b',
      'base',
      'bdi',
      'bdo',
      'blockquote',
      'button',
      'caption',
      'cite',
      'code',
      'col',
      'colgroup',
      'data',
      'datalist',
      'dd',
      'del',
      'details',
      'dfn',
      'dialog',
      'dl',
      'dt',
      'em',
      'embed',
      'fieldset',
      'figure',
      'form',
      'footer',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'head',
      'hgroup',
      'i',
      'iframe',
      'img',
      'input',
      'ins',
      'hidden',
      'kbd',
      'label',
      'legend',
      'li',
      'meta',
      'map',
      'mark',
      'menuitem',
      'nav',
      'object',
      'ol',
      'optgroup',
      'option',
      'p',
      'pre',
      's',
      'select',
      'small',
      'source',
      'span',
      'strong',
      'sub',
      'svg',
      'tbody',
      'td',
      'title',
      'textarea',
      'tfoot',
      'th',
      'tr',
      'track',
      'u',
      'ul',
      'var',
      'video'
    ];

    /**
     * Grab all custom tags
     */
    if (document && 0 !== document.all.length) {
      for (let x = 0; x <= document.all.length - 1; x++) {
        if (document.all[x] && document.all[x].tagName) {
          const tagNameFromDocumentAll = document.all[x].tagName.toLowerCase();

          if (!defaultCheckItems.includes(tagNameFromDocumentAll)) {
            defaultCheckItems.push(tagNameFromDocumentAll);
          }
        }
      }
    }

    if (undefined !== this.userData && false == this.userData.ignoreTagStyle) {
      defaultCheckItems.push('style');
    }

    if (undefined !== this.userData && false == this.userData.ignoreTagScript) {
      defaultCheckItems.push('script');
      defaultCheckItems.push('noscript');
    }

    if (undefined !== this.userData && false == this.userData.ignoreTagLink) {
      defaultCheckItems.push('link');
    }

    if (undefined !== this.userData && false == this.userData.ignoreTagMeta) {
      defaultCheckItems.push('meta');
    }

    return await this.filter(defaultCheckItems);
  }

  /**
   * Remove dome element
   * @param {HTMLElement} domElement 
   */
  removeElement(domElement) {
    try {
      domElement.style.display = 'none';
      domElement.parentElement.removeChild(domElement);
    } catch (error) { }
  }

  /**
   * Which UI elements should be removed from the UI
   */
  checkHTMLItemsToBlock() {
    const self = this;
    const attributesToIgnore = ['origin-href', 'href', 'target', 'origin-target'];

    try {
      if (self.userData.blockedElementsDomains && -1 !== self.userData.blockedElementsDomains.indexOf(window.location.hostname) && self.userData.blockedElements.length) {
        /**
         * store all tags that have to be blocked
         */
        allowedTagHtmlBlocker.map(async tag => {
          const elements = document.querySelectorAll(tag);

          if (elements.length) {
            for (let x = 0; x <= elements.length - 1; x++) {
              let target = elements[x];

              let html = target.innerHTML ? target.innerHTML : '::html::';
              let text = target.innerText ? target.innerText : '::text::';
              let id = target.id ? target.id : '::id::';
              let childElementCount = target.childElementCount ? target.childElementCount : '::childElementCount::';
              let childNodesLength = target.childNodes ? target.childNodes.length : '::childNodes.length::';
              let className = target.className ? target.className : '::className::';
              let localName = target.localName ? target.localName : '::localName::';
              let attributes = '::attributes::';

              if (target.attributes.length) {
                for (let x = 0; x <= target.attributes.length - 1; x++) {
                  if (target.attributes[x].name && target.attributes[x].value) {
                    const attrName = target.attributes[x].name;

                    if (!attributesToIgnore.includes(attrName)) {
                      attributes += `${attrName}::${target.attributes[x].value}::`;
                    }
                  }
                }
              }
              const targetUnique = `${id}${childElementCount}${childNodesLength}${className}${localName}${attributes}`;

              // send to backgrtound storage to make an check
              browser.runtime.sendMessage({
                action: 'check-html-elements-to-block',
                targetHtml: html,
                targetText: text,
                targetTag: localName,
                id,
                attributes,
                targetUnique
              }).then(response => {
                if (response.isDanger) {
                  self.removeElement(target);
                  globalBlockedDangerCount += 1;

                  browser.runtime.sendMessage({
                    action: 'add-to-statistic-new-blocked-id',
                    value: targetUnique
                  });

                  if (!this.userData.limitlessScan) {
                    checkWebsiteToBlock(this.userData.maximumOfDangerWords);
                  }
                }
              }).catch(error => {

              });
            }
          }
        });
      }
    } catch (error) {

    }
  }

  /**
   * Check location, if the stored href are changed then
   * reload the security context of this extension
   * This feature needed for websites based on
   * react framework
   */
  checkLocation() {
    const self = this;
    let count = 5;
    let shouldCheck = false;
    clearInterval(x);

    var x = setInterval(() => {
      if (self.urlLocation.href && self.urlLocation.href != window.location.href && count > 0) {
        self.urlLocation.href = window.location.href;
        shouldCheck = true;
        clearInterval(x);
      }

      if (self.urlLocation.hash && self.urlLocation.hash != window.location.hash && count > 0) {
        self.urlLocation.hash = window.location.hash;
        shouldCheck = true;
        clearInterval(x);
      }

      if (shouldCheck) {
        try {
          if (this.userData.securityIsOn) {
            // @ts-ignore
            browser.runtime
              .sendMessage({
                action: 'reset-data',
              })
              .then(() => {
                this.initProcess();
              })
              .catch(error => { });
          }
        } catch (error) { }
      }

      if (!count) {
        return clearInterval(x);
      }
      count--;
    }, 100);
  }

  /**
   * Get all listed class and id`s
   */
  async domBlocker360() {
    try {
      // @ts-ignore
      const lists = await browser.runtime.sendMessage({ action: 'get-class-and-id' }).then(entries => entries).catch(error => undefined);
      let domainName = window.location.href.split('/')[2];
      domainName = domainName.replace('www.', '');

      const blockNode = node => {
        node.removeAttribute('class');
        node.removeAttribute('id');
        node.removeAttribute('style');
        node.style.display = 'none';
        node.parentElement.removeChild(node);
        node.remove();
      };

      if (null !== lists && undefined !== lists) {
        const { blacklistedId, blacklistedClass, blacklistedHref } = lists;

        /**
         * Block by: id
         */
        if (blacklistedId && blacklistedId.length) {
          for (let x = 0; x <= blacklistedId.length - 1; x++) {
            const items = blacklistedId[x].split('::');

            if (items && items.length === 3 && items[0] === domainName && document.body) {
              const id = items[2];
              const singleNode = document.getElementById(id);

              if (singleNode && singleNode.tagName && singleNode.tagName.toLowerCase() == items[1].toLowerCase()) {

                // @ts-ignore
                browser.runtime.sendMessage({
                  action: 'add-to-statistic-new-blocked-id',
                  value: blacklistedId[x]
                });

                blockNode(singleNode);
                globalBlockedDangerCount++;

                if (!this.userData.limitlessScan) {
                  checkWebsiteToBlock(this.userData.maximumOfDangerWords);
                }
              }
            }
          }
        }

        /**
         * Block by: class
         */
        if (blacklistedClass && blacklistedClass.length) {
          for (let x = 0; x <= blacklistedClass.length - 1; x++) {

            const items = blacklistedClass[x].split('::');

            if (items && items.length == 3 && items[0] === domainName) {
              const nodes = document.querySelectorAll(`.${items[2]}`);

              if (nodes && nodes.length) {
                for (let y = 0; y <= blacklistedClass.length - 1; y++) {

                  if (nodes[y].tagName && nodes[y].tagName.toLowerCase() === items[1] && document.body) {

                    // @ts-ignore
                    browser.runtime.sendMessage({
                      action: 'add-to-statistic-new-blocked-class',
                      value: blacklistedClass[x]
                    });

                    blockNode(nodes[y]);
                    globalBlockedDangerCount++;

                    if (!this.userData.limitlessScan) {
                      checkWebsiteToBlock(this.userData.maximumOfDangerWords);
                    }
                  }
                }
              }
            }
          }
        }

        /**
         * Block by: href
         */
        if (blacklistedHref && blacklistedHref.length) {
          for (let x = 0; x <= blacklistedHref.length - 1; x++) {

            const items = blacklistedHref[x].split('::');

            if (items && items.length == 3 && items[0] === domainName) {
              const nodes = document.querySelectorAll('A');

              if (nodes && nodes.length) {
                for (let y = 0; y <= nodes.length - 1; y++) {

                  if (nodes[y] && nodes[y].hasAttribute('href') && -1 !== nodes[y].getAttribute('href').indexOf(items[2]) && document.body) {

                    // @ts-ignore
                    browser.runtime.sendMessage({
                      action: 'add-to-statistic-new-blocked-href',
                      value: blacklistedHref[x]
                    });

                    blockNode(nodes[y]);
                    globalBlockedDangerCount++;

                    if (!this.userData.limitlessScan) {
                      checkWebsiteToBlock(this.userData.maximumOfDangerWords);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    catch (e) {
      // console.log(e);
    }
  }

  /**
   * Mutations observer
   */
  async initialiseMutationCheck() {
    const self = this;
    let OBSERVER;

    if (!this.userData.mutationCheck) {
      return null;
    }

    const mainMutationObserver = async () => {
      if (this.userData.mutationCheck) {
        OBSERVER = new MutationObserver(async mutations => {
          if (self.userData.scanTextOnWebsite) {
            if (mutations.length && self.userData.blacklistedElementsWords && self.userData.blacklistedElementsWords.length) {
              let found = [];

              for (let xavier = 0; xavier <= mutations.length - 1; xavier++) {
                let mutationsTagName = mutations[xavier].target.tagName ? mutations[xavier].target.tagName.toLowerCase() : null;

                if ('video' !== mutationsTagName) {
                  found.push(mutationsTagName);
                }
              }

              if (found) {
                (async () => {
                  await self.filter(found);
                })();
              }

              await self.domBlocker360();
              await self.removeAllIframes();
              await this.checkHTMLItemsToBlock();
            }
          }
        });

        OBSERVER.observe(document.documentElement, {
          attributes: true,
          subtree: true,
          childList: true,
          characterData: true,
        });
      }
    };

    mainMutationObserver();
    return true;
  }

  /**
   * Main filter function
   */
  async filter(foundMutationTags = []) {
    const self = this;

    if (undefined !== this.userData && false !== this.userData.ignoreTagStyle) {
      foundMutationTags = foundMutationTags.filter(tagname => tagname !== 'style');
    }

    if (undefined !== this.userData && false == this.userData.ignoreTagScript) {
      foundMutationTags = foundMutationTags.filter(tagname => tagname !== 'script');
      foundMutationTags = foundMutationTags.filter(tagname => tagname !== 'noscript');
    }

    if (undefined !== this.userData && false == this.userData.ignoreTagLink) {
      foundMutationTags = foundMutationTags.filter(tagname => tagname !== 'link');
    }

    if (undefined !== this.userData && false == this.userData.ignoreTagMeta) {
      foundMutationTags = foundMutationTags.filter(tagname => tagname !== 'meta');
    }

    const makeSearchInSourceCode = this.userData.makeSearchInSourceCode;

    if (self.userData.blacklistedElementsWords.length) {
      for (let x = 0; x <= foundMutationTags.length - 1; x++) {

        const nodes = document.querySelectorAll(foundMutationTags[x]);

        if (nodes && nodes.length) {
          for (let xv = 0; xv <= nodes.length - 1; xv++) {

            // @ts-ignore
            await browser.runtime
              .sendMessage({
                action: 'check-html-danger-word',
                text: makeSearchInSourceCode ? nodes[xv].innerHTML : nodes[xv].innerText,
              })
              .then(response => {
                if (response) {
                  const { danger, newtext } = response;

                  if (true == danger) {

                    if (makeSearchInSourceCode) {
                      nodes[xv].innerHTML = newtext;
                    } else {
                      nodes[xv].innerText = newtext;
                    }

                    globalBlockedDangerCount++;

                    if (!this.userData.limitlessScan) {
                      checkWebsiteToBlock(this.userData.maximumOfDangerWords);
                    }
                  }
                }
              })
              .catch((e) => {
                // console.log(e);
              });
          }
        }
      }
    }
  }
}

/**
 * Wait for "document"
 */
var timeouter;

const checkElementsToStart = () => {
  if (window.location == '' || document == undefined || document.body == undefined) {
    clearTimeout(timeouter);

    return (timeouter = setTimeout(() => {
      checkElementsToStart();
    }, 10));
  }

  clearTimeout(timeouter);
  new Security().initProcess();
};

checkElementsToStart();

const getIframes = () => {
  const iframes = document.querySelectorAll("IFRAME") ? document.querySelectorAll("IFRAME") : [];
  const data = [];

  for (let x = 0; x <= iframes.length - 1; x++) {
    const { src, id, className, name } = iframes[x];
    data.push({ src, id, className, name });
  }

  return data;
};

// @ts-ignore
browser.runtime.onMessage.addListener(request => {
  const security = new Security();

  switch (request.action) {
    /**
     * blocker is acttivated
     */
    case 'block-item-on': {
      const blocker = new Blocker();
      blocker.initialiseProtectorsBlockerOption(true);
      break;
    }
    /**
     * blocker is deactivated
     */
    case 'block-item-off': {
      const blocker = new Blocker();
      blocker.initialiseProtectorsBlockerOption(false);
      window.location.reload();
      break;
    }
    case 'check-addons-availablitity': {
      return Promise.resolve(true);
      break;
    }
    case 'reload-target': {
      window.location.reload();
      return Promise.resolve(true);
      break;
    }
    case 'get-document-width': {
      return Promise.resolve({
        documentWidth: document.documentElement.getBoundingClientRect().width,
      });
      break;
    }
    case "remove-iframe": {
      security.removeAllIframes(request.iframe);
      const data = getIframes();
      return Promise.resolve(data);
    }
    case "remove-all-iframes": {
      security.removeAllIframesForwards();
      const data = getIframes();
      return Promise.resolve(data);
    }
    case 'get-all-iframes': {
      const data = getIframes();
      return Promise.resolve(data);
      break;
    }
    default: {
      break;
    }
  }
  return true;
});