import { Word } from './tdk';
declare class TurengDictionary {
    static getTermSuggestions(query: Word): Promise<any>;
    static getTermData(term: Word): Promise<any>;
    static makeRequest(term: Word): Promise<any>;
}
export default TurengDictionary;
