import { useApplet, useRealm } from "@celmino/ui";
import { Models, useCreateCollection, useGetDatabase, useListCollections } from "@realmocean/sdk";
import {
    HStack,
    Text,
    UIFormController,
    UIRouteOutlet,
    UIWidget,
    VStack,
    cLeading,
    cTopLeading,
    useNavigate,
    useState
} from "@tuval/forms";


export class AppletController extends UIFormController {
    public LoadView() {

        const {realm} = useRealm();
        const {applet} = useApplet();
        const workspaceId = realm.$id;
        const appletId = applet.$id;

        const { database } = useGetDatabase(workspaceId, appletId);
        const { createCollection } = useCreateCollection(workspaceId);
        const { collections } = useListCollections(workspaceId, appletId);

        const [selectedCollection, setSelectedCollection] = useState<Models.Collection>(null);

        const navigate = useNavigate();
        return (
            VStack({ alignment: cTopLeading })(
                HStack(
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

                HStack({ alignment: cLeading })(
                    UIWidget('com.celmino.widget.tab-view')
                        .config({
                            //  allViews: views,
                            views: collections ?? [],
                            ////  isLoading: isTaskViewsLoading,
                            //selectedIndex: taskViews?.findIndex(x => x.id === object_view_id),
                            onChange: (index) => {
                                setSelectedCollection(collections[index]);
                                navigate(`/@/workspace/${workspaceId}/applet/${appletId}/collection-${collections[index].$id}`)
                                /*    setWidgetController({
                                       controller: class extends WidgetController { }
                                   });
                                   setSelectedViewIndex(index) */
                            },
                            actions: [
                                {
                                    title: 'New Collection',
                                    onClick: () => {
                                       //DynoDialog.Show(AddCollectionDialog(workspaceId, appletId));
                                       
                                    }
                                }
                            ]
                        })
                )
                    .background('white')
                    .borderTop('1px solid rgba(0,0,0,.05)')
                    .borderBottom('1px solid rgba(0,0,0,.05)')
                    .height(50),
                //Text(JSON.stringify(collections)),


                UIRouteOutlet().width('100%').height('100%')

            )
        )
    }

}