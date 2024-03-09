import { useGetDocument, useGetOrganization, useGetRealm } from "@realmocean/sdk";
import { is } from "@tuval/core";
import { useParams } from "@tuval/forms";
import React, { Fragment } from "react";
import { AppletContextClass } from "./AppletContextClass";
import { AppletContextProvider } from "./context";
import { useRealm } from "../realm";



function AppletContextRenderer({ control }: { control: AppletContextClass }) {

    const { realm } = useRealm();
    const { appletId } = useParams();
    const { document: applet, isLoading } = useGetDocument({ projectId: realm.$id, databaseId: 'workspace', collectionId: 'applets', documentId: appletId });


    return (
        is.function(control.vp_ChildFunc) || !isLoading ?
            (
                <AppletContextProvider.Provider value={{applet}}>

                    {

                        control.vp_ChildFunc()?.render()

                    }

                </AppletContextProvider.Provider >
            ) : <Fragment />
    )
}

export default AppletContextRenderer;