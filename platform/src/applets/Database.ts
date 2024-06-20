
export const DatabaseApplet = {
    name: 'Data Store',
    type: 'Applet',
    tree_type: 'com.celmino.applet.database',
    applet_type: 'com.celmino.applet.database',
    description: 'Documents applet is effortless document management, offering seamless organization and collaboration capabilities. Access, edit, and share documents with ease, enhancing productivity across workspaces.',
    // image: '/images/applets/documents.png',

    iconCategory: 'Icons',
    iconName: 'bell',
    icon: '\\d278',
    iconBackColor: '#66B47C',
    enabled: true,
    version: [1, 0, 1],
    databases: [
        {
            "name": "Workspace",
            "id": "workspace_applet",
            "category": "app",
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


                {
                    "name": "Documents",
                    "id": "documents",
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
                            "key": "parent",
                            "type": "string"
                        },
                        {
                            "key": "path",
                            "type": "string"
                        },
                        {
                            "key": "viewer",
                            "type": "string"
                        },
                        {
                            "key": "icon_name",
                            "type": "string"
                        },
                        {
                            "key": "icon_category",
                            "type": "string"
                        },
                        {
                            "key": "bg_color",
                            "type": "string"
                        },
                        {
                            "key": "fg_color",
                            "type": "string"
                        }
                    ],

                },
                {
                    "name": "Document Contents",
                    "id": "documentContents",
                    "attributes": [
                        {
                            "key": "content",
                            "type": "string",
                            "size": 932000
                        }
                    ],
                }
              
            ]
        }
    ]
}