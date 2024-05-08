export const ModellingApplet = {
    name: 'Modelling',
    type: 'Applet',
    tree_type: 'com.celmino.applet.modelling',
    applet_type: 'com.celmino.applet.modelling',
    description: 'Documents applet is effortless document management, offering seamless organization and collaboration capabilities. Access, edit, and share documents with ease, enhancing productivity across workspaces.',
    // image: '/images/applets/documents.png',
    iconCategory: 'Icons',
    iconName: 'bell',
    icon: '\\d1e7',
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