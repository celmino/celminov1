
import { Query, useCreateDocument, useCreateStringAttribute } from "@realmocean/sdk";
import { HStack, Text, UIViewBuilder, VStack, cHorizontal, nanoid, useDialog, useFormBuilder, useFormController, useNavigate } from "@tuval/forms";
import { FormBuilder } from "../../../FormBuilder/FormBuilder";
import { replaceNonMatchingCharacters } from "../../../utils";
import { is } from "@tuval/core";
import { LoadingButton, useFormState } from "@realmocean/atlaskit";
import { RelationView } from "../formBuilder/RelationView";


export const SaveRelationFieldAction = (formMeta, action) => UIViewBuilder(() => {
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


SaveRelationFieldAction.Id = nanoid();
export const AddRelationFieldDialog = (onNewFieldAdded: Function) => ({
    "title": 'Add Relation Field',
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
            "type": SaveRelationFieldAction.Id
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
        } ,
        "fieldName": {
            "label": "FIELD NAME",
            "type": "text",
            "name": "fieldName"
        },
        "relationName": {
            "label": "RELATION NAME",
            "type": "text",
            "name": "relationName"
        },


        "relation": {
            "label": "DESCRIPTION (OPTIONAL)",
            "type": "relation",
            "multiline": true,
            "name": "relation"
        }       

    }
})

FormBuilder.injectView('relation', RelationView);
FormBuilder.injectAction(SaveRelationFieldAction);