import { ListAppletDatabase } from "../schemas/ListAppletDatabase";
import { AppletBaseDatabase } from "../schemas/applet";


export const ListApplet = {
    name: 'List Applet',
    type: 'Applet',
    tree_type: 'com.celmino.applet.task-list',
    applet_type: 'com.celmino.applet.task-list',
    description: 'Documents applet is effortless document management, offering seamless organization and collaboration capabilities. Access, edit, and share documents with ease, enhancing productivity across workspaces.',
    // image: '/images/applets/documents.png',
    iconCategory: 'Icons',
    iconName: 'bell',
    icon: '\\d320',
    iconBackColor: '#66B47C',
    enabled: true,
    databases: ListAppletDatabase
}