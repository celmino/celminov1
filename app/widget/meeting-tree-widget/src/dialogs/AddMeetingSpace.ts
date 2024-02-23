import { useCreateDocument, Permission, Role } from "@realmocean/sdk";
import { EventBus } from "@tuval/core";
import { UIViewBuilder, useFormController, useDialog, useFormBuilder, useNavigate, Button, Text } from "@tuval/forms";

export const SaveMeetingSpace = (formMeta, action) => UIViewBuilder(() => {
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
    const { workspaceId,appletId,parent } = formMeta;


    const { createDocument: createWorkspaceTreeItem } = useCreateDocument(workspaceId, 'workspace', 'ws_tree');
    const { createDocument: createTreeItem } = useCreateDocument(workspaceId,appletId, 'wm_tree');
    const { createDocument, isLoading } = useCreateDocument(workspaceId,appletId, 'meeting_space');
   
   
    return (
        Button(
            Text('Save meeting space')
        )
            .loading(isLoading)
            .onClick(() => {


                const data = { ...formController.GetFormData() }
              
                
                createDocument(
                    {
                        data: {
                            ...data
                        }
                    },
                    (space) => {
                        createWorkspaceTreeItem({
                            documentId: space.$id,
                            data: {
                                name: data.name,
                                type: 'space',
                                parent:parent,
                                tree_widget: 'com.celmino.widget.meeeting-tree',
                                appletId,
                                path: (new Date()).getTime().toString(),
                                iconName: 'bell',
                                iconCategory: 'Icons',
                                //viewer:'com.tuvalsoft.viewer.document'
                            }
                        }, (item)=> {
                           
                            EventBus.Default.fire('applet.added', { treeItem: item})
                        })
                        createTreeItem({
                            documentId: space.$id,
                            data: {
                                ...data,
                                parent:'-1',
                                type: 'space'
                            }
                        }, ()=>  dialog.Hide())
                       
                    }
                )

            })
    )
}
)
export const AddMeetingSpace = (workspaceId: string,appletId: string, parent: string) => ({
    "title": 'Create meeting space',
    workspaceId,
    appletId,
    parent,
    /*   "mutation":"_create_workspace", */
    "actions": [
        {
            "label": "Save",
            "type": "saveMeetingSpace"
        }
    ],
    "fieldMap": {
       /*  "workspaceId": {
            "name": "workspaceId",
            "type": "virtual",
            "value": workspaceId
        },
        "appletId": {
            "name": "appletId",
            "type": "virtual",
            "value": appletId
        },
        "path": {
            "name": "path",
            "type": "virtual",
            "value": path
        }, */
        "name": {
            "label": "Name",
            "type": "text",
            "name": "name"
        },
      /*   "description": {
            "label": "Description",
            "type": "text",
            "multiline": true,
            "name": "description"
        }, */

    }
})

