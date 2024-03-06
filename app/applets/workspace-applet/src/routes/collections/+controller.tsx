import { Models, Query, useCreateCollection, useGetDatabase, useGetDocument, useGetRealm, useListCollections, useListDocuments, useUpdateDocument } from "@realmocean/sdk";
import {
    DialogStack,
    HStack,
    ReactView,
    Text,
    UIFormController,
    UIRouteOutlet,
    UIWidget,
    VStack,
    cLeading,
    cTopLeading,
    getAppFullName,
    useNavigate,
    useParams,
    useState
} from "@tuval/forms";

import { AddCollectionDialog } from "../../dialogs/AddCollection/AddCollectionDialog";
import { DynoDialog } from "@celmino/ui";
import { EventBus } from "@tuval/core";
import React from "react";


export class CollectionsController extends UIFormController {
    public LoadView() {
        const { workspaceId, appletId } = useParams();
        const { database } = useGetDatabase(workspaceId, appletId);
        const { createCollection } = useCreateCollection(workspaceId);

        const { documents: collections } = useListDocuments(workspaceId, appletId, 'collections', [
            Query.equal('type', 'userCollection')
        ]);

        const { realm } = useGetRealm({ realmId: workspaceId, enabled: true });
        const { document: applet } = useGetDocument({
            projectId: workspaceId,
            databaseId: 'workspace',
            collectionId: 'applets',
            documentId: appletId,

        })

        const [selectedCollection, setSelectedCollection] = useState<Models.Document>(null);
        const { updateDocument } = useUpdateDocument(workspaceId);
        const navigate = useNavigate();
        return (
            ReactView(
                <DialogStack>{
                    VStack({ alignment: cTopLeading, spacing: 10 })(
                        HStack(
                            HStack(
                                UIWidget("com.tuvalsoft.widget.icons")
                                    .config({
                                        onChange: (value) => {
                                            updateDocument({
                                                databaseId: 'workspace',
                                                collectionId: 'applets',
                                                documentId: appletId,
                                                data: {
                                                    iconName: value.iconName,
                                                    iconCategory: value.iconCategory
                                                }
                                            }, () => {
                                                updateDocument({
                                                    databaseId: 'workspace',
                                                    collectionId: 'ws_tree',
                                                    documentId: appletId,
                                                    data: {
                                                        iconName: value.iconName,
                                                        iconCategory: value.iconCategory
                                                    }
                                                }, () => {
                                                    EventBus.Default.fire('applet.added', { treeItem: value })
                                                })
                                            })
                                        },
                                        selectedIcon: applet?.iconName,
                                        color: applet?.themeColor,
                                        selectedCategory: applet?.iconCategory,
                                        width: 40,
                                        height: 40
                                    })
                            ).padding(5)
                                .width(),
                            HStack({ alignment: cLeading })(
                                Text(applet?.name)
                                    .fontFamily("ui-sans-serif,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol")
                                    .fontSize(24)
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
                                    menu: [
                                        {
                                            title: 'Edit',
                                            onClick: () => {
                                                //DynoDialog.Show(AddTextFieldDialog(workspaceId, databaseId, collectionId))
                                            }
                                        },
                                        {
                                            title: 'Delete',
                                            onClick: () => {

                                            }
                                        }
                                    ],
                                    ////  isLoading: isTaskViewsLoading,
                                    //selectedIndex: taskViews?.findIndex(x => x.id === object_view_id),
                                    onChange: (index) => {
                                        setSelectedCollection(collections[index]);
                                        navigate(`/app/${realm?.name}-${workspaceId}/${applet?.name}-${appletId}/collections/${collections[index].name}-${collections[index].$id}`)
                                        /*    setWidgetController({
                                               controller: class extends WidgetController { }
                                           });
                                           setSelectedViewIndex(index) */
                                    },
                                    actions: [
                                        {
                                            title: 'New Collection',
                                            onClick: () => {
                                                DynoDialog.Show(AddCollectionDialog(workspaceId, appletId));
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

                    ).render()
                }
                </DialogStack>
            )
        )
    }

}