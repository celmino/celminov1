export const Clock = {
    name: 'Clock',
    type: 'Applet',
    tree_type: 'com.celmino.applet.clock',
    applet_type: 'com.celmino.applet.clock',
    description: 'Documents applet is effortless document management, offering seamless organization and collaboration capabilities. Access, edit, and share documents with ease, enhancing productivity across workspaces.',
    // image: '/images/applets/documents.png',
    iconCategory: 'Icons',
    iconName: 'bell',
    icon: '\\d224',
    iconBackColor: '#66B47C',
    enabled: true,
    version: [1, 0, 1],
    databases: [
        {
            "name": "Category",
            "id": "applet_category",
            "category": "app",
            "collections": []
        }
    ]
}