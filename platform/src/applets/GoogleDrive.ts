export const GoogleDrive = {
    name: 'Google Drive',
    type: 'Applet',
    tree_type: 'com.celmino.applet.google-drive',
    applet_type: 'com.celmino.applet.google-drive',
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
            "name": "Google Drive",
            "id": "google-drive",
            "category": "app",
            "collections": []
        }
    ]
}