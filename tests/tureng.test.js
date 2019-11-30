const TurengDictionary = require("../src/modules/tureng");

test("gets term JSON data successfully", (done) => {
    TurengDictionary.getTermData("dictionary").then(data => {
		expect(data).toBeInstanceOf(Object);
		done();
	});
})

test("gets suggestion JSON data successfully", (done) => {
    TurengDictionary.getTermSuggestions("dictionary").then(data => {
		expect(data).toBeInstanceOf(Object);
		done();
	});
})