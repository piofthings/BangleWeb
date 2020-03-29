import * as express from "express";

import { Configuration } from "../services/settings/configuration";
import { BaseController } from "../api/base-controller";

// import { HomeController } from "../api/home-controller";
// import { PassportLocalController } from "../api/passport-controller";
import { UploadController } from "../api/upload-controller";
import { HeartRateController } from "../api/heart-rate-controller";
// import { ContentController } from "../api/content-controller";
// import { ProfileController } from "../api/profile-controller";
// import { FeedController } from "../api/feed-controller";
// import { InvitationController } from "../api/invitation-controller";
import { CrossRouter } from "../services/routing/cross-router";
import { CrossRoute } from "../services/routing/cross-route";
import { HeartRateRepository } from "../data/application/heart-rate-repository";

export class Container {
    private static config: Configuration;
    public static apiRouter: CrossRouter;
    public static webRouter: CrossRouter;

    public static inject = (configuration: Configuration, logger: any) => {
        Container.config = configuration;
        // Container.injectWebController(new HomeController(Container.config, authenticator, logger));
        // Container.injectController(new PassportLocalController(Container.config, authenticator, logger));
        Container.injectController(new UploadController(Container.config, logger));
        Container.injectController(new HeartRateController(Container.config, logger, new HeartRateRepository(Container.config)));
        // Container.injectController(new ProfileController(Container.config, authenticator, logger));
        // Container.injectController(new ContentController(Container.config, authenticator, logger));
        // Container.injectController(new FeedController(Container.config, authenticator, logger));
        // Container.injectController(new InvitationController(Container.config, authenticator, logger));
    }

    private static injectController = (controller: BaseController) => {
        let keys = Object.keys(controller);
        keys.forEach((key: string)=>{
            if(typeof((<any>controller)[key]) == "string"){
                Container.apiRouter.registerRoute(new CrossRoute((<any>controller)[key], key.replace(":path", ""), "", controller));
            }
        });
    }

    private static injectWebController = (controller: BaseController) => {
        let keys = Object.keys(controller);
        keys.forEach((key: string)=>{
            if(typeof((<any>controller)[key]) == "string"){
                Container.webRouter.registerRoute(new CrossRoute((<any>controller)[key], key.replace(":path", ""), "", controller));
            }
        });
    }
}
