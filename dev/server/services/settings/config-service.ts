import { Configuration } from "./configuration";
import nconf from "nconf";
import bunyan from "bunyan";

import * as fs from "fs";

export class ConfigService {
    logger: bunyan;
    
    public currentSettings = new Configuration();

    constructor(logger: bunyan)
    {
        this.logger = logger;
    }

    public load(callback: (currentSettings: Configuration) => void) : void
    {
        try
        {
            nconf.file('./webconfig.json');
            nconf.load((data: any) =>
            {
                
                this.currentSettings.key = nconf.get('key');
                this.currentSettings.cert = nconf.get('cert');
                this.currentSettings.sessionSecret = nconf.get('sessionSecret');
                this.currentSettings.mapboxAccessToken = nconf.get('mapboxAccessToken');
                this.currentSettings.dbName = nconf.get('dbName');
                this.currentSettings.dbRootPath = nconf.get('dbRootPath');
                this.currentSettings.dbNameSpace = nconf.get('dbNameSpace');
                if(callback!=null)
                {
                    callback(this.currentSettings);
                }
            });
        }
        catch(error)
        {
            this.logger.error(error);
        }
    }

    public set(name: string, value: any): void
    {
        nconf.set(name, value);
        (<any>this.currentSettings)[name] = <any>value;
    }

    public get() : Configuration
    {
        return this.currentSettings;
    }

    public saveSettings(settings: Configuration) : void
    {
        let keys: Array<string> = Object.keys(<any>settings);
        keys.forEach((key: any) => {
            nconf.set(key, (<any>settings)[key]);
        });
        this.save();
    }

    public save() : void
    {
        nconf.save((err: any) => {
            fs.readFile('./config.json', (err, data) => {
                this.logger.info(JSON.parse(data.toString()));
            });
        });
    }
}
