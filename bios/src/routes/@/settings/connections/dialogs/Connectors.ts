import { CspConnectionDialog } from "./CspConnectionDialog";
import { JiraConnectionDialog } from "./JiraConnectionDialog";

export const Connectors = {
    "com.celmino.connection.jira":
    {
        id: 'jira',
        name: 'Jira Cloud Platform',
        image: '/images/jira-logo.svg',
        image2: '/images/jira.png',
        dialog: JiraConnectionDialog
    },
    "com.celmino.connection.csp":
    {
        id: 'csp',
        name: 'Bimser Synergy',
        image: '/images/CSP.png',
        image2:'/images/bimser-synergy.png',
        dialog: CspConnectionDialog
    },
    "com.celmino.connection.sonar-cube":
    {
        id: 'sonarcube',
        name: 'Sonar Cube',
        image: '/images/sonar.png',
        dialog: JiraConnectionDialog
    },
    "com.celmino.connection.qdms":
    {
        id: 'qdms',
        name: 'QDMS',
        image: '/images/qdms.png',
        dialog: JiraConnectionDialog
    },
    "com.celmino.connection.azure-devops":
    {
        id: 'azure-devops',
        name: 'Azure DevOps',
        image: '/images/azure-devops.svg',
        dialog: JiraConnectionDialog
    }
}