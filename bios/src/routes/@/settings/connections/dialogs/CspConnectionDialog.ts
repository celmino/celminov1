import { LoadingButton, useFormState } from "@realmocean/atlaskit";
import { useCreateDocument } from "@realmocean/sdk";
import { EventBus } from "@tuval/core";
import { UIViewBuilder, useFormController, useDialog, useFormBuilder, useNavigate, Button, Text, nanoid } from "@tuval/forms";
import { SaveConnectionAction } from "./SaveConnectionAction";
import { Connectors } from "./Connectors";



export const CspConnectionDialog = (workspaceId: string) => {
    if (workspaceId == null) {
        alert("spaceId is null")
    } else {
        return {
            "title": 'Create CSP connection',
            "image": Connectors['com.celmino.connection.csp'].image2,
            "workspaceId": workspaceId,
            "type":"jira",
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
                    "label": "Application",
                    "type": "text",
                    "name": "type",
                    "isDisabled":true,
                    "defaultValue": "com.celmino.connection.csp"
                },
                "domain": {
                    "label": "Base URI *",
                    "type": "text",
                    "name": "key.domain",
                    "helpMessage": 'Your Jira cloud host address. For example "https://my-jira.atlassian.net"'
                },
                "eData": {
                    "label": "Bimser Encript Data",
                    "type": "text",
                    "name": "key.eData",
                    "helpMessage": 'Email you are using for logging to Jira'
                },
                "token": {
                    "label": "API token ",
                    "type": "text",
                    "name": "key.token",
                    "helpMessage": 'Your Jira token created for Celmino'
                },
                "secret": {
                    "type": "virtual",
                    "name":"secret",
                    "value": ['key.token', 'key.eData']
                  }
            },
            "layout":{
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
                              "domain",
                              "eData",
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