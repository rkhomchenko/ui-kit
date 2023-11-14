'use strict';

const fs = require('fs');
const {resolve} = require('path');
// const request = require('request');

const coreUrl = 'http://elementstring.herokuapp.com/uitranslate/13';
const translationsPath = resolve(__dirname, '../stories/assets/translations/');

function initTranslate() {
    if (!fs.existsSync(translationsPath)) {
        fs.mkdir(translationsPath, (err, made) => {
            if (err) throw new Error(err);
            retrieveLocales();
        });
    } else {
        retrieveLocales();
    }
}

async function retrieveLocales() {
    const result = await fetch(coreUrl).then(response => response.json());
    const getTranslations$ = result.locales.map(locale => retrieveStrings(locale));

    await Promise.all(getTranslations$);
}

function retrieveStrings(locale) {
    const url = `${coreUrl}?lang=${locale}`;

    return fetch(url)
        .then(response => response.json())
        .then(response => {
            const translations = {'CORE': response};

            fs.writeFile(`${translationsPath}/${locale}.json`, JSON.stringify(translations), (err) => {
                if (err) {
                    return console.log(err);
                }
                console.log(`Translation [${locale}] ready`);
            });
        })
}

// function validateResponse(resolve, error, response, body) {
//     if (!error && response.statusCode === 200) {
//         body = JSON.parse(body);
//         resolve(body)
//     } else {
//         console.error('Retrieve translation error: ', error)
//     }
// }

initTranslate();


