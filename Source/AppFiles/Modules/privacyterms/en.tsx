import * as React from 'react';

const getPrivacyTerms_en=() => {
    return (
        <div className="text">
            <h1 className="ff-title">
                LocalStorage
            </h1>
            <p>
                This addon has locally saved data:
            </p>
            <ul>
                <li>
                    Blacklist domains
                </li>
                <li>
                    Blacklist cookies
                </li>
                <li>
                    Blacklist urls
                </li>
                <li>
                    Blacklist urls includes
                </li>
                <li>
                    Blacklist iframes
                </li>
                <li>
                    Whitelist domains
                </li>
                <li>
                    Block HTML by Class, Href and Id
                </li>
                <li>
                    Settings of this extension with the keys: securityIsOn, makeSearchInSourceCode, mutationCheck, scanTextOnWebsite, deleteCookies, ignoreTagScript, ignoreTagLink, ignoreTagMeta, ignoreTagStyle, limitlessScan, statistic, extendspornlist, extendsblacklist
                </li>
            </ul>
            <p>
                All of the above lists are stored locally in the browsers - localStorage - and owned by the browser.
            
                If you are logged in - all of the above lists are stored remotly.
                If your are logged in an you are adding or deleting an list/ list entry, then the same action are made on the remote service/ backend.
            </p>
            <p>
                All local stored data (localStorage) can be removed by clearing the "Cookies and Site Data".
            </p>
        </div>
    );
};

export default getPrivacyTerms_en;