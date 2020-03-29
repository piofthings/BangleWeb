import * as Express from "express";
import { Configuration } from "../services/settings/configuration";
import { BaseController } from "./base-controller";

export class UploadController extends BaseController {
    config: Configuration;


    constructor(configuration: Configuration, logger: any) {
        super(logger);
        this.config = configuration;

        // this.uploader = new AzureUploader(this.config, logger);

        (<any>this)["Upload:path"] = "/uploader/files";
    }

    postUpload = (req: Express.Request, res: Express.Response, net: any, params:any) => {
        this.logger.info("Uploading file");
    }
}
