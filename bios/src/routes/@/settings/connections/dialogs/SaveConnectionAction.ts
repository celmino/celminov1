import { FormBuilder } from "@celmino/platform";
import { LoadingButton, useFormState } from "@realmocean/atlaskit";
import { CspBroker, EncryptionBroker, JiraBroker, useCreateDocument } from "@realmocean/sdk";
import { is } from "@tuval/core";
import { UIViewBuilder, nanoid, useDialog, useFormBuilder, useFormController, useNavigate } from "@tuval/forms";
import objectPath from 'object-path';

const brokers = {
    'com.celmino.connection.jira': JiraBroker,
    'com.celmino.connection.csp': CspBroker
}
export const SaveConnectionAction = (formMeta, action) => UIViewBuilder(() => {
    const { label, successAction, successActions } = action;
    const formController = useFormController();
    const dialog = useDialog();
    const formBuilder = useFormBuilder();
    const navigate = useNavigate();

    let invalidateResource = null;
    let formMutate = null;
    let createMutate = null;
    let updateMutate = null;
    let isFormMutateExcuting = false;
    let isFormLoading = false;

    const views = []
    const { workspaceId, appletId } = formMeta;

    const { createDocument: createConnection } = useCreateDocument(workspaceId, 'workspace', 'connections');

    const formData: any = useFormState({
        values: true,
        errors: true
    });



    return (
        LoadingButton().appearance("primary").label('Save')
            // .loading(isLoading)
            .onClick(async () => {

                const data = formData?.values ?? {};
                const key = await EncryptionBroker.Default.createKey(data.key);

                if (is.array(data.secret)) {
                    data.secret.forEach(secret => {
                        objectPath.del(data, secret);
                    })
                } else {
                    objectPath.del(data, data.secret);
                }


               // alert(JSON.stringify(data))

                createConnection(
                    {
                        data: {
                            name: data.name,
                            type: data.type,
                            secret: data.secret,
                            key: key,
                            data: JSON.stringify(data.key)
                        }
                    },
                    (document) => {

                        dialog.Hide();
                    }
                )
            })
    )
}
)

SaveConnectionAction.Id = nanoid();
FormBuilder.injectAction(SaveConnectionAction);