
import { useGetOrganization } from "@realmocean/sdk";
import { UIView, ViewProperty } from "@tuval/forms";
import React from "react";
import AppletContextRenderer from "./AppletContextRenderer";




export class AppletContextClass extends UIView {


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
        return (<AppletContextRenderer control={this} ></AppletContextRenderer>)
    }
}