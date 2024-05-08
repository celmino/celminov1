import { is } from "@tuval/core";
import { UIController, UINavigate, UIView, UIViewBuilder, UIWidget, VStack, cTopLeading, useDialogStack } from "@tuval/forms";
import { SimpleImage } from "../tools/SimplePlugin";
import { ActionPanel } from "../views/ActionPanel";
import { DocumentHeader } from "../views/ViewHeader";
import { useGetDocument, useListDocuments, useUpdateDocument } from "@realmocean/sdk";
import { useApplet, useRealm } from "@celmino/ui";


export class DocumentViewWidget extends UIController {
    public LoadView(): UIView {

        const { documentId } = this.props.config;

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
      


        return (
            VStack({ alignment: cTopLeading })(
                ActionPanel(),
                DocumentHeader(document?.name, (e) => {
                    /*  updateDocument({
                         databaseId: appletId,
                         collectionId: 'documents',
                         documentId: documentId,
                         data: {
                             name: e
                         }
                     }) */
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
        )
    }
}