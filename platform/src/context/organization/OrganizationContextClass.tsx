
import { useGetOrganization } from "@realmocean/sdk";
import { UIView, ViewProperty } from "@tuval/forms";
import React from "react";
import OrganizationContextRenderer from "./OrganizationContextRenderer";




export class OrganizationContextClass extends UIView {


    /** @internal */
    @ViewProperty() vp_ChildFunc: () => UIView;

    public childFunc(value: () => UIView) {
        this.vp_ChildFunc = value;
        return this;
    }

    public render() {
        return (<OrganizationContextRenderer control={this} ></OrganizationContextRenderer>)
    }
}