export const EmailsApplet = {
    name: 'Messaging',
    type: 'Applet',
    tree_type: 'com.celmino.widget.applet-category',
    applet_type: 'com.celmino.applet.category',
    description: 'Documents applet is effortless document management, offering seamless organization and collaboration capabilities. Access, edit, and share documents with ease, enhancing productivity across workspaces.',
    // image: '/images/applets/documents.png',
    iconCategory: 'Icons',
    iconName: 'bell',
    icon: '\\d339',
    iconBackColor: '#66B47C',
    enabled: false,
    version: [1, 0, 1],
    databases: [
        {
            "name": "Emails",
            "id": "applet_category",
            "category": "app",
            "collections": []
        }
    ]
}