import { SaveDocumentAction } from "./AddDocumentDialog"

export const AddMarkdownDialog = (workspaceId: string, appletId: string, parent: string, path: string, type: string = 'document') => {
    if (workspaceId == null) {
        alert("spaceId is null")
    } else {
        return {
            "title": 'Create document',
            "workspaceId": workspaceId,
            "appletId": appletId,
            /*   "mutation":"_create_workspace", */
            "actions": [
                {
                    "label": "Save",
                    "type": SaveDocumentAction.Id,
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

                "list_name": {
                    "label": "name",
                    "type": "text",
                    "name": "name"
                },
                "type": {
                    "name": "type",
                    "type": "virtual",
                    "value": type
                },
                "parent": {
                    "name": "parent",
                    "type": "virtual",
                    "value": parent
                },
                "path": {
                    "name": "path",
                    "type": "virtual",
                    "value": path
                },
                "viewer": {
                    "name": "viewer",
                    "type": "virtual",
                    // "value": "com.tuvalsoft.widget.editorjs"
                    "value": "com.tuvalsoft.widget.markdown"
                },
                /*   "description": {
                      "label": "Description",
                      "type": "text",
                      "multiline": true,
                      "name": "description"
                  } */

            }
        }
    }
}