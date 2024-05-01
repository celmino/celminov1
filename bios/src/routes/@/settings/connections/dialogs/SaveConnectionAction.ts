import { FormBuilder } from "@celmino/ui";
import { useFormState, LoadingButton } from "@realmocean/atlaskit";
import { useCreateDocument } from "@realmocean/sdk";
import { UIViewBuilder, nanoid, useDialog, useFormBuilder, useFormController, useNavigate } from "@tuval/forms";

export const SaveJiraConnectionAction = (formMeta, action) => UIViewBuilder(() => {
    const { label, successAction, successActions } = action;
    const formController = useFormController();
    const dialog = useDialog();
    const formBuilder = useFormBuilder();
    const navigate = useNavigate();

    let invalidateResource = null;
    let formMutate = null;
    let createMutate = null;
    let updateMutate = null;
    let isFormMutateExcuting = false;
    let isFormLoading = false;

    const views = []
    const { workspaceId, appletId } = formMeta;

    const { createDocument: createWorkspaceTreeItem } = useCreateDocument(workspaceId, 'workspace', 'ws_tree');
    const { createDocument, isLoading } = useCreateDocument(workspaceId, appletId, 'documents');
    const { createDocument: createDocumentContent } = useCreateDocument(workspaceId, appletId, 'documentContent');

    const formData: any = useFormState({
        values: true,
        errors: true
    });

  

    return (
        LoadingButton().appearance("primary").label('Save')
            // .loading(isLoading)
            .onClick(() => {

                const data = formData?.values ?? {};

                alert(JSON.stringify(data))

                createDocument(
                    {
                        data: {
                            ...data
                        }
                    },
                    (document) => {
                        createDocumentContent({
                            documentId: document.$id,
                            data: {
                                content: ''
                            }
                        }, (document) => {

                            createWorkspaceTreeItem({
                                documentId: document.$id,
                                data: {
                                    name: data.name,
                                    type: 'document',
                                    parent: data.parent,
                                    tree_widget: 'com.celmino.applet.document-management',
                                    appletId,
                                    path: (new Date()).getTime().toString(),
                                    iconName: 'document',
                                    iconCategory: 'SystemIcons',
                                    //viewer:'com.tuvalsoft.viewer.document'
                                }
                            }, (item) => {

                               
                                dialog.Hide();
                            })
                        })
                    }
                )
            })
    )
}
)

SaveJiraConnectionAction.Id = nanoid();
FormBuilder.injectAction(SaveJiraConnectionAction);