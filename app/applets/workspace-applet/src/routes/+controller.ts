import { useApplet } from "@celmino/ui";
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
        const { workspaceId, appletId } = useParams();
        const { database } = useGetDatabase(workspaceId, appletId);
        const { createCollection } = useCreateCollection(workspaceId);
        const { collections } = useListCollections(workspaceId, appletId);

        const [selectedCollection, setSelectedCollection] = useState<Models.Collection>(null);

        const navigate = useNavigate();

        const {applet} = useApplet();

        return (
            VStack({ alignment: cTopLeading })(
           /*      HStack(
                    HStack({ alignment: cLeading })(
                        Text(database?.name)
                            .fontFamily("ui-sans-serif,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol")
                            .fontSize(18)
                            .fontWeight("500")
                    )
                        .padding('6px 12px 6px 6px')
                )
                    .paddingTop('12px')
                    .paddingBottom('8px')
                    .paddingRight('24px')

                    .background('white')
                    .height(),
 */
                


                UIRouteOutlet().width('100%').height('100%')

            )
        )
    }

}