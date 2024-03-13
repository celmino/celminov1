

import {
    WorkProtocol, getAppFullName
} from "@tuval/forms";

export const ListStatusesDialog = {
    "title": 'List Statuses',
    "mode": "create",
    "resource": "workspaces",
    "protocol": WorkProtocol,
    /*   "mutation":"_create_workspace", */
    "actions": [
        {
            "label": "Save",
            "type": "save",
            "successActions": [{
                "type": "hide"
            },
            {
                "type": "navigate",
                "url": `/@/${getAppFullName()}/workspace/{{id}}`
            }
            ]
        }
    ],
    "fieldMap": {
        "tenant_id": {
            "name": "tenant_id",
            "type": "virtual",
            //"value": useSessionService().TenantId
        },
        "account_id": {
            "name": "account_id",
            "type": "virtual",
           // "value": useSessionService().AccountId
        },
        "app_id": {
            "name": "app_id",
            "type": "virtual",
            "value": getAppFullName()
        },
        "space_name": {
            "label": "Name",
            "type": "liststatus",
            "name": "name"
        },
       

    }
}