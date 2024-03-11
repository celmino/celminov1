import { Permission, Role, Services, useCreateCollection, useCreateDocument } from "@realmocean/sdk";
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


export const SaveCollectionAction = (formMeta, action) => UIViewBuilder(() => {
    const { label, successAction, successActions } = action;
    const formController = useFormController();
    const dialog = useDialog();

    let invalidateResource = null;
    let formMutate = null;
    let createMutate = null;
    let updateMutate = null;
    let isFormMutateExcuting = false;
    let isFormLoading = false;

    const views = []
    const { protocol, resource, method } = formMeta as any;

    const { databaseId, name, workspaceId } = formController.GetFormData();

    const { createCollection, isLoading } = useCreateCollection(workspaceId);
    const { createDocument } = useCreateDocument(workspaceId, databaseId, 'collections');
    const { createDocument: createField } = useCreateDocument(workspaceId, databaseId, 'fields');

    const {  appletId } = formMeta;
    const { createDocument: createWorkspaceTreeItem } = useCreateDocument(workspaceId, 'workspace', 'ws_tree');


    return (
        Button(
            Text('Save Collection')
        )
            .loading(isLoading)
            .onClick(() => {

                if (databaseId == null) {
                    alert('Collection is null');
                    return;
                }
                createCollection({
                    databaseId,
                    name: name,
                    permissions: [
                        Permission.read(Role.any()),
                        Permission.update(Role.any()),
                        Permission.update(Role.any()),
                        Permission.delete(Role.any()),
                        Permission.delete(Role.any()),
                    ],
                    enabled: true
                }, (collection) => {

                    Promise.all([
                        Services.Databases.createStringAttribute(workspaceId, databaseId, collection.$id, 'name', 255, false),
                        Services.Databases.createStringAttribute(workspaceId, databaseId, collection.$id, 'description', 1255, false)
                    ]).then(() => {
                        createDocument({
                            documentId: collection.$id,
                            data: {
                                name: collection.name,
                                type: 'userCollection'
                            }
                        }, () => {

                            createField({
                                data: {
                                    key: 'name',
                                    name: 'Name',
                                    type: 'text',
                                    fieldInfo: JSON.stringify({
                                        size: 255
                                    }),
                                    collectionId: collection.$id
                                }
                            }, () => {
                                createField({
                                    data: {
                                        key: 'description',
                                        name: 'Description',
                                        type: 'text',
                                        fieldInfo: JSON.stringify({
                                            size: 1255
                                        }),
                                        collectionId: collection.$id
                                    }
                                }, () => {

                                    createWorkspaceTreeItem({
                                        documentId: collection.$id,
                                        data: {
                                            name: collection.name,
                                            type: 'collection',
                                            parent: databaseId,
                                            tree_widget: 'com.celmino.applet.database',
                                            appletId,
                                            path: (new Date()).getTime().toString(),
                                            iconName: 'table',
                                            iconCategory: 'SystemIcons',
                                            //viewer:'com.tuvalsoft.viewer.document'
                                        }
                                    }, (item) => {
        
                                        EventBus.Default.fire('applet.added', { treeItem: item });
                                        dialog.Hide();
                                    })

                                   
                                })
                            })

                        })
                    })



                })
            })
    )
}
)


SaveCollectionAction.Id = 'com.applet.database.action.save-collection';

export const AddCollectionDialog = (workspaceId:string, appletId: string) => ({
    "title": 'Create collection',
    "appletId": appletId,
    "actions": [
        {
            "label": "Save",
            "type": SaveCollectionAction.Id
        }
    ],
    "fieldMap": {
        "workspaceId": {
            "name": "workspaceId",
            "type": "virtual",
            "value": workspaceId
        },
        "databaseId": {
            "name": "databaseId",
            "type": "virtual",
            "value": appletId
        },
        "name": {
            "label": "Name",
            "type": "text",
            "name": "name"
        },
       
    }
})