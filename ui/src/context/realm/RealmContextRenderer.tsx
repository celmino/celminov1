import { useGetOrganization, useGetRealm } from "@realmocean/sdk";
import { is } from "@tuval/core";
import { useParams } from "@tuval/forms";
import React, { Fragment } from "react";
import { RealmContextClass } from "./RealmContextClass";
import { RealmContextProvider } from "./context";
import { useGetSubdomain } from "../user/userContextRenderer";




const Proxy = ({ control }) => (
    control.vp_ChildFunc().render()
)

export function RealmContextRenderer({ control }: { control: RealmContextClass }) {


    const { workspaceId } = useParams();
    const { realm, isLoading } = useGetRealm({ realmId: workspaceId, enabled: true });


    return (
        is.function(control.vp_ChildFunc) && !isLoading ?
            (
                <RealmContextProvider.Provider value={{ realm }}>
                    <Proxy control={control}></Proxy>
                </RealmContextProvider.Provider >
            ) : <Fragment />
    )
}


export function SubDomainRealmContextRenderer({ control }: { control: RealmContextClass }) {


    const subdomain = useGetSubdomain();


    return (
        is.function(control.vp_ChildFunc) ?
            (
                <RealmContextProvider.Provider value={{
                    realm: {
                        $id: subdomain,
                        name: 'Realm'
                    }
                }}>
                    <Proxy control={control}></Proxy>
                </RealmContextProvider.Provider >
            ) : <Fragment />
    )
}


