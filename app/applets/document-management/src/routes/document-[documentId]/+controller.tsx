import { UIController, UIView, useParams, Routes, Text, UIWidget, VStack, ReactView, DialogStack, Fragment, cTopLeading, UIViewBuilder, HStack, Button, useDialogStack, TextField, useState, useNavigate, useEffect, UINavigate } from "@tuval/forms";
import { ActionPanel } from "../../views/ActionPanel";
import { DocumentHeader } from "../../views/ViewHeader";
import React, {Fragment as RF} from "react";
import { useGetDocument, useListDocuments, useUpdateDocument } from "@realmocean/sdk";
import { is } from "@tuval/core";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import { SimpleImage } from "../../tools/SimplePlugin";
import InlineImage from 'editorjs-inline-image';
import { useApplet, useRealm, useWidget } from "@celmino/ui";

const docs = [
    { uri: "https://url-to-my-pdf.pdf" }, // Remote file
];

export class DocumentController extends UIController {


    public override LoadView(): UIView {

        const { isWidget } = useWidget();
        const { documentId } = isWidget ? this.props.config : useParams();

        const { realm } = useRealm();
        const { applet } = useApplet();
        const workspaceId = realm.$id;
        const appletId = applet.$id;


        const { document, isLoading: isDocumentLoading } = useGetDocument({
            projectId: workspaceId,
            databaseId: appletId,
            collectionId: 'documents',
            documentId: documentId
        })

        const { document: content, isLoading } = useGetDocument({
            projectId: workspaceId,
            databaseId: appletId,
            collectionId: 'documentContent',
            documentId: documentId
        })

        const { updateDocument } = useUpdateDocument(workspaceId);

        const { documents: applets, isLoading: isAppletsLoading } = useListDocuments(workspaceId, 'workspace', 'applets');

        const { documents: treeItems, isLoading: isTreeItemsLoading } = useListDocuments(workspaceId, 'workspace', 'ws_tree');

        const Stack = isWidget ? RF : DialogStack;
        return (
            (isDocumentLoading || isLoading || isAppletsLoading || isTreeItemsLoading) ? Fragment() :
                ReactView(
                    <Stack>
                        {
                            VStack({ alignment: cTopLeading })(
                                ActionPanel(),
                                DocumentHeader(document?.name, (e) => {
                                    updateDocument({
                                        databaseId: appletId,
                                        collectionId: 'documents',
                                        documentId: documentId,
                                        data: {
                                            name: e
                                        }
                                    })
                                }),

                                UIViewBuilder(() => {
                                    const { openDialog } = useDialogStack();
                                    return (

                                        window.location.hash ?
                                            UIWidget(document?.viewer)
                                                .config({
                                                    defaultValue: is.nullOrEmpty(content?.content) ? null : JSON.parse(content.content),
                                                    clamp: true,
                                                    workspaceId: workspaceId,
                                                    appletId: appletId,
                                                    applets,
                                                    treeItems,
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
                                                            collectionId: 'documentContent',
                                                            documentId: documentId,
                                                            data: {
                                                                content: JSON.stringify(data)
                                                            }
                                                        })
                                                    }
                                                })
                                            : UINavigate('##')
                                    )
                                })

                            )
                                .background('white')
                                .render()
                        }
                    </Stack>
                )


        )
    }

}


export class HashController extends UIController {
    public override LoadView(): UIView {
        return (
            UINavigate('##')
        )
    }

}
