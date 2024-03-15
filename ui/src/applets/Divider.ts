export const AppletCategory = {
    name: 'Category',
    type: 'Applet',
    tree_type: 'com.celmino.applet.category',
    applet_type: 'com.celmino.applet.category',
    description: 'Documents applet is effortless document management, offering seamless organization and collaboration capabilities. Access, edit, and share documents with ease, enhancing productivity across workspaces.',
    // image: '/images/applets/documents.png',
    iconCategory: 'Icons',
    iconName: 'bell',
    icon: '\\d1f7',
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