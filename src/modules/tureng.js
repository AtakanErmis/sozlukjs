const fetch = require("node-fetch");

class TurengDictionary {
	static async getTermSuggestions(query) {
		const request = await fetch(`http://ac.tureng.co/?t=${query}`);
		const data = await request.json();
		return data;
	}
	static async getTermData(term) {
		const wordData = await this.makeRequest(term);
		return wordData;
	}
	static async makeRequest(term) {
		const requestData = {
			Term: term
		};
		const request = await fetch(
			"http://ws.tureng.com/TurengSearchServiceV4.svc/Search",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"Origin": "tureng.com"
				},
				body: JSON.stringify(requestData)
			}
		);
		const data = await request.json();
		return data;
	}
}

module.exports = TurengDictionary;
