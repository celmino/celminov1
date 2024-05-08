import { useRealm, useApplet } from "@celmino/platform";
import { useListDocuments, useCreateDocument, useUpdateDocument, Query } from "@realmocean/sdk";
import { Fragment, HStack, ReactView, ScrollView, UIController, UIView, UIViewBuilder, UIWidget, VStack, cTopLeading, cVertical, useDialogStack, useParams } from "@tuval/forms";
import { ViewsTab } from "../../views/ViewsTabMenu";
import React from "react";

class KanbanController extends UIController {
    LoadView(): UIView {
        const { viewId } = useParams();


        const { realm } = useRealm();
        const { applet } = useApplet();
        const workspaceId = realm.$id;
        const appletId = applet.$id;



        const { documents: groups, isLoading: isStatusesLoading } = useListDocuments(workspaceId, appletId, 'listStatuses', [
            Query.orderAsc('orderBy')
        ]);




        const { documents: items, isLoading: isItemsLoading } = useListDocuments(workspaceId, appletId, 'listItems', [
            Query.limit(1000)
        ]);



        const { documents: attributes, isLoading } = useListDocuments(workspaceId, appletId, 'fields', [
            Query.equal('collectionId', 'listItems')
        ]);

        const { createDocument: createTask } = useCreateDocument(workspaceId, appletId, 'listItems');
        const { updateDocument: updateTask } = useUpdateDocument(workspaceId);
        const { openDialog } = useDialogStack();


        return (
            (isItemsLoading || isStatusesLoading) ? Fragment() :
                VStack({ alignment: cTopLeading })(
                    ViewsTab(viewId),
                    UIWidget('com.celmino.widget.board')
                        .config({
                            workspaceId: workspaceId,
                            listId: appletId,
                            attributes: attributes,
                            groupBy: 'status',
                            groups: groups,
                            onItemSave: (item) => {
                                return (
                                    new Promise((resolve) => {
                                        createTask({
                                            data: item
                                        }, () => resolve(true))
                                    })
                                )
                            },
                            onItemClick: (item) => {

                            },
                            items: items,
                            /*   stages: [{
                                  $id: 'AAA',
                                  name: 'Todo',
                                  color: '#FF0000:#00FF00'
                              }] */
                        })
                )
        )
    }
}

export const KanbanView = () => ReactView(
    <KanbanController></KanbanController>
)