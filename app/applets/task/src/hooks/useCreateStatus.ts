import { useApplet, useRealm } from "@celmino/ui";
import { useCreateDocument } from "@realmocean/sdk";
import { ITaskStatus } from "./models/ITaskStatus";
import { Optional } from "@tuval/core";


export const useCreateStatus = () => {
    const { realm } = useRealm();
    const { applet } = useApplet();
    const { createDocument, isLoading } = useCreateDocument(realm.$id, applet.$id, 'listStatuses');
    const createStatus = (status: Optional<Omit<ITaskStatus, '$id'>>) => {
        createDocument({
            data: {
                ...status
            }
        })
    }
    return { createStatus, isLoading };
}