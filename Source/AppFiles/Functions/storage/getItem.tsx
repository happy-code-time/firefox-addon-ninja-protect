/**
 * @param {string} name 
 */
const getItem=(name: string, displayMessage: boolean = true) => {
    // @ts-ignore
    return browser.runtime.sendMessage({
        action: 'get-list',
        list: name
    })
    .then( localStorageResponse => {
        return (null == localStorageResponse ? [] : localStorageResponse);
    })
    .catch( error => {
        return [];
    });
};

export default getItem;