import * as ko from "knockout";
import { Router } from "st-app/st-router";
import { stMenuItem as MenuItem} from "st-ui/view-models/st-nav-menu/st-menu-item";
import { stRoute as Route } from "st-app/st-route";
import { Components } from "st-app/components";
export class SilkThread implements SilkThreadStatic{

    public readonly AppRouter: Router;

    constructor() {
        this.AppRouter = new Router();
    }

    public StartUp = () => { 
        this.RegisterComponents();
        Components.Register();

        this.RegisterRoutes(); 
    }

    private RegisterComponents = () => {

        this.RegisterComponent("st-nav-menu", "st-ui/components/st-nav-menu/st-nav-menu");
        this.RegisterComponent("st-nav-tab", "st-ui/components/st-nav-tab/st-nav-tab");
        this.RegisterComponent("st-side-nav", "st-ui/components/st-side-nav/st-side-nav");
        this.RegisterComponent("st-image-uploader", "st-ui/components/st-image-uploader/st-image-uploader");
        this.RegisterComponent("st-feed-list", "st-ui/components/st-feed-list/st-feed-list");
        this.RegisterComponent("st-modal", "st-ui/components/st-modal/st-modal");
    }

    private RegisterRoutes = () => {

        this.RegisterRoute(SilkThread.NewRouteFactory("/:routeParams*:", "home",  "Home | The lazy blogger!"));

        this.AppRouter.ParseCurrentRoute();
        ko.applyBindings(this.AppRouter.currentRoute);
    }

    public RegisterMenu = (text: string, url: string, menuCssClass: string, menuHrefClass: string, authenticated: boolean, roles: Array<string> ) => {
        this.AppRouter.leftMenuItems.push(MenuItem.factory(text, url, menuCssClass, menuHrefClass, authenticated, roles));
    }

    public RegisterRoute = (newRoute: Route) => {
        this.AppRouter.RegisterRoute(newRoute);
    }

    public RegisterComponent = (name: string, location: string) => {
        ko.components.register(name, { require: location });
        
    }


    public static NewRouteFactory = (routePath: string, pageComponent: string, title: string, roles? : Array<string>) => {
        let newRoute = new Route(routePath, title, pageComponent, roles);
        newRoute.title(title);
        return newRoute;
    }

}
