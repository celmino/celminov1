import { Query, useCreateDocument, useCreateStringAttribute } from "@realmocean/sdk";
import { HStack, Text, UIViewBuilder, VStack, cHorizontal, nanoid, useDialog, useFormBuilder, useFormController, useNavigate } from "@tuval/forms";
import { FormBuilder } from "../../../FormBuilder/FormBuilder";
import { replaceNonMatchingCharacters } from "../../../utils";
import { is } from "@tuval/core";


export const SelectFieldsAttributesView = (onNewFieldAdded) => (
    UIViewBuilder(() =>
        VStack(
            FormBuilder.render(AddSelectFieldDialog(onNewFieldAdded))
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

    const { name, options, onNewFieldAdded } = formController.GetFormData();


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
                        key: name,
                        name: name,
                        type: 'select',
                        fieldInfo: JSON.stringify({
                            options: options
                        })
                    })

                }

                dialog.Hide();
            })

    )
})


SaveSelectFieldAction.Id = nanoid();

export const AddSelectFieldDialog = (onNewFieldAdded: Function) => ({
    "title": 'Add select field',
    "actions": [
        {
            "label": "Save",
            "type": SaveSelectFieldAction.Id
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
        "options": {
            "label": "OPTIONS",
            "type": "keyvalue",
            "name": "options"
        },

    }
})

