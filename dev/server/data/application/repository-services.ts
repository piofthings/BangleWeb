import { HeartRateRepository } from "./heart-rate-repository";
import { SqliteRepository } from "../sqlite-repository";
import { Configuration } from "../../services/settings/configuration";

export class RepositoryServices {
    private _heartRate : HeartRateRepository;

    constructor(configuration:Configuration){
        this._heartRate = new HeartRateRepository(configuration);
    }
    public get HeartRate() : HeartRateRepository {
        return this._heartRate;
    }    
}