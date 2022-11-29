# Sözlük.JS 

⚠️**DEPRECATED:** This project is no longer maintained. Please consider using alternatives or writing your own implementation. You can also fork and modify this repository for any personal or commercial use. 

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/AtakanErmis/sozlukjs/CI) ![GitHub](https://img.shields.io/github/license/AtakanErmis/sozlukjs) ![npm](https://img.shields.io/npm/v/sozlukjs) ![David](https://img.shields.io/david/AtakanErmis/sozlukjs) ![npm bundle size](https://img.shields.io/bundlephobia/min/sozlukjs) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/sozlukjs)

An API library for Turkish Dictionary websites. It is also TypeScript Supported.
# Installation


## Through npm

- `npm install --save sozlukjs`
OR
- `yarn add sozlukjs`

## Using CDN

- `<script src="https://cdn.jsdelivr.net/npm/sozlukjs@latest/bundle.js"></script>`


# Example

```javascript
const sozluk = require("sozlukjs");

sozluk.TDKDictionary.getMeaningData("sözlük")
    .then(data => console.log(data)); // console.logs the results of "sözlük" as JSON.
```

You can find more examples in the `examples` folder.


# API


## `TDKDictionary`

- `TDKDictionary.getMeaningData(query)` *query: `String`* -> *`Promise`*

Fetches and returns JSON meaning data of given `query` string.

- `TDKDictionary.getSpellingData(query)` *query: `String`* -> *`Promise`*

Fetches and returns JSON spelling data of given `query` string.

- `TDKDictionary.getAudioUrl(query)` *query: `String`* -> *`Promise`*

Fetches and returns URL for pronounciation audios of given `query` string.

## `TurengDictionary`

- `TurengDictionary.getTermSuggestions(query)` *query: `String`* -> *`Promise`*

Fetches and returns JSON suggestion results of given `query` string. 

- `TurengDictionary.getTermData(term)` *term: `String`* -> *`Promise`*

Fetches and returns JSON data of given `term` string.
