import { BaseRepository } from "./base-repository";
import { Configuration } from "../services/settings/configuration";
import * as fs from "fs";
import * as path from "path";
import * as sqlite3 from "sqlite3";
export class SqliteRepository extends BaseRepository<sqlite3.Database>{
    private driver = sqlite3.verbose();
    private _currentDbFullPath: string;
    private _DbSulg: string;

    constructor(configuration: Configuration) {
        super(configuration);
    }

    public get DbSulg(): string {
        return this._DbSulg;
    }
    public set DbSulg(v: string) {
        this._DbSulg = v;
    }

    public get CurrentDbFullPath(): string {
        this._currentDbFullPath = path.join(this._configuration.runPath, this._configuration.dbRootPath, `${this._configuration.dbName}-${this.DbSulg}.db`);
        return this._currentDbFullPath;
    }

    public InitDb = (callback: (error: Error | null) => void) => {
        console.log("INITDB:------------>" + this.CurrentDbFullPath);
        this._db = new this.driver.Database(this.CurrentDbFullPath, sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
            if (err) {
                console.error(err.message);
                callback(err);
            }
            console.log('Connected to the banglejs database.');
            callback(null);
        });
        this._db.serialize();
    }

    protected Setup = (): void => { };

}