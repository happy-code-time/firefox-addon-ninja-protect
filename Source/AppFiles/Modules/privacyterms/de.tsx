import * as React from 'react';

const getPrivacyTerms_de=() => {
    return (
        <div className="text">
            <h1 className="ff-title">
                LocalStorage
            </h1>
            <p>
                Dieses Addon hat lokal gespeichert Daten:
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
                    Einstellungen dieser Erweiterung mit den keys: securityIsOn, makeSearchInSourceCode, mutationCheck, scanTextOnWebsite, deleteCookies, ignoreTagScript, ignoreTagLink, ignoreTagMeta, ignoreTagStyle, limitlessScan, statistic, extendspornlist, extendsblacklist
                </li>
            </ul>
            <p>
                Alle von den oben genannten Listen werden lokal im Browser gespeichert - localStorage - und von dieser Erweiterung genutzt.
                Alle neu hinzugefügten/ gelöschten Elemente aus den o.g. Listen werden remote gespeichert.
                
                Diese Daten übertragung erfolgt auch verschlüsselt.

                Falls einzelene Einträge aus der Liste entfernt werden, werden diese auch von dem Remote Speichermedium komplett entfernt.
                Falls eine einzelne List aufgerufen wird, werden die lokalen und Remote Daten mit einander synchronisiert.
            </p>
            <p>
                Diese lokal gespeicherten Daten können gelöscht werden in dem man die "Cookies and Site Data" löscht.
            </p>
        </div>
    );
};

export default getPrivacyTerms_de;