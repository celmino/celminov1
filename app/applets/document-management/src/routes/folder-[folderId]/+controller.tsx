import { useApplet, useRealm } from "@celmino/platform";
import { Query, useGetDocument, useListDocuments, useUpdateDocument } from "@realmocean/sdk";
import { DialogStack, Fragment, HStack, Icon, ReactView, SvgIcon, Text, UIController, UIView, cLeading, useParams } from "@tuval/forms";
import React from "react";
import { FolderView } from "./view/FolderView";

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