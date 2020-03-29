import { SqliteRepository } from "../sqlite-repository";
import { Configuration } from "../../services/settings/configuration";
import { RunResult } from "sqlite3";
import { HeartRate } from "./models/heart-rate";

export class HeartRateRepository extends SqliteRepository {
    private TABLE_NAME: string = 'heart_rates'
    constructor(configuration: Configuration) {
        super(configuration);
        this.DbSulg = "heart-rate";
        this.InitDb((err)=>{
            this.Setup()
        });

    }

    public Setup = (): void => {
        let createTableSql = `CREATE TABLE IF NOT EXISTS '${this._configuration.dbNameSpace}.${this.TABLE_NAME}' ( 
            "id" INTEGER PRIMARY KEY  AUTOINCREMENT NOT NULL  UNIQUE, 
            "time_stamp" DATETIME NOT NULL, 
            "heart_rate" INTEGER, 
            "confidence" INTEGER );`;
        this._db.run(createTableSql, (error: Error | null) => {
            if (error) {
                console.log(error);
            }
            console.log("Create Table Results: " + JSON.stringify(error));
            let dummy = new HeartRate();
            dummy.Id = -1, dummy.Timestamp = new Date(), dummy.Rate = 72, dummy.Confidence = 100;
            this._db.serialize();
            this.Insert(dummy);
        });

    }

    public Insert = (newHeartRate: HeartRate) => {
        let insertSql = `INSERT INTO '${this._configuration.dbNameSpace}.${this.TABLE_NAME}' (time_stamp, heart_rate, confidence) VALUES (?,?,?);`;
        var stmt = this._db.prepare(insertSql);
        stmt = stmt.run([newHeartRate.Timestamp, newHeartRate.Rate, newHeartRate.Confidence]);
        stmt.finalize();
        this._db.serialize();
    }

    public GetForDay = (date: string, page: number | null, pageSize: number | null) => {
        //let get = ``
    }
}