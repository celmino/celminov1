export const Jira = {
    name: 'Jira',
    type: 'Applet',
    tree_type: 'com.celmino.applet.jira',
    applet_type: 'com.celmino.applet.jira',
    description: 'Documents applet is effortless document management, offering seamless organization and collaboration capabilities. Access, edit, and share documents with ease, enhancing productivity across workspaces.',
    image: '/images/jira-logo.svg',
    iconCategory: 'SystemIcons',
    iconName: 'jira',
   // icon: '\\d224',
    iconBackColor: '#66B47C',
    enabled: true,
    version: [1, 0, 1],
    databases: [
        {
            "name": "Jira",
            "category": "app",
            "collections": []
        }
    ]
}