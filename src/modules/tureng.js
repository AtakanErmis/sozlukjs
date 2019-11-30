const fetch = require("node-fetch");
const md5 = require('md5');

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
    static async createMD5Hash(term) {
        return md5(term + "46E59BAC-E593-4F4F-A4DB-960857086F9C");
    }
	static async makeRequest(term) {
        const requestData = {
            "Term": term,
            "Code": this.createMD5Hash(term)
        }
		const request = await fetch("http://cors-passer.herokuapp.com/http://ws.tureng.com/TurengSearchServiceV4.svc/Search", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestData)
        });
        const data = await request.json();
        return data;
	}
}

module.exports = TurengDictionary;
