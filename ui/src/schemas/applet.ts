
export const AppletBaseDatabase = [
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
        ]
    },
]