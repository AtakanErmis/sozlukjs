const fetch = require("node-fetch");

class TDKDictionary {
	static async getMeaningData(query) {
		const meaningData = await this.makeRequest("gts", query);
		return meaningData;
	}
	static async getSpellingData(query) {
		const spellingData = await this.makeRequest("yazim", query);
		return spellingData;
	}
	static async getAudioUrl(query) {
		const audioData = await this.makeRequest("audio", query);
		return audioData;
	}
	static async makeRequest(dataType, query) {
		if (dataType !== "audio") {
			const queryURL = encodeURI(
				`https://sozluk.gov.tr/${dataType}?ara=${query}`
			);
			const request = await fetch(queryURL);
			const data = await request.json();
			return data;
		} else {
			const data = await this.getSpellingData(query);
			const audioURLData = data.map(e => {
				return {
					word: e.sozu,
					url: `https://sozluk.gov.tr/ses/${e.seskod}.wav`
				};
			});
			return audioURLData;
		}
	}
}

module.exports = TDKDictionary;
