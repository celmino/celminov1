
export const WorkspaceApplet = {
    name: 'Feed',
    type: 'Applet',
    tree_type: 'com.celmino.applet.feed',
    applet_type: 'com.celmino.applet.feed',
    description: 'Documents applet is effortless document management, offering seamless organization and collaboration capabilities. Access, edit, and share documents with ease, enhancing productivity across workspaces.',
    // image: '/images/applets/documents.png',
    iconCategory: 'Icons',
    iconName: 'bell',
    icon: '\\d320',
    iconBackColor: '#66B47C',
    enabled: true,
    databases: [
        {
            "name": "Feed",
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
                }
            ]
        }
    ]
}