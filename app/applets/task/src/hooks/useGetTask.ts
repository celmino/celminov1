import { useApplet, useRealm } from "@celmino/ui";
import { ITask } from "./models/ITask";
import { useGetDocument } from "@realmocean/sdk";

export const useGetTask = (taskId: string): { task: ITask, isLoading: boolean } => {
    const { realm } = useRealm();
    const { applet } = useApplet();
    const { document, isLoading } = useGetDocument({
        projectId: realm.$id,
        databaseId: applet.$id,
        collectionId: 'listItems',
        documentId: taskId
    });

    return { task: document as unknown as ITask, isLoading };
}