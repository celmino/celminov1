
export const WorkspaceApplet = {
    name: 'Workspace',
    type: 'Applet',
    tree_type: 'com.celmino.applet.workspace',
    applet_type: 'com.celmino.applet.workspace',
    description: 'Workspace applet offers a customizable virtual environment tailored for managing and collaborating on various projects and tasks. It integrates seamlessly with other Celmino applets, providing a central hub for users to access, share, and organize resources efficiently. This applet facilitates team collaboration, document sharing, and real-time communication, making it easier to maintain productivity and streamline workflows. With the Workspace applet, teams can create a cohesive work environment that adapts to their specific project needs and goals.',
    // image: '/images/applets/documents.png',
    iconCategory: 'Icons',
    iconName: 'bell',
    icon: '\\d27f',
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