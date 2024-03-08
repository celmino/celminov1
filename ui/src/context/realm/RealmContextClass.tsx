
import { useGetOrganization } from "@realmocean/sdk";
import { UIView, ViewProperty } from "@tuval/forms";
import React from "react";
import RealmContextRenderer from "./RealmContextRenderer";




export class RealmContextClass extends UIView {


    /** @internal */
    @ViewProperty() vp_ChildFunc: () => UIView;

    public childFunc(value: () => UIView) {
        this.vp_ChildFunc = value;
        return this;
    }

    public render() {
        return (<RealmContextRenderer control={this} ></RealmContextRenderer>)
    }
}