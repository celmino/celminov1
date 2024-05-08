import { useGetOrganization, useGetRealm } from "@realmocean/sdk";
import { is } from "@tuval/core";
import { useParams } from "@tuval/forms";
import React, { Fragment } from "react";
import { PersonelRealmContextClass as PersonelRealmContextClass } from "./PersonelRealmContextClass";
import { PersonelRealmContextProvider } from "./context";
import { useGetSubdomain } from "../user/userContextRenderer";
import { useAccount } from "../account";




const Proxy = ({ control }) => (
    control.vp_ChildFunc().render()
)

export function PersonelRealmContextRenderer({ control }: { control: PersonelRealmContextClass }) {


    const { account } = useAccount();
    // const { realm, isLoading } = useGetRealm({ realmId: account.$id, enabled: true });


    return (
        is.function(control.vp_ChildFunc) ?
            (
                <PersonelRealmContextProvider.Provider value={{
                    realm: {
                        $id: account.$id,
                        name: account.name
                    }
                }}>
                    <Proxy control={control}></Proxy>
                </PersonelRealmContextProvider.Provider >
            ) : <Fragment />
    )
}
