
import { useGetOrganization } from "@realmocean/sdk";
import { UIView, ViewProperty } from "@tuval/forms";
import React from "react";
import { useGetSubdomain } from "../user/userContextRenderer";
import { is } from "@tuval/core";
import { PersonelRealmContextRenderer } from "./PersonelRealmContextRenderer";





export class PersonelRealmContextClass extends UIView {


    /** @internal */
    @ViewProperty() vp_ChildFunc: () => UIView;

    public childFunc(value: () => UIView) {
        this.vp_ChildFunc = value;
        return this;
    }

    public render() {

       
            return (<PersonelRealmContextRenderer control={this} ></PersonelRealmContextRenderer>)
       


    }
}