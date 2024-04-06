import { useGetOrganization, useUpdateDatabase, useUpdateDocument } from "@realmocean/sdk";
import React from "react";
import { createContext } from "react";
import { useRealm } from "../realm";

export const AppletContextProvider = createContext<any>({});

export const useApplet = (): { applet: any, updateAppletName: Function, isLoading: boolean } => {
    const { realm } = useRealm();
    const e = React.useContext(AppletContextProvider);
    const { updateDatabase, isLoading: isDatabaseUpdating } = useUpdateDatabase(realm.$id);
    const { updateDocument, isLoading } = useUpdateDocument(realm.$id);

    return {
        applet: e?.applet,
        updateAppletName: (name: string, onSuccess: Function = ()=> void 0) => {
            updateDatabase({
                databaseId: e?.applet.$id,
                name: name
            }, () => {
                updateDocument({
                    databaseId: 'workspace',
                    collectionId: 'applets',
                    documentId: e?.applet.$id,
                    data: {
                        name: name
                    }
                }, () => {
                    updateDocument({
                        databaseId: 'workspace',
                        collectionId: 'ws_tree',
                        documentId: e?.applet.$id,
                        data: {
                            name: name
                        }
                    }, () => {
                        onSuccess();
                    })
                })
            })
        },
        isLoading

    };
}

