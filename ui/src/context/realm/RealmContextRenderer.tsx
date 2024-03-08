import { useGetOrganization, useGetRealm } from "@realmocean/sdk";
import { is } from "@tuval/core";
import { useParams } from "@tuval/forms";
import React from "react";
import { RealmContextClass } from "./RealmContextClass";
import { RealmContextProvider } from "./context";



function RealmContextRenderer({ control }: { control: RealmContextClass }) {


    const { workspaceId } = useParams();
    const { realm, isLoading } = useGetRealm({ realmId: workspaceId, enabled: true });


    return (
        is.function(control.vp_ChildFunc) || !isLoading ?
            (
                <RealmContextProvider.Provider value={realm}>

                    {
                        control.vp_ChildFunc()?.render()

                    }

                </RealmContextProvider.Provider >
            ) : null
    )
}

export default RealmContextRenderer;