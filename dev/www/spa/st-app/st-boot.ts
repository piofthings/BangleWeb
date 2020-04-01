requirejs.config(
    {
        baseUrl: '/spa',
        paths:
        {
            "jQuery": "/libs/jquery/jquery-3.2.1.min",
            "crossroads": "/libs/crossroads/crossroads.min",
            "signals": "/libs/crossroads/signals.min",
            "knockout": "/libs/knockout/knockout-latest",
            "text": "/libs/requirejs/text",
            "RSVP": "/libs/rsvp/rsvp",
            "amplify": "/libs/amplify/amplify.min",
            "toastr": "/libs/toastr/toastr.min",
            "bootstrap": "/libs/bootstrap/bootstrap",
            "mapbox-gl": "/libs/mapbox/mapbox-gl",
            "spa": "st-app/st-app"

        },
        shim:
        {
            "jQuery": { exports: "$" },
            "amplify": {
                exports: "amplify",
                deps: ["jQuery"]
            },
            "toastr": {
                exports: "toastr",
                deps: ["jQuery"]
            },
            "bootstrap": {
                deps: ["jQuery"]
            },
            "knockout": {
                deps: ["jQuery"]
            },
            "mapbox-gl":{
                exports : "mapbox-gl"
            }
        }
    });

requirejs(["jQuery", "knockout", "spa", "text", "RSVP", "amplify", "bootstrap"], ($: JQuery, ko: KnockoutStatic, app: any) => {
    window.app = null;
    window.app = <SilkThreadStatic>new app.SilkThread();

    window.app.RegisterMenu('&#xf015;', '/', 'nav-header nav-menu-item', 'fa', false, []);
    window.app.RegisterMenu('Blog', '/blog', 'nav-menu-item', '', false, []);
    window.app.RegisterMenu('Reflection', '/feed', 'nav-menu-item', '', false, []);
    window.app.RegisterMenu('Media', '/media', 'nav-menu-item', '', false, []);

    window.app.StartUp();

});
