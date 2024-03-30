import { Query, useCreateDocument, useCreateStringAttribute } from "@realmocean/sdk";
import { HStack, Text, UIViewBuilder, VStack, cHorizontal, useDialog, useFormBuilder, useFormController, useNavigate } from "@tuval/forms";
import { FormBuilder } from "../../../FormBuilder/FormBuilder";
import { replaceNonMatchingCharacters } from "../../../utils";
import { is } from "@tuval/core";
import { LoadingButton, useFormState } from "@realmocean/atlaskit";




export const SaveTextFieldAction = (formMeta, action) => UIViewBuilder(() => {
    const { label, successAction, successActions } = action;

    const formController = useFormController();
    const dialog = useDialog();
    const formBuilder = useFormBuilder();
    const navigate = useNavigate();

    const { onNewFieldAdded } = formMeta;
    const formState = useFormState({ values: true, errors: true });


    return (
        LoadingButton(

        ).label('Save')
            .appearance('primary')
            .isDisabled(is.nullOrEmpty(formState?.values?.name))

            .onClick(() => {
               const _onNewFieldAdded = onNewFieldAdded?.value;
                if (is.function(_onNewFieldAdded)) {
                    alert('dfs')
                    _onNewFieldAdded({
                        key: replaceNonMatchingCharacters(formState.values.name),
                        name: formState.values.name,
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
    "width": "420px",
    "height": "320px",
    "onNewFieldAdded": {
        "name": "onNewFieldAdded",
        "type": "virtual",
        "value": onNewFieldAdded
    },
    "actions": [
        {
            "label": "custom",
            "type": SaveTextFieldAction.Id
        }
    ],
    "fieldMap": {
        "name": {
            "label": "NAME",
            "type": "text",
            "name": "name",
            "autofocus": true
        },
        "description": {
            "label": "DESCRIPTION (OPTIONAL)",
            "type": "text",
            "multiline": true,
            "name": "description"
        },

    }
})

