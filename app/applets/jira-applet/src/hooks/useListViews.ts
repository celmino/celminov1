import { useApplet, useRealm } from "@celmino/platform";
import { useListDocuments } from "@realmocean/sdk";
import { IView } from "./models/IView";


export const useListViews = (): { views: IView[], isLoading: boolean } => {
    const { realm } = useRealm();
    const { applet } = useApplet();
    const { documents, isLoading } = useListDocuments(realm.$id, applet.$id, 'views', [
        //Query.orderAsc('orderBy')
    ]);

    return { views: documents as unknown as IView[], isLoading };
}