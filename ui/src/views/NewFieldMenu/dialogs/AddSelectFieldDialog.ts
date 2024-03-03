import { Query, useCreateDocument, useCreateStringAttribute } from "@realmocean/sdk";
import { HStack, Text, UIViewBuilder, VStack, cHorizontal, useDialog, useFormBuilder, useFormController, useNavigate } from "@tuval/forms";
import { FormBuilder } from "../../../FormBuilder/FormBuilder";
import { replaceNonMatchingCharacters } from "../../../utils";


export const SelectFieldsAttributesView = (workspaceId, databaseId, collectionId) => (
    UIViewBuilder(() =>
        VStack(
            FormBuilder.render(AddSelectFieldDialog(workspaceId, databaseId, collectionId))
        )
            .padding(20)
            .width(380)
            .height(515)
    )
)

export const SaveSelectFieldAction = (formMeta, action) => UIViewBuilder(() => {
    const { label, successAction, successActions } = action;

    const formController = useFormController();
    const dialog = useDialog();
    const formBuilder = useFormBuilder();
    const navigate = useNavigate();

    const { databaseId, collectionId, name, workspaceId, options } = formController.GetFormData();

    const { createStringAttribute, isLoading } = useCreateStringAttribute(workspaceId);

    const { createDocument } = useCreateDocument(workspaceId, databaseId, 'fields', [
        Query.equal('collectionId', collectionId)
    ])

    return (
        HStack(
            Text('Save Field')
        )
            .padding(cHorizontal, 11)
            .minWidth(28)
            .minHeight(28)
            .height()
            .width()
            .fontSize(14)
            .foregroundColor('white')
            .cornerRadius(6)
            .background('rgb(64, 101, 221)')
            // .loading(isLoading)
            .onClick(() => {

                if (databaseId == null) {
                    alert('Collection is null');
                    return;
                }

                createStringAttribute({
                    databaseId,
                    collectionId,
                    key: replaceNonMatchingCharacters(name),
                    required: false,
                    size: 255
                }, (attribute) => {
                    createDocument({
                        data: {
                            key: attribute.key,
                            name: name,
                            type: 'select',
                            fieldInfo: JSON.stringify({
                                options: options
                            }),
                            collectionId: collectionId
                        }
                    }, () => dialog.Hide())
                })
            })
    )
})



export const AddSelectFieldDialog = (workspaceId: string, databaseId: string, collectionId: string) => ({
    "title": 'Add select field',
    "actions": [
        {
            "label": "Save",
            "type": "com.celmino-ui.actions.saveSelectField"
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
            "value": databaseId
        },
        "collectionId": {
            "name": "collectionId",
            "type": "virtual",
            "value": collectionId
        },
        "name": {
            "label": "NAME",
            "type": "text",
            "name": "name"
        },
        "description": {
            "label": "DESCRIPTION (OPTIONAL)",
            "type": "text",
            "multiline": true,
            "name": "description"
        },
        "options": {
            "label": "OPTIONS",
            "type": "keyvalue",
            "name": "options"
        },

    }
})

