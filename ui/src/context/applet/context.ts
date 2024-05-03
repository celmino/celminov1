import { useGetOrganization, useListDocuments, useUpdateDatabase, useUpdateDocument } from "@realmocean/sdk";
import React from "react";
import { createContext } from "react";
import { useRealm } from "../realm";
import { useMemo } from "@tuval/forms";

export const AppletContextProvider = createContext<any>({});

export const useApplet = (): { applet: any, updateAppletName: Function, settings: any, isLoading: boolean } => {
    const { realm } = useRealm();
    const e = React.useContext(AppletContextProvider);
    const { updateDatabase, isLoading: isDatabaseUpdating } = useUpdateDatabase(realm.$id);
    const { updateDocument, isLoading } = useUpdateDocument(realm.$id);
    
    const { documents: _settings, isLoading: isSettingsLoading } = useListDocuments(realm.$id, e.applet.$id, 'settings');

    const settings = useMemo(() => {
        const settings = {};
        if (!isSettingsLoading) {
            _settings.forEach(setting => {
                const key = setting.key;
                let value = setting.value;
                try {
                    value = JSON.parse(setting.value);
                } catch { }
                settings[key] = value;
            })
        }

        return settings;

    }, [_settings])


    return {
        applet: e?.applet,
        updateAppletName: (name: string, onSuccess: Function = () => void 0) => {
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
        settings,
        isLoading: isLoading || isSettingsLoading

    };
}

