requirejs.config(
    {
        baseUrl: '/spa',
        paths:
        {
            "amplify": "/libs/amplify/amplify.min",
            "crossroads": "/libs/crossroads/crossroads.min",
            "jQuery": "/libs/jquery/jquery-3.2.1.min",
            "knockout": "/libs/knockout/knockout-latest",
            "mapbox-gl": "/libs/mapbox/mapbox-gl",
            "RSVP": "/libs/rsvp/rsvp",
            "signals": "/libs/crossroads/signals.min",
            "spa": "st-app/st-app",
            "text": "/libs/requirejs/text",
            "toastr": "/libs/toastr/toastr.min",
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
            "knockout": {
                deps: ["jQuery"]
            },
            "mapbox-gl":{
                exports : "mapbox-gl"
            }
        }
    });

requirejs(["jQuery", "knockout", "spa", "text", "RSVP", "amplify"], ($: JQuery, ko: KnockoutStatic, app: any) => {
    window.app = null;
    window.app = <SilkThreadStatic>new app.SilkThread();

    window.app.RegisterMenu('&#xf015;', '/', 'nav-header nav-menu-item', 'fa', false, []);
    window.app.RegisterMenu('Blog', '/blog', 'nav-menu-item', '', false, []);
    window.app.RegisterMenu('Reflection', '/feed', 'nav-menu-item', '', false, []);
    window.app.RegisterMenu('Media', '/media', 'nav-menu-item', '', false, []);

    window.app.StartUp();

});
