
import { LoadingButton, useFormState } from "@realmocean/atlaskit";
import { is } from "@tuval/core";
import { UIViewBuilder, VStack, nanoid, useDialog, useFormBuilder, useFormController, useNavigate } from "@tuval/forms";
import { FormBuilder } from "../../../FormBuilder/FormBuilder";
import { replaceNonMatchingCharacters } from "../../../utils";


export const RichTextFieldsAttributesView = (onNewFieldAdded) => (
    UIViewBuilder(() =>
        VStack(
            FormBuilder.render(AddRichTextFieldDialog(onNewFieldAdded))
        )
            .padding(20)
    )
)

export const SaveRichTextFieldAction = (formMeta, action) => UIViewBuilder(() => {
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
                        type: 'richtext',
                        fieldInfo: JSON.stringify({
                            size: 120255
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


SaveRichTextFieldAction.Id = nanoid()

export const AddRichTextFieldDialog = (onNewFieldAdded: Function) => ({
    "title": 'Add richtext field',
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
            "type": SaveRichTextFieldAction.Id
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




