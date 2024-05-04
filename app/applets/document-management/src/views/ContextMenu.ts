import { DynoDialog } from "@celmino/ui";
import { SvgIcon } from "@tuval/forms";
import { AddFolderDialog } from "../dialogs/AddFolderDialog";
import { AddDocumentDialog, AddWhiteboardDialog } from "../dialogs/AddDocumentDialog";
import { AddMarkdownDialog } from "../dialogs/AddMarkdownDialog";

//import { opas } from "./Opas";


export const ContextMenu = (workspaceId: string, appletId: string, parent = '-1', path = '/') => [

    {
        title: 'Folder',
        icon: SvgIcon('cu3-icon-sidebarFolderOpen', '#151719', '18px', '18px'),
        onClick: () => DynoDialog.Show(AddFolderDialog(workspaceId, appletId, parent, path))
    },
    {
        title: 'Document',
        icon: SvgIcon('cu3-icon-sidebarDoc', '#151719', '18px', '18px'),
        onClick: () => DynoDialog.Show(AddDocumentDialog(workspaceId, appletId, parent, path, 'document','com.tuvalsoft.widget.blocknote'))
    },
    {
        title: 'Markdown Document',
        icon: SvgIcon('cu3-icon-sidebarDoc', '#151719', '18px', '18px'),
        onClick: () => DynoDialog.Show(AddMarkdownDialog(workspaceId, appletId, parent, path, 'document'))
    },
    {
        title: 'Whiteboard Document',
        icon: SvgIcon('cu3-icon-sidebarDoc', '#151719', '18px', '18px'),
        onClick: () => DynoDialog.Show(AddWhiteboardDialog(workspaceId, appletId, parent, path, 'document'))
    },
    {
        title: 'Wiki document',
        icon: SvgIcon('cu3-icon-sidebarDoc', '#151719', '18px', '18px'),
        onClick: () => DynoDialog.Show(AddDocumentDialog(workspaceId, appletId, parent, path, 'wiki'))
    },
    {
        title: 'Word document',
        icon: SvgIcon('cu3-icon-sidebarDoc', '#151719', '18px', '18px'),
        onClick: () => DynoDialog.Show(AddDocumentDialog(workspaceId, appletId, parent, path, 'word'))
    },
    {
        title: 'Spreadsheet',
        icon: SvgIcon('cu3-icon-sidebarDoc', '#151719', '18px', '18px'),
        onClick: () => DynoDialog.Show(AddDocumentDialog(workspaceId, appletId, parent, path, 'document','com.tuvalsoft.widget.spreadsheet'))
    },
    {
        title: 'Google sheets',
        icon: SvgIcon('cu3-icon-sidebarDoc', '#151719', '18px', '18px'),
        onClick: () => DynoDialog.Show(AddDocumentDialog(workspaceId, appletId, parent, path, 'com.tuvalsoft.widget.google-sheets-embedded'))
    },
    {
        title: 'Google sheets',
        icon: SvgIcon('cu3-icon-sidebarDoc', '#151719', '18px', '18px'),
        onClick: () => DynoDialog.Show(AddDocumentDialog(workspaceId, appletId, parent, path, 'com.tuvalsoft.widget.google-sheets-embedded'))
    },
    {
        type: 'Divider'
    },
    {
        title: 'More Applets',
        icon: SvgIcon('svg-sprite-activity-template-merged'),
        /* onClick: () => SelectOpaDialog.Show(appletId, 'applet', opas).then((applet) => {

           
        }) */
    },
]


export const EditContextMenu = (workspaceId: string, appletId: string, parent = '-1', path = '/') => [

    {
        title: 'Rename',
        icon: SvgIcon('svg-sprite-global__edit', '#151719', '18px', '18px'),
        onClick: () => DynoDialog.Show(AddFolderDialog(workspaceId, appletId, parent, path))
    },
    {
        title: 'Document',
        icon: SvgIcon('cu3-icon-sidebarDoc', '#151719', '18px', '18px'),
        onClick: () => DynoDialog.Show(AddDocumentDialog(workspaceId, appletId, parent, path, 'com.tuvalsoft.widget.editorjs'))
    },
    {
        title: 'Wiki document',
        icon: SvgIcon('cu3-icon-sidebarDoc', '#151719', '18px', '18px'),
        onClick: () => DynoDialog.Show(AddDocumentDialog(workspaceId, appletId, parent, path, 'wiki'))
    },
    {
        title: 'Word document',
        icon: SvgIcon('cu3-icon-sidebarDoc', '#151719', '18px', '18px'),
        onClick: () => DynoDialog.Show(AddDocumentDialog(workspaceId, appletId, parent, path, 'word'))
    },
    {
        title: 'Spreadsheet',
        icon: SvgIcon('cu3-icon-sidebarDoc', '#151719', '18px', '18px'),
        onClick: () => DynoDialog.Show(AddDocumentDialog(workspaceId, appletId, parent, path, 'com.tuvalsoft.widget.spreadsheet'))
    },
    {
        title: 'Google sheets',
        icon: SvgIcon('cu3-icon-sidebarDoc', '#151719', '18px', '18px'),
        onClick: () => DynoDialog.Show(AddDocumentDialog(workspaceId, appletId, parent, path, 'com.tuvalsoft.widget.google-sheets-embedded'))
    },
    {
        title: 'Google sheets',
        icon: SvgIcon('cu3-icon-sidebarDoc', '#151719', '18px', '18px'),
        onClick: () => DynoDialog.Show(AddDocumentDialog(workspaceId, appletId, parent, path, 'com.tuvalsoft.widget.google-sheets-embedded'))
    },
    {
        type: 'Divider'
    },
    {
        title: 'More Applets',
        icon: SvgIcon('svg-sprite-activity-template-merged'),
       /*  onClick: () => SelectOpaDialog.Show(appletId, 'applet', opas).then((applet) => {

          
        }) */
    },
]