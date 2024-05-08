import { useDeleteDatabase, useDeleteDocument } from "@realmocean/sdk"
import { useRealm } from "../context"


export const useDeleteApplet = () => {
    const { realm } = useRealm();
    const { deleteDatabase, isLoading: isDatabaseDeleting } = useDeleteDatabase(realm.$id);
    const { deleteDocument, isLoading } = useDeleteDocument(realm.$id);

    return {
        deleteApplet: (appletId: string, onSuccess: Function = () => void 0) => {
            deleteDocument({
                databaseId: 'workspace',
                collectionId: 'ws_tree',
                documentId: appletId
            }, () => {

                deleteDatabase({
                    databaseId: appletId
                }, () => {

                    
                    onSuccess();
                });

            })
        },
        isLoading: isLoading || isDatabaseDeleting
    }

}