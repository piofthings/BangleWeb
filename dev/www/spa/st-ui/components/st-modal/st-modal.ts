import "text!./st-modal.html";
import * as ko from "knockout";
import { ModalConfig } from "../../view-models/st-modal/st-modal-config";
export var template = requirejs("text!./st-modal.html");

export class viewModel {
    childComponent: KnockoutObservable<string> = ko.observable<string>("");
    childComponentParams: KnockoutObservable<any> = ko.observable<any>();
    closeOnBackground: KnockoutObservable<boolean> = ko.observable<boolean>(true);
    modalConfig: KnockoutObservable<ModalConfig>;

    constructor(params: any) {
        this.childComponent(params.childComponent());
        this.childComponentParams(params.childComponentParams());
        this.modalConfig = params.modalConfig;
    }

    backgroundClick = (vm: any, event:Event) => {
        if ($(event.target).attr("id") != null && $(event.target).attr("id") == "modal-background") {
            console.log("Target:" + event.target);
            if (this.closeOnBackground()) {
                this.closeDialog();
            }
        }
        else {
            event.preventDefault();
        }
    }

    closeDialog = () => {
        this.modalConfig().isVisible(false);
    }
}
