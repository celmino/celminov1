import { useApplet, useRealm } from "@celmino/platform";
import { useGetDocument } from "@realmocean/sdk";
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