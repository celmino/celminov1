import { is } from "@tuval/core";
import { HStack, Text, UIViewBuilder, VStack, cHorizontal, nanoid, useDialog, useFormBuilder, useFormController, useNavigate } from "@tuval/forms";
import { FormBuilder } from "../../../FormBuilder/FormBuilder";

import { useFormState, LoadingButton } from "@realmocean/atlaskit";
import { replaceNonMatchingCharacters } from "../../../utils";


export const SaveMultiSelectFieldAction = (formMeta, action) => UIViewBuilder(() => {
    const dialog = useDialog();

    const { onNewFieldAdded } = formMeta;
    const formState = useFormState({ values: true, errors: true });

    return (

        LoadingButton(

        ).label('Save')
            .appearance('primary')
            .isDisabled(is.nullOrEmpty(formState?.values?.name))

            .onClick(() => {
                if (is.function(onNewFieldAdded)) {
                    onNewFieldAdded({
                        key: replaceNonMatchingCharacters(formState.values.name),
                        name: formState.values.name,
                        type: 'multiselect',
                        fieldInfo: JSON.stringify({
                            options: formState.values.options
                        })
                    });
                }
                dialog.Hide();
            })
    )
})


SaveMultiSelectFieldAction.Id = nanoid();

export const AddMultiSelectFieldDialog = (onNewFieldAdded: Function) => ({
    "title": 'Add multi select field',
    "onNewFieldAdded": onNewFieldAdded,
    "actions": [
        {
            "label": "Save",
            "type": SaveMultiSelectFieldAction.Id
        }
    ],
    "fieldMap": {
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

FormBuilder.injectAction(SaveMultiSelectFieldAction);