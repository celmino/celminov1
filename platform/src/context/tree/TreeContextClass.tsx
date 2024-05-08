
import { useGetOrganization } from "@realmocean/sdk";
import { UIView, ViewProperty } from "@tuval/forms";
import React from "react";
import { TreeContextRenderer } from "./TreeContextRenderer";




export class TreeContextClass extends UIView {


    /** @internal */
    @ViewProperty() vp_ChildFunc: () => UIView;

    public childFunc(value: () => UIView) {
        this.vp_ChildFunc = value;
        return this;
    }

     /** @internal */
     @ViewProperty() vp_SetCanDrag: (value: boolean)=> void;

     public setCanDrag(value:  (value: boolean)=> void) {
         this.vp_SetCanDrag = value;
         return this;
     }

    public render() {
        return (<TreeContextRenderer control={this} ></TreeContextRenderer>)
    }
}