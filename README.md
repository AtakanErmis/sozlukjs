# Sözlük.JS

An API library for Turkish Dictionary websites.

# Installation

## Through npm

- `npm install --save sozluk`

## Using CDN

- `<script src="https://cdn.jsdelivr.net/npm/sozluk@1.0.0/bundle.js"></script>`

# Example

```javascript
const sozluk = require("sozluk");

sozluk.TDKDictionary.getMeaningData("sözlük")
    .then(data => console.log(data)); // console.logs the results of "sözlük" as JSON.
```

You can find more examples in the `examples` folder.

# API

## `TDKDictionary`

- `TDKDictionary.getMeaningData(query)` *query: `String`* -> *`Promise`*

Fetches the meaning of given `query` string.

- `TDKDictionary.getSpellingData(query)` *query: `String`* -> *`Promise`*

Fetches the spelling data of given `query` string.

- `TDKDictionary.getAudioUrl(query)` *query: `String`* -> *`Promise`*

Fetches the URL for pronounciation audio of given `query` string.

## `TurengDictionary`

- `TurengDictionary.getTermSuggestions(query)` *query: `String`* -> *`Promise`*

Fetches suggestion results of given `query` string. 

- `TurengDictionary.getTermData(term)` *term: `String`* -> *`Promise`*

Fetches the meaning of given `term` string in Turkish.
