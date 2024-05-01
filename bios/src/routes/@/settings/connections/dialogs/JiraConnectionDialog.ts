import { LoadingButton, useFormState } from "@realmocean/atlaskit";
import { useCreateDocument } from "@realmocean/sdk";
import { EventBus } from "@tuval/core";
import { UIViewBuilder, useFormController, useDialog, useFormBuilder, useNavigate, Button, Text, nanoid } from "@tuval/forms";
import { SaveJiraConnectionAction } from "./SaveConnectionAction";



export const JiraConnectionDialog = (workspaceId: string) => {
    if (workspaceId == null) {
        alert("spaceId is null")
    } else {
        return {
            "title": 'Create jira connection',
            "workspaceId": workspaceId,
            "type":"jira",
            /*   "mutation":"_create_workspace", */
            "actions": [
                {
                    "label": "Save",
                    "type": SaveJiraConnectionAction.Id,
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
                "name": {
                    "label": "Connection Name",
                    "type": "text",
                    "name": "name"
                },
                "application": {
                    "label": "Application",
                    "type": "text",
                    "name": "app",
                    "isDisabled":true,
                    "defaultValue": "Jira"

                },
                "host": {
                    "label": "Base URI *",
                    "type": "text",
                    "name": "host"
                },
                "username": {
                    "label": "Username *",
                    "type": "text",
                    "name": "username"
                },
                "token": {
                    "label": "API token *",
                    "type": "text",
                    "name": "token"
                }
            }
        }
    }
}