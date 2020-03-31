import * as ko from "knockout";
import { stRoute } from "./st-route";
import { stMenuItem } from "../st-ui/view-models/st-nav-menu/st-menu-item";
import * as crossroads from "crossroads";

class Router implements RouterStatic {
    currentRoute: KnockoutObservable<stRoute> = ko.observable<stRoute>();
    routes: KnockoutObservableArray<stRoute> = ko.observableArray<stRoute>([]);
    leftMenuItems: KnockoutObservableArray<MenuItem> = ko.observableArray<MenuItem>([]);
    rightMenuItems: KnockoutObservableArray<MenuItem> = ko.observableArray<MenuItem>([]);

    constructor() {
        $(document).on('click', 'a', this.handleAnchorClick);
        this.activateCrossroads();
    }


    public RegisterRoute = (newRoute: Route) => {
        this.routes.push(newRoute);

        crossroads.addRoute(newRoute.path(), (crRoute: stRoute) => {
            console.log(newRoute.path());
            let selectedRoute = ko.utils.arrayFirst<stRoute>(this.routes(), r => r.path() == newRoute.path());
            selectedRoute.crRoute(crRoute);
            this.currentRoute(selectedRoute);
        });
    }

    public ParseCurrentRoute = () => {
        this.historyStateChanged();
    }

    public Parse = (stRoute: string) => {
        crossroads.parse(stRoute);
    }

    private handleAnchorClick = (event: Event) => {
        try {
            let target = (event.target != null && (<any>event.target).tagName == 'A')
                ? event.target
                : $(event.target).closest('a')[0];
            let url = $(target).attr("href");
            if (url.indexOf('#') >= 0) {
                let id = url.slice(url.indexOf('#'));
                console.log(id);
                if (window.innerWidth < 1024) {
                    $('html, body').animate({ scrollTop: $(id).offset().top - 72 }, 'slow');
                }
                else {
                    $('html, body').animate({ scrollTop: $(id).offset().top - 132 }, 'slow');

                }
                return true;
            }
            history.pushState(null, document.title, url);
        }
        catch (error) {
            //todo: log
            console.error(error);
        }
        return false;
    }

    private historyStateChanged = () => {
        let state = history.state;
        if (state != null) {
            //console.log("historyStateChanged" + JSON.stringify(state));
            if (state.data && state.data.url != null) {
                return crossroads.parse(state.data.url);
            }
            else if (state.hash.length > 1) {
                var fullHash = state.hash;
                return crossroads.parse(fullHash);
            }
        }
        return crossroads.parse('/');

    }

    private getRoute = (url: string) => {
        var selectedRoute = ko.utils.arrayFirst<stRoute>(this.routes(), r => r.path() == url);
        return selectedRoute;
    }

    private activateCrossroads = () => {
        History.bind(window, "statechange", this.historyStateChanged);
        (<any>crossroads).normalizeFn = crossroads.NORM_AS_OBJECT;
    }

}

export { Router };
