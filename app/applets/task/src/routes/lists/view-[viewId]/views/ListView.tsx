import { useRealm, useApplet, useAccount, SelectSiderDialog, useWidget, AppletContext } from "@celmino/ui";
import { useListDocuments, Query, useCreateDocument, useUpdateDocument, useCreateStringAttribute, useCreateRelationshipAttribute, useCreateIntegerAttribute } from "@realmocean/sdk";
import { Fragment, HStack, Icon, ReactView, SvgIcon, UIController, UIView, UIViewBuilder, UIWidget, VStack, cTop, cTopLeading, useDialogStack, useParams } from "@tuval/forms";
import { ViewsTab } from "../../views/ViewsTabMenu";
import { EventBus } from "@tuval/core";
import { TaskViewWidget } from "../../../../widgets/TaskViewWidget";
import React from "react";


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

export const ListView = (viewId: string) => UIViewBuilder(() => {

    const { isWidget } = useWidget();
    const { realm } = useRealm();
    const { applet } = useApplet();
    const workspaceId = realm.$id;
    const appletId = applet.$id;

    const { documents: items, isLoading: isItemsLoading } = useListDocuments(workspaceId, appletId, 'listItems', [
        Query.limit(1000)
    ]);
    const { documents: groups, isLoading: isStatusesLoading } = useListDocuments(workspaceId, appletId, 'listStatuses', [
        Query.orderAsc('orderBy')
    ]);

    const { createDocument: createTask } = useCreateDocument(workspaceId, appletId, 'listItems');
    const { updateDocument: updateTask } = useUpdateDocument(workspaceId);

    const { documents: attributes, isLoading } = useListDocuments(workspaceId, appletId, 'fields', [
        Query.equal('collectionId', 'listItems')
    ]);

    const { documents: viewSettings, isLoading: isFieldSettingsLoading } = useListDocuments(workspaceId, appletId, 'viewSettings', [
        Query.equal('viewId', 'applet')
    ]);



    const { createDocument: createField } = useCreateDocument(workspaceId, appletId, 'fields', [
        Query.equal('collectionId', 'listItems')
    ])

    const { createDocument: createViewSetting } = useCreateDocument(workspaceId, appletId, 'viewSettings');

    const { createStringAttribute } = useCreateStringAttribute(workspaceId);
    const { createIntegerAttribute } = useCreateIntegerAttribute(workspaceId);
    const { createRelationshipAttribute } = useCreateRelationshipAttribute(workspaceId);

    const { account } = useAccount();

    const { updateDocument } = useUpdateDocument(workspaceId);


    return (
        VStack({ alignment: cTopLeading })(
            isWidget ? Fragment() : ViewsTab(viewId),
            (isLoading || isStatusesLoading || isFieldSettingsLoading) ? Fragment() :
                UIViewBuilder(() => {
                    let resultFields = attributes;
                    if (viewSettings != null) {
                        resultFields = attributes
                            .filter((field) => {
                                const index = viewSettings.findIndex((_) => _.key === field.key);
                                if (index > -1) {
                                    return viewSettings[index].hidden === false;
                                } else {
                                    return false;
                                }
                            })
                    }
                    return (
                        HStack({ alignment: cTopLeading })(
                            VStack({ alignment: cTopLeading })(
                                UIViewBuilder(() => {
                                    const { openDialog } = useDialogStack();
                                    return (
                                        UIWidget('com.celmino.widget.list')
                                            .config({
                                                workspaceId: workspaceId,
                                                listId: appletId,
                                                fields: resultFields,
                                                groups: [
                                                    ...groups.filter(group => group.type === 'opened'),
                                                    ...groups.filter(group => group.type === 'active'),
                                                    ...groups.filter(group => group.type === 'done'),
                                                    ...groups.filter(group => group.type === 'closed')

                                                ].map(group => ({ id: group.$id, ...group })),
                                                groupBy: 'status',
                                                onItemChanged: (itemId: string, data: any) => {
                                                    updateDocument({
                                                        databaseId: appletId,
                                                        collectionId: 'listItems',
                                                        documentId: itemId,
                                                        data: data
                                                    })
                                                },
                                                onItemSave: (data) => {
                                                    return (
                                                        new Promise((resolve) => {
                                                            createTask({
                                                                data: data
                                                            }, (task) => {
                                                                resolve(task);

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
                                                                    key: replaceNonMatchingCharacters(field.name),
                                                                    collectionId: 'listItems'
                                                                }
                                                            }, () => {

                                                                createViewSetting({
                                                                    data: {
                                                                        viewId: 'applet',
                                                                        key: replaceNonMatchingCharacters(field.name),
                                                                        hidden: false
                                                                    }
                                                                }, () => void 0)

                                                            })
                                                        })
                                                    } else if (field.type === 'number') {
                                                        createIntegerAttribute({
                                                            databaseId: appletId,
                                                            collectionId: 'listItems',
                                                            key: replaceNonMatchingCharacters(field.name),
                                                            required: false,
                                                        }, (attribute) => {
                                                            createField({
                                                                data: {
                                                                    ...field,
                                                                    key: replaceNonMatchingCharacters(field.name),
                                                                    collectionId: 'listItems'
                                                                }
                                                            }, () => {

                                                                createViewSetting({
                                                                    data: {
                                                                        viewId: 'applet',
                                                                        key: replaceNonMatchingCharacters(field.name),
                                                                        hidden: false
                                                                    }
                                                                }, () => void 0)

                                                            })
                                                        })
                                                    } else if (field.type === 'richtext') {
                                                        createStringAttribute({
                                                            databaseId: appletId,
                                                            collectionId: 'listItems',
                                                            key: replaceNonMatchingCharacters(field.name),
                                                            required: false,
                                                            size: 150000
                                                        }, (attribute) => {
                                                            createField({
                                                                data: {
                                                                    key: attribute.key,
                                                                    name: field.name,
                                                                    type: 'richtext',
                                                                    fieldInfo: JSON.stringify({
                                                                        size: 150000
                                                                    }),
                                                                    collectionId: 'listItems'
                                                                }
                                                            }, () => {

                                                                createViewSetting({
                                                                    data: {
                                                                        viewId: 'applet',
                                                                        key: replaceNonMatchingCharacters(field.name),
                                                                        hidden: false
                                                                    }
                                                                }, () => void 0)

                                                            })
                                                        })
                                                    }

                                                    else if (field.type === 'select') {

                                                        createStringAttribute({
                                                            databaseId: appletId,
                                                            collectionId: 'listItems',
                                                            key: replaceNonMatchingCharacters(field.name),
                                                            required: false,
                                                            size: 150000
                                                        }, (attribute) => {

                                                            createField({
                                                                data: {
                                                                    ...field,
                                                                    key: replaceNonMatchingCharacters(field.name),
                                                                    collectionId: 'listItems'
                                                                }
                                                            }, () => {

                                                                createViewSetting({
                                                                    data: {
                                                                        viewId: 'applet',
                                                                        key: replaceNonMatchingCharacters(field.name),
                                                                        hidden: false
                                                                    }
                                                                }, () => void 0)

                                                            })
                                                        })
                                                    } else if (field.type === 'multiselect') {

                                                        createStringAttribute({
                                                            databaseId: appletId,
                                                            collectionId: 'listItems',
                                                            key: replaceNonMatchingCharacters(field.name),
                                                            required: false,
                                                            size: 150000
                                                        }, (attribute) => {
                                                            createField({
                                                                data: {
                                                                    ...field,
                                                                    key: replaceNonMatchingCharacters(field.name),
                                                                    collectionId: 'listItems'
                                                                }
                                                            }, () => {

                                                                createViewSetting({
                                                                    data: {
                                                                        viewId: 'applet',
                                                                        key: replaceNonMatchingCharacters(field.name),
                                                                        hidden: false
                                                                    }
                                                                }, () => void 0)

                                                            })
                                                        })
                                                    } else if (field.type === 'relation') {
                                                        //alert(JSON.stringify(field))

                                                        createStringAttribute({
                                                            databaseId: appletId,
                                                            collectionId: 'listItems',
                                                            key: replaceNonMatchingCharacters(field.name),
                                                            required: false,
                                                            size: 255
                                                        }, (attribute) => {
                                                            field.fieldInfo = JSON.stringify({
                                                                workspaceId: workspaceId,
                                                                databaseId: appletId,
                                                                collectionId: 'listItems',
                                                                ...field.fieldInfo
                                                            })

                                                            createField({
                                                                data: {
                                                                    ...field,
                                                                    key: replaceNonMatchingCharacters(field.name),
                                                                    collectionId: 'listItems'
                                                                }
                                                            }, () => void 0)
                                                        })
                                                    }

                                                },
                                                onItemClick: (item) => {
                                                    const _controller = class extends UIController {
                                                        public LoadView(): UIView {
                                                            return (
                                                                UIWidget("com.celmino.applet.task-list", 'taskView')
                                                                    .config({
                                                                        taskId: item.$id,
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
                                                            )
                                                        }
                                                    }
                                                    openDialog({
                                                        title: 'Open',
                                                        view:
                                                            AppletContext(() =>
                                                                ReactView(
                                                                    <_controller></_controller>
                                                                )
                                                            ).appletId(applet.$id)


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

                    )
                })
        ).background('#F9FAFB')




    )
})