
import { Query, useCreateDocument, useCreateStringAttribute } from "@realmocean/sdk";
import { HStack, Text, UIViewBuilder, VStack, cHorizontal, nanoid, useDialog, useFormBuilder, useFormController, useNavigate } from "@tuval/forms";
import { FormBuilder } from "../../../FormBuilder/FormBuilder";
import { replaceNonMatchingCharacters } from "../../../utils";
import { is } from "@tuval/core";
import { LoadingButton, useFormState } from "@realmocean/atlaskit";




export const SaveLocationFieldAction = (formMeta, action) => UIViewBuilder(() => {
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
                        type: 'location',
                        fieldInfo: JSON.stringify({
                            size: 255
                        })
                    });
                }
            })
    )
})


SaveLocationFieldAction.Id = nanoid();
export const AddLocationFieldDialog = (onNewFieldAdded: Function) => ({
    "title": 'Add Phone Field',
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
            "type": SaveLocationFieldAction.Id
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

FormBuilder.injectAction(SaveLocationFieldAction);