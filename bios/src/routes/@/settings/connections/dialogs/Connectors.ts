import { JiraConnectionDialog } from "./JiraConnectionDialog";

export const Connectors = [
    {
        id:'jira',
        name: 'Jira',
        image:'/images/jira-logo.svg',
        dialog: JiraConnectionDialog
    },
    {
        id:'csp',
        name: 'CSP',
        image:'/images/CSP.png',
        dialog: JiraConnectionDialog
    },
    {
        id:'sonarcube',
        name: 'Sonar Cube',
        image:'/images/CSP.png',
        dialog: JiraConnectionDialog
    }
]