import { Configuration } from "../settings/configuration";
import * as fs from "fs";

export class Uploader {
    private configuration: Configuration;
    logger: any;

    constructor(configuration: Configuration, logr: any) {
        this.configuration = configuration;
        this.logger = logr;
    }

    
}
