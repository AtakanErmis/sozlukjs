const TurengDictionary = require("../src/modules/tureng");

test("gets term JSON data successfully", () => {
    expect(TurengDictionary.getTermData("dictionary")).resolves.toBeInstanceOf(Object);
})

test("gets suggestion JSON data successfully", async () => {
    expect(TurengDictionary.getTermSuggestions("dictionary")).resolves.toBeInstanceOf(Object);
})