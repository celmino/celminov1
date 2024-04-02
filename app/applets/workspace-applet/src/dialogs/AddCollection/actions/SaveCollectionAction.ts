import { LoadingButton, useFormState } from "@realmocean/atlaskit";
import { Permission, Role, Service, Services, useCreateCollection, useCreateDocument } from "@realmocean/sdk";
import {
    Button,
    Text,
    UIViewBuilder,
    nanoid,
    useDialog,
    useFormController
} from "@tuval/forms";




export const SaveCollectionAction = (formMeta, action) => UIViewBuilder(
    () => {
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
        const { workspaceId, databaseId, protocol, resource, method } = formMeta as any;


        const { createCollection, isLoading } = useCreateCollection(workspaceId);
        const { createDocument } = useCreateDocument(workspaceId, databaseId, 'collections');
        const { createDocument: createField } = useCreateDocument(workspaceId, databaseId, 'fields');


        const formData: any = useFormState({
            values: true,
            errors: true
        });
        const { name = null } = formData?.values ?? {};

        return (
            LoadingButton().label('Save').appearance("primary")
                //.loading(isLoading)
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
                                        dialog.Hide();
                                    })
                                })

                            })
                        })



                    })
                })
        )
    }
)


SaveCollectionAction.Id = nanoid()
