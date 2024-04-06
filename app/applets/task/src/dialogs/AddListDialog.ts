import { FormBuilder } from "@celmino/ui";
import { LoadingButton, useFormState } from "@realmocean/atlaskit";
import { useCreateDocument } from "@realmocean/sdk";
import { EventBus } from "@tuval/core";
import {
    Button,
    Text,
    UIViewBuilder,
    nanoid,
    useDialog, useFormBuilder, useFormController, useNavigate
} from "@tuval/forms";


export const SaveListAction = (formMeta, action) => UIViewBuilder(() => {
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

    const views = [];


    const { workspaceId, appletId } = formMeta;
    const { createDocument: createWorkspaceTreeItem } = useCreateDocument(workspaceId, 'workspace', 'ws_tree');
    const { createDocument, isLoading } = useCreateDocument(workspaceId, appletId, 'lists');

    const formData: any = useFormState({
        values: true,
        errors:true
    });


    return (
        LoadingButton()
            .appearance("primary")
            .label('Save')
           // .type("submit")
             .onClick(() => {
                
                createDocument(
                    {

                        data: {
                            ...formData.values
                        }
                    },
                    (folder) => {
                        createWorkspaceTreeItem({
                            documentId: folder.$id,
                            data: {
                                name: formData.values.name,
                                type: 'task-list',
                                parent: formData.values.parent,
                                tree_widget: 'com.celmino.applet.task-list',
                                appletId,
                                path: (new Date()).getTime().toString(),
                                iconName: 'cu3-icon-sidebarFolder',
                                iconCategory: 'SvgIcons',
                                //viewer:'com.tuvalsoft.viewer.document'
                            }
                        }, (item) => {
                            EventBus.Default.fire('applet.added', { treeItem: item });
                            dialog.Hide();
                        })



                    }
                )

            }) as any 
    )
}
)

SaveListAction.Id = nanoid();
export const AddListDialog = (workspaceId: string, appletId: string, parent: string, path: string) => (
    {
        "title": 'Create list',
        "workspaceId": workspaceId,
        "appletId": appletId,
        /*   "mutation":"_create_workspace", */
        "actions": [
            {
                "label": "Save",
                "type": SaveListAction.Id,
                /*  "successActions": [{
                     "type": "hide"
                 },
                 {
                     "type": "navigate",
                     "url": "/@/com.tuvalsoft.app.procetra/workspace/{{id}}"
                 }
                 ] */
                /*  "successActions": [{
                 "type": "hide"
             },
             {
                 "type": "navigate",
                 "url": "/@/com.tuvalsoft.app.procetra/workspace/{{id}}"
             }
             ] */
            }
        ],
        "fieldMap": {
           /*  "path": {
                "name": "path",
                "type": "virtual",
                "value": path
            }, */
            "folder_name": {
                "label": "List Name",
                "type": "text",
                "name": "name"
            }
        }
    }
)

FormBuilder.injectAction(SaveListAction);