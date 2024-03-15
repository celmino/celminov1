import { ListAppletDatabase } from "../schemas/TaskListDatabase/TaskListDatabase";



export const ListApplet = {
    name: 'Task List',
    type: 'Applet',
    tree_type: 'com.celmino.applet.task-list',
    applet_type: 'com.celmino.applet.task-list',
    description: 'Task List applet is designed to help users organize, prioritize, and track tasks within their projects. It allows setting deadlines, managing dependencies, and assigning tasks to team members. This applet streamlines project management processes and enhances team communication, enabling easy monitoring of progress to ensure timely completion of all tasks.',
    // image: '/images/applets/documents.png',
    iconCategory: 'Icons',
    iconName: 'bell',
    icon: '\\d1e4',
    iconBackColor: '#66B47C',
    enabled: true,
    version: [1, 0, 1],
    databases: ListAppletDatabase
}