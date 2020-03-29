export class GeoLocation{
    
    private _Id : number;
    
    private _Lattitude : number;
    
    private _Longitude : number;
    
    private _Altitude : number;
    
    private _Speed : number;
    
    private _Course : number;
    
    private _TimeStamp : Date;
    
    private _Satellites : number;
    
    private _Fix : boolean;
    public get Fix() : boolean {
        return this._Fix;
    }
    public set Fix(v : boolean) {
        this._Fix = v;
    }
    
    public get Satellites() : number {
        return this._Satellites;
    }
    public set Satellites(v : number) {
        this._Satellites = v;
    }
    
    public get TimeStamp() : Date {
        return this._TimeStamp;
    }
    public set TimeStamp(v : Date) {
        this._TimeStamp = v;
    }
    
    
    public get Course() : number {
        return this._Course;
    }
    public set Course(v : number) {
        this._Course = v;
    }
    
    public get Speed() : number {
        return this._Speed;
    }
    public set Speed(v : number) {
        this._Speed = v;
    }
    
    public get Altitude() : number {
        return this._Altitude;
    }
    public set Altitude(v : number) {
        this._Altitude = v;
    }
    
    public get Longitude() : number {
        return this._Longitude;
    }
    public set Longitude(v : number) {
        this._Longitude = v;
    }
    
    public get Lattitude() : number {
        return this._Lattitude;
    }
    public set Lattitude(v : number) {
        this._Lattitude = v;
    }
    
    public get Id() : number {
        return this._Id;
    }
    public set Id(v : number) {
        this._Id = v;
    }
    
}