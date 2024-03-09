import {
    DialogStack,
    HStack,
    ReactView,
    ScrollView,
    UIFormController,
    UIRouteOutlet,
    UIViewBuilder,
    UIWidget,
    VStack,
    cLeading, cTopLeading,
    cVertical,
    useDialogStack,
    useNavigate,
    useParams, Text, Fragment, Icon, SvgIcon, cTop
} from "@tuval/forms";


import { ID, Query, Services, useCreateDocument, useCreateStringAttribute, useGetDocument, useListDocuments, useUpdateDocument } from "@realmocean/sdk";
import { EventBus } from "@tuval/core";
import React from "react";
import { ActionPanel } from "../../views/ActionPanel";
import { ViewHeader } from "../../views/ViewHeader";
import { SelectSiderDialog, useApplet } from '@celmino/ui'

function replaceNonMatchingCharacters(originalText) {
    const replacementTable = {
        'ı': 'i',
        ' ': '_'
    };
    // Replacement table'ı kullanarak metindeki kriterlere uymayan karakterleri değiştir
    var replacedText = originalText.replace(/[^a-zA-Z0-9._-]/g, function (match) {
        return replacementTable[match] || match; // Eğer replacement table'da varsa değiştir, yoksa aynı karakteri koru
    });

    return replacedText;
}

export class ListController extends UIFormController {


    public LoadView() {
        const navigate = useNavigate();

        const { workspaceId, appletId, viewId } = useParams();
        const { applet } = useApplet();
        /*  const { document: applet } = useGetDocument({
             projectId: workspaceId,
             databaseId: 'workspace',
             collectionId: 'applets',
             documentId: appletId
         }); */

        /* const { documents: views, isLoading: isViewsLoading } = useListDocuments(workspaceId, appletId, 'wm_list_' + listId + '_views');
       

        



       
        const { createDocument: createView } = useCreateDocument(workspaceId, appletId, 'wm_list_' + listId + '_views');
        const { updateDocument } = useUpdateDocument(workspaceId); */

        const { documents: items, isLoading: isItemsLoading } = useListDocuments(workspaceId, appletId, 'listItems');
        const { documents: groups, isLoading: isStatusesLoading } = useListDocuments(workspaceId, appletId, 'listStatuses');
        const { createDocument: createTask } = useCreateDocument(workspaceId, appletId, 'listItems');
        const { updateDocument: updateTask } = useUpdateDocument(workspaceId);

        const { documents: attributes, isLoading } = useListDocuments(workspaceId, appletId, 'fields', [
            Query.equal('collectionId', 'listItems')
        ]);

        const { createDocument: createField } = useCreateDocument(workspaceId, appletId, 'fields', [
            Query.equal('collectionId', 'listItems')
        ])

        const { createStringAttribute } = useCreateStringAttribute(workspaceId);

        return (

            (isLoading || isStatusesLoading) ? Fragment() :
                ReactView(
                    <DialogStack>
                        {
                            VStack({ alignment: cTopLeading })(
                                //ActionPanel(),
                                //ViewHeader('test'),

                                VStack({ alignment: cTopLeading })(
                                    ActionPanel(),
                                    ViewHeader(applet?.name, (e) => {
                                        /* updateDocument({
                                            databaseId: appletId,
                                            collectionId: 'wm_lists',
                                            documentId: listId,
                                            data: {
                                                name: e
                                            }
                                        }, ()=> {
                                            updateDocument({
                                                databaseId: 'workspace',
                                                collectionId: 'ws_tree',
                                                documentId: listId,
                                                data: {
                                                    name: e
                                                }
                                            }, ()=> {
                                                EventBus.Default.fire('applet.added', { treeItem: list })
                                            })
                                        }) */
                                    }),
                                    HStack({ alignment: cTopLeading })(
                                        VStack({ alignment: cTopLeading })(
                                            UIViewBuilder(() => {
                                                const { openDialog } = useDialogStack();
                                                return (
                                                    UIWidget('com.celmino.widget.list')
                                                        .config({
                                                            workspaceId: workspaceId,
                                                            listId: appletId,
                                                            attributes: attributes,
                                                            groups: groups.map(group => ({ id: group.$id, ...group })),
                                                            groupBy: 'status',
                                                            onItemSave: (item) => {
                                                                return (
                                                                    new Promise((resolve) => {
                                                                        createTask({
                                                                            data: item
                                                                        }, () => {
                                                                            resolve(true);
                                                                            /*  setTimeout(() =>
                                                                                 navigate(`/app/workspace/${workspaceId}/applet/${appletId}`)
                                                                                 , 1000) */
                                                                        })
                                                                    })
                                                                )
                                                            },
                                                            onStageChange: (itemId, stageId) => {
                                                                //   alert(itemId + ' ' + stageId)
                                                                updateTask({
                                                                    databaseId: appletId,
                                                                    collectionId: 'listItems',
                                                                    documentId: itemId,
                                                                    data: {
                                                                        status: stageId
                                                                    }

                                                                })
                                                            },
                                                            onStagePropsChanged: (stageId, stageProps) => {
                                                                updateTask({
                                                                    databaseId: appletId,
                                                                    collectionId: 'listStatuses',
                                                                    documentId: stageId,
                                                                    data: {
                                                                        name: stageProps.name,
                                                                        bgColor: stageProps.color
                                                                    }
                                                                })
                                                            },
                                                            onNewFieldAddded: (field) => {
                                                                alert(JSON.stringify(field))
                                                                if (field.type === 'text') {
                                                                    createStringAttribute({
                                                                        databaseId: appletId,
                                                                        collectionId: 'listItems',
                                                                        key: replaceNonMatchingCharacters(field.name),
                                                                        required: false,
                                                                        size: 255
                                                                    }, (attribute) => {
                                                                        createField({
                                                                            data: {
                                                                                ...field,
                                                                                collectionId: 'listItems'
                                                                            }
                                                                        }, () => void 0)
                                                                    })
                                                                }
                                                                // alert(JSON.stringify(type))
                                                                /*  if (formData.type === 'text') {
                                                                     await Services.Databases.createStringAttribute(workspaceId, appletId, 'wm_list_' + listId, formData.key, 255, false);
                                                                     await Services.Databases.createDocument(workspaceId, appletId, 'wm_list_' + listId + '_att', ID.unique(), {
                                                                         name: formData.name,
                                                                         key: replaceNonMatchingCharacters(formData.name),
                                                                         type: 'string',
                                                                         hidden: false
                                                                     });
                                                                 } else if (formData.type === 'number') {
                                                                     const key = replaceNonMatchingCharacters(formData.name);
                                                                     console.log(key)
                                                                     await Services.Databases.createIntegerAttribute(workspaceId, appletId, 'wm_list_' + listId, key, false);
                                                                     await Services.Databases.createDocument(workspaceId, appletId, 'wm_list_' + listId + '_att', ID.unique(), {
                                                                         name: formData.name,
                                                                         key: key,
                                                                         type: 'number',
                                                                         hidden: false
                                                                     });
                                                                 } else if (formData.type === 'formula') {
                                                                     await Services.Databases.createDocument(workspaceId, appletId, 'wm_list_' + listId + '_att', ID.unique(), {
                                                                         name: formData.name,
                                                                         key: replaceNonMatchingCharacters(formData.name),
                                                                         type: 'formula',
                                                                         type_content: JSON.stringify({
                                                                             expression: formData.formula
                                                                         }),
                                                                         hidden: false
                                                                     });
                                                                 }
                                                                 else {
                                                                     alert('field type not found')
                                                                 } */


                                                            },
                                                            onItemClick: (item) => {
                                                                openDialog({
                                                                    title: 'Open',
                                                                    view: UIWidget("com.celmino.widget.object-editor")
                                                                        .config({
                                                                            objectId: item.$id,
                                                                            views: [],
                                                                            //powerUps: PowerUps,
                                                                            // headerIcon: Icon(OkrIcons.KeyResultIcon({ width: 36, height: 36 })),
                                                                            header: item.name,
                                                                            onHeaderChange: (title) => { alert(title) },
                                                                            //description: metric?.description,
                                                                            onDescriptionChange: (description) => {
                                                                                /*  updateTask(object_id, {
                                                                                     description: description
                                                                                 }, {
                                                                                     onSuccess: () => {
                                                                                         invalidateCache();
                                                                                     }
                                                                                 }) */
                                                                            },
                                                                            fields: {
                                                                                "assignee": {
                                                                                    type: "user",
                                                                                    label: 'Assignee',
                                                                                },
                                                                                "title": {
                                                                                    type: "text",
                                                                                    label: "Title",
                                                                                    value: '',
                                                                                    onChange: (value) => {
                                                                                        alert(value)
                                                                                    }
                                                                                },
                                                                                "state": {
                                                                                    type: "select",
                                                                                    label: "State",
                                                                                    options: [],
                                                                                    value: null,
                                                                                    onChange: (value) => {
                                                                                        alert(value)
                                                                                    }
                                                                                }
                                                                            }
                                                                        })
                                                                })
                                                            },
                                                            items: items?.map(item => ({ id: item.$id, title: item.name, ...item })) ?? [],
                                                            /*   stages: [{
                        $id: 'AAA',
                    name: 'Todo',
                    color: '#FF0000:#00FF00'
                                                              }] */
                                                        })
                                                )
                                            })

                                        ),
                                        VStack({ alignment: cTop })(
                                            HStack(
                                                Icon(SvgIcon('cu3-icon-addSmall'))
                                            )
                                                .cursor('pointer')
                                                .cornerRadius(6)
                                                .background({ hover: '#F0F1F3' })
                                                .width(32).height(32)
                                                .onClick(() => {
                                                    SelectSiderDialog.Show()
                                                })
                                        )
                                            .background('white')
                                            .borderLeft('solid 1px #E8EAED')
                                            .padding('12px 8px')
                                            .width(60)
                                    )
                                ).background('#F9FAFB')




                            ).render()
                        }
                    </DialogStack>
                )



        )
    }

}
/* export class MyTestController extends UIFormController {
    LoadView(): UIView {
         const { applet_id } = useParams();
        const { createTask } = useCreateTask([]);
       const { tasks } = useListTasks();

       // const {stageSets} = useListTaskStageSets(); 
        return (
            
            // Text(JSON.stringify(stageSets)),
            Text(JSON.stringify(tasks))
                .onClick(() => {
                    createTask({
                        appletId: applet_id,
                        $id: ID.unique(),
                        title: 'Hello world',
                        

                    })
                })
 
        )
    }
} */