interface Window
{
    app: SilkThreadStatic;
}

interface SilkThreadStatic {
    StartUp : () => void;
    RegisterRoute : (newRoute: Route) => void;
    RegisterComponent : (name: string, location: string) => void;
    RegisterMenu : (text: string, url: string, menuCssClass: string, menuHrefClass: string, authenticated: boolean, roles: Array<string> ) => void;

    AppRouter: RouterStatic;
}


interface Route {
    path : KnockoutObservable<string> ;
    title : KnockoutObservable<string> ;
    pageComponent: KnockoutObservable<string> ;
    roles : KnockoutObservableArray<string> ;
    userName: KnockoutObservable<string>;
    userId: KnockoutObservable<string>;
    crRoute: KnockoutObservable<any>;
    leftMenuItems: KnockoutObservableArray<MenuItem>;
    rightMenuItems: KnockoutObservableArray<MenuItem>;
}

interface RouterStatic {
    RegisterRoute : (newRoute: Route) => void;
    ParseCurrentRoute: () => void;
    Parse: (stRoute: string) => void;
}

interface MenuItem {
    text: KnockoutObservable<string>;
    href: KnockoutObservable<string> ;
    css: KnockoutObservable<string> ;
    styles: KnockoutObservable<string> ;
    isVisible: KnockoutObservable<boolean> ;
    hrefCss: KnockoutObservable<string> ;
    needsAuthentication: KnockoutObservable<boolean> ;
    authorizedForRoles: KnockoutObservableArray<string>;
}
