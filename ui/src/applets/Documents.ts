

export const DocumentsApplet =  {
    name: 'Documents',
    type: 'Applet',
    tree_type: 'com.celmino.applet.document-management',
    applet_type: 'com.celmino.applet.document-management',
    description: 'Documents applet is effortless document management, offering seamless organization and collaboration capabilities. Access, edit, and share documents with ease, enhancing productivity across workspaces.',
    // image: '/images/applets/documents.png',
    iconCategory: 'Icons',
    iconName: 'bell',
    icon: '\\d1e2',
    iconBackColor: '#66B47C',
    enabled: true,
    databases: [
        {
            "name": "Document Management",
            "id": "document_management",
            "category": "app",
            "collections": [
                {
                    "name": "Menu Tree",
                    "id": "dm_tree",
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
                    ]
                },

                {
                    "name": "Folders",
                    "id": "dm_folders",
                    "attributes": [
                        {
                            "key": "name",
                            "type": "string"
                        },
                        {
                            "key": "parent",
                            "type": "string"
                        },
                        {
                            "key": "path",
                            "type": "string"
                        }
                    ]
                },
                {
                    "name": "Documents",
                    "id": "dm_documents",
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
                    "id": "dm_document_contents",
                    "attributes": [
                        {
                            "key": "content",
                            "type": "string",
                            "size": 932000
                        }
                    ],

                },
                {
                    "name": "views",
                    "id": "dm_views",
                    "attributes": [
                        {
                            "key": "name",
                            "type": "string"
                        },
                        {
                            "key": "parent",
                            "type": "string"
                        },
                        {
                            "key": "type",
                            "type": "string"
                        }
                    ],

                }
            ]
        }
    ]
}