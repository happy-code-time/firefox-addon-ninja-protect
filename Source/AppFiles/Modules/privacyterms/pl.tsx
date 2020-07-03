import * as React from 'react';

const getPrivacyTerms_pl=() => {
    return (
        <div className="text">
            <h1 className="ff-title">
                LocalStorage
            </h1>
            <p>
                Ten dodatek zapisujhe dane lokalnie:
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
                    Ustawienia tego rozszerzenia z nazwami kluczy: securityIsOn, makeSearchInSourceCode, mutationCheck, scanTextOnWebsite, deleteCookies, ignoreTagScript, ignoreTagLink, ignoreTagMeta, ignoreTagStyle, limitlessScan, statistic, extendspornlist, extendsblacklist
                </li>
            </ul>
            <p>
                Wszystkie powyższe listy są rozpoznawane lokalnie w przeglądarce - localStorage.
                Wszystkie nowe lub kasowane elementy z tych list są przechowywane na zdalnym serwerze.
                Te dane są synchronizowane podczas odwiedzania stron list, dodawanie lub kasowanie elementów do jednej z list.
                Wtedy gdy element zostanie skasowany, nie ma możliwości jego odzyskania. 
            </p>
            <p>
                Te zapisane lokalnie dane mogą zostać usunięte poprzez opróżnienie "Cookies and Site Data".
            </p>
        </div>
    );
};

export default getPrivacyTerms_pl;