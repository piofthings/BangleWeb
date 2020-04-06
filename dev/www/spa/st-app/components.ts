export class Components {
    public static Register(){
        window.app.RegisterComponent("home", "components/home/home");
        window.app.RegisterComponent("mapbox-map", "components/mapbox-map/mapbox-map");
    }
}