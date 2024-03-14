import { SaveCollectionAction } from "./actions/SaveCollectionAction";



export const AddCollectionDialog = (workspaceId: string, appletId: string) => ({
    "title": 'Create collection',
    "actions": [
        {
            "label": "Save",
            "type": SaveCollectionAction.Id
        }
    ],
    "fieldMap": {
        "workspaceId": {
            "name": "workspaceId",
            "type": "virtual",
            "value": workspaceId
        },
        "databaseId": {
            "name": "databaseId",
            "type": "virtual",
            "value": appletId
        },
        "name": {
            "label": "Name",
            "type": "text",
            "name": "name"
        },

    }
})