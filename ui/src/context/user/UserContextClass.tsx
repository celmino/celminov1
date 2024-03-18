
import { useGetOrganization } from "@realmocean/sdk";
import { UIView, ViewProperty } from "@tuval/forms";
import React from "react";
import { NewUserContextRenderer, UserContextRenderer } from "./userContextRenderer";




export class UserContextClass extends UIView {

    /** @internal */
    @ViewProperty() vp_ChildFunc: () => UIView;

    public childFunc(value: () => UIView) {
        this.vp_ChildFunc = value;
        return this;
    }

    public render() {
        const urlParams = new URLSearchParams(window.location.search);
        const secret = urlParams.get('secret');
        const userId = urlParams.get('userId');
        if (userId != null && secret != null) {
            return (<NewUserContextRenderer control={this} ></NewUserContextRenderer>)
        } else {
            return (<UserContextRenderer control={this} ></UserContextRenderer>)
        }
    }
}