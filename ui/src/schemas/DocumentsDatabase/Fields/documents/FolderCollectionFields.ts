
export const FolderCollectionFields = [
    {
        "key": "name",
        "name": "Name",
        "type": "string",
        "custom": false,

        "fieldInfo": JSON.stringify({
            "size": 255,
        }),
        "collectionId": "folders",
    },
    {
        "key": "description",
        "name": "Description",
        "type": "string",
        "custom": false,


        "fieldInfo": JSON.stringify({
            "size": 16777216,
        }),
        "collectionId": "folders",
    },
    {
        "key": "parent",
        "name": "Parent",
        "type": "string",
        "custom": false,

        "fieldInfo": JSON.stringify({
            "size": 255,
        }),
        "collectionId": "folders",
    },
    {
        "key": "path",
        "name": "Path",
        "type": "string",
        "custom": false,

        "fieldInfo": JSON.stringify({
            "size": 2255,
        }),
        "collectionId": "folders",
    },
]