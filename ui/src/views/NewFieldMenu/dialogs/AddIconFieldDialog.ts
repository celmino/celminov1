
import { Query, useCreateDocument, useCreateStringAttribute } from "@realmocean/sdk";
import { HStack, Text, UIViewBuilder, VStack, cHorizontal, nanoid, useDialog, useFormBuilder, useFormController, useNavigate } from "@tuval/forms";
import { FormBuilder } from "../../../FormBuilder/FormBuilder";
import { replaceNonMatchingCharacters } from "../../../utils";
import { is } from "@tuval/core";
import { LoadingButton, useFormState } from "@realmocean/atlaskit";


export const SaveIconFieldAction = (formMeta, action) => UIViewBuilder(() => {
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
                        type: 'icon',
                        fieldInfo: JSON.stringify({
                            size: 255
                        })
                    });
                }
            })
    )
})


SaveIconFieldAction.Id = nanoid();
export const AddIconFieldDialog = (onNewFieldAdded: Function) => ({
    "title": 'Add Icon Field',
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
            "type": SaveIconFieldAction.Id
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

FormBuilder.injectAction(SaveIconFieldAction);