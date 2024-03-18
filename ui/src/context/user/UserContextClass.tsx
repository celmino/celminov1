
import { useGetOrganization } from "@realmocean/sdk";
import { UIView, ViewProperty } from "@tuval/forms";
import React from "react";
import {UserContextRenderer} from "./userContextRenderer";




export class UserContextClass extends UIView {

    /** @internal */
    @ViewProperty() vp_ChildFunc: () => UIView;

    public childFunc(value: () => UIView) {
        this.vp_ChildFunc = value;
        return this;
    }

    public render() {
        return (<UserContextRenderer control={this} ></UserContextRenderer>)
    }
}