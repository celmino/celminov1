import { Query, useCreateDocument, useCreateStringAttribute } from "@realmocean/sdk";
import { HStack, Text, UIViewBuilder, VStack, cHorizontal, nanoid, useDialog, useFormBuilder, useFormController, useNavigate } from "@tuval/forms";
import { FormBuilder } from "../../../FormBuilder/FormBuilder";
import { replaceNonMatchingCharacters } from "../../../utils";
import { is } from "@tuval/core";
import { LoadingButton, useFormState } from "@realmocean/atlaskit";




export const SaveUrlFieldAction = (formMeta, action) => UIViewBuilder(() => {
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
                    _onNewFieldAdded({
                        key: replaceNonMatchingCharacters(formState.values.name),
                        name: formState.values.name,
                        type: 'url',
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


SaveUrlFieldAction.Id = nanoid();
export const AddUrlFieldDialog = (onNewFieldAdded: Function) => ({
    "title": 'Add checkbox field',
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
            "type": SaveUrlFieldAction.Id
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
        }       

    }
})

FormBuilder.injectAction(SaveUrlFieldAction);