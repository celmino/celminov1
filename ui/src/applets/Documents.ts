import { DocumentsDatabase } from "../schemas/DocumentsDatabase/DocumentsDatabase";


export const DocumentsApplet =  {
    name: 'Documents',
    type: 'Applet',
    tree_type: 'com.celmino.applet.document-management',
    applet_type: 'com.celmino.applet.document-management',
    description: 'Documents applet is effortless document management, offering seamless organization and collaboration capabilities. Access, edit, and share documents with ease, enhancing productivity across workspaces.',
    // image: '/images/applets/documents.png',
    iconCategory: 'Icons',
    iconName: 'bell',
    icon: '\\d1e2',
    iconBackColor: '#66B47C',
    enabled: true,
    databases: DocumentsDatabase
}