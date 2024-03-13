import { AppletBaseDatabase } from "./applet";

export const ListAppletDatabase = [
    {
        "name": "List Applet",
        "id": "world",
        "category": "applet",
        "collections": [
            {
                "name": "Collections",
                "id": "collections",
                "attributes": [
                    {
                        "key": "name",
                        "type": "string"
                    },
                    {
                        "key": "type",
                        "type": "string"
                    },
                    {
                        "key": "order",
                        "type": "number"
                    }
                ],
                "documents": [
                    // ---------- List Items Collection --------------------
                    {
                        "$id": "listItems",
                        "name": "List Items"
                    },

                    // ---------- List Status Collection --------------------
                    {
                        "$id": "listStatuses",
                        "name": "List Statuses"
                    },
                    // ---------- Views Collection --------------------
                    {
                        "$id": "views",
                        "name": "Views"
                    },
                      // ---------- View Contents Collection --------------------
                      {
                        "$id": "viewContents",
                        "name": "View Contents"
                    }
                ]
            },
            {
                "name": "Fields",
                "id": "fields",
                "attributes": [
                    {
                        "key": "key",
                        "type": "string"
                    },
                    {
                        "key": "name",
                        "type": "string"
                    },
                    {
                        "key": "type",
                        "type": "string"
                    },
                    {
                        "key": "fieldInfo",
                        "type": "string",
                        "size": 18900
                    },
                    {
                        "key": "collectionId",
                        "type": "string"
                    },
                    {
                        "key": "order",
                        "type": "number"
                    }
                ],
                "documents": [
                    // ---------- List Items Fields --------------------
                    {
                        "key": "name",
                        "name": "Name",
                        "type": "string",

                        "fieldInfo": JSON.stringify({
                            "size": 255,
                        }),
                        "collectionId": "listItems",
                    },
                    {
                        "key": "description",
                        "name": "Description",
                        "type": "string",

                        "fieldInfo": JSON.stringify({
                            "size": 16777216,
                        }),
                        "collectionId": "listItems",
                    },
                    {
                        "key": "mark",
                        "name": "Mark",
                        "type": "string",

                        "fieldInfo": JSON.stringify({
                            "size": 10,
                        }),
                        "collectionId": "listItems",
                    },
                    {
                        "key": "status",
                        "name": "Status",
                        "type": "string",

                        "fieldInfo": JSON.stringify({
                            "size": 255,
                        }),
                        "collectionId": "listItems",
                    },

                    // ---------- List Statuses Fields --------------------
                    {
                        "key": "name",
                        "name": "Name",
                        "type": "string",

                        "fieldInfo": JSON.stringify({
                            "size": 255,
                        }),
                        "collectionId": "listStatuses",
                    },
                    {
                        "key": "description",
                        "name": "Description",
                        "type": "string",

                        "fieldInfo": JSON.stringify({
                            "size": 16777216,
                        }),
                        "collectionId": "listStatuses",
                    },
                    {
                        "key": "color",
                        "name": "Color",
                        "type": "string",

                        "fieldInfo": JSON.stringify({
                            "size": 50,
                        }),
                        "collectionId": "listStatuses",
                    },

                    // ---------- Views Fields --------------------
                    {
                        "key": "name",
                        "name": "Name",
                        "type": "string",

                        "fieldInfo": JSON.stringify({
                            "size": 255,
                        }),
                        "collectionId": "views",
                    },
                    {
                        "key": "description",
                        "name": "Description",
                        "type": "string",

                        "fieldInfo": JSON.stringify({
                            "size": 16777216,
                        }),
                        "collectionId": "views",
                    },
                    {
                        "key": "type",
                        "name": "Type",
                        "type": "string",

                        "fieldInfo": JSON.stringify({
                            "size": 255,
                        }),
                        "collectionId": "views",
                    },
                     // ---------- View Contents Fields --------------------
                     {
                        "key": "viewId",
                        "name": "View ID",
                        "type": "string",

                        "fieldInfo": JSON.stringify({
                            "size": 255,
                        }),
                        "collectionId": "viewContents",
                    },
                    {
                        "key": "content",
                        "name": "Content",
                        "type": "string",

                        "fieldInfo": JSON.stringify({
                            "size": 16777216,
                        }),
                        "collectionId": "viewContents",
                    }
                ]
            },
            {
                "name": "List Items",
                "id": "listItems",
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
                        "key": "mark",
                        "type": "string",
                        "size": 10
                    },
                    {
                        "key": "status",
                        "type": "string",
                        "size": 255
                    } 
                ]

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
                        "orderBy":1
                    },
                    {
                        "name": "In Progress",
                        "description": "In Progress",
                        "bgColor": "#FBA32F",
                        "fgColor": "white",
                        "orderBy":2
                    },
                    {
                        "name": "Done",
                        "description": "Done",
                        "bgColor": "#4FAF54",
                        "fgColor": "white",
                        "orderBy":3
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


