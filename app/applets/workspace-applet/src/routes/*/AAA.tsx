import { UIController, UIView, useParams, Routes, Text, UIWidget, VStack, ReactView, DialogStack, Fragment, cTopLeading, UIViewBuilder, HStack, Button, useDialogStack, TextField, useState } from "@tuval/forms";
import { ActionPanel } from "../../views/ActionPanel";
import { DocumentHeader } from "../../views/ViewHeader";
import React from "react";
import { useGetDocument, useUpdateDocument } from "@realmocean/sdk";
import { EventBus, is } from "@tuval/core";
import { SimpleImage } from "../../tools/SimplePlugin";
import InlineImage from 'editorjs-inline-image';
import { Editor } from './view/Editor';
import { useApplet, useRealm } from "@celmino/ui";

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
                                        /*  VStack({ alignment: cTopLeading })(
                                             UIWidget('com.celmino.widget.tldraw')
                                                 .config({
 
 
                                                 })
                                         ) */

                                        UIWidget('com.tuvalsoft.widget.editorjs')
                                            .config({
                                                defaultValue: null,//is.nullOrEmpty(content?.content) ? null : JSON.parse(content.content),
                                                clamp: true,
                                                workspaceId: workspaceId,
                                                appletId: appletId,
                                                tools: {
                                                    image: {
                                                        class: InlineImage,
                                                        inlineToolbar: true,
                                                        config: {
                                                            embed: {
                                                                display: true,
                                                            },
                                                            unsplash: {
                                                                appName: 'your_app_name',
                                                                clientId: 'your_client_id'
                                                            }
                                                        }
                                                    },
                                                    link: {
                                                        class: SimpleImage,
                                                        inlineToolbar: true,
                                                        shortcut: 'CMD+SHIFT+W',
                                                        config: {
                                                            workspaceId: workspaceId,
                                                            appletId: appletId,
                                                            openDialog

                                                        },
                                                    }
                                                },
                                                onChange: (data) => {
                                                    console.log(data)
                                                    updateDocument({
                                                        databaseId: appletId,
                                                        collectionId: 'dm_document_contents',
                                                        documentId: appletId,
                                                        data: {
                                                            content: JSON.stringify(data)
                                                        }
                                                    })
                                                }
                                            }),
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