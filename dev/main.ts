import nconf from 'nconf';
import { Configuration } from "./server/services/settings/configuration";
import { ConfigService } from "./server/services/settings/config-service";
import express from "express";
import multer from "multer";
import bunyan from "bunyan";

import fs from "fs";
import bodyParser from "body-parser";
import session from "express-session";
import exphbs from "express-handlebars";
var favicon = require('serve-favicon');
// var session = require('express-session');
// var bodyParser = require('body-parser');

// var fs = require('fs');
import http from 'http';
import https from 'https';
import { Home } from './server/models/view/home';

export class web {
    private app: express.Application;
    private httpServer: http.Server;

    private logger: bunyan;
    private config: Configuration;
    private configService: ConfigService;

    constructor() {
        this.logger = bunyan.createLogger({
            name: 'bangleweb',
            serializers: {
                req: bunyan.stdSerializers.req,     // standard bunyan req serializer
                err: bunyan.stdSerializers.err      // standard bunyan error serializer
            },
            streams: [
                {
                    level: 'info',                  // logging level
                    path: __dirname + '/logs/foo.log'
                }
            ]
        });
        this.configService = new ConfigService(this.logger);
    }

    start = () => {

        try {
            this.configService.load((config: Configuration) => {
                console.log("meh3");
                this.app = express();
                try {
                    this.config = config;
                    this.app.use(bodyParser.json());
                    this.app.use(bodyParser.urlencoded({ extended: false }));

                    this.app.engine("handlebars", exphbs());
                    this.app.set("view engine", 'handlebars');
                    this.app.set('views', __dirname + '/server/views');
                    this.app.get('/', (req, res, next) => {
                        let homeViewModel = new Home();
                        homeViewModel.mapboxAccessToken = this.config.mapboxAccessToken;
                        homeViewModel.title = "Title title";
                        res.render('home', homeViewModel);
                    });

                    this.app.use('/.well-known', express.static(__dirname + '/www/.well-known')); //static route for Letsncrypt validation
                    this.app.use('/posts/images', express.static(__dirname + '/posts/images')); //static route for Blog images
                    this.app.use(express.static(__dirname + '/www')); // All static stuff from /app/wwww



                    // catch 404 and forward to error handler

                    var pkg = require('./package.json');
                    this.httpServer = http.createServer(this.app);
                    this.httpServer.listen(3002, (): void => {
                        let address = this.httpServer.address();
                        if (address != null) {
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
    var webApp = new web();
    webApp.start();
}
catch (e) {
    console.error(e);
}
finally {
    console.log("meh");
}