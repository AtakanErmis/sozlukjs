const TDKDictionary = require("../src/modules/tdk");

test("gets meaning JSON data successfully", () => {
	TDKDictionary.getMeaningData("sözlük").then(data => {
		expect(data).toBeInstanceOf(Object);
	});
});

test("gets spelling JSON data successfully", () => {
	TDKDictionary.getSpellingData("sözlük").then(data => {
		expect(data).toBeInstanceOf(Object);
	});
});

test("gets audio JSON data successfully", () => {
	TDKDictionary.getAudioUrl("sözlük").then(data => {
		expect(data).toBeInstanceOf(Object);
	});
});
