import { useRealm, useApplet } from "@celmino/ui";
import { useCreateDocument, useUpdateDocument } from "@realmocean/sdk";
import { Optional } from "@tuval/core";
import { IView } from "./models/IView";

export const useUpdateTaskTypeOrder = () => {
    const { realm } = useRealm();
    const { applet } = useApplet();
    const { updateDocument, isLoading } = useUpdateDocument(realm.$id);
    const updateTaskTypeOrder = (taskTypeId: string, orderNo: number, onSuccess: Function = () => void 0) => {
        updateDocument({
            databaseId: applet.$id,
            collectionId: 'taskType',
            documentId: taskTypeId,
            data: {
                orderBy: orderNo
            }
        })
    }
    return { updateTaskTypeOrder, isLoading };
}