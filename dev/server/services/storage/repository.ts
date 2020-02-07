import * as sqlite3 from "sqlite3";
import * as path from "path";
import * as fs from "fs";

import {Config} from "../settings/config";

export class Repository{
    private driver = sqlite3.verbose();
    private database : sqlite3.Database;
    private config: Config;

    constructor(config : Config){
        this.config = config;
    }

    public init = () =>{
        fs.access(this.config.currentSettings.dbName, error => {
            if (!error) {
                // The check succeeded

            } else {
                // The check failed
                this.database = new this.driver.Database(this.config.currentSettings.dbName);
            }
        });
    }
}