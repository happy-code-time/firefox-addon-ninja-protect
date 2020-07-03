/**
 * @param {string} name 
 */
const getItemNoSync=(name: string) => {
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

export default getItemNoSync;