import { useGetOrganization } from "@realmocean/sdk";
import { is } from "@tuval/core";
import { useParams } from "@tuval/forms";
import React from "react";
import { RealmContextClass } from "./RealmContextClass";
import { RealmContextProvider } from "./context";



function RealmContextRenderer({ control }: { control: RealmContextClass }) {


    const { organizationId } = useParams();
    const { organization, isLoading } = useGetOrganization(organizationId);


    return (
        is.function(control.vp_ChildFunc) || !isLoading ?
            (
                <RealmContextProvider.Provider value={organization}>

                    {
                        control.vp_ChildFunc()?.render()

                    }

                </RealmContextProvider.Provider >
            ) : null
    )
}

export default RealmContextRenderer;