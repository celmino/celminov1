import { useApplet, useRealm } from "@celmino/ui";
import { Models, useCreateCollection, useGetDatabase, useListCollections } from "@realmocean/sdk";
import {
    UIFormController,
    UIRouteOutlet,
    VStack,
    cTopLeading,
    useNavigate,
    useParams,
    useState, Text
} from "@tuval/forms";


export class AppletController extends UIFormController {
    public LoadView() {
   
   


        return (
            VStack({ alignment: cTopLeading })(
                 UIRouteOutlet().width('100%').height('100%')
            )
        )
    }

}