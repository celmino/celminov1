
import { useGetOrganization } from "@realmocean/sdk";
import { UIView, ViewProperty } from "@tuval/forms";
import React from "react";
import AppletContextRenderer from "./AppletContextRenderer";
import { IApplet } from "../../models/IApplet";




export class AppletContextClass extends UIView {


     /** @internal */
     @ViewProperty() vp_AppletId: string;

     public appletId(value: string) {
         this.vp_AppletId = value;
         return this;
     }

    /** @internal */
    @ViewProperty() vp_ChildFunc: (applet: IApplet) => UIView;

    public childFunc(value: (applet: IApplet) => UIView) {
        this.vp_ChildFunc = value;
        return this;
    }

    public render() {
        return (<AppletContextRenderer control={this} ></AppletContextRenderer>)
    }
}