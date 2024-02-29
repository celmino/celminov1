import { useCreateStringAttribute } from "@realmocean/sdk";
import { HStack, Text, UIViewBuilder, cHorizontal, useDialog, useFormBuilder, useFormController, useNavigate } from "@tuval/forms";


export const SaveTextFieldAction = (formMeta, action) => UIViewBuilder(() => {
    const { label, successAction, successActions } = action;

    const formController = useFormController();
    const dialog = useDialog();
    const formBuilder = useFormBuilder();
    const navigate = useNavigate();

    const { databaseId, collectionId, name, workspaceId } = formController.GetFormData();

    const { createStringAttribute, isLoading } = useCreateStringAttribute(workspaceId);



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
                    key: name,
                    required: false,
                    size: 255
                }, () => {
                    dialog.Hide();
                })
            })
    )
})



export const AddTextFieldDialog = (workspaceId: string, databaseId: string, collectionId: string) => ({
    "title": 'Add text field',
    "actions": [
        {
            "label": "Save",
            "type": "ca_saveTextField"
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

    }
})

