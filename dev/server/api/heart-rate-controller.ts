import * as Express from "express";
import { Configuration } from "../services/settings/configuration";
import { BaseController } from "./base-controller";
import { HeartRateRepository } from "../data/application/heart-rate-repository";

export class HeartRateController extends BaseController {
    private config: Configuration;
    private heartRateRepository : HeartRateRepository;


    constructor(configuration: Configuration, logger: any, hearRateRepo: HeartRateRepository) {
        super(logger);
        this.config = configuration;
        this.heartRateRepository = hearRateRepo;

        (<any>this)["HeartRate:path"] = "/heartrate/files";
    }

    postUpload = (req: Express.Request, res: Express.Response, net: any, params:any) => {
        this.logger.info("Uploading file");
    }
}
