import { useParams } from "@tuval/forms";
import { OrganizationContextClass } from "./OrganizationContextClass";
import { OrganizationContextProvider, useOrganization } from "./context";
import { is } from "@tuval/core";
import { useGetOrganization } from "@realmocean/sdk";
import React from "react";



function OrganizationContextRenderer({ control }: { control: OrganizationContextClass }) {


    const { organizationId } = useParams();
    const { organization, isLoading } = useGetOrganization(organizationId);


    return (
        is.function(control.vp_ChildFunc) || !isLoading ?
            (
                <OrganizationContextProvider.Provider value={organization}>

                    {
                        control.vp_ChildFunc()?.render()

                    }

                </OrganizationContextProvider.Provider >
            ) : null
    )
}

export default OrganizationContextRenderer;