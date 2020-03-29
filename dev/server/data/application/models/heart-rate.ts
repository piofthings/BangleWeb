export class HeartRate{
    
    private _id : number;
    private _heartRate : number;
    
    private _confidence : number;

    private _timestamp : Date;
    
    public get Timestamp() : Date {
        return this._timestamp;
    }
    public set Timestamp(v : Date) {
        this._timestamp = v;
    }
    
    public get Confidence() : number {
        return this._confidence;
    }
    public set Confidence(v : number) {
        this._confidence = v;
    }
    
    public get Rate() : number {
        return this._heartRate;
    }
    public set Rate(v : number) {
        this._heartRate = v;
    }
    
    public get Id() : number {
        return this._id;
    }
    public set Id(v : number) {
        this._id = v;
    }
    
    constructor(){

    }
}