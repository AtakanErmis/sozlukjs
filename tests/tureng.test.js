const TurengDictionary = require("../src/modules/tureng");

test("gets term JSON data successfully", () => {
    TurengDictionary.getTermData("dictionary").then(data => {
		expect(data).toBeInstanceOf(Object);
	});
})

test("gets suggestion JSON data successfully", async () => {
    TurengDictionary.getTermSuggestions("dictionary").then(data => {
		expect(data).toBeInstanceOf(Object);
	});
})