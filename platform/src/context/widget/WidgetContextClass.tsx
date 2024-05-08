
import { UIView, ViewProperty } from "@tuval/forms";
import React from "react";
import { IApplet } from "../../models/IApplet";
import WidgetContextRenderer from "./WidgetContextRenderer";




export class WidgetContextClass extends UIView {


     /** @internal */
     @ViewProperty() vp_AppletId: string;

     public appletId(value: string) {
         this.vp_AppletId = value;
         return this;
     }

    /** @internal */
    @ViewProperty() vp_ChildFunc: () => UIView;

    public childFunc(value: () => UIView) {
        this.vp_ChildFunc = value;
        return this;
    }

    public render() {
        return (<WidgetContextRenderer control={this} ></WidgetContextRenderer>)
    }
}