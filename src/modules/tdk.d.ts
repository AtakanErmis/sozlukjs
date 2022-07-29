export declare type Word = string;
declare type ISpellingData = {
    sozu: any;
    seskod: any;
}[];
declare type IAudioData = unknown;
declare type DataType = "audio" | string;
declare class TDKDictionary {
    static getMeaningData(query: Word): Promise<any>;
    static getSpellingData(query: Word): Promise<ISpellingData>;
    static getAudioUrl(query: Word): Promise<IAudioData>;
    static makeRequest(dataType: DataType, query: Word): Promise<any>;
}
export default TDKDictionary;
