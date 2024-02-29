
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
                    "id": "com.celmino.collection.workspace-document-contents",
                    "attributes": [
                        {
                            "key": "content",
                            "type": "string",
                            "size": 932000
                        }
                    ],

                },
            ]
        }
    ]
}