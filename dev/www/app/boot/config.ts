requirejs.config({
    baseUrl: "libs/",
    paths: {
        "bootstrap": "bootstrap/bootstrap",
        // "historyjs": "Scripts/history/native.history",
        "crossroads": "crossroads/crossroads.min",
        "jquery": "jquery/jquery-3.2.1.min",
        "knockout": "knockout/knockout-latest",
        // "knockout-projections": "Scripts/knockout/knockout-projections.min",
        "signals": "crossroads/signals",
        "text": "require/text",
        "underscore": "underscore/underscore",
        "amplify": "amplify/amplify.min",
    },
    shim: {
        "bootstrap": {
            deps: ["jquery"]
        }
    }
});

requirejs(['jquery', 'knockout', /*'./router',*/ "../app/boot/spa", 'bootstrap'],  ($: JQuery, ko: KnockoutStatic, spa: any) =>
{    
    alert( "SPA Loaded");
});