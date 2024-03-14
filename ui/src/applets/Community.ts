
export const CommunityApplet = {
    name: 'Community',
    type: 'Data',
    tree_type: 'com.celmino.widget.community-applet-tree',
    applet_type: 'com.celmino.applet.community',
    description: 'Documents applet is effortless document management, offering seamless organization and collaboration capabilities. Access, edit, and share documents with ease, enhancing productivity across workspaces.',
    // image: '/images/applets/documents.png',
    iconCategory: 'Icons',
    iconName: 'bell',
    icon: '\\d1e1',
    iconBackColor: '#66B47C',
    enabled: false,
    databases: [
        {
            "name": "World",
            "id": "world",
            "category": "app",
            "collections": []
        }
    ]
}