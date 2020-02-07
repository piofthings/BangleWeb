import nconf from 'nconf';
import { Configuration } from "./server/services/settings/configuration";
import { Config } from "./server/services/settings/config";
import express from "express";
import multer from "multer";
//import * as pug from "pug";
// var Poet = require("poet");

import fs from "fs";
import bodyParser from "body-parser";
import session from "express-session";

var favicon = require('serve-favicon');
// var session = require('express-session');
// var bodyParser = require('body-parser');

// var fs = require('fs');
import http from 'http';
import https from 'https';
var configService = new Config();

export class web {
    private app: express.Application;
    private httpServer: http.Server;
    constructor() {
        try {
            configService.load((config: Configuration) => {
                console.log("meh3");
                this.app = express();
                try {

                    this.app.use(bodyParser.json());
                    this.app.use(bodyParser.urlencoded({ extended: false }));

                    this.app.set('view engine', 'pug');
                    this.app.set('views', __dirname + '/views');
                    this.app.use('/.well-known', express.static(__dirname + '/www/.well-known')); //static route for Letsncrypt validation
                    this.app.use('/posts/images', express.static(__dirname + '/posts/images')); //static route for Blog images
                    this.app.use(express.static(__dirname + '/www')); // All static stuff from /app/wwww
                    // catch 404 and forward to error handler

                    var pkg = require('./package.json');
                    this.httpServer = http.createServer(this.app);
                    this.httpServer.listen(3002, (): void => {
                        let address= this.httpServer.address();
                        if(address!=null){
                        console.log(pkg.name, 'listening on port ' + JSON.stringify(address));
                        }
                    });
                }
                catch (err) {
                    console.log("inner catch:");
                    console.error(err);
                }
            });
        }
        catch (err) {
            console.log("Outer catch:");
            console.error(err);
        }
    }
}
try {
    var bangleWeb = new web();
}
catch (e) {
    console.error(e);
}
finally {
    console.log("meh");
}