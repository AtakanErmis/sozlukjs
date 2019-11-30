const TDKDictionary = require("../src/modules/tdk");

test("gets meaning JSON data successfully", () => {
    expect(TDKDictionary.getMeaningData("sözlük")).resolves.toBeInstanceOf(Object);
})

test("gets spelling JSON data successfully", () => {
    expect(TDKDictionary.getSpellingData("sözlük")).resolves.toBeInstanceOf(Object);
})

test("gets audio JSON data successfully", () => {
    expect(TDKDictionary.getAudioUrl("sözlük")).resolves.toBeInstanceOf(Object);
})