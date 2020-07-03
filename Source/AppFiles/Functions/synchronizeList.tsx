import getItem from "./storage/getItem";

const synchronizeList = () => {
    return new Promise( resolve => {
        Promise.all([
            'blacklistedElementsDomians',
            'blacklistedElementsUrlsIncludes',
            'blacklistedElementsTrackers',
            'blacklistedElementsCookies',
            'blacklistedElementsClass',
            'blacklistedElementsHref',
            'blacklistedElementsId',
            'blacklistedElementsWords',
            'whitelistedElementsDomains',
            'blacklistedElementsIframes',
            'blacklistedElementsIframesSources',
            'blacklistedElementsIframesNames'
        ].map( async name => {
            await getItem(name, false);
        }))
        .then( () => {
            return resolve(true);
        })
        .catch( () => {
            return resolve(true);
        })
    });
}

export default synchronizeList;