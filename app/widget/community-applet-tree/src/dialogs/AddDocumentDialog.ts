import { useCreateDocument } from "@realmocean/sdk";
import { EventBus } from "@tuval/core";
import { UIViewBuilder, useFormController, useDialog, useFormBuilder, useNavigate, Button, Text } from "@tuval/forms";


export const SaveDocumentAction = (formMeta, action) => UIViewBuilder(() => {
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
    const { createDocument: createTreeItem } = useCreateDocument(workspaceId, appletId, 'dm_tree');
    const { createDocument, isLoading } = useCreateDocument(workspaceId, appletId, 'dm_documents');
    const { createDocument: createDocumentContent } = useCreateDocument(workspaceId, appletId, 'dm_document_contents');

    return (
        Button(
            Text('Save')
        )
            .loading(isLoading)
            .onClick(() => {

                const data = { ...formController.GetFormData() }

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
                                    tree_widget: 'com.celmino.widget.document-management-tree',
                                    appletId,
                                    path: (new Date()).getTime().toString(),
                                    iconName: 'document',
                                    iconCategory: 'SystemIcons',
                                    //viewer:'com.tuvalsoft.viewer.document'
                                }
                            }, (item) => {

                                EventBus.Default.fire('applet.added', { treeItem: item })
                            })

                            createTreeItem({
                                documentId: document.$id,
                                data: {
                                    ...data,
                                    type: 'document',
                                    viewer: 'com.tuvalsoft.viewer.document'
                                }
                            }, () => dialog.Hide())

                        })

                    }
                )

            })
    )
}
)

SaveDocumentAction.Id = 'com.celmino.action.save-document';

export const AddDocumentDialog = (workspaceId: string, appletId: string, parent: string, path: string) => {
    if (workspaceId == null) {
        alert("spaceId is null")
    } else {
        return {
            "title": 'Create document',
            "workspaceId": workspaceId,
            "appletId": appletId,
            /*   "mutation":"_create_workspace", */
            "actions": [
                {
                    "label": "Save",
                    "type": "com.celmino.action.save-document",
                    /*  "successActions": [{
                         "type": "hide"
                     },
                     {
                         "type": "navigate",
                         "url": "/@/com.tuvalsoft.app.procetra/workspace/{{id}}"
                     }
                     ] */
                    /*  "successActions": [{
                     "type": "hide"
                 },
                 {
                     "type": "navigate",
                     "url": "/@/com.tuvalsoft.app.procetra/workspace/{{id}}"
                 }
                 ] */
                }
            ],
            "fieldMap": {

                "list_name": {
                    "label": "name",
                    "type": "text",
                    "name": "name"
                },
              /*   "type": {
                    "name": "type",
                    "type": "virtual",
                    "value": type
                }, */
                "parent": {
                    "name": "parent",
                    "type": "virtual",
                    "value": parent
                },
                "path": {
                    "name": "path",
                    "type": "virtual",
                    "value": path
                },
                "viewer": {
                    "name": "viewer",
                    "type": "virtual",
                    "value": "com.tuvalsoft.widget.editorjs"
                },
                /*   "description": {
                      "label": "Description",
                      "type": "text",
                      "multiline": true,
                      "name": "description"
                  } */

            }
        }
    }
}