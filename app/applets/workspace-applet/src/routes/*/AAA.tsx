import { useApplet, useRealm } from "@celmino/platform";
import { useGetDocument, useUpdateDocument } from "@realmocean/sdk";
import { EventBus } from "@tuval/core";
import { DialogStack, Fragment, HStack, ReactView, UIController, UIView, UIViewBuilder, UIWidget, VStack, cTopLeading, useDialogStack } from "@tuval/forms";

import React from "react";
import { SimpleImage } from "../../tools/SimplePlugin";
import { ActionPanel } from "../../views/ActionPanel";
import { DocumentHeader } from "../../views/ViewHeader";

const docs = [
    { uri: "https://url-to-my-pdf.pdf" }, // Remote file
];

export class HomeController extends UIController {


    public override LoadView(): UIView {
        const {realm} = useRealm();
        const {applet} = useApplet();
        const workspaceId = realm.$id;
        const appletId = applet.$id;

      
        const { document: treeItem, isLoading: isTreeItemLoading } = useGetDocument({
            projectId: realm.$id,
            databaseId: 'workspace',
            collectionId: 'ws_tree',
            documentId: applet.$id
        })

        /* 
                const { document: content, isLoading } = useGetDocument({
                    projectId: workspaceId,
                    databaseId: appletId,
                    collectionId: 'dm_document_contents',
                    documentId: documentId
                }) */

        const { updateDocument } = useUpdateDocument(workspaceId);
        return (
            (isTreeItemLoading) ? Fragment() :
                ReactView(
                    //@ts-ignore
                    <DialogStack>
                        {
                            VStack({ alignment: cTopLeading })(

                                ActionPanel(),
                                VStack({ alignment: cTopLeading })(

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
                                            selectedIcon: treeItem?.iconName,
                                            color: treeItem?.bg_color,
                                            selectedCategory: treeItem?.iconCategory,
                                            width: 40,
                                            height: 40,
                                            padding: 1
                                        }),
                                    DocumentHeader(applet?.name, (e) => {
                                        updateDocument({
                                            databaseId: 'workspace',
                                            collectionId: 'applets',
                                            documentId: appletId,
                                            data: {
                                                name: e
                                            }
                                        }, () => {
                                            updateDocument({
                                                databaseId: 'workspace',
                                                collectionId: 'ws_tree',
                                                documentId: appletId,
                                                data: {
                                                    name: e
                                                }
                                            }, () => {
                                                EventBus.Default.fire('applet.added', { treeItem: null })
                                            })
                                        })
                                    })
                                )
                                    .height()
                                    .paddingLeft('clamp(84px,50%,calc(50% - 380px))')
                                    .paddingRight('clamp(84px,50%,calc(50% - 380px))')
                                ,

                                UIViewBuilder(() => {
                                    const { openDialog } = useDialogStack();
                                    return (
                                        HStack({ alignment: cTopLeading })(
                                            UIWidget('com.tuvalsoft.widget.editor-tuval')
                                                .config({
                                                })
                                        )
                                            .paddingLeft('clamp(84px,50%,calc(50% - 420px))')
                                            .paddingRight('clamp(84px,50%,calc(50% - 420px))')

                                    )
                                })

                            )
                                .background('white')
                                .render()
                        }
                    </DialogStack>
                )


        )
    }

}