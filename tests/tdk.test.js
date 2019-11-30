const TDKDictionary = require("../src/modules/tdk");

test("gets meaning JSON data successfully", (done) => {
	TDKDictionary.getMeaningData("sözlük").then(data => {
		expect(data).toBeInstanceOf(Object);
		done();
	});
});

test("gets spelling JSON data successfully", (done) => {
	TDKDictionary.getSpellingData("sözlük").then(data => {
		expect(data).toBeInstanceOf(Object);
		done();
	});
});

test("gets audio JSON data successfully", (done) => {
	TDKDictionary.getAudioUrl("sözlük").then(data => {
		expect(data).toBeInstanceOf(Object);
		done();
	});
});
