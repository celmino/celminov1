import { is } from "@tuval/core";
import { HStack, Text, UIViewBuilder, VStack, cHorizontal, nanoid, useDialog, useFormBuilder, useFormController, useNavigate } from "@tuval/forms";
import { FormBuilder } from "../../../FormBuilder/FormBuilder";

import { useFormState, LoadingButton } from "@realmocean/atlaskit";
import { replaceNonMatchingCharacters } from "../../../utils";



export const SaveSelectFieldAction = (formMeta, action) => UIViewBuilder(() => {
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
                if (is.function(onNewFieldAdded)) {
                    onNewFieldAdded({
                        key: replaceNonMatchingCharacters(formState.values.name),
                        name: formState.values.name,
                        type: 'select',
                        fieldInfo: JSON.stringify({
                            options: formState.values.options
                        })
                    });
                }
            })
    )
})


SaveSelectFieldAction.Id = nanoid();

export const AddSelectFieldDialog = (onNewFieldAdded: Function) => ({
    "title": 'Add select field',
    "onNewFieldAdded": onNewFieldAdded,
    "actions": [
        {
            "label": "Save",
            "type": SaveSelectFieldAction.Id
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

