import { SaveCollectionAction } from "./actions/SaveCollectionAction";



export const AddCollectionDialog = (workspaceId: string, appletId: string) => ({
    "title": 'Create collection',
    "workspaceId": workspaceId,
    "databaseId": appletId,
    "actions": [
        {
            "label": "Save",
            "type": SaveCollectionAction.Id
        }
    ],
    "fieldMap": {

        "name": {
            "label": "Name",
            "type": "text",
            "name": "name"
        },

    }
})