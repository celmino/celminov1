
import { useGetOrganization } from "@realmocean/sdk";
import { UIView, ViewProperty } from "@tuval/forms";
import React from "react";
import {AnonymousContextRenderer} from "./AnonymousContextRenderer";




export class AnonymousContextClass extends UIView {

    /** @internal */
    @ViewProperty() vp_ChildFunc: () => UIView;

    public childFunc(value: () => UIView) {
        this.vp_ChildFunc = value;
        return this;
    }

    public render() {
        return (<AnonymousContextRenderer control={this} ></AnonymousContextRenderer>)
    }
}