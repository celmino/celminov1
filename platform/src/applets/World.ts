

export const WorldApplet = {
    name: 'World',
    type: 'Data',
    tree_type: 'com.celmino.widget.custom-applet-tree',
    applet_type: 'com.celmino.applet.custom',
    description: 'Documents applet is effortless document management, offering seamless organization and collaboration capabilities. Access, edit, and share documents with ease, enhancing productivity across workspaces.',
    // image: '/images/applets/documents.png',
    iconCategory: 'Icons',
    iconName: 'bell',
    icon: '\\d320',
    iconBackColor: '#66B47C',
    enabled: true,
    version: [1, 0, 1],
    databases: [
        {
            "name": "World",
            "id": "world",
            "category": "app",
            "collections": []
        }
    ]
}