import { useApplet, useRealm } from "@celmino/ui";
import { Query, useGetDocument, useListDocuments } from "@realmocean/sdk";
import { ITaskStatus } from "./models/ITaskStatus";
import { IView } from "./models/IView";


export const useGetView = (viewId: string): { view: IView, isLoading: boolean } => {
    const { realm } = useRealm();
    const { applet } = useApplet();
    const { document, isLoading } = useGetDocument({
        projectId: realm.$id,
        databaseId: applet.$id,
        collectionId: 'views',
        documentId: viewId
    });

    return { view: document as unknown as IView, isLoading };
}