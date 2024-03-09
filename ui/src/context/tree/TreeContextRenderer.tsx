import { useGetDocument, useGetOrganization, useGetRealm } from "@realmocean/sdk";
import { is } from "@tuval/core";
import { ReactView, UIController, UIView, useParams } from "@tuval/forms";
import React, { Fragment } from "react";
import { TreeContextClass } from "./TreeContextClass";
import { TreeContextProvider } from "./context";
import { RealmContextProvider, useRealm } from "../realm";


class Controller extends UIController {
    public override LoadView(): UIView {
        const { control } = this.props;
        return control.vp_ChildFunc();
    }
}


const Proxy = ({ control }) => (
    control.vp_ChildFunc().render()
)

export function TreeContextRenderer({ control }: { control: TreeContextClass }) {

    const { realm } = useRealm();
    const { appletId } = useParams();

    const { document: applet, isLoading } = useGetDocument({ projectId: realm.$id, databaseId: 'workspace', collectionId: 'applets', documentId: appletId });

    return (

        is.function(control.vp_ChildFunc) && !isLoading ?
            (
                <TreeContextProvider.Provider value={{ setCanDrag: control.vp_SetCanDrag }}>

                    <Proxy control={control}></Proxy>

                </TreeContextProvider.Provider >
            ) : <Fragment />
    )

}


