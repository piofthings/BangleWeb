import "text!./home.html";
import * as ko from "knockout";
import { BaseComponent } from "st-ui/components/st-base-component/base-component";
import { stMenuItem } from "st-ui/view-models/st-nav-menu/st-menu-item";
import { MenuItemType } from "../../st-ui/view-models/st-nav-menu/st-menu-item-type";

export var template = require("text!./home.html");
export class viewModel extends BaseComponent {

    userName: KnockoutObservable<string> = ko.observable<string>("");
    loggedIn: KnockoutComputed<boolean> = ko.pureComputed<boolean>(() => {
        return this.userName() !== null && this.userName() != '';
    });
    brandMenuItems =ko.observableArray<MenuItem>([]);

    leftMenuItems: KnockoutObservableArray<MenuItem> ;
    rightMenuItems: KnockoutObservableArray<MenuItem> ;

    constructor(params: any) {
        super(params);
        this.id(params.id || "st-nav-menu");
        if (params.userName && params.userName()) {
            this.userName(params.userName());
        }
        if (params.leftMenuItems != null) {
            this.leftMenuItems = params.leftMenuItems;
        }
        else{
            this.leftMenuItems = ko.observableArray<MenuItem>([])
        }
        if (params.rightMenuItems != null) {
            this.rightMenuItems = params.rightMenuItems;
        }
        else{
            this.rightMenuItems= ko.observableArray<MenuItem>([])
        }
    }
    koDescendantsComplete = (page: HTMLElement) =>{
        this.setupMenu();
    }

    private setupMenu = () =>{
        let brandMenuItem = new stMenuItem();
        brandMenuItem.needsAuthentication(false);
        brandMenuItem.text("Bangle Web");
        brandMenuItem.isVisible(true);
        brandMenuItem.hrefCss("navbar-item")
        brandMenuItem.href("/");
        brandMenuItem.type(MenuItemType.Anchor)
        this.brandMenuItems.push(brandMenuItem);

        let togglerButton = new stMenuItem();
        togglerButton.needsAuthentication(false);
        togglerButton.text("");
        togglerButton.isVisible(true);
        togglerButton.css("navbar-toggler")
        togglerButton.hrefCss("navbar-toggler-icon");
        togglerButton.type(MenuItemType.ToggleButton)
        this.brandMenuItems.push(togglerButton);

        let gpsTracksTab = new stMenuItem();
        gpsTracksTab.needsAuthentication(false);
        gpsTracksTab.text("Walks/Rides");
        gpsTracksTab.css("navbar-item");
        gpsTracksTab.hrefCss("nav-link");
        gpsTracksTab.href("/gps");
        gpsTracksTab.isVisible(true);
        this.leftMenuItems.push(gpsTracksTab);



    }
}
