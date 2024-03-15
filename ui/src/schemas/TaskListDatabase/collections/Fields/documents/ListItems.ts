
export const ListItemsCollectionFields = [
    {
        "key": "name",
        "name": "Name",
        "type": "string",
        "width": "300px",
        "custom": false,

        "fieldInfo": JSON.stringify({
            "size": 255,
        }),
        "collectionId": "listItems",
    },
    {
        "key": "description",
        "name": "Description",
        "type": "string",
        "width": "300px",
        "custom": false,


        "fieldInfo": JSON.stringify({
            "size": 16777216,
        }),
        "collectionId": "listItems",
    },
    {
        "key": "mark",
        "name": "Mark",
        "type": "string",
        "width": "100px",
        "custom": false,


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
    {
        "key": "PRIORITY",
        "name": "Priority",
        "type": "select",
        "width": "100px",
        "custom": false,

        "fieldInfo": JSON.stringify({
            "options": [
                {
                    key: 'High',
                    value: 2
                },
                {
                    key: 'Medium',
                    value: 1
                },
                {
                    key: 'Low',
                    value: 0
                }
            ],
        }),
        "collectionId": "listItems",
    },
    {
        "key": "MULTITASK",
        "name": "Multitask",
        "type": "select",
        "width": "100px",
        "custom": false,

        "fieldInfo": JSON.stringify({
            "options": [
                {
                    key: 'Yes',
                    value: "Y"
                },
                {
                    key: 'No',
                    value: "N"
                }
            ],
        }),
        "collectionId": "listItems",
    },
    {
        "key": "NOT_VIEWED",
        "name": "Not Viewed",
        "type": "select",
        "width": "100px",
        "custom": false,

        "fieldInfo": JSON.stringify({
            "options": [
                {
                    key: 'Yes',
                    value: "Y"
                },
                {
                    key: 'No',
                    value: "N"
                }
            ],
        }),
        "collectionId": "listItems",
    },
    {
        "key": "REPLICATE",
        "name": "Replicate",
        "type": "select",
        "width": "100px",
        "custom": false,

        "fieldInfo": JSON.stringify({
            "options": [
                {
                    key: 'Yes',
                    value: "Y"
                },
                {
                    key: 'No',
                    value: "N"
                }
            ],
        }),
        "collectionId": "listItems",
    },
]