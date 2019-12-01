require=(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){
"use strict";

// ref: https://github.com/tc39/proposal-global
var getGlobal = function () {
	// the only reliable means to get the global object is
	// `Function('return this')()`
	// However, this causes CSP violations in Chrome apps.
	if (typeof self !== 'undefined') { return self; }
	if (typeof window !== 'undefined') { return window; }
	if (typeof global !== 'undefined') { return global; }
	throw new Error('unable to locate global object');
}

var global = getGlobal();

module.exports = exports = global.fetch;

// Needed for TypeScript and Webpack.
exports.default = global.fetch.bind(global);

exports.Headers = global.Headers;
exports.Request = global.Request;
exports.Response = global.Response;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(require,module,exports){
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

},{"node-fetch":1}],3:[function(require,module,exports){
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
			"http://cors-passer.herokuapp.com/http://ws.tureng.com/TurengSearchServiceV4.svc/Search",
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

},{"node-fetch":1}],"sozlukjs":[function(require,module,exports){
const TDKDictionary = require("./src/modules/tdk.js");
const TurengDictionary = require("./src/modules/tureng.js");

const sozluk = {TDKDictionary, TurengDictionary}

module.exports = sozluk;
},{"./src/modules/tdk.js":2,"./src/modules/tureng.js":3}]},{},["sozlukjs"]);
