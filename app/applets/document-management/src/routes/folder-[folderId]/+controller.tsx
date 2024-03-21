import { UIController, UIView, useParams, Routes, Text, UIWidget, VStack, ReactView, DialogStack, Fragment, HStack, ForEach, cTopLeading, cLeading, useDialogStack, UIViewBuilder, Icon, SvgIcon } from "@tuval/forms";
import { ActionPanel } from "../../views/ActionPanel";
import { DocumentHeader } from "../../views/ViewHeader";
import React from "react";
import { Query, useGetDocument, useListDocuments, useUpdateDocument } from "@realmocean/sdk";
import { is } from "@tuval/core";
import { ProxyController } from "./ProxyController";
import { FolderName } from "./view/FolderName";
import { FolderHeader } from "./view/FolderHeader";
import { DocumentName } from "./view/DocumentName";
import { FolderView } from "./view/FolderView";
import { useApplet, useRealm } from "@celmino/ui";

export class FolderController extends UIController {


    public override LoadView(): UIView {


        const { folderId } = useParams();
        const {realm} = useRealm();
        const {applet} = useApplet();
        const workspaceId = realm.$id;
        const appletId = applet.$id; 
        const { document } = useGetDocument({
            projectId: workspaceId,
            databaseId: appletId,
            collectionId: 'folders',
            documentId: folderId
        })

        const { documents: folders, isLoading: isFoldersLoading } = useListDocuments(workspaceId, appletId, 'folders', [
            Query.equal('parent', folderId)
        ]);
        const { documents: documents, isLoading } = useListDocuments(workspaceId, appletId, 'documents', [
            Query.equal('parent', folderId)
        ]);


        const { updateDocument } = useUpdateDocument(workspaceId);

        return (
            
               (isFoldersLoading || isLoading) ? Fragment() :
                   ReactView(
                       <DialogStack title={
                           HStack({ alignment: cLeading, spacing: 5 })(
                               Icon(SvgIcon('cu3-icon-sidebarFolder', '#151719', '18px', '18px')).transform('rotate(90deg)'),
                               Text('Folder - ' + document?.name)
                           ) as any
                       }>
                           {
                               FolderView(workspaceId, folderId)
                                   .render()
                           }
                       </DialogStack>
                   )  

        )
    }

}