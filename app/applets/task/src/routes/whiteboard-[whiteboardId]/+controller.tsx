import { useApplet, useRealm } from "@celmino/platform";
import { useGetDocument, useUpdateDocument } from "@realmocean/sdk";
import { is } from "@tuval/core";
import { DialogStack, Fragment, ReactView, UIController, UIView, UIWidget, VStack, useParams } from "@tuval/forms";
import React from "react";
import { ActionPanel } from "../../views/ActionPanel";
import { ViewHeader } from "../../views/ViewHeader";

export class WhiteboardController extends UIController {
    public override LoadView(): UIView {
        const {whiteboardId } = useParams();
        const {realm} = useRealm();
        const {applet} = useApplet();
        const workspaceId = realm.$id;
        const appletId = applet.$id;
        const { document } = useGetDocument({
            projectId: workspaceId,
            databaseId: appletId,
            collectionId: 'wm_whiteboards',
            documentId: whiteboardId
        })

        const { document: content, isLoading } = useGetDocument({
            projectId: workspaceId,
            databaseId: appletId,
            collectionId: 'wm_whiteboard_contents',
            documentId: whiteboardId
        })

        const { updateDocument } = useUpdateDocument(workspaceId);

        return (
            isLoading ? Fragment() :
                ReactView(
                    <DialogStack>
                        {
                            VStack(
                                ActionPanel(),
                                ViewHeader(document?.name, (e)=> {
                                    updateDocument({
                                        databaseId: appletId,
                                        collectionId: 'wm_whiteboards',
                                        documentId: whiteboardId,
                                        data: {
                                            name: e
                                        }
                                    })
                                }),
                                UIWidget('com.tuvalsoft.widget.whiteboard')
                                    .config({
                                        defaultValue: is.nullOrEmpty(content?.content) ? null : JSON.parse(content.content),
                                        onChange: (data) => {
                                            console.log(data)
                                            updateDocument({
                                                databaseId: appletId,
                                                collectionId: 'wm_whiteboard_contents',
                                                documentId: whiteboardId,
                                                data: {
                                                    content: JSON.stringify(data)
                                                }
                                            })
                                        }
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