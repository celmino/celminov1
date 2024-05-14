import { APQCApplet } from "./applets/APQC";
import { ActivitiesApplet } from "./applets/Activities";
import { WorkspaceApplet } from "./applets/Workspace";
import { DashboardsApplet } from "./applets/Dashboards";
import { AppletCategory } from "./applets/Divider";
import { EmailsApplet } from "./applets/Emails";
import { InvestorsInTurkey } from "./applets/InvestorsInTurkey";
import { WebsiteApplet } from "./applets/Website";
import { WorldApplet } from "./applets/World";
import { CommunityApplet } from "./applets/Community";
import { DatabaseApplet } from "./applets/Database";
import { Clock } from "./applets/Clock";
import { FeedApplet } from "./applets/Feed";
import { ListApplet } from "./applets/TaskListApplet";
import { MeetingsApplet } from "./applets/Meetings";
import { DocumentsApplet } from "./applets/Documents";
import { ModellingApplet } from "./applets/Modelling";
import { GoogleDrive } from "./applets/GoogleDrive";
import { Jira } from "./applets/Jira";
import { Csp } from "./applets/Csp";

export const Applets = [
    /*  InvestorsInTurkey,
     APQCApplet,
     WorldApplet, */
     WorkspaceApplet,
     AppletCategory,
     WebsiteApplet,
     EmailsApplet,
     ActivitiesApplet,
     CommunityApplet,
     ListApplet,
     DashboardsApplet,
     DatabaseApplet,
     Clock,
     FeedApplet,
     MeetingsApplet,
     DocumentsApplet,
     ModellingApplet,
     GoogleDrive,
     Jira,
     Csp,
    {
        name: 'CRM - Gıda',
        type: 'Template',
        tree_type: 'com.celmino.widget.custom-applet-tree',
        applet_type: 'com.celmino.applet.custom',
        description: 'Educators can share educational materials, monitor student engagement, and collect feedback using this template.',
        image: '/images/applets/google_drive.svg',
        //icon: '\\d320',
        enabled: false,
        databases: [
            {
                "name": "Customer Discovery",
                "id": "document_management",
                "category": "app",
                "collections": [

                ]
            }
        ]
    },
    {
        name: 'CRM - İnşaat ve Emlak',
        type: 'Template',
        tree_type: 'com.celmino.widget.custom-applet-tree',
        applet_type: 'com.celmino.applet.custom',
        description: 'Educators can share educational materials, monitor student engagement, and collect feedback using this template.',
        image: '/images/applets/google_drive.svg',
        //icon: '\\d320',
        enabled: false,
        databases: [
            {
                "name": "Customer Discovery",
                "id": "document_management",
                "category": "app",
                "collections": [

                ]
            }
        ]
    },
    {
        name: 'CRM - Eğitim',
        type: 'Template',
        tree_type: 'com.celmino.widget.custom-applet-tree',
        applet_type: 'com.celmino.applet.custom',
        description: 'Educators can share educational materials, monitor student engagement, and collect feedback using this template.',
        image: '/images/applets/google_drive.svg',
        //icon: '\\d320',
        enabled: false,
        databases: [
            {
                "name": "Customer Discovery",
                "id": "document_management",
                "category": "app",
                "collections": [

                ]
            }
        ]
    },

    {
        name: 'StartUp accelerator management',
        type: 'Solution',
        tree_type: 'com.celmino.widget.custom-applet-tree',
        applet_type: 'com.celmino.applet.custom',
        description: 'Educators can share educational materials, monitor student engagement, and collect feedback using this template.',
        image: '/images/applets/google_drive.svg',
        //icon: '\\d320',
        enabled: false,
        databases: [
            {
                "name": "Customer Discovery",
                "id": "document_management",
                "category": "app",
                "collections": [

                ]
            }
        ]
    },
    {
        name: 'Content Sharing and Monitoring',
        type: 'Solution',
        tree_type: 'com.celmino.widget.custom-applet-tree',
        applet_type: 'com.celmino.applet.custom',
        description: 'Educators can share educational materials, monitor student engagement, and collect feedback using this template.',
        image: '/images/applets/google_drive.svg',
        //icon: '\\d320',
        enabled: false,
        databases: [
            {
                "name": "Customer Discovery",
                "id": "document_management",
                "category": "app",
                "collections": [

                ]
            }
        ]
    },

    {
        name: 'Digital Marketing and Social Media Management',
        type: 'Solution',
        tree_type: 'com.celmino.widget.custom-applet-tree',
        applet_type: 'com.celmino.applet.custom',
        description: 'Manage your produck development life circle.',
        image: '/images/applets/google_drive.svg',
        //icon: '\\d320',
        enabled: false,
        databases: [
            {
                "name": "Customer Discovery",
                "id": "document_management",
                "category": "app",
                "collections": [

                ]
            }
        ]
    },
    {
        name: 'Product Management',
        type: 'Solution',
        tree_type: 'com.celmino.widget.custom-applet-tree',
        applet_type: 'com.celmino.applet.custom',
        description: 'Manage your produck development life circle.',
        image: '/images/applets/google_drive.svg',
        //icon: '\\d320',
        enabled: false,
        databases: [
            {
                "name": "Customer Discovery",
                "id": "document_management",
                "category": "app",
                "collections": [

                ]
            }
        ]
    },

    {
        name: 'OKR Tracking',
        type: 'Solution',
        tree_type: 'com.celmino.widget.custom-applet-tree',
        applet_type: 'com.celmino.applet.custom',
        description: 'Track Video stages and grouped tasks. Write your scripts, brainstorm ideas, and add notes. Calculate budget and never miss deadlines.',
        image: '/images/applets/google_drive.svg',
        //icon: '\\d320',
        enabled: false,
        databases: [
            {
                "name": "Customer Discovery",
                "id": "document_management",
                "category": "app",
                "collections": [

                ]
            }
        ]
    },
    {
        name: ' Digital video production',
        type: 'Solution',
        tree_type: 'com.celmino.widget.custom-applet-tree',
        applet_type: 'com.celmino.applet.custom',
        description: 'Track Video stages and grouped tasks. Write your scripts, brainstorm ideas, and add notes. Calculate budget and never miss deadlines.',
        image: '/images/applets/google_drive.svg',
        //icon: '\\d320',
        enabled: false,
        databases: [
            {
                "name": "Customer Discovery",
                "id": "document_management",
                "category": "app",
                "collections": [

                ]
            }
        ]
    },
    {
        name: 'Customer Feedback',
        type: 'Solution',
        tree_type: 'com.celmino.widget.custom-applet-tree',
        applet_type: 'com.celmino.applet.custom',
        description: 'Time to make your Feedback aggregation shine bright like a 💎',
        image: '/images/applets/google_drive.svg',
        //icon: '\\d320',
        enabled: false,
        databases: [
            {
                "name": "Customer Discovery",
                "id": "document_management",
                "category": "app",
                "collections": [

                ]
            }
        ]
    },
    {
        name: 'Content Marketing',
        type: 'Solution',
        tree_type: 'com.celmino.widget.custom-applet-tree',
        applet_type: 'com.celmino.applet.custom',
        description: 'Here you can aggregate feedback from different sources, manage conversations, and extract useful insights.',
        image: '/images/applets/google_drive.svg',
        //icon: '\\d320',
        enabled: false,
        databases: [
            {
                "name": "Customer Discovery",
                "id": "document_management",
                "category": "app",
                "collections": [

                ]
            }
        ]
    },
    {
        name: 'Customer Discovery',
        type: 'Solution',
        tree_type: 'com.celmino.widget.custom-applet-tree',
        applet_type: 'com.celmino.applet.custom',
        description: 'Monitor your process details in timeframe chart.',
        image: '/images/applets/google_drive.svg',
        //icon: '\\d320',
        enabled: false,
        databases: [
            {
                "name": "Customer Discovery",
                "id": "document_management",
                "category": "app",
                "collections": [

                ]
            }
        ]
    },
    {
        name: 'Google Drive',
        type: 'Applet',
        tree_type: 'com.celmino.widget.custom-applet-tree',
        applet_type: 'com.celmino.applet.custom',
        description: 'Monitor your process details in timeframe chart.',
        image: '/images/applets/google_drive.svg',
        //icon: '\\d320',
        enabled: false,
        databases: [
            {
                "name": "Custom Applet",
                "id": "document_management",
                "category": "app",
                "collections": [

                ]
            }
        ]
    },
    
    {
        name: 'Spider',
        type: 'Applet',
        tree_type: 'com.celmino.widget.custom-applet-tree',
        applet_type: 'com.celmino.applet.custom',
        description: 'Monitor your process details in timeframe chart.',
        image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTIwLjQ1IDE4LjQ4NEw3Ny41OSA5MC41ODhDNzQuODY1IDEzOS4xOCA1My44NDIgMTc2LjM4IDI1LjIgMjEwLjYybC02LjcxNi0xLjc2djE5LjMybDIuNTU3LjY3MmMxNS4zNSA0NS4wNjUgOS4wODggOTAuODI3IDEuODIgMTM4LjI5NGwtNC4zNzYgMi4wNDd2MjAuNjNsOS4xOC00LjI5NGM2LjUxNiAxMC43MDcgMTMuNjU4IDI3LjA0NyAxOS4wNiA0MS4zMyA0LjI4MyAxMS4zMyA3LjQ3NCAyMC45ODQgOS4yNTMgMjYuNTM1bC0zNy40OTMgMzcuNjl2Mi40M2gyMy45NDJsMjguNTUtMjguN2M5LjI3LS4zNjMgNDEuNzctMS40NzMgODIuNy0uNzUgNDYuNzQ0LjgyNSAxMDIuNjEyIDQuMyAxMzkuMDUgMTMuNjY3bDUuMDggMTUuNzg0aDE5LjYzMmwtNy40My0yMy4wODhjMzUuOTQtNDEuNTEgNzEuOTEyLTgwLjUyNSAxMzEuNzM0LTEwMi4zNGw1MS43NzQgMjAuNDg2di0yMC4wOTdsLTQyLjk4My0xNy4wMDhjLTYuMzc0LTM5LjIxIDEyLjc1NS03Ni42NjUgMzAuNjItMTE2LjY4bDEyLjM2My0yLjU4NXYtMTkuMDkybC02LjMyMyAxLjMyMy01LjQ1LTIuODAzQzQyNS42NTYgMTgyLjggNDA1LjQxIDEzMy42NCAzODguNDQ0IDc4LjkzbDQ0LjE4NC02MC40NDZoLTIzLjE1bC0zOC42IDUyLjgxYy01OC4yNzMgMS4yNTQtMTEyLjQ3NS0yLjQ2My0xNTQuNDQ2LTM3Ljc5bC0yLjI3NC0xNS4wMmgtMTguOWwyLjgzOCAxOC43NUMxNzAuOTYgNjYuMjI0IDE0MC41MzIgODUuMTg4IDkzLjUxMiA4MC41OWwtNDkuMjItNjIuMTA2SDIwLjQ0OHptMTk5LjkxNyA0MS4wMDRjNDAuNjA4IDI2LjMwNCA4OC40OTggMzAuODk0IDEzNi43NTQgMzAuNjNsLTMzLjE0IDQ1LjM0Yy0zNi41ODguMzk2LTY5Ljg1Ni0zLjAzNC05NS44NDUtMjQuNjM4bC03Ljc2OC01MS4zMzJ6bS0xOC44MzQuNDRsOC4yOSA1NC43NzVjLTE3LjgxNSAxOC42MTYtMzcuMjk0IDMwLjE4LTY3Ljk5NSAyNi44NTRMMTA4Ljc1MiA5OS44MmMzOC41OTMtLjc0IDY4LjM1OC0xNy4xNDQgOTIuNzgtMzkuODkyek0zNzQuODU3IDk3LjUyYzE1LjUzNiA0Ni45NjcgMzcuMDUgOTIuNjkgODQuNTUgMTIyLjcyMmwtNTEuNzY4IDEwLjgyLS44MTYtLjQxN2MtMzcuMjctMTkuMTQ1LTUwLjQ0NS01MS42NC02MS45MzUtODguODNsLS43MTYtMi4zMTUgMzAuNjgzLTQxLjk4em0tMjgwLjc0IDEzLjkxOGwzNC4zOTMgNDMuMzk4Yy0yLjUyMyAyOS41ODMtMTUuNDA0IDUyLjY2LTMzLjE0IDc0LjIwN0w0NC45NjYgMjE1LjgxYzIzLjcxNC0yOS43NzQgNDIuNjQtNjMuMzkzIDQ5LjE1Mi0xMDQuMzczem0xMzcuODQ4IDI0LjY5YzIzLjkzNiAxMy42OTQgNTEuMDUgMTcuNCA3OC40MDQgMTcuOTQ4bC0zMi45MSA0NS4wMjhjLTE1LjA1OC02LjM2NC0yNi4xMzctMTcuNzUzLTM4LjU3LTMwLjMyNWwtMi4zNDMtMi4zNy00LjU4Mi0zMC4yOHptLTE4Ljc3OC44MWw1LjU5MiAzNi45NTVjLTExLjE3NiA3LjUtMjQuNDM2IDEyLjE1LTM5LjA0NiAxNS40OTJsLTIyLjkwMi0yOC44OTdjMjIuNzEtMS4zOTUgNDEuMDk1LTEwLjY4IDU2LjM1Ni0yMy41NXptMTE3LjM4IDIxLjE3M2M5Ljc0NiAyOS4xNTUgMjMuMTQ2IDU4LjAxNyA1MC41OCA3OC40OWwtNTUuOTI4IDExLjY5Yy0xMi45OTctMTEuMTgyLTE5Ljk3Ny0yNC43MzQtMjcuMTU2LTM5Ljg5bC0xLjY3LTMuNTMgMzQuMTc0LTQ2Ljc2em0tMTg2LjQzMiAxNi40NDNsMTkuMTQyIDI0LjE1NC0uMDc4LjcxYy0xLjkzIDE3LjM2NS04Ljg3NyAyOS42My0xNi42NSA0My4wNjNsLTMxLjUzNi04LjI4YzEzLjIxMi0xNy4zNTYgMjMuOTQtMzYuODI4IDI5LjEyLTU5LjY0N3ptNzcuNjc0IDE5LjM1M2w2LjAxMiAzOS43NDJjLTMuNjE3LjY5LTcuMDU2IDEuODc1LTEwLjI1IDMuNDhsLTI1LjE3Ny0zMS43NjdjMTAuMTktMi43NSAyMC4xMy02LjM0NSAyOS40MTQtMTEuNDU0em0xOS4zNiAzLjA0M2M3LjM1NSA2LjU3OCAxNS41MiAxMi43MjIgMjUuMTUyIDE3LjM5bC0xNS44MzQgMjEuNjYyYy0xLjE3Ni0uNDkzLTIuMzc3LS45NC0zLjYwNy0xLjMxOGwtNS43MS0zNy43MzV6bS02Mi43NSAyMC44NjRsMjQuOTEgMzEuNDNjLTEuNTkzIDIuMTk3LTIuOTYgNC41NjYtNC4wOCA3LjA3bC0zMy45MTQtOC45MDJjNC45NTUtOC43NTcgOS44My0xOC4yNTMgMTMuMDg0LTI5LjU5OHptMTA1LjUyNSA0LjA4MmM1LjEyIDEwLjQxNSAxMS4xMDQgMjEuMDk1IDE5LjY1MyAzMC45MTNsLTMxLjE0MyA2LjUwOGMtMS41OC00LjQ5Ni0zLjk0My04LjYyNC02LjkzNy0xMi4yMWwxOC40MjctMjUuMjEyek00Mi4xNzIgMjM0LjRsNDguODczIDEyLjgzYzkuMjI3IDI4LjIxNSA1Ljc5NSA1Ny4wOCAxLjIgODcuNDQ4TDQzLjE3MyAzNTcuNjRjNS45NS00MC4xNDcgMTAuMjktODEuNDE0LTEtMTIzLjI0em00MTYuMTQyIDUuMTYyYy0xNC45MzMgMzIuNjM1LTMwLjExNCA2Ni43MzMtMjcuNDMzIDEwNC4xM2wtNDMuNzQtMTcuMzA3Yy0zLjYtMjUuMDE2IDguNzc2LTQ5LjQ0NSAyMC43MjUtNzYuMjc4bDUwLjQ1LTEwLjU0NHptLTM0Ni41NzYgMTMuMWwyNy42MTQgNy4yNDguNTYyIDEuNGM2LjEgMTUuMTMzIDUuMzgzIDMxLjc3MiAyLjkgNDkuNzA4bC0zMC4zMTggMTQuMTg1YzMuMjE0LTIzLjUxMiA0Ljk3Ni00Ny44MTItLjc1OC03Mi41NHptMjczLjI5NSAyLjIxN2MtOS4wNDMgMTkuODE3LTE3Ljc5NyA0MC44MDMtMTcuMjUyIDYzLjg0N2wtMzYuNTg3LTE0LjQ3N2MtLjAwNC0xMy4xNDggMS4zOTUtMjIuODQgOS4xMi0zMy45Mmw0Ljk4LTcuMTQ0IDM5Ljc0LTguMzA3em0tMjI0LjM2IDEwLjYyOGwzNS4yMzcgOS4yNTJjLjIyIDMuNjM2Ljk0IDcuMTM1IDIuMDc4IDEwLjQ0bC0zNS4yNyAxNi41MDNjMS4wNS0xMS45LjkyNy0yNC4wNDgtMi4wNDQtMzYuMTk1em0xNTkuMTYgM2MtNC42MjUgOS40MzMtNi4zOCAxOC44OS02Ljk0OCAyOC40OThsLTM5LjI3OC0xNS41NGMuMjY2LTEuMTI1LjQ3LTIuMjczLjY0LTMuNDNsNDUuNTg1LTkuNTI4em0tNTQuNzk2IDI5LjY2MmwzNi41MDQgMTQuNDQzYy04LjkxIDQuNTgtMTcuMzE2IDEwLjUzNi0yNC42NzcgMTYuMTYtMy45MDcgMi45ODYtNy4xMDcgNS42MDItOS44ODYgNy45NDJsLTEwLjEwMi0zMS4zOTdjMy4wNC0yIDUuNzg2LTQuNDA4IDguMTYyLTcuMTQ4em0tNTguMTIgMy40ODRMMTY5LjI2IDMzOS41MWMtMi41NTgtNi4yLTYuMDE4LTExLjE0Ny05LjU4OC0xNS4yMzVsLjA4OC0uNTU2IDQ3LjE1NC0yMi4wNjZ6bTE3LjczIDguNjcyYzMuMzc3Ljk0IDYuOTMgMS40NTUgMTAuNjA3IDEuNDU1IDEuMzUgMCAyLjY4Ni0uMDY3IDQuMDAyLS4ybDEwLjQ3MyAzMi41NGMtMTMuMzE0LS4xNi0zNy42MTMuMDc2LTYxLjY5MyAzLjAxbDM2LjYxLTM2LjgwNHptMTAzLjQ4NiAxMi44MWwyNS4zNjMgMTAuMDM0Yy0yOS40IDE0LjkyLTUwLjM3NiAzNS44OTYtNjkuMjUyIDU3LjJMMjczLjIgMzU2LjA1YzMuNTU0LTMuMTc0IDguNzMtNy42MyAxNS4wMS0xMi40MjcgMTEuNDItOC43MjcgMjYuMjA4LTE3LjcgMzUuNjg1LTE5LjYyN2w0LjIzOC0uODZ6TTE0MS42MzUgMzMyLjJsMS41MTcgMS41MjVjNS44NDggNS44NzUgOS45NzMgMTAuMzAzIDExLjIyMyAyMC43NWwtMzEuMTQzIDMxLjMwOGMtLjM1LTIuMjctLjczOC00LjYzLTEuMi03LjE0Mi0yLjAxLTEwLjk1LTQuNDQ4LTIyLjk0Mi05LjMyNS0zMi45MDRsMjguOTI4LTEzLjUzNXptMjM1LjkyOCAxMC40OTNsMzkuMjE4IDE1LjUxOGMtNDkuNDIzIDIyLjUtODIuOTE1IDU2LjY4NC0xMTMuNDUgOTEuNDdsLTEyLjQzNS0zOC42NDdjMjQuMTAzLTI3LjgzOCA0Ny42NzMtNTMuNjE2IDg2LjY2OC02OC4zNHpNOTUuNTc3IDM1My43NWMzLjAwMiA2LjgzNyA2LjIyMiAxOC4xNyA4LjA3NiAyOC4yNjYgMS41ODIgOC42MSAyLjUgMTYuMDggMi45OCAyMC40NWwtMzUuODgyIDM2LjA3NWMtMS42OC00Ljk4LTMuNzc3LTEwLjk2LTYuNTUtMTguMjktNS4zNzQtMTQuMjE2LTExLjk5My0zMC4wMTItMTkuNjEtNDIuNjRsNTAuOTg2LTIzLjg2em0xNTAuODYzIDkuMTQ4YzMuOTY4LS4wMDYgNi44MTQuMDMgOS4zNS4wNjVsMTAuMzk2IDMyLjNjLTI2LjI1Ny00LjE1LTU4LjYzMy00LjE5LTg3LjA1Ny0zLjE4NS0xNS41NzUuNTUtMjguMDA0IDEuMzI3LTM3Ljg1NyAyLjA2NWwyNC4xMDgtMjQuMjM3Ljk1LS4yM2MyMy43NDYtNS43OSA1OS44Ni02Ljc0NiA4MC4xMS02Ljc3OHptLTQyLjE5MiA0Ny4zOWMyNC45MjQtLjA1MyA1MC4zNjYgMS4yNjYgNjguNDE2IDUuMTAzbDEzLjQyOCA0MS43MjdjLTM4LjcwOC04LjIzLTg4Ljk4NC0xMC45NzctMTMyLjA4Ni0xMS43MzgtMjcuMjIyLS40ODItNDkuMjM3LS4xODgtNjMuODcuMTczbDMwLjgtMzAuOTYzYzcuNzY1LS43NTcgMzAuNzEtMi44NDIgNTguODUzLTMuODM2IDcuOS0uMjggMTYuMTUtLjQ1IDI0LjQ1OC0uNDY3eiIvPjwvc3ZnPg==',
        //icon: '\\d320',
        enabled: false,
        databases: [
            {
                "name": "Custom Applet",
                "id": "document_management",
                "category": "app",
                "collections": [

                ]
            }
        ]
    },
    {
        name: 'Enterprise Modelling',
        type: 'Applet',
        tree_type: 'com.celmino.widget.enterprise-modelling-tree',
        description: 'Monitor your process details in timeframe chart.',
        // image: '/static/opa/images/com.tuvalsoft.opa.task/icon.png',
        icon: '\\d1e7',
        iconBackColor: '#66B47C',
        enabled: false,
        databases: [
            {
                "name": "Enterprise Modelling",
                "id": "enterprise_modelling",
                "category": "app",
                "collections": [
                    {
                        "name": "Folders",
                        "id": "em_folders",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            },
                            {
                                "key": "Parent",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Models",
                        "id": "em_models",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            },
                            {
                                "key": "Parent",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Model Types",
                        "id": "model_types",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            },
                            {
                                "key": "OrginalName",
                                "type": "string"
                            },
                            {
                                "key": "TypeNumber",
                                "type": "number"
                            },
                            {
                                "key": "ApiName",
                                "type": "string"
                            },
                            {
                                "key": "Type",
                                "type": "string"
                            }

                        ],
                        "documents": [
                            {
                                "Name": "Organizational chart",
                                "TypeNumber": 1,
                                "ApiName": "MT_ORG_CHRT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Screen diagram",
                                "TypeNumber": 2,
                                "ApiName": "MT_SCRN_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Network topology ",
                                "TypeNumber": 3,
                                "ApiName": "MT_NW_TOPLG",
                                "Type": "Default"
                            },
                            {
                                "Name": "Network diagram",
                                "TypeNumber": 5,
                                "ApiName": "MT_NW_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "eERM",
                                "TypeNumber": 6,
                                "ApiName": "MT_EERM",
                                "Type": "Default"
                            },
                            {
                                "Name": "SAP SERM",
                                "TypeNumber": 7,
                                "ApiName": "MT_SAP_SERM",
                                "Type": "Default"
                            },
                            {
                                "Name": "eERM attribute allocation diagram",
                                "TypeNumber": 8,
                                "ApiName": "MT_EERM_ATTR_ALLOC_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Relations diagram",
                                "TypeNumber": 9,
                                "ApiName": "MT_REL_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Attribute allocation diagram",
                                "TypeNumber": 10,
                                "ApiName": "MT_ATTR_ALLOC_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Table diagram",
                                "TypeNumber": 11,
                                "ApiName": "MT_TBL_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Value-added chain diagram",
                                "TypeNumber": 12,
                                "ApiName": "MT_VAL_ADD_CHN_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "EPC",
                                "TypeNumber": 13,
                                "ApiName": "MT_EPC",
                                "Type": "Default"
                            },
                            {
                                "Name": "Function allocation diagram",
                                "TypeNumber": 14,
                                "ApiName": "MT_FUNC_ALLOC_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Information flow diagram",
                                "TypeNumber": 15,
                                "ApiName": "MT_INFO_FLOW_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Access diagram",
                                "TypeNumber": 16,
                                "ApiName": "MT_ACS_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Access diagram (physical)",
                                "TypeNumber": 17,
                                "ApiName": "MT_ACS_DGM_PHYs",
                                "Type": "Default"
                            },
                            {
                                "Name": "PCD",
                                "TypeNumber": 18,
                                "ApiName": "MT_PCD",
                                "Type": "Default"
                            },
                            {
                                "Name": "Function tree",
                                "TypeNumber": 19,
                                "ApiName": "MT_FUNC_TREE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Application system type diagram",
                                "TypeNumber": 21,
                                "ApiName": "MT_FUNC_TREE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Tecnical terms model",
                                "TypeNumber": 22,
                                "ApiName": "MT_TEC_TERMS_MDL",
                                "Type": "Default"
                            },
                            {
                                "Name": "Event diagram",
                                "TypeNumber": 23,
                                "ApiName": "MT_EVNT_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Rule diagram",
                                "TypeNumber": 24,
                                "ApiName": "MT_RULE_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Function organizational level diagram",
                                "TypeNumber": 25,
                                "ApiName": "MT_FUNC_ORG_LVL_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Process selection matrix",
                                "TypeNumber": 28,
                                "ApiName": "MT_PROC_SEL_MTRX",
                                "Type": "Default"
                            },
                            {
                                "Name": "Y diagram",
                                "TypeNumber": 30,
                                "ApiName": "MT_Y_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "SAP application diagram",
                                "TypeNumber": 31,
                                "ApiName": "MT_SAP_APP_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Classfication diagram",
                                "TypeNumber": 36,
                                "ApiName": "MT_CLSF_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Objective diagram",
                                "TypeNumber": 37,
                                "ApiName": "MT_OBJ_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Application system diagram",
                                "TypeNumber": 38,
                                "ApiName": "MT_APP_SYS_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "OMT Object model",
                                "TypeNumber": 39,
                                "ApiName": "MT_APP_SYS_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "OMT Dynamic model",
                                "TypeNumber": 40,
                                "ApiName": "MT_OMT_DYN_MDL",
                                "Type": "Default"
                            },
                            {
                                "Name": "OMT Functional model",
                                "TypeNumber": 41,
                                "ApiName": "MT_OMT_FUNC_MDL",
                                "Type": "Default"
                            },
                            {
                                "Name": "E Data model",
                                "TypeNumber": 42,
                                "ApiName": "MT_E_DATA_MDL",
                                "Type": "Default"
                            },
                            {
                                "Name": "OMT Data value decomposition",
                                "TypeNumber": 43,
                                "ApiName": "MT_OMT_DATA_VAL_DCMPS",
                                "Type": "Default"
                            },
                            {
                                "Name": "Class diagram",
                                "TypeNumber": 44,
                                "ApiName": "MT_CLS_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "System attributes",
                                "TypeNumber": 45,
                                "ApiName": "MT_SYS_ATTRS",
                                "Type": "Default"
                            },
                            {
                                "Name": "System attribute domain",
                                "TypeNumber": 46,
                                "ApiName": "MT_SYS_ATTRS_DOM",
                                "Type": "Default"
                            },
                            {
                                "Name": "SeDaM model",
                                "TypeNumber": 47,
                                "ApiName": "MT_SEDAM_MDL",
                                "Type": "Default"
                            },
                            {
                                "Name": "Technical resources",
                                "TypeNumber": 48,
                                "ApiName": "MT_TEC_RCS",
                                "Type": "Default"
                            },
                            {
                                "Name": "Material diagram",
                                "TypeNumber": 49,
                                "ApiName": "MT_MTRL_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "EPC (material flow)",
                                "TypeNumber": 50,
                                "ApiName": "MT_EPC_MTRL_FLOW",
                                "Type": "Default"
                            },
                            {
                                "Name": "PCD (material flow)",
                                "TypeNumber": 51,
                                "ApiName": "MT_PCD_MTRL_FLOW",
                                "Type": "Default"
                            },
                            {
                                "Name": "Communications diagram",
                                "TypeNumber": 52,
                                "ApiName": "MT_COMM_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Program flow chart",
                                "TypeNumber": 53,
                                "ApiName": "MT_PRG_FLOW_CHRT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Cost category diagram",
                                "TypeNumber": 54,
                                "ApiName": "MT_CST_CAT_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "OMT Class description model",
                                "TypeNumber": 55,
                                "ApiName": "MT_OMT_CLS_DESC_MDL",
                                "Type": "Default"
                            },
                            {
                                "Name": "RAMS",
                                "TypeNumber": 56,
                                "ApiName": "MT_RAMS",
                                "Type": "Default"
                            },
                            {
                                "Name": "SAP ALE function model",
                                "TypeNumber": 57,
                                "ApiName": "MT_SAP_ALE_FUNC_MDL",
                                "Type": "Default"
                            },
                            {
                                "Name": "SAP ALE filter model",
                                "TypeNumber": 58,
                                "ApiName": "MT_SAP_ALE_FLTR_MDL",
                                "Type": "Default"
                            },
                            {
                                "Name": "SAP ALE message flow model",
                                "TypeNumber": 59,
                                "ApiName": "MT_SAP_ALE_MSG_FLOW_MDL",
                                "Type": "Default"
                            },
                            {
                                "Name": "SAP ALE message type model",
                                "TypeNumber": 60,
                                "ApiName": "MT_SAP_ALE_MSG_TYP_MDL",
                                "Type": "Default"
                            },
                            {
                                "Name": "EPC (instance)",
                                "TypeNumber": 61,
                                "ApiName": "MT_EPC_INST",
                                "Type": "Default"
                            },
                            {
                                "Name": "Material flow diagram",
                                "TypeNumber": 62,
                                "ApiName": "MT_MTRL_FLOW_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "PPC",
                                "TypeNumber": 63,
                                "ApiName": "MT_PPC",
                                "Type": "Default"
                            },
                            {
                                "Name": "Information carrier diagram",
                                "TypeNumber": 64,
                                "ApiName": "MT_INFO_CRR_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Task allocation diagram",
                                "TypeNumber": 65,
                                "ApiName": "MT_TSK_ALLOC_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Privileges diagram",
                                "TypeNumber": 66,
                                "ApiName": "MT_PRIV_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Event diagram (instance)",
                                "TypeNumber": 67,
                                "ApiName": "MT_EVNT_DGM_INST",
                                "Type": "Default"
                            },
                            {
                                "Name": "Business controls diagram",
                                "TypeNumber": 68,
                                "ApiName": "MT_BUS_CTRL_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Product/Service exchange diagram (graphic)",
                                "TypeNumber": 69,
                                "ApiName": "MT_PROD_EXCH_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Product/Service tree (graphic)",
                                "TypeNumber": 69,
                                "ApiName": "MT_PROD_TREE_GRAPHIC",
                                "Type": "Default"
                            },
                            {
                                "Name": "Product tree",
                                "TypeNumber": 70,
                                "ApiName": "MT_PROD_TREE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Product selection matrix",
                                "TypeNumber": 71,
                                "ApiName": "MT_PROD_SEL_MTRX",
                                "Type": "Default"
                            },
                            {
                                "Name": "Office process",
                                "TypeNumber": 72,
                                "ApiName": "MT_OFFICE_PROC",
                                "Type": "Default"
                            },
                            {
                                "Name": "Product allocation diagram",
                                "TypeNumber": 73,
                                "ApiName": "MT_PROD_ALLOC_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Competition model",
                                "TypeNumber": 74,
                                "ApiName": "MT_COMP_MDL",
                                "Type": "Default"
                            },
                            {
                                "Name": "Industrial process",
                                "TypeNumber": 75,
                                "ApiName": "MT_IND_PROC",
                                "Type": "Default"
                            },
                            {
                                "Name": "Process instantiation model",
                                "TypeNumber": 76,
                                "ApiName": "MT_PROC_INST_MDL",
                                "Type": "Default"
                            },
                            {
                                "Name": "Shift calendar",
                                "TypeNumber": 77,
                                "ApiName": "MT_SHIFT_CAL",
                                "Type": "Default"
                            },
                            {
                                "Name": "CD Diagram",
                                "TypeNumber": 78,
                                "ApiName": "MT_CD_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Input/Output diagram",
                                "TypeNumber": 79,
                                "ApiName": "MT_IN_OUT_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Knowledge structure diagram",
                                "TypeNumber": 80,
                                "ApiName": "MT_KNW_STRC_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Knowledge map",
                                "TypeNumber": 81,
                                "ApiName": "MT_KNW_MAP",
                                "Type": "Default"
                            },
                            {
                                "Name": "UML Class description diagram",
                                "TypeNumber": 82,
                                "ApiName": "MT_UML_CLS_DESC_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Product/Service tree",
                                "TypeNumber": 83,
                                "ApiName": "MT_PROD_SER_TREE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Product/Service exchange diagram",
                                "TypeNumber": 84,
                                "ApiName": "MT_PROD_SER_EXCH_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Structuring model",
                                "TypeNumber": 85,
                                "ApiName": "MT_STRC_MDL",
                                "Type": "Default"
                            },
                            {
                                "Name": "EPC (column display)",
                                "TypeNumber": 86,
                                "ApiName": "MT_EPC_COL_DPLY",
                                "Type": "Default"
                            },
                            {
                                "Name": "Program flow chart (PF)",
                                "TypeNumber": 87,
                                "ApiName": "MT_PRG_FLOW_CHRT_PF",
                                "Type": "Default"
                            },
                            {
                                "Name": "EPC (row display)",
                                "TypeNumber": 88,
                                "ApiName": "MT_EPC_ROW_DPLY",
                                "Type": "Default"
                            },
                            {
                                "Name": "Process selection diagram",
                                "TypeNumber": 89,
                                "ApiName": "MT_PROC_SEL_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Authorization map",
                                "TypeNumber": 90,
                                "ApiName": "MT_AUTH_MAP",
                                "Type": "Default"
                            },
                            {
                                "Name": "Authorization hierarchy",
                                "TypeNumber": 91,
                                "ApiName": "MT_AUTH_HIER",
                                "Type": "Default"
                            },
                            {
                                "Name": "Role diagram",
                                "TypeNumber": 92,
                                "ApiName": "MT_ROLE_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "E-Business scenario diagram",
                                "TypeNumber": 93,
                                "ApiName": "MT_E_BUS_SCN_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "KPI allocation diagram",
                                "TypeNumber": 94,
                                "ApiName": "MT_KPI_ALLOC_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "DW structure",
                                "TypeNumber": 95,
                                "ApiName": "MT_DW_STRC",
                                "Type": "Default"
                            },
                            {
                                "Name": "DW transformation",
                                "TypeNumber": 96,
                                "ApiName": "MT_DW_TRNS",
                                "Type": "Default"
                            },
                            {
                                "Name": "EPC (table display)",
                                "TypeNumber": 97,
                                "ApiName": "MT_EPC_TBL_DPLY",
                                "Type": "Default"
                            },
                            {
                                "Name": "Input/Output diagram (inverse)",
                                "TypeNumber": 98,
                                "ApiName": "MT_IN_OUT_DGM_INV",
                                "Type": "Default"
                            },
                            {
                                "Name": "RAD",
                                "TypeNumber": 99,
                                "ApiName": "MT_RAD",
                                "Type": "Default"
                            },
                            {
                                "Name": "Quick model",
                                "TypeNumber": 100,
                                "ApiName": "MT_QUICK_MDL",
                                "Type": "Default"
                            },
                            {
                                "Name": "DTD",
                                "TypeNumber": 101,
                                "ApiName": "MT_DTD",
                                "Type": "Default"
                            },
                            {
                                "Name": "c3 method",
                                "TypeNumber": 102,
                                "ApiName": "MT_C3_MTHD",
                                "Type": "Default"
                            },
                            {
                                "Name": "Risk diagram",
                                "TypeNumber": 103,
                                "ApiName": "MT_RISK_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Screen design",
                                "TypeNumber": 104,
                                "ApiName": "MT_SCREEN_DESIGN",
                                "Type": "Default"
                            },
                            {
                                "Name": "Screen navigation",
                                "TypeNumber": 105,
                                "ApiName": "MT_SCREEN_NAV",
                                "Type": "Default"
                            },
                            {
                                "Name": "Service architecture diagram",
                                "TypeNumber": 106,
                                "ApiName": "MT_SER_ARCH_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Service architecture diagram (column display)",
                                "TypeNumber": 107,
                                "ApiName": "MT_SER_ARCH_DGM_COL_DPLY",
                                "Type": "Default"
                            },
                            {
                                "Name": "Application system type diagram (column display)",
                                "TypeNumber": 108,
                                "ApiName": "MT_APP_SYS_TYP_DGM_COL_DPLY",
                                "Type": "Default"
                            },
                            {
                                "Name": "Service allocation diagram",
                                "TypeNumber": 109,
                                "ApiName": "MT_SER_ALLOC_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "EPC (horizontal table display)",
                                "TypeNumber": 110,
                                "ApiName": "MT_EPC_HOR_TBL_DPLY",
                                "Type": "Default"
                            },
                            {
                                "Name": "SAP functions mapping (Solution Manager)",
                                "TypeNumber": 111,
                                "ApiName": "MT_SAP_FUNC_MAP_SM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Functions mapping (Solution Manager)",
                                "TypeNumber": 112,
                                "ApiName": "MT_FUNC_MAP_SM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Business segment matrix",
                                "TypeNumber": 113,
                                "ApiName": "MT_BUS_SEG_MTRX",
                                "Type": "Default"
                            },
                            {
                                "Name": "BPMN process diagram (BPMN 1.x)",
                                "TypeNumber": 114,
                                "ApiName": "MT_BPMN_PROC_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "SAP integration process (XI)",
                                "TypeNumber": 115,
                                "ApiName": "MT_SAP_INT_PROC_XI",
                                "Type": "Default"
                            },
                            {
                                "Name": "Swimlane tree",
                                "TypeNumber": 116,
                                "ApiName": "MT_SWIM_TREE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Service collaboration diagram",
                                "TypeNumber": 117,
                                "ApiName": "MT_SER_COL_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Process support map",
                                "TypeNumber": 118,
                                "ApiName": "MT_PROC_SUPP_MAP",
                                "Type": "Default"
                            },
                            {
                                "Name": "SAP allocation diagram",
                                "TypeNumber": 119,
                                "ApiName": "MT_SAP_ALLOC_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "IT architecture mapping",
                                "TypeNumber": 120,
                                "ApiName": "MT_IT_ARCH_MAP",
                                "Type": "Default"
                            },
                            {
                                "Name": "IT architecture matrix",
                                "TypeNumber": 121,
                                "ApiName": "MT_IT_ARCH_MTRX",
                                "Type": "Default"
                            },
                            {
                                "Name": "BPMN allocation diagram (BPMN 1.x)",
                                "TypeNumber": 122,
                                "ApiName": "MT_BPMN_ALLOC_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "SAP organizational elements mapping",
                                "TypeNumber": 123,
                                "ApiName": "MT_SAP_ORG_ELM_MAP",
                                "Type": "Default"
                            },
                            {
                                "Name": "Matrix model",
                                "TypeNumber": 124,
                                "ApiName": "MT_MTRX_MDL",
                                "Type": "Default"
                            },
                            {
                                "Name": "Process schedule",
                                "TypeNumber": 125,
                                "ApiName": "MT_PROC_SCH",
                                "Type": "Default"
                            },
                            {
                                "Name": "Transformation",
                                "TypeNumber": 126,
                                "ApiName": "MT_TRNS",
                                "Type": "Default"
                            },
                            {
                                "Name": "Mapping model",
                                "TypeNumber": 127,
                                "ApiName": "MT_MAP_MDL",
                                "Type": "Default"
                            },
                            {
                                "Name": "XML model",
                                "TypeNumber": 128,
                                "ApiName": "MT_XML_MDL",
                                "Type": "Default"
                            },
                            {
                                "Name": "Schedule",
                                "TypeNumber": 129,
                                "ApiName": "MT_SCH",
                                "Type": "Default"
                            },
                            {
                                "Name": "Composite schedule",
                                "TypeNumber": 130,
                                "ApiName": "MT_COMP_SCH",
                                "Type": "Default"
                            },
                            {
                                "Name": "Project schedule",
                                "TypeNumber": 131,
                                "ApiName": "MT_PRJ_SCH",
                                "Type": "Default"
                            },
                            {
                                "Name": "Work breakdown structure",
                                "TypeNumber": 132,
                                "ApiName": "MT_WRK_BRK_STRC",
                                "Type": "Default"
                            },
                            {
                                "Name": "Requirements tree",
                                "TypeNumber": 133,
                                "ApiName": "MT_REQ_TREE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Requirement allocation diagram",
                                "TypeNumber": 134,
                                "ApiName": "MT_REQ_ALLOC_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Data flow diagram",
                                "TypeNumber": 135,
                                "ApiName": "MT_DATA_FLOW_DGM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Transformation profile model",
                                "TypeNumber": 136,
                                "ApiName": "MT_TRNS_PROF_MDL",
                                "Type": "Default"
                            },
                            {
                                "Name": "BPMN allocation diagram (2.0 beta)",
                                "TypeNumber": 137,
                                "ApiName": "MT_BPMN_ALLOC_DGM_2",
                                "Type": "Default"
                            },
                            {
                                "Name": "Whiteboard",
                                "TypeNumber": 138,
                                "ApiName": "MT_WHITEBOARD",
                                "Type": "Default"
                            },
                        ]
                    },
                    // Model Type Tables Start
                    {
                        "name": "Organizational chart",
                        "id": "MT_ORG_CHRT",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },

                    {
                        "name": "Screen diagram",
                        "id": "MT_SCRN_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },

                    {
                        "name": "Network topology",
                        "id": "MT_NW_TOPLG",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },

                    {
                        "name": "Network diagram",
                        "id": "MT_NW_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },

                    {
                        "name": "eERM",
                        "id": "MT_EERM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },

                    {
                        "name": "SAP SERM",
                        "id": "MT_SAP_SERM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },

                    {
                        "name": "eERM attribute allocation diagram",
                        "id": "MT_EERM_ATTR_ALLOC_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },

                    {
                        "name": "Relations diagram",
                        "id": "MT_REL_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },

                    {
                        "name": "Attribute allocation diagram",
                        "id": "MT_ATTR_ALLOC_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },

                    {
                        "name": "Table diagram",
                        "id": "MT_TBL_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },

                    {
                        "name": "Value-added chain diagram",
                        "id": "MT_VAL_ADD_CHN_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },

                    {
                        "name": "EPC",
                        "id": "MT_EPC",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },

                    {
                        "name": "Function allocation diagram",
                        "id": "MT_FUNC_ALLOC_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },

                    {
                        "name": "Information flow diagram",
                        "id": "MT_INFO_FLOW_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },

                    {
                        "name": "Access diagram",
                        "id": "MT_ACS_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },

                    {
                        "name": "Access diagram (physical)",
                        "id": "MT_ACS_DGM_PHYs",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },

                    {
                        "name": "PCD",
                        "id": "MT_PCD",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },

                    {
                        "name": "Function tree",
                        "id": "MT_FUNC_TREE",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },

                    {
                        "name": "Application system type diagram",
                        "id": "MT_APP_SYS_TYP_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },

                    {
                        "name": "Tecnical terms model",
                        "id": "MT_TEC_TERMS_MDL",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },

                    {
                        "name": "Event diagram",
                        "id": "MT_EVNT_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },

                    {
                        "name": "Rule diagram",
                        "id": "MT_RULE_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },

                    {
                        "name": "Function organizational level diagram",
                        "id": "MT_FUNC_ORG_LVL_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },

                    {
                        "name": "Process selection matrix",
                        "id": "MT_PROC_SEL_MTRX",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },

                    {
                        "name": "Y diagram",
                        "id": "MT_Y_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },

                    {
                        "name": "SAP application diagram",
                        "id": "MT_SAP_APP_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },

                    {
                        "name": "Classfication diagram",
                        "id": "MT_CLSF_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },

                    {
                        "name": "Objective diagram",
                        "id": "MT_OBJ_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },

                    {
                        "name": "Application system diagram",
                        "id": "MT_APP_SYS_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },

                    {
                        "name": "OMT Object model",
                        "id": "MT_OMT_OBJ_MDL",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },

                    {
                        "name": "OMT Dynamic model",
                        "id": "MT_OMT_DYN_MDL",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "OMT Functional model",
                        "id": "MT_OMT_FUNC_MDL",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "E Data model",
                        "id": "MT_E_DATA_MDL",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "OMT Data value decomposition",
                        "id": "MT_OMT_DATA_VAL_DCMPS",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Class diagram",
                        "id": "MT_CLS_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "System attributes",
                        "id": "MT_SYS_ATTRS",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "System attribute domain",
                        "id": "MT_SYS_ATTRS_DOM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "SeDaM model",
                        "id": "MT_SEDAM_MDL",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Technical resources",
                        "id": "MT_TEC_RCS",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Material diagram",
                        "id": "MT_MTRL_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "EPC (material flow)",
                        "id": "MT_EPC_MTRL_FLOW",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "PCD (material flow)",
                        "id": "MT_PCD_MTRL_FLOW",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Communications diagram",
                        "id": "MT_COMM_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Program flow chart",
                        "id": "MT_PRG_FLOW_CHRT",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Cost category diagram",
                        "id": "MT_CST_CAT_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "OMT Class description model",
                        "id": "MT_OMT_CLS_DESC_MDL",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "RAMS",
                        "id": "MT_RAMS",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "SAP ALE function model",
                        "id": "MT_SAP_ALE_FUNC_MDL",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "SAP ALE filter model",
                        "id": "MT_SAP_ALE_FLTR_MDL",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "SAP ALE message flow model",
                        "id": "MT_SAP_ALE_MSG_FLOW_MDL",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "SAP ALE message type model",
                        "id": "MT_SAP_ALE_MSG_TYP_MDL",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "EPC (instance)",
                        "id": "MT_EPC_INST",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Material flow diagram",
                        "id": "MT_MTRL_FLOW_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "PPC",
                        "id": "MT_PPC",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Information carrier diagram",
                        "id": "MT_INFO_CRR_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Task allocation diagram",
                        "id": "MT_TSK_ALLOC_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Privileges diagram",
                        "id": "MT_PRIV_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Event diagram (instance)",
                        "id": "MT_EVNT_DGM_INST",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Business controls diagram",
                        "id": "MT_BUS_CTRL_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Product/Service exchange diagram (graphic)",
                        "id": "MT_PROD_EXCH_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Product/Service tree (graphic)",
                        "id": "MT_PROD_TREE_GRAPHIC",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Product tree",
                        "id": "MT_PROD_TREE",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Product selection matrix",
                        "id": "MT_PROD_SEL_MTRX",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Office process",
                        "id": "MT_OFFICE_PROC",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Product allocation diagram",
                        "id": "MT_PROD_ALLOC_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Competition model",
                        "id": "MT_COMP_MDL",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Industrial process",
                        "id": "MT_IND_PROC",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Process instantiation model",
                        "id": "MT_PROC_INST_MDL",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Shift calendar",
                        "id": "MT_SHIFT_CAL",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "CD Diagram",
                        "id": "MT_CD_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Input/Output diagram",
                        "id": "MT_IN_OUT_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Knowledge structure diagram",
                        "id": "MT_KNW_STRC_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Knowledge map",
                        "id": "MT_KNW_MAP",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "UML Class description diagram",
                        "id": "MT_UML_CLS_DESC_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Product/Service tree",
                        "id": "MT_PROD_SER_TREE",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Product/Service exchange diagram",
                        "id": "MT_PROD_SER_EXCH_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Structuring model",
                        "id": "MT_STRC_MDL",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "EPC (column display)",
                        "id": "MT_EPC_COL_DPLY",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Program flow chart (PF)",
                        "id": "MT_PRG_FLOW_CHRT_PF",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "EPC (row display)",
                        "id": "MT_EPC_ROW_DPLY",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Process selection diagram",
                        "id": "MT_PROC_SEL_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Authorization map",
                        "id": "MT_AUTH_MAP",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Authorization hierarchy",
                        "id": "MT_AUTH_HIER",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Role diagram",
                        "id": "MT_ROLE_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "E-Business scenario diagram",
                        "id": "MT_E_BUS_SCN_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "KPI allocation diagram",
                        "id": "MT_KPI_ALLOC_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "DW structure",
                        "id": "MT_DW_STRC",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "DW transformation",
                        "id": "MT_DW_TRNS",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "EPC (table display)",
                        "id": "MT_EPC_TBL_DPLY",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Input/Output diagram (inverse)",
                        "id": "MT_IN_OUT_DGM_INV",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "RAD",
                        "id": "MT_RAD",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Quick model",
                        "id": "MT_QUICK_MDL",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "DTD",
                        "id": "MT_DTD",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "c3 method",
                        "id": "MT_C3_MTHD",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Risk diagram",
                        "id": "MT_RISK_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Screen design",
                        "id": "MT_SCREEN_DESIGN",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Screen navigation",
                        "id": "MT_SCREEN_NAV",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Service architecture diagram",
                        "id": "MT_SER_ARCH_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Service architecture diagram (column display)",
                        "id": "MT_SER_ARCH_DGM_COL_DPLY",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Application system type diagram (column display)",
                        "id": "MT_APP_SYS_TYP_DGM_COL_DPLY",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Service allocation diagram",
                        "id": "MT_SER_ALLOC_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "EPC (horizontal table display)",
                        "id": "MT_EPC_HOR_TBL_DPLY",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "SAP functions mapping (Solution Manager)",
                        "id": "MT_SAP_FUNC_MAP_SM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Functions mapping (Solution Manager)",
                        "id": "MT_FUNC_MAP_SM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Business segment matrix",
                        "id": "MT_BUS_SEG_MTRX",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "BPMN process diagram (BPMN 1.x)",
                        "id": "MT_BPMN_PROC_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "SAP integration process (XI)",
                        "id": "MT_SAP_INT_PROC_XI",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Swimlane tree",
                        "id": "MT_SWIM_TREE",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Service collaboration diagram",
                        "id": "MT_SER_COL_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Process support map",
                        "id": "MT_PROC_SUPP_MAP",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "SAP allocation diagram",
                        "id": "MT_SAP_ALLOC_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "IT architecture mapping",
                        "id": "MT_IT_ARCH_MAP",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "IT architecture matrix",
                        "id": "MT_IT_ARCH_MTRX",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "BPMN allocation diagram (BPMN 1.x)",
                        "id": "MT_BPMN_ALLOC_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "SAP organizational elements mapping",
                        "id": "MT_SAP_ORG_ELM_MAP",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Matrix model",
                        "id": "MT_MTRX_MDL",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Process schedule",
                        "id": "MT_PROC_SCH",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Transformation",
                        "id": "MT_TRNS",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Mapping model",
                        "id": "MT_MAP_MDL",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "XML model",
                        "id": "MT_XML_MDL",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Schedule",
                        "id": "MT_SCH",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Composite schedule",
                        "id": "MT_COMP_SCH",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Project schedule",
                        "id": "MT_PRJ_SCH",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Work breakdown structure",
                        "id": "MT_WRK_BRK_STRC",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Requirements tree",
                        "id": "MT_REQ_TREE",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Requirement allocation diagram",
                        "id": "MT_REQ_ALLOC_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Data flow diagram",
                        "id": "MT_DATA_FLOW_DGM",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Transformation profile model",
                        "id": "MT_TRNS_PROF_MDL",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "BPMN allocation diagram (2.0 beta)",
                        "id": "MT_BPMN_ALLOC_DGM_2",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Whiteboard",
                        "id": "MT_WHITEBOARD",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },






                    // Model Type Tables End
                    {
                        "name": "Object Types",
                        "id": "object_types",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            },
                            {
                                "key": "OrginalName",
                                "type": "string"
                            },
                            {
                                "key": "TypeNumber",
                                "type": "number"
                            },
                            {
                                "key": "ApiName",
                                "type": "string"
                            },
                            {
                                "key": "Type",
                                "type": "string"
                            },

                        ],
                        "documents": [

                            {
                                "Name": "Action",
                                "TypeNumber": 1,
                                "ApiName": "OT_ACTION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Activity graph",
                                "TypeNumber": 2,
                                "ApiName": "OT_ACT_GRAPH",
                                "Type": "Default"
                            },
                            {
                                "Name": "Actor",
                                "TypeNumber": 3,
                                "ApiName": "OT_ACTOR",
                                "Type": "Default"
                            },
                            {
                                "Name": "Application system",
                                "TypeNumber": 4,
                                "ApiName": "OT_APP_SYS",
                                "Type": "Default"
                            },
                            {
                                "Name": "Application system class",
                                "TypeNumber": 5,
                                "ApiName": "OT_APP_SYS_CLS",
                                "Type": "Default"
                            },
                            {
                                "Name": "Application system type",
                                "TypeNumber": 6,
                                "ApiName": "OT_APP_SYS_TYP",
                                "Type": "Default"
                            },
                            {
                                "Name": "Architecture element",
                                "TypeNumber": 7,
                                "ApiName": "OT_ARCH_ELEM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Argument",
                                "TypeNumber": 8,
                                "ApiName": "OT_ARGUMENT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Artifact",
                                "TypeNumber": 9,
                                "ApiName": "OT_ARTIFACT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Association",
                                "TypeNumber": 10,
                                "ApiName": "OT_ASSOCIATION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Association class",
                                "TypeNumber": 11,
                                "ApiName": "OT_ASSOCIATION_CLASS",
                                "Type": "Default"
                            },
                            {
                                "Name": "Association instance",
                                "TypeNumber": 12,
                                "ApiName": "OT_ASSOCIATION_INST",
                                "Type": "Default"
                            },
                            {
                                "Name": "Association role",
                                "TypeNumber": 13,
                                "ApiName": "OT_ASSOCIATION_ROLE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Attribute",
                                "TypeNumber": 14,
                                "ApiName": "OT_ATTRIBUTE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Attribute link",
                                "TypeNumber": 15,
                                "ApiName": "OT_ATTRIBUTE_LINK",
                                "Type": "Default"
                            },
                            {
                                "Name": "Attribute type",
                                "TypeNumber": 16,
                                "ApiName": "OT_ATTRIBUTE_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Attribute type group",
                                "TypeNumber": 17,
                                "ApiName": "OT_ATTRIBUTE_TYPE_GROUP",
                                "Type": "Default"
                            },
                            {
                                "Name": "Authorization condition",
                                "TypeNumber": 18,
                                "ApiName": "OT_AUTH_COND",
                                "Type": "Default"
                            },
                            {
                                "Name": "Bitmap",
                                "TypeNumber": 18,
                                "ApiName": "OT_AUTH_COND",
                                "Type": "Default"
                            },
                            {
                                "Name": "Break",
                                "TypeNumber": 18,
                                "ApiName": "OT_AUTH_COND",
                                "Type": "Default"
                            },
                            {
                                "Name": "Business object",
                                "TypeNumber": 19,
                                "ApiName": "OT_BUSINESS_OBJECT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Business rule",
                                "TypeNumber": 20,
                                "ApiName": "OT_BUSINESS_RULE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Business segment",
                                "TypeNumber": 21,
                                "ApiName": "OT_BUSINESS_SEGMENT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Button",
                                "TypeNumber": 22,
                                "ApiName": "OT_BUTTON",
                                "Type": "Default"
                            },
                            {
                                "Name": "Calendar event",
                                "TypeNumber": 23,
                                "ApiName": "OT_CALENDAR_EVENT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Capability",
                                "TypeNumber": 24,
                                "ApiName": "OT_CAPABILITY",
                                "Type": "Default"
                            },
                            {
                                "Name": "Capability",
                                "TypeNumber": 25,
                                "ApiName": "OT_CAPABILITY",
                                "Type": "Default"
                            },
                            {
                                "Name": "Class",
                                "TypeNumber": 26,
                                "ApiName": "OT_CLASS",
                                "Type": "Default"
                            },
                            {
                                "Name": "Classification criterion",
                                "TypeNumber": 27,
                                "ApiName": "OT_CLASSIFICATION_CRITERION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Classifier-in-state",
                                "TypeNumber": 28,
                                "ApiName": "OT_CLASSIFICATION_CRITERION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Classifier role",
                                "TypeNumber": 29,
                                "ApiName": "OT_CLASSIFIER_ROLE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Cluster instance",
                                "TypeNumber": 30,
                                "ApiName": "OT_CLUSTER_INST",
                                "Type": "Default"
                            },
                            {
                                "Name": "Cluster/Data model",
                                "TypeNumber": 31,
                                "ApiName": "OT_CLUSTER_DATA_MODEL",
                                "Type": "Default"
                            },
                            {
                                "Name": "Collaboration",
                                "TypeNumber": 32,
                                "ApiName": "OT_COLLABORATION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Collaboration instance set",
                                "TypeNumber": 33,
                                "ApiName": "OT_COLLABORATION_INST_SET",
                                "Type": "Default"
                            },
                            {
                                "Name": "Column",
                                "TypeNumber": 34,
                                "ApiName": "OT_COLLABORATION_INST_SET",
                                "Type": "Default"
                            },
                            {
                                "Name": "Combo box",
                                "TypeNumber": 35,
                                "ApiName": "OT_COMBO_BOX",
                                "Type": "Default"
                            },
                            {
                                "Name": "Communication",
                                "TypeNumber": 36,
                                "ApiName": "OT_COMMUNICATION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Complex object",
                                "TypeNumber": 37,
                                "ApiName": "OT_COMPLEX_OBJECT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Complex object type",
                                "TypeNumber": 38,
                                "ApiName": "OT_COMPLEX_OBJECT_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Component",
                                "TypeNumber": 39,
                                "ApiName": "OT_COMPONENT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Component instance",
                                "TypeNumber": 40,
                                "ApiName": "OT_COMPONENT_INST",
                                "Type": "Default"
                            },
                            {
                                "Name": "Conditional section",
                                "TypeNumber": 41,
                                "ApiName": "OT_CONDITIONAL_SECTION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Connector",
                                "TypeNumber": 42,
                                "ApiName": "OT_CONNECTOR",
                                "Type": "Default"
                            },
                            {
                                "Name": "Constant",
                                "TypeNumber": 43,
                                "ApiName": "OT_CONSTANT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Constraint",
                                "TypeNumber": 44,
                                "ApiName": "OT_CONSTRAINT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Contents",
                                "TypeNumber": 45,
                                "ApiName": "OT_CONTENTS",
                                "Type": "Default"
                            },
                            {
                                "Name": "Context information",
                                "TypeNumber": 46,
                                "ApiName": "OT_CONTEXT_INFO",
                                "Type": "Default"
                            },
                            {
                                "Name": "Conversation",
                                "TypeNumber": 47,
                                "ApiName": "OT_CONVERSATION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Cost category",
                                "TypeNumber": 48,
                                "ApiName": "OT_COST_CATEGORY",
                                "Type": "Default"
                            },
                            {
                                "Name": "Cost driver",
                                "TypeNumber": 49,
                                "ApiName": "OT_COST_DRIVER",
                                "Type": "Default"
                            },
                            {
                                "Name": "COT attribute",
                                "TypeNumber": 50,
                                "ApiName": "OT_COT_ATTRIBUTE",
                                "Type": "Default"
                            },
                            {
                                "Name": "COT attribute (instance)",
                                "TypeNumber": 51,
                                "ApiName": "OT_COT_ATTRIBUTE_INST",
                                "Type": "Default"
                            },
                            {
                                "Name": "Critical factor",
                                "TypeNumber": 52,
                                "ApiName": "OT_CRITICAL_FACTOR",
                                "Type": "Default"
                            },
                            {
                                "Name": "Data store",
                                "TypeNumber": 53,
                                "ApiName": "OT_DATA_STORE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Data value",
                                "TypeNumber": 54,
                                "ApiName": "OT_DATA_STORE",
                                "Type": "Default"
                            },
                            {
                                "Name": "DBMS",
                                "TypeNumber": 55,
                                "ApiName": "OT_DBMS",
                                "Type": "Default"
                            },
                            {
                                "Name": "DBMS type",
                                "TypeNumber": 56,
                                "ApiName": "OT_DBMS_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Deployment unit",
                                "TypeNumber": 57,
                                "ApiName": "OT_DEPLOYMENT_UNIT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Distribution channel",
                                "TypeNumber": 58,
                                "ApiName": "OT_DISTRIBUTION_CHANNEL",
                                "Type": "Default"
                            },
                            {
                                "Name": "Documented knowledge",
                                "TypeNumber": 59,
                                "ApiName": "OT_DOCUMENTED_KNOWLEDGE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Domain",
                                "TypeNumber": 60,
                                "ApiName": "OT_DOMAIN",
                                "Type": "Default"
                            },
                            {
                                "Name": "Domain (physical)",
                                "TypeNumber": 61,
                                "ApiName": "OT_DOMAIN_PHYSICAL",
                                "Type": "Default"
                            },
                            {
                                "Name": "Draft list",
                                "TypeNumber": 62,
                                "ApiName": "OT_DRAFT_LIST",
                                "Type": "Default"
                            },
                            {
                                "Name": "Element",
                                "TypeNumber": 63,
                                "ApiName": "OT_ELEMENT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Element type",
                                "TypeNumber": 64,
                                "ApiName": "OT_ELEMENT_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Employee variable",
                                "TypeNumber": 65,
                                "ApiName": "OT_EMPLOYEE_VARIABLE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Entity",
                                "TypeNumber": 66,
                                "ApiName": "OT_ENTITY",
                                "Type": "Default"
                            },
                            {
                                "Name": "Entity type",
                                "TypeNumber": 67,
                                "ApiName": "OT_ENTITY_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Enumeration",
                                "TypeNumber": 68,
                                "ApiName": "OT_ENUMERATION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Enumeration attribute type",
                                "TypeNumber": 69,
                                "ApiName": "OT_ENUMERATION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Enumeration literal",
                                "TypeNumber": 70,
                                "ApiName": "OT_ENUMERATION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Enumeration occurrence",
                                "TypeNumber": 71,
                                "ApiName": "OT_ENUMERATION",
                                "Type": "Default"
                            },
                            {
                                "Name": "ERM attribute",
                                "TypeNumber": 72,
                                "ApiName": "OT_ERM_ATTRIBUTE",
                                "Type": "Default"
                            },
                            {
                                "Name": "ERM attribute instance",
                                "TypeNumber": 73,
                                "ApiName": "OT_ERM_ATTRIBUTE_INST",
                                "Type": "Default"
                            },
                            {
                                "Name": "ERM domain",
                                "TypeNumber": 74,
                                "ApiName": "OT_ERM_DOMAIN",
                                "Type": "Default"
                            },
                            {
                                "Name": "Event",
                                "TypeNumber": 75,
                                "ApiName": "OT_EVENT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Event instance",
                                "TypeNumber": 76,
                                "ApiName": "OT_EVENT_INST",
                                "Type": "Default"
                            },
                            {
                                "Name": "Exception",
                                "TypeNumber": 77,
                                "ApiName": "OT_EXCEPTION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Extension point",
                                "TypeNumber": 78,
                                "ApiName": "OT_EXTENSION_POINT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Field",
                                "TypeNumber": 79,
                                "ApiName": "OT_FIELD",
                                "Type": "Default"
                            },
                            {
                                "Name": "Field (specimen)",
                                "TypeNumber": 80,
                                "ApiName": "OT_FIELD",
                                "Type": "Default"
                            },
                            {
                                "Name": "Filter object type",
                                "TypeNumber": 81,
                                "ApiName": "OT_FILTER_OBJECT_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Function",
                                "TypeNumber": 82,
                                "ApiName": "OT_FUNCTION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Gate",
                                "TypeNumber": 83,
                                "ApiName": "OT_GATE",
                                "Type": "Default"
                            },
                            {
                                "Name": "General resource",
                                "TypeNumber": 84,
                                "ApiName": "OT_GENERAL_RESOURCE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Generalization type",
                                "TypeNumber": 85,
                                "ApiName": "OT_GENERAL_RESOURCE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Graphical user interface type",
                                "TypeNumber": 86,
                                "ApiName": "OT_GRAPHICAL_USER_INTERFACE_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Group",
                                "TypeNumber": 87,
                                "ApiName": "OT_GROUP",
                                "Type": "Default"
                            },
                            {
                                "Name": "Hardware component",
                                "TypeNumber": 88,
                                "ApiName": "OT_HARDWARE_COMPONENT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Hardware component class",
                                "TypeNumber": 84,
                                "ApiName": "OT_HARDWARE_COMPONENT_CLASS",
                                "Type": "Default"
                            },
                            {
                                "Name": "Hardware component type",
                                "TypeNumber": 85,
                                "ApiName": "OT_HARDWARE_COMPONENT_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Improvement potential",
                                "TypeNumber": 85,
                                "ApiName": "OT_IMP_POTENTIAL",
                                "Type": "Default"
                            },
                            {
                                "Name": "Index",
                                "TypeNumber": 85,
                                "ApiName": "OT_HINDEX",
                                "Type": "Default"
                            },
                            {
                                "Name": "Information carrier",
                                "TypeNumber": 86,
                                "ApiName": "OT_INFO_CARRIER",
                                "Type": "Default"
                            },
                            {
                                "Name": "Information flow",
                                "TypeNumber": 87,
                                "ApiName": "OT_INFO_FLOW",
                                "Type": "Default"
                            },
                            {
                                "Name": "Instantiation cycle",
                                "TypeNumber": 88,
                                "ApiName": "OT_INST_CYCLE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Instantiation interval",
                                "TypeNumber": 89,
                                "ApiName": "OT_INST_INTERVAL",
                                "Type": "Default"
                            },
                            {
                                "Name": "Instantiation plan",
                                "TypeNumber": 90,
                                "ApiName": "OT_INST_PLAN",
                                "Type": "Default"
                            },
                            {
                                "Name": "Interaction instance set",
                                "TypeNumber": 91,
                                "ApiName": "OT_INTERACTION_INST_SET",
                                "Type": "Default"
                            },
                            {
                                "Name": "IS service",
                                "TypeNumber": 92,
                                "ApiName": "OT_IS_SERVICE",
                                "Type": "Default"
                            },
                            {
                                "Name": "IT function",
                                "TypeNumber": 93,
                                "ApiName": "OT_IT_FUNCTION",
                                "Type": "Default"
                            },
                            {
                                "Name": "IT function class",
                                "TypeNumber": 94,
                                "ApiName": "OT_IT_FUNCTION_CLASS",
                                "Type": "Default"
                            },
                            {
                                "Name": "IT function type",
                                "TypeNumber": 95,
                                "ApiName": "OT_IT_FUNCTION_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Knowledge category",
                                "TypeNumber": 96,
                                "ApiName": "OT_KNOWLEDGE_CATEGORY",
                                "Type": "Default"
                            },
                            {
                                "Name": "KPI instance",
                                "TypeNumber": 97,
                                "ApiName": "OT_KPI_INST",
                                "Type": "Default"
                            },
                            {
                                "Name": "Lane",
                                "TypeNumber": 98,
                                "ApiName": "OT_LANE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Layout",
                                "TypeNumber": 99,
                                "ApiName": "OT_LAYOUT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Link object",
                                "TypeNumber": 100,
                                "ApiName": "OT_LINK_OBJECT",
                                "Type": "Default"
                            },
                            {
                                "Name": "List",
                                "TypeNumber": 101,
                                "ApiName": "OT_LIST",
                                "Type": "Default"
                            },
                            {
                                "Name": "List control",
                                "TypeNumber": 102,
                                "ApiName": "OT_LIST_CONTROL",
                                "Type": "Default"
                            },
                            {
                                "Name": "Location",
                                "TypeNumber": 103,
                                "ApiName": "OT_LOCATION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Loop start",
                                "TypeNumber": 104,
                                "ApiName": "OT_LOOP_START",
                                "Type": "Default"
                            },
                            {
                                "Name": "Main process",
                                "TypeNumber": 105,
                                "ApiName": "OT_MAIN_PROCESS",
                                "Type": "Default"
                            },
                            {
                                "Name": "Marketing instrument",
                                "TypeNumber": 106,
                                "ApiName": "OT_MARKETING_INSTRUMENT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Material class",
                                "TypeNumber": 106,
                                "ApiName": "OT_MARKETING_INSTRUMENT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Material flow",
                                "TypeNumber": 107,
                                "ApiName": "OT_MATERIAL_FLOW",
                                "Type": "Default"
                            },
                            {
                                "Name": "Material type",
                                "TypeNumber": 108,
                                "ApiName": "OT_MATERIAL_FLOW",
                                "Type": "Default"
                            },
                            {
                                "Name": "Measurement unit",
                                "TypeNumber": 109,
                                "ApiName": "OT_MEASUREMENT_UNIT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Measurement unit number",
                                "TypeNumber": 110,
                                "ApiName": "OT_MEASUREMENT_UNIT_NUMBER",
                                "Type": "Default"
                            },
                            {
                                "Name": "Memory location",
                                "TypeNumber": 111,
                                "ApiName": "OT_MEMORY_LOCATION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Message",
                                "TypeNumber": 112,
                                "ApiName": "OT_MESSAGE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Message type",
                                "TypeNumber": 113,
                                "ApiName": "OT_MESSAGE_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Module",
                                "TypeNumber": 114,
                                "ApiName": "OT_MODULE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Module class",
                                "TypeNumber": 115,
                                "ApiName": "OT_MODULE_CLASS",
                                "Type": "Default"
                            },
                            {
                                "Name": "Module type",
                                "TypeNumber": 116,
                                "ApiName": "OT_MODULE_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Need",
                                "TypeNumber": 117,
                                "ApiName": "OT_NEED",
                                "Type": "Default"
                            },
                            {
                                "Name": "Network",
                                "TypeNumber": 118,
                                "ApiName": "OT_NETWORK",
                                "Type": "Default"
                            },
                            {
                                "Name": "Network class",
                                "TypeNumber": 119,
                                "ApiName": "OT_NETWORK_CLASS",
                                "Type": "Default"
                            },
                            {
                                "Name": "Network connection",
                                "TypeNumber": 120,
                                "ApiName": "OT_NETWORK_CONNECTION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Network connection class",
                                "TypeNumber": 121,
                                "ApiName": "OT_NETWORK_CONNECTION_CLASS",
                                "Type": "Default"
                            },
                            {
                                "Name": "Network connection type",
                                "TypeNumber": 122,
                                "ApiName": "OT_NETWORK_CONNECTION_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Network node",
                                "TypeNumber": 123,
                                "ApiName": "OT_NETWORK_NODE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Network node class",
                                "TypeNumber": 124,
                                "ApiName": "OT_NETWORK_NODE_CLASS",
                                "Type": "Default"
                            },
                            {
                                "Name": "Network node type",
                                "TypeNumber": 125,
                                "ApiName": "OT_NETWORK_NODE_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Network type",
                                "TypeNumber": 126,
                                "ApiName": "OT_NETWORK_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Note",
                                "TypeNumber": 127,
                                "ApiName": "OT_NOTE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Object element",
                                "TypeNumber": 128,
                                "ApiName": "OT_OBJECT_ELEMENT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Object instance",
                                "TypeNumber": 129,
                                "ApiName": "OT_OBJECT_INSTANCE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Object type class",
                                "TypeNumber": 130,
                                "ApiName": "OT_OBJECT_TYPE_CLASS",
                                "Type": "Default"
                            },
                            {
                                "Name": "Objective",
                                "TypeNumber": 131,
                                "ApiName": "OT_OBJECTIVE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Operating resource",
                                "TypeNumber": 132,
                                "ApiName": "OT_OPERATING_RESOURCE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Operating resource class",
                                "TypeNumber": 133,
                                "ApiName": "OT_OPERATING_RESOURCE_CLASS",
                                "Type": "Default"
                            },
                            {
                                "Name": "Operating resource type",
                                "TypeNumber": 134,
                                "ApiName": "OT_OPERATING_RESOURCE_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Operating system",
                                "TypeNumber": 135,
                                "ApiName": "OT_OPERATING_SYSTEM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Operating system type",
                                "TypeNumber": 136,
                                "ApiName": "OT_OPERATING_SYSTEM_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Operation",
                                "TypeNumber": 137,
                                "ApiName": "OT_OPERATION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Operator",
                                "TypeNumber": 138,
                                "ApiName": "OT_OPERATOR",
                                "Type": "Default"
                            },
                            {
                                "Name": "Organizational chart",
                                "TypeNumber": 139,
                                "ApiName": "OT_ORGANIZATIONAL_CHART",
                                "Type": "Default"
                            },
                            {
                                "Name": "Organizational level",
                                "TypeNumber": 140,
                                "ApiName": "OT_ORGANIZATIONAL_LEVEL",
                                "Type": "Default"
                            },
                            {
                                "Name": "Organizational unit",
                                "TypeNumber": 141,
                                "ApiName": "OT_ORGANIZATIONAL_UNIT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Organizational unit type",
                                "TypeNumber": 142,
                                "ApiName": "OT_ORGANIZATIONAL_UNIT_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Package",
                                "TypeNumber": 143,
                                "ApiName": "OT_PACKAGE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Packaging material class",
                                "TypeNumber": 144,
                                "ApiName": "OT_PACKAGING_MATERIAL_CLASS",
                                "Type": "Default"
                            },
                            {
                                "Name": "Packaging material type",
                                "TypeNumber": 145,
                                "ApiName": "OT_PACKAGING_MATERIAL_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Page",
                                "TypeNumber": 146,
                                "ApiName": "OT_PAGE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Panel",
                                "TypeNumber": 147,
                                "ApiName": "OT_PANEL",
                                "Type": "Default"
                            },
                            {
                                "Name": "Parameter",
                                "TypeNumber": 148,
                                "ApiName": "OT_PANEL",
                                "Type": "Default"
                            },
                            {
                                "Name": "Participant",
                                "TypeNumber": 149,
                                "ApiName": "OT_PARTICIPANT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Partition",
                                "TypeNumber": 150,
                                "ApiName": "OT_PARTITION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Partner link",
                                "TypeNumber": 151,
                                "ApiName": "OT_PARTNER_LINK",
                                "Type": "Default"
                            },
                            {
                                "Name": "Person",
                                "TypeNumber": 152,
                                "ApiName": "OT_PERSON",
                                "Type": "Default"
                            },
                            {
                                "Name": "Person type",
                                "TypeNumber": 153,
                                "ApiName": "OT_PERSON_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Position",
                                "TypeNumber": 154,
                                "ApiName": "OT_POSITION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Process",
                                "TypeNumber": 155,
                                "ApiName": "OT_PROCESS",
                                "Type": "Default"
                            },
                            {
                                "Name": "Process component",
                                "TypeNumber": 156,
                                "ApiName": "OT_PROCESS",
                                "Type": "Default"
                            },
                            {
                                "Name": "Process support unit",
                                "TypeNumber": 157,
                                "ApiName": "OT_PROCESS_SUPPORT_UNIT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Product/Service",
                                "TypeNumber": 158,
                                "ApiName": "OT_PRODUCT_SERVICE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Product/Service characteristic",
                                "TypeNumber": 159,
                                "ApiName": "OT_PRODUCT_SERVICE_CHARACTERISTIC",
                                "Type": "Default"
                            },
                            {
                                "Name": "Profile",
                                "TypeNumber": 160,
                                "ApiName": "OT_PROFILE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Program library",
                                "TypeNumber": 161,
                                "ApiName": "OT_PROGRAM_LIBRARY",
                                "Type": "Default"
                            },
                            {
                                "Name": "Program module",
                                "TypeNumber": 162,
                                "ApiName": "OT_PROGRAM_MODULE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Program module type",
                                "TypeNumber": 163,
                                "ApiName": "OT_PROGRAM_MODULE_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Programming language",
                                "TypeNumber": 164,
                                "ApiName": "OT_PROGRAMMING_LANGUAGE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Protocol",
                                "TypeNumber": 165,
                                "ApiName": "OT_PROTOCOL",
                                "Type": "Default"
                            },
                            {
                                "Name": "Quick object",
                                "TypeNumber": 166,
                                "ApiName": "OT_QUICK_OBJECT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Radio button/Check box",
                                "TypeNumber": 167,
                                "ApiName": "OT_RADIO_BUTTON_CHECK_BOX",
                                "Type": "Default"
                            },
                            {
                                "Name": "Reception",
                                "TypeNumber": 168,
                                "ApiName": "OT_RECEPTION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Relation",
                                "TypeNumber": 169,
                                "ApiName": "OT_RELATION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Relationship",
                                "TypeNumber": 170,
                                "ApiName": "OT_RELATIONSHIP",
                                "Type": "Default"
                            },
                            {
                                "Name": "Relationship type",
                                "TypeNumber": 171,
                                "ApiName": "OT_RELATIONSHIP_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Requirement",
                                "TypeNumber": 172,
                                "ApiName": "OT_REQUIREMENT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Risk",
                                "TypeNumber": 173,
                                "ApiName": "OT_RISK",
                                "Type": "Default"
                            },
                            {
                                "Name": "Risk category",
                                "TypeNumber": 174,
                                "ApiName": "OT_RISK_CATEGORY",
                                "Type": "Default"
                            },
                            {
                                "Name": "Rule",
                                "TypeNumber": 175,
                                "ApiName": "OT_RULE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Rule instance",
                                "TypeNumber": 176,
                                "ApiName": "OT_RULE_INSTANCE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Schedule",
                                "TypeNumber": 177,
                                "ApiName": "OT_SCHEDULE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Screen",
                                "TypeNumber": 178,
                                "ApiName": "OT_SCREEN",
                                "Type": "Default"
                            },
                            {
                                "Name": "Screen design",
                                "TypeNumber": 179,
                                "ApiName": "OT_SCREEN_DESIGN",
                                "Type": "Default"
                            },
                            {
                                "Name": "Screen table",
                                "TypeNumber": 180,
                                "ApiName": "OT_SCREEN_TABLE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Section",
                                "TypeNumber": 181,
                                "ApiName": "OT_SECTION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Security protocol",
                                "TypeNumber": 182,
                                "ApiName": "OT_SECURITY_PROTOCOL",
                                "Type": "Default"
                            },
                            {
                                "Name": "Separator",
                                "TypeNumber": 183,
                                "ApiName": "OT_SEPARATOR",
                                "Type": "Default"
                            },
                            {
                                "Name": "Sequence",
                                "TypeNumber": 184,
                                "ApiName": "OT_SEQUENCE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Service interface",
                                "TypeNumber": 185,
                                "ApiName": "OT_SERVICE_INTERFACE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Service request",
                                "TypeNumber": 186,
                                "ApiName": "OT_SERVICE_REQUEST",
                                "Type": "Default"
                            },
                            {
                                "Name": "Service type",
                                "TypeNumber": 187,
                                "ApiName": "OT_SERVICE_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Shift",
                                "TypeNumber": 187,
                                "ApiName": "OT_SERVICE_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Shift cycle",
                                "TypeNumber": 188,
                                "ApiName": "OT_SERVICE_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Shift plan",
                                "TypeNumber": 189,
                                "ApiName": "OT_SERVICE_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Signal",
                                "TypeNumber": 190,
                                "ApiName": "OT_SIGNAL",
                                "Type": "Default"
                            },
                            {
                                "Name": "Socket",
                                "TypeNumber": 191,
                                "ApiName": "OT_SOCKET",
                                "Type": "Default"
                            },
                            {
                                "Name": "Sp./gen. operator",
                                "TypeNumber": 192,
                                "ApiName": "OT_SP_GEN_OPERATOR",
                                "Type": "Default"
                            },
                            {
                                "Name": "Spin box",
                                "TypeNumber": 193,
                                "ApiName": "OT_SPIN_BOX",
                                "Type": "Default"
                            },
                            {
                                "Name": "State",
                                "TypeNumber": 194,
                                "ApiName": "OT_STATE",
                                "Type": "Default"
                            },
                            {
                                "Name": "State machine",
                                "TypeNumber": 195,
                                "ApiName": "OT_STATE_MACHINE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Stereotype",
                                "TypeNumber": 196,
                                "ApiName": "OT_STEREOTYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Structural element",
                                "TypeNumber": 197,
                                "ApiName": "OT_STRUCTURAL_ELEMENT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Subsystem",
                                "TypeNumber": 198,
                                "ApiName": "OT_SUBSYSTEM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Subsystem instance",
                                "TypeNumber": 199,
                                "ApiName": "OT_SUBSYSTEM_INSTANCE",
                                "Type": "Default"
                            },
                            {
                                "Name": "System attribute",
                                "TypeNumber": 200,
                                "ApiName": "OT_SYSTEM_ATTRIBUTE",
                                "Type": "Default"
                            },
                            {
                                "Name": "System attribute domain",
                                "TypeNumber": 201,
                                "ApiName": "OT_SYSTEM_ATTRIBUTE_DOMAIN",
                                "Type": "Default"
                            },
                            {
                                "Name": "System organizational unit",
                                "TypeNumber": 202,
                                "ApiName": "OT_SYSTEM_ORGANIZATIONAL_UNIT",
                                "Type": "Default"
                            },
                            {
                                "Name": "System organizational unit type",
                                "TypeNumber": 203,
                                "ApiName": "OT_SYSTEM_ORGANIZATIONAL_UNIT_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Table",
                                "TypeNumber": 204,
                                "ApiName": "OT_TABLE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Tables (specimen)",
                                "TypeNumber": 205,
                                "ApiName": "OT_TABLES",
                                "Type": "Default"
                            },
                            {
                                "Name": "Tag definition",
                                "TypeNumber": 206,
                                "ApiName": "OT_TAG_DEFINITION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Tagged value",
                                "TypeNumber": 207,
                                "ApiName": "OT_TAGGED_VALUE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Task",
                                "TypeNumber": 208,
                                "ApiName": "OT_TASK",
                                "Type": "Default"
                            },
                            {
                                "Name": "Tech. operating supply class",
                                "TypeNumber": 209,
                                "ApiName": "OT_TECH_OPERATING_SUPPLY_CLASS",
                                "Type": "Default"
                            },
                            {
                                "Name": "Technical operating supply",
                                "TypeNumber": 210,
                                "ApiName": "OT_TECH_OPERATING_SUPPLY",
                                "Type": "Default"
                            },
                            {
                                "Name": "Technical operating supply type",
                                "TypeNumber": 211,
                                "ApiName": "OT_TECH_OPERATING_SUPPLY_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Technical term",
                                "TypeNumber": 212,
                                "ApiName": "OT_TECH_OPERATING_SUPPLY_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Technical terms instance",
                                "TypeNumber": 213,
                                "ApiName": "OT_TECH_OPERATING_SUPPLY_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Test definition",
                                "TypeNumber": 214,
                                "ApiName": "OT_TEST_DEFINITION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Text",
                                "TypeNumber": 215,
                                "ApiName": "OT_TEXT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Text annotation",
                                "TypeNumber": 216,
                                "ApiName": "OT_TEXT_ANNOTATION",
                                "Type": "Default"
                            },
                            {
                                "Name": "Text box",
                                "TypeNumber": 217,
                                "ApiName": "OT_TEXT_BOX",
                                "Type": "Default"
                            },
                            {
                                "Name": "Tool",
                                "TypeNumber": 218,
                                "ApiName": "OT_TOOL",
                                "Type": "Default"
                            },
                            {
                                "Name": "Transaction folder",
                                "TypeNumber": 219,
                                "ApiName": "OT_TRANSACTION_FOLDER",
                                "Type": "Default"
                            },
                            {
                                "Name": "Transformation pattern",
                                "TypeNumber": 220,
                                "ApiName": "OT_TRANSFORMATION_PATTERN",
                                "Type": "Default"
                            },
                            {
                                "Name": "Transformation pattern component",
                                "TypeNumber": 221,
                                "ApiName": "OT_TRANSFORMATION_PATTERN_COMPONENT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Transformation profile",
                                "TypeNumber": 222,
                                "ApiName": "OT_TRANSFORMATION_PROFILE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Transport system",
                                "TypeNumber": 223,
                                "ApiName": "OT_TRANSPORT_SYSTEM",
                                "Type": "Default"
                            },
                            {
                                "Name": "Transport system class",
                                "TypeNumber": 224,
                                "ApiName": "OT_TRANSPORT_SYSTEM_CLASS",
                                "Type": "Default"
                            },
                            {
                                "Name": "Transport system type",
                                "TypeNumber": 225,
                                "ApiName": "OT_TRANSPORT_SYSTEM_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "Tree control",
                                "TypeNumber": 226,
                                "ApiName": "OT_TREE_CONTROL",
                                "Type": "Default"
                            },
                            {
                                "Name": "UML Model",
                                "TypeNumber": 227,
                                "ApiName": "OT_UML_MODEL",
                                "Type": "Default"
                            },
                            {
                                "Name": "Use case instance",
                                "TypeNumber": 228,
                                "ApiName": "OT_USE_CASE_INSTANCE",
                                "Type": "Default"
                            },
                            {
                                "Name": "View",
                                "TypeNumber": 229,
                                "ApiName": "OT_VIEW",
                                "Type": "Default"
                            },
                            {
                                "Name": "View (physical)",
                                "TypeNumber": 230,
                                "ApiName": "OT_VIEW_PHYSICAL",
                                "Type": "Default"
                            },
                            {
                                "Name": "Warehouse equipment",
                                "TypeNumber": 231,
                                "ApiName": "OT_WAREHOUSE_EQUIPMENT",
                                "Type": "Default"
                            },
                            {
                                "Name": "Warehouse equipment class",
                                "TypeNumber": 232,
                                "ApiName": "OT_WAREHOUSE_EQUIPMENT_CLASS",
                                "Type": "Default"
                            },
                            {
                                "Name": "Warehouse equipment type",
                                "TypeNumber": 233,
                                "ApiName": "OT_WAREHOUSE_EQUIPMENT_TYPE",
                                "Type": "Default"
                            },
                            {
                                "Name": "XOR",
                                "TypeNumber": 234,
                                "ApiName": "OT_XOR",
                                "Type": "Default"
                            },

















                        ]
                    },


                    {
                        "name": "Action",
                        "id": "OT_ACTION",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Activity graph",
                        "id": "OT_ACT_GRAPH",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Actor",
                        "id": "OT_ACTOR",
                        "attributes": [
                            {
                                "key": "Name",
                                "type": "string"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: 'Tasks',
        type: 'Applet',
        tree_type: 'com.celmino.widget.workspace-tree',
        applet_type: 'com.celmino.applet.workmanagement',
        description: 'Monitor your process details in timeframe chart.',
        // image: '/static/opa/images/com.tuvalsoft.opa.task/icon.png',
        icon: '\\d1e4',
        iconBackColor: '#66B47C',
        enabled: false,
        databases: [
            {
                "name": "Work Management",
                "id": "work_management",
                "category": "app",
                "collections": [
                    {
                        "name": "Menu Tree",
                        "id": "wm_tree",
                        "attributes": [
                            {
                                "key": "name",
                                "type": "string"
                            },
                            {
                                "key": "type",
                                "type": "string"
                            },
                            {
                                "key": "parent",
                                "type": "string"
                            },
                            {
                                "key": "path",
                                "type": "string"
                            },
                            {
                                "key": "viewer",
                                "type": "string"
                            },
                            {
                                "key": "icon_name",
                                "type": "string"
                            },
                            {
                                "key": "icon_category",
                                "type": "string"
                            },
                            {
                                "key": "bg_color",
                                "type": "string"
                            },
                            {
                                "key": "fg_color",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Spaces",
                        "id": "wm_spaces",
                        "attributes": [
                            {
                                "key": "name",
                                "type": "string"
                            },
                            {
                                "key": "Parent",
                                "type": "string"
                            },
                            {
                                "key": "path",
                                "type": "string"
                            },
                            {
                                "key": "icon_name",
                                "type": "string"
                            },
                            {
                                "key": "icon_category",
                                "type": "string"
                            },
                            {
                                "key": "bg_color",
                                "type": "string"
                            },
                            {
                                "key": "fg_color",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Folders",
                        "id": "wm_folders",
                        "attributes": [
                            {
                                "key": "name",
                                "type": "string"
                            },
                            {
                                "key": "parent",
                                "type": "string"
                            },
                            {
                                "key": "path",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Lists",
                        "id": "wm_lists",
                        "attributes": [
                            {
                                "key": "name",
                                "type": "string"
                            },
                            {
                                "key": "parent",
                                "type": "string"
                            },
                            {
                                "key": "path",
                                "type": "string"
                            },
                            {
                                "key": "defaultViewId",
                                "type": "string"
                            },
                            {
                                "key": "icon_name",
                                "type": "string"
                            },
                            {
                                "key": "icon_category",
                                "type": "string"
                            },
                            {
                                "key": "bg_color",
                                "type": "string"
                            },
                            {
                                "key": "fg_color",
                                "type": "string"
                            }
                        ],

                    },
                    {
                        "name": "Documents",
                        "id": "wm_documents",
                        "attributes": [
                            {
                                "key": "name",
                                "type": "string"
                            },
                            {
                                "key": "parent",
                                "type": "string"
                            },
                            {
                                "key": "path",
                                "type": "string"
                            },
                            {
                                "key": "icon_name",
                                "type": "string"
                            },
                            {
                                "key": "icon_category",
                                "type": "string"
                            },
                            {
                                "key": "bg_color",
                                "type": "string"
                            },
                            {
                                "key": "fg_color",
                                "type": "string"
                            }
                        ],

                    },
                    {
                        "name": "Document Contents",
                        "id": "wm_document_contents",
                        "attributes": [
                            {
                                "key": "content",
                                "type": "string",
                                "size": 32000
                            }
                        ],

                    },
                    {
                        "name": "Whiteboards",
                        "id": "wm_whiteboards",
                        "attributes": [
                            {
                                "key": "name",
                                "type": "string"
                            },
                            {
                                "key": "parent",
                                "type": "string"
                            },
                            {
                                "key": "path",
                                "type": "string"
                            },
                            {
                                "key": "icon_name",
                                "type": "string"
                            },
                            {
                                "key": "icon_category",
                                "type": "string"
                            },
                            {
                                "key": "bg_color",
                                "type": "string"
                            },
                            {
                                "key": "fg_color",
                                "type": "string"
                            }
                        ],

                    },
                    {
                        "name": "Whiteboard Contents",
                        "id": "wm_whiteboard_contents",
                        "attributes": [
                            {
                                "key": "content",
                                "type": "string",
                                "size": 32000
                            }
                        ],

                    },
                    {
                        "name": "views",
                        "id": "wm_views",
                        "attributes": [
                            {
                                "key": "name",
                                "type": "string"
                            },
                            {
                                "key": "parent",
                                "type": "string"
                            },
                            {
                                "key": "type",
                                "type": "string"
                            }
                        ],

                    }
                ]
            }
        ]
    },
    {
        name: 'SketchDraw',
        type: 'Applet',
        tree_type: 'com.celmino.widget.document-management-tree',
        applet_type: 'com.celmino.applet.document-management',
        description: 'Documents applet is effortless document management, offering seamless organization and collaboration capabilities. Access, edit, and share documents with ease, enhancing productivity across workspaces.',
        // image: '/images/applets/documents.png',
        iconCategory: 'Icons',
        iconName: 'bell',
        icon: '\\d1e2',
        iconBackColor: '#66B47C',
        enabled: false,
        databases: [
            {
                "name": "Document Management",
                "id": "document_management",
                "category": "app",
                "collections": [
                    {
                        "name": "Menu Tree",
                        "id": "dm_tree",
                        "attributes": [
                            {
                                "key": "name",
                                "type": "string"
                            },
                            {
                                "key": "type",
                                "type": "string"
                            },
                            {
                                "key": "parent",
                                "type": "string"
                            },
                            {
                                "key": "path",
                                "type": "string"
                            },
                            {
                                "key": "viewer",
                                "type": "string"
                            },
                            {
                                "key": "icon_name",
                                "type": "string"
                            },
                            {
                                "key": "icon_category",
                                "type": "string"
                            },
                            {
                                "key": "bg_color",
                                "type": "string"
                            },
                            {
                                "key": "fg_color",
                                "type": "string"
                            }
                        ]
                    },

                    {
                        "name": "Folders",
                        "id": "dm_folders",
                        "attributes": [
                            {
                                "key": "name",
                                "type": "string"
                            },
                            {
                                "key": "parent",
                                "type": "string"
                            },
                            {
                                "key": "path",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Documents",
                        "id": "dm_documents",
                        "attributes": [
                            {
                                "key": "name",
                                "type": "string"
                            },
                            {
                                "key": "type",
                                "type": "string"
                            },
                            {
                                "key": "parent",
                                "type": "string"
                            },
                            {
                                "key": "path",
                                "type": "string"
                            },
                            {
                                "key": "icon_name",
                                "type": "string"
                            },
                            {
                                "key": "icon_category",
                                "type": "string"
                            },
                            {
                                "key": "bg_color",
                                "type": "string"
                            },
                            {
                                "key": "fg_color",
                                "type": "string"
                            }
                        ],

                    },
                    {
                        "name": "Document Contents",
                        "id": "dm_document_contents",
                        "attributes": [
                            {
                                "key": "content",
                                "type": "string",
                                "size": 932000
                            }
                        ],

                    },
                    {
                        "name": "views",
                        "id": "dm_views",
                        "attributes": [
                            {
                                "key": "name",
                                "type": "string"
                            },
                            {
                                "key": "parent",
                                "type": "string"
                            },
                            {
                                "key": "type",
                                "type": "string"
                            }
                        ],

                    }
                ]
            }
        ]
    },
   
    {
        name: 'Notebooks',
        type: 'Applet',
        tree_type: 'com.celmino.widget.notebook-tree',
        description: 'Monitor your process details in timeframe chart.',
        // image: '/static/opa/images/com.tuvalsoft.opa.task/icon.png',
        icon: '\\d2fb',
        iconBackColor: '#66B47C',
        enabled: false,
        databases: [
            {
                "name": "Notebooks",
                "id": "notebooks",
                "category": "app",
                "collections": [

                    {
                        "name": "Notebooks",
                        "id": "nb_notebooks",
                        "attributes": [
                            {
                                "key": "name",
                                "type": "string"
                            },
                            {
                                "key": "parent",
                                "type": "string"
                            },
                            {
                                "key": "path",
                                "type": "string"
                            }
                        ]
                    },
                    {
                        "name": "Notes",
                        "id": "nb_notes",
                        "attributes": [
                            {
                                "key": "name",
                                "type": "string"
                            },
                            {
                                "key": "parent",
                                "type": "string"
                            },
                            {
                                "key": "path",
                                "type": "string"
                            },
                            {
                                "key": "icon_name",
                                "type": "string"
                            },
                            {
                                "key": "icon_category",
                                "type": "string"
                            },
                            {
                                "key": "bg_color",
                                "type": "string"
                            },
                            {
                                "key": "fg_color",
                                "type": "string"
                            }
                        ],

                    },
                    {
                        "name": "Note Contents",
                        "id": "nb_note_contents",
                        "attributes": [
                            {
                                "key": "content",
                                "type": "string",
                                "size": 132000
                            }
                        ],

                    },
                    {
                        "name": "views",
                        "id": "nb_views",
                        "attributes": [
                            {
                                "key": "name",
                                "type": "string"
                            },
                            {
                                "key": "parent",
                                "type": "string"
                            },
                            {
                                "key": "type",
                                "type": "string"
                            }
                        ],

                    }
                ]
            }
        ]
    },
   
    {
        name: 'Processes',
        type: 'Applet',
        tree_type: 'com.celmino.applet.enterprise-modelling',
        description: 'Monitor your process details in timeframe chart.',
        // image: '/static/opa/images/com.tuvalsoft.opa.task/icon.png',
        icon: '\\d320',
        iconBackColor: '#66B47C',
        enabled: false
    },
    {
        name: 'Risks',
        type: 'com.celmino.applet.enterprise-modelling',
        description: 'Monitor your process details in timeframe chart.',
        // image: '/static/opa/images/com.tuvalsoft.opa.task/icon.png',
        icon: '\\d3c9',
        iconBackColor: '#66B47C',
        enabled: false
    },
    {
        name: 'Controls',
        type: 'Applet',
        tree_type: 'com.celmino.applet.enterprise-modelling',
        description: 'Monitor your process details in timeframe chart.',
        // image: '/static/opa/images/com.tuvalsoft.opa.task/icon.png',
        icon: '\\e862',
        iconBackColor: '#66B47C',
        enabled: false
    },

    
    {
        name: 'Drive',
        type: 'Applet',
        tree_type: 'com.celmino.widget.applet-category',
        applet_type: 'com.celmino.applet.category',
        description: 'Split your applets by category.',
        // image: '/static/opa/images/com.tuvalsoft.opa.task/icon.png',
        icon: '\\d214',
        iconBackColor: '#66B47C',
        enabled: false
    },
    {
        name: 'OKR',
        type: 'Applet',
        tree_type: 'com.celmino.widget.applet-category',
        broker: 'com.tuvalsoft.broker.realm',
        defaultView: 'com.okr.view.objectives',
        defaultViewTitle: 'Objectives',
        description: 'Use Task List to organize your tasks in anyway imaginable – sort, filter, group, and customize columns.',
        icon: '\\d1e5',
        iconBackColor: '#66B47C',
        //icon: SvgIcon('svg-sprite-cu2-view-1'),
        // image: '/static/opa/images/com.tuvalsoft.opa.task/icon.png',
        enabled: false
    },
    {
        name: 'Strategy',
        type: 'Applet',
        tree_type: 'com.tuvalsoft.opa.task',
        description: 'Use Task List to organize your tasks in anyway imaginable – sort, filter, group, and customize columns.',
        icon: '\\d1e1',
        iconBackColor: '#66B47C',
        enabled: false
    },
    {
        name: 'Incidents',
        type: 'Applet',
        tree_type: 'com.tuvalsoft.opa.task',
        description: 'Use Task List to organize your tasks in anyway imaginable – sort, filter, group, and customize columns.',
        icon: '\\d1e1',
        iconBackColor: '#66B47C',
        enabled: false
    },
    {
        name: 'KPIs',
        type: 'Applet',
        tree_type: 'com.tuvalsoft.opa.task',
        description: 'Use Task List to organize your tasks in anyway imaginable – sort, filter, group, and customize columns.',
        icon: '\\d1e1',
        iconBackColor: '#66B47C',
        enabled: false
    },
    
    {
        name: 'Data Mining',
        type: 'Applet',
        tree_type: 'com.tuvalsoft.opa.task',
        description: 'Use Task List to organize your tasks in anyway imaginable – sort, filter, group, and customize columns.',
        icon: '\\d1e1',
        iconBackColor: '#66B47C',
        enabled: false
    },
    {
        name: 'Assets',
        type: 'Applet',
        tree_type: 'com.tuvalsoft.opa.task',
        description: 'Use Task List to organize your tasks in anyway imaginable – sort, filter, group, and customize columns.',
        icon: '\\d1e1',
        iconBackColor: '#66B47C',
        enabled: false
    },
    {
        name: 'Aristo',
        type: 'Applet',
        tree_type: 'com.tuvalsoft.opa.task',
        description: 'Use Task List to organize your tasks in anyway imaginable – sort, filter, group, and customize columns.',
        icon: '\\d1e1',
        iconBackColor: '#66B47C',
        enabled: false
    },
    {
        name: 'Wiki',
        type: 'Applet',
        tree_type: 'com.tuvalsoft.opa.task',
        description: 'Use Task List to organize your tasks in anyway imaginable – sort, filter, group, and customize columns.',
        icon: '\\d1e1',
        iconBackColor: '#66B47C',
        enabled: false
    },
    {
        name: 'Draws',
        type: 'Applet',
        tree_type: 'com.tuvalsoft.opa.task',
        description: 'Use Task List to organize your tasks in anyway imaginable – sort, filter, group, and customize columns.',
        icon: '\\d1e1',
        iconBackColor: '#66B47C',
        enabled: false
    },
    {
        name: 'Link',
        type: 'Applet',
        tree_type: 'com.tuvalsoft.opa.task',
        description: 'Use Task List to organize your tasks in anyway imaginable – sort, filter, group, and customize columns.',
        image:'data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2214%22%20height%3D%2215%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M14%2013.859c0%20.63-.517%201.141-1.152%201.141H1.152A1.148%201.148%200%200%201%200%2013.859V1.14C0%20.511.517%200%201.152%200h11.696C13.483%200%2014%20.512%2014%201.141V13.86zM2.6%206a.6.6%200%200%200-.6.6v2.77a.6.6%200%200%200%20.6.6h7.8a.6.6%200%200%200%20.6-.6V6.6a.6.6%200%200%200-.6-.6H2.6zm3.157-3a.757.757%200%200%200%200%201.515h4.486a.757.757%200%200%200%200-1.515H5.757zM3%204.8a1%201%200%201%200%200-2%201%201%200%200%200%200%202z%22%20fill%3D%22%23FFF%22%20fill-rule%3D%22evenodd%22%20/%3E%3C/svg%3E',
       // icon: '\\d1e1',
        iconBackColor: '#66B47C',
        enabled: false
    },
   
];
