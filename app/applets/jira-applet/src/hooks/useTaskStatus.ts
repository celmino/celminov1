import { useApplet, useRealm } from "@celmino/platform";
import { Query, useListDocuments } from "@realmocean/sdk";
import { ITaskStatus } from "./models/ITaskStatus";


export const useTaskStatus = (): { statuses: ITaskStatus[], isLoading: boolean } => {
    const { realm } = useRealm();
    const { applet } = useApplet();
    const { documents, isLoading } = useListDocuments(realm.$id, applet.$id, 'listStatuses', [
        Query.orderAsc('orderBy')
    ]);

    return { statuses: documents as unknown as ITaskStatus[], isLoading };
}