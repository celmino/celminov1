import { Query, useCreateDocument, useCreateStringAttribute } from "@realmocean/sdk";
import { HStack, Text, UIViewBuilder, VStack, cHorizontal, useDialog, useFormBuilder, useFormController, useNavigate } from "@tuval/forms";
import { FormBuilder } from "../../../FormBuilder/FormBuilder";
import { replaceNonMatchingCharacters } from "../../../utils";
import { is } from "@tuval/core";


export const TextFieldsAttributesView = (onNewFieldAdded) => (
    UIViewBuilder(() =>
        VStack(
            FormBuilder.render(AddTextFieldDialog(onNewFieldAdded))
        )
            .padding(20)
            .width(380)
            .height(315)
    )
)

export const SaveTextFieldAction = (formMeta, action) => UIViewBuilder(() => {
    const { label, successAction, successActions } = action;

    const formController = useFormController();
    const dialog = useDialog();
    const formBuilder = useFormBuilder();
    const navigate = useNavigate();

    const { name, onNewFieldAdded } = formController.GetFormData();


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

                if (is.function(onNewFieldAdded)) {
                    onNewFieldAdded({
                        key: replaceNonMatchingCharacters(name),
                        name: name,
                        type: 'text',
                        fieldInfo: JSON.stringify({
                            size: 255
                        })
                    });
                }



                /*  createStringAttribute({
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
                             type: 'text',
                             fieldInfo: JSON.stringify({
                                 size: 255
                             }),
                             collectionId: collectionId
                         }
                     }, () => dialog.Hide())
                 }) */
            })
    )
})


SaveTextFieldAction.Id = "com.celmino-ui.actions.saveTextField"
export const AddTextFieldDialog = (onNewFieldAdded: Function) => ({
    "title": 'Add text field',
    "actions": [
        {
            "label": "custom",
            "type": SaveTextFieldAction.Id
        }
    ],
    "fieldMap": {
       
        "onNewFieldAdded": {
            "name": "onNewFieldAdded",
            "type": "virtual",
            "value": onNewFieldAdded
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

