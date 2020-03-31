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

requirejs(["jQuery", "knockout", "spa", "text", "RSVP", "amplify", "bootstrap"], ($: JQuery, ko: KnockoutStatic, app) => {
    window.app = null;
    window.app = <SilkThreadStatic>new app.SilkThread();

    // window.app.RegisterComponent("home", "./ui/pages/home/home");
    // window.app.RegisterComponent("blog", "./ui/pages/blog/blog");
    // window.app.RegisterComponent("media", "./ui/pages/media/blog");
    // window.app.RegisterComponent("login", "./ui/pages/login/login");
    // window.app.RegisterComponent("profile", "./ui/pages/profile/profile");
    // window.app.RegisterComponent("verify", "./ui/pages/verify/verify");
    // window.app.RegisterComponent("register", "./ui/pages/register/register");
    // window.app.RegisterComponent("reflections", "./ui/pages/reflections/reflections");
    // window.app.RegisterComponent("invitation", "./ui/pages/invitation/invitation");
    // window.app.RegisterComponent("print-preview", "./ui/print-preview/print-preview");
    // window.app.RegisterComponent("profile-editor", "./ui/components/profile-editor/profile-editor");
    // window.app.RegisterComponent("invitations-list", "./ui/components/invitations-list/invitations-list");
    // window.app.RegisterComponent("invitation-editor", "./ui/components/invitation-editor/invitation-editor");

    window.app.RegisterMenu('&#xf015;', '/', 'nav-header nav-menu-item', 'fa', false, []);
    window.app.RegisterMenu('Blog', '/blog', 'nav-menu-item', '', false, []);
    window.app.RegisterMenu('Reflection', '/feed', 'nav-menu-item', '', false, []);
    window.app.RegisterMenu('Media', '/media', 'nav-menu-item', '', false, []);

    window.app.StartUp();

});
