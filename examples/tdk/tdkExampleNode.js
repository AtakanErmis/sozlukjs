const tdk = require("../../index.js").TDKDictionary;

tdk.getMeaningData("sözlük")
    .then(data => console.log(data)) // Fetches and console.logs the meaning of the word "sözlük".

tdk.getSpellingData("sözlük")
    .then(data => console.log(data)) // Fetches and console.logs the spelling of the word "sözlük".

tdk.getAudioUrl("sözlük")
    .then(data => console.log(data)) // Fetches and console.logs the pronounciation audio URL of the word "sözlük".