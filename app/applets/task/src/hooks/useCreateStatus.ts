import { useApplet, useRealm } from "@celmino/platform";
import { useCreateDocument } from "@realmocean/sdk";
import { ITaskStatus } from "./models/ITaskStatus";
import { Optional } from "@tuval/core";


export const useCreateStatus = () => {
    const { realm } = useRealm();
    const { applet } = useApplet();
    const { createDocument, isLoading } = useCreateDocument(realm.$id, applet.$id, 'listStatuses');
    const createStatus = (status: Optional<Omit<ITaskStatus, '$id'>>,  onSuccess: Function = ()=> void 0) => {
        createDocument({
            data: {
                ...status
            }
        }, (status)=> onSuccess(status) )
    }
    return { createStatus, isLoading };
}