
export const WorkspaceApplet = {
    name: 'Workspace',
    type: 'Applet',
    tree_type: 'com.celmino.widget.workspace-tree',
    applet_type: 'com.celmino.applet.category',
    description: 'Documents applet is effortless document management, offering seamless organization and collaboration capabilities. Access, edit, and share documents with ease, enhancing productivity across workspaces.',
    // image: '/images/applets/documents.png',
    iconCategory: 'Icons',
    iconName: 'bell',
    icon: '\\d320',
    iconBackColor: '#66B47C',
    enabled: true,
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
                },
                {
                    "name": "Table Views",
                    "id": "tableViews",
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
                            "key": "icon_name",
                            "type": "string"
                        },
                        {
                            "key": "icon_category",
                            "type": "string"
                        },
                        {
                            "key": "color",
                            "type": "string"
                        }
                    ]
                },
                {
                    "name": "Table Levels",
                    "id": "tableViewLevels",
                    "attributes": [
                        {
                            "key": "name",
                            "type": "string"
                        },
                        {
                            "key": "tableViewId",
                            "type": "string"
                        },
                        {
                            "key": "level",
                            "type": "number"
                        },
                        {
                            "key": "databaseId",
                            "type": "string"
                        },
                        {
                            "key": "collectionId",
                            "type": "string"
                        }
                    ]
                }
            ]
        }
    ]
}