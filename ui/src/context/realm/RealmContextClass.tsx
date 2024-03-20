
import { useGetOrganization } from "@realmocean/sdk";
import { UIView, ViewProperty } from "@tuval/forms";
import React from "react";
import { useGetSubdomain } from "../user/userContextRenderer";
import { is } from "@tuval/core";
import { RealmContextRenderer, SubDomainRealmContextRenderer } from "./RealmContextRenderer";





export class RealmContextClass extends UIView {


    /** @internal */
    @ViewProperty() vp_ChildFunc: () => UIView;

    public childFunc(value: () => UIView) {
        this.vp_ChildFunc = value;
        return this;
    }

    public render() {

        const subdomain = useGetSubdomain();
       
        if (is.nullOrEmpty(subdomain)) {
            return (<RealmContextRenderer control={this} ></RealmContextRenderer>)
        } else {
            return (<SubDomainRealmContextRenderer control={this} ></SubDomainRealmContextRenderer>)
        }


    }
}