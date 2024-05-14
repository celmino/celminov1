import { useGetDocument, useGetOrganization, useGetRealm } from "@realmocean/sdk";
import { is } from "@tuval/core";
import { ReactView, UIController, UIView, useParams } from "@tuval/forms";
import React, { Fragment } from "react";
import { AppletContextClass } from "./AppletContextClass";
import { AppletContextProvider } from "./context";
import { RealmContextProvider, useRealm } from "../realm";


class Controller extends UIController {
    public override LoadView(): UIView {
        const { control } = this.props;
        return control.vp_ChildFunc();
    }
}


const Proxy = ({applet,  control }) => (
    control.vp_ChildFunc(applet).render()
)



function AppletContextRenderer({ control }: { control: AppletContextClass }) {

    const { realm } = useRealm();
    //const { appletId = control.vp_AppletId } = useParams();

   
    const { document: applet, isLoading } = useGetDocument({ projectId: realm.$id, databaseId: 'workspace', collectionId: 'applets', documentId: control.vp_AppletId });

    return (

        is.function(control.vp_ChildFunc) && !isLoading ?
            (
                <AppletContextProvider.Provider value={{ applet }}>

                    <Proxy applet={applet} control={control}></Proxy>

                </AppletContextProvider.Provider >
            ) : <Fragment />
    )

}


export default AppletContextRenderer;