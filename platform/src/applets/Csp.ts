export const Csp = {
    name: 'Csp',
    type: 'Applet',
    tree_type: 'com.celmino.applet.csp',
    applet_type: 'com.celmino.applet.csp',
    description: 'Documents applet is effortless document management, offering seamless organization and collaboration capabilities. Access, edit, and share documents with ease, enhancing productivity across workspaces.',
    image: '/images/CSP.png',
    iconCategory: 'SystemIcons',
    iconName: 'csp',
    // icon: '\\d224',
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
                    "name": "Applet Settings",
                    "id": "settings",
                    "attributes": [
                        {
                            "key": "key",
                            "type": "string",
                            size: 255
                        },
                        {
                            "key": "value",
                            "type": "string",
                            size: 65789
                        }
                    ]
                }
            ]
        }
    ]
}