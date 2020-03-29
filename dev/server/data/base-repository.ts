// var config = require('../settings/config');
import * as sqlite3 from "sqlite3";
import { Configuration } from "../services/settings/configuration";

export abstract class BaseRepository<T> {
	protected _configuration : Configuration;
	protected _db: T;

	constructor (configuration: Configuration){
		this._configuration = configuration;
	}

	public abstract InitDb = (callback: (error: Error | null)=>void) : void => {};
	protected abstract Setup = () : void => {};
	
}
