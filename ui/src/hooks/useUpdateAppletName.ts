import { useDeleteDatabase, useDeleteDocument, useUpdateDocument } from "@realmocean/sdk"
import { useApplet, useRealm } from "../context"


export const useUpdateAppletName = () => {
    const { realm } = useRealm();
    const {applet} = useApplet();
    const { updateDocument, isLoading } = useUpdateDocument(realm.$id);

    return {
        updateAppletName: () => {
          
        },
        isLoading: isLoading
    }

}