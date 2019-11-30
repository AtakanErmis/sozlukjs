const tureng = require("../../index.js").TurengDictionary;

tureng.getTermData("dictionary")
    .then(data => console.log(data)); // Fetches and console.logs the data about the term "dictionary".

tureng.getTermSuggestions("dictionar")
    .then(data => console.log(data)); // Fetches and console.logs the term suggestions for "dictionar".