import { LoadingButton, useFormState } from "@realmocean/atlaskit";
import { useCreateDocument } from "@realmocean/sdk";
import { EventBus } from "@tuval/core";
import { UIViewBuilder, useFormController, useDialog, useFormBuilder, useNavigate, Button, Text, nanoid } from "@tuval/forms";
import { SaveConnectionAction } from "./SaveConnectionAction";



export const JiraConnectionDialog = (workspaceId: string) => {
  if (workspaceId == null) {
    alert("spaceId is null")
  } else {
    return {
      "title": 'Create jira connection',
      "workspaceId": workspaceId,
      "type": "jira",
      /*   "mutation":"_create_workspace", */
      "actions": [
        {
          "label": "Save",
          "type": SaveConnectionAction.Id,
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
          "label": "Connection Type",
          "type": "text",
          "name": "type",
          "isDisabled": true,
          "defaultValue": "com.celmino.connection.jira"

        },
        "host": {
          "label": "Base URI *",
          "type": "text",
          "name": "key.host",
          "helpMessage": 'Your Jira cloud host address. For example "https://my-jira.atlassian.net"'
        },
        "username": {
          "label": "Username *",
          "type": "text",
          "name": "key.username",
          "helpMessage": 'Email you are using for logging to Jira'
        },
        "token": {
          "label": "API token *",
          "type": "text",
          "name": "key.token",
          "helpMessage": 'Your Jira token created for Celmino'
        },
        "secret": {
          "type": "virtual",
          "name":"secret",
          "value": ['key.token']
        }
      },
      "layout": {
        "type": "collapse",
        "containers": [
          {
            "label": "General",
            "fields": [
              "name",
              "application"
            ]
          },
          {
            "label": "Connection Details",
            "fields": [
              "host",
              "username",
              "token"
            ]
          }


        ]
        /*    {
             "type": "box",
             "containers": [
               {
                 "label": "Boxed fields",
                 "fields": [
                   "keyValue",
                   "checkbox"
                 ]
               }
             ]
           },
           {
             "type": "collapse",
             "containers": [
               {
                 "label": "Collapsed fields",
                 "fields": [
                   "keyValue",
                   "checkbox"
                 ]
               }
             ]
           } */

      }
    }
  }
}