import { Collections } from "./collections/Collections";
import { Fields } from "./collections/Fields";
import { ListItemsCollection } from "./collections/ListItems";




export const ListAppletDatabase = [
    {
        "name": "List Applet",
        "id": "world",
        "category": "applet",
        "collections": [
            {
                ...Collections,

            },
            {
                ...Fields,
            },
            {
                ...ListItemsCollection

            },
            {
                "name": "List Statuses",
                "id": "listStatuses",
                "attributes": [
                    {
                        "key": "name",
                        "type": "string",
                        "size": 255
                    },
                    {
                        "key": "description",
                        "type": "string",
                        "size": 16777216
                    },
                    {
                        "key": "bgColor",
                        "type": "string",
                        "size": 50
                    },
                    {
                        "key": "fgColor",
                        "type": "string",
                        "size": 50
                    },
                    {
                        "key": "orderBy",
                        "type": "number",
                        "size": 10
                    }
                ]
                ,
                "documents": [
                    {
                        "name": "To Do",
                        "description": "To Do",
                        "bgColor": "#D40915",
                        "fgColor": "white",
                        "orderBy": 1
                    },
                    {
                        "name": "In Progress",
                        "description": "In Progress",
                        "bgColor": "#FBA32F",
                        "fgColor": "white",
                        "orderBy": 2
                    },
                    {
                        "name": "Done",
                        "description": "Done",
                        "bgColor": "#4FAF54",
                        "fgColor": "white",
                        "orderBy": 3
                    }
                ]
            },
            {
                "name": "Views",
                "id": "views",
                "attributes": [
                    {
                        "key": "name",
                        "type": "string",
                        "size": 255
                    },
                    {
                        "key": "description",
                        "type": "string",
                        "size": 16777216
                    },
                    {
                        "key": "type",
                        "type": "string",
                        "size": 255
                    }
                ]
            },
            {
                "name": "View Contents",
                "id": "viewContents",
                "attributes": [
                    {
                        "key": "viewId",
                        "type": "string",
                        "size": 255
                    },
                    {
                        "key": "content",
                        "type": "string",
                        "size": 16777216
                    }
                ]
            }
        ]
    }
]


