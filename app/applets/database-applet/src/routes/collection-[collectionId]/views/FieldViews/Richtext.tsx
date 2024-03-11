import { useCreateDocument, useUpdateCollection, useUpdateDocument } from "@realmocean/sdk";
import { HStack, cLeading, UIViewBuilder, nanoid, Text, Icon, useDialogStack } from "@tuval/forms";
import { TextField } from "@realmocean/vibe";
import React from "react";

const DocumentIcon = () => (
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" aria-hidden="true">
        <g>
            <path d="M6 4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4.286v-4.286c0-.789.64-1.428 1.428-1.428H16V12h-4v4l4-4V6a2 2 0 0 0-2-2H6Z"></path>
        </g>
    </svg>
)
export const RichTextFieldView = () => UIViewBuilder(() => {

   /*  const { createDocument } = useCreateDocument(workspaceId, databaseId, collectionId);
    const { updateDocument } = useUpdateDocument(workspaceId); */
    const { openDialog } = useDialogStack();
    return (
        HStack({ alignment: cLeading })(
            UIViewBuilder(() => {
                 return (
                    Icon(DocumentIcon)
                )

            })

        )
        .onClick(()=> {
            openDialog({
                title: '',
                view: UIViewBuilder(() => {
                    return (
                        Text('asdasdasd')
                    )
                })
            }) 
        })
    )
})