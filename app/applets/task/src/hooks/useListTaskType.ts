
import { useApplet, useRealm } from "@celmino/platform";
import { Query, useListDocuments } from "@realmocean/sdk";
import { ITaskStatus } from "./models/ITaskStatus";
import { IView } from "./models/IView";
import { ITaskType } from "./models/ITaskType";


export const useListTaskType = (): { taskTypes: ITaskType[], isLoading: boolean } => {
    const { realm } = useRealm();
    const { applet } = useApplet();
    const { documents, isLoading } = useListDocuments(realm.$id, applet.$id, 'taskType', [
        Query.orderAsc('orderBy')
    ]);

    return { taskTypes: documents as unknown as ITaskType[], isLoading };
}