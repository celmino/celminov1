import { useApplet, useRealm } from "@celmino/platform";
import { useCreateDocument } from "@realmocean/sdk";
import { Optional } from "@tuval/core";
import { IView } from "./models/IView";


export const useCreateView = () => {
    const { realm } = useRealm();
    const { applet } = useApplet();
    const { createDocument, isLoading } = useCreateDocument(realm.$id, applet.$id, 'views');
    const createView= (view: Optional<Omit<IView, '$id'>>,  onSuccess: Function = ()=> void 0) => {
        createDocument({
            data: {
                ...view
            }
        }, (view)=> onSuccess(view) )
    }
    return { createView, isLoading };
}