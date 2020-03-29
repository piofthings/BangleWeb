export class Acceleration {
    
    private _Id : string;
    
    private _X : number;
    
    private _Y : number;

    private _Difference : number;
    
    private _Magnitude : number;
    public get Magnitude() : number {
        return this._Magnitude;
    }
    public set Magnitude(v : number) {
        this._Magnitude = v;
    }
    
    
    public get Difference() : number {
        return this._Difference;
    }
    public set Difference(v : number) {
        this._Difference = v;
    }
    
    public get Y() : number {
        return this._Y;
    }
    public set Y(v : number) {
        this._Y = v;
    }

    public get X() : number {
        return this._X;
    }
    public set X(v : number) {
        this._X = v;
    }
    
    public get Id() : string {
        return this._Id;
    }
    public set Id(v : string) {
        this._Id = v;
    }
    
}