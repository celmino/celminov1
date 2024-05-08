export const WebsiteApplet = {
    name: 'Website',
    type: 'Applet',
    tree_type: 'com.celmino.widget.applet-category',
    applet_type: 'com.celmino.applet.category',
    description: 'Documents applet is effortless document management, offering seamless organization and collaboration capabilities. Access, edit, and share documents with ease, enhancing productivity across workspaces.',
    // image: '/images/applets/documents.png',
    iconCategory: 'Icons',
    iconName: 'bell',
    icon: '\\d320',
    iconBackColor: '#66B47C',
    enabled: false,
    version: [1, 0, 1],
    databases: [
        {
            "name": "Website",
            "id": "applet_category",
            "category": "app",
            "collections": []
        }
    ]
}