import {
    Icon,
    SvgIcon,
    UIController, UIView, UIViewBuilder, UIWidget,
    useState
} from '@tuval/forms';

import { useUpdateDocument } from '@realmocean/sdk';


import { BoardIcon, CalendarIcon, DocumentIcon, FeedIcon, FormIcon, ListIcon, ReportIcon, TableIcon, TimelineIcon } from './resources/Icons';

import { EventBus } from '@tuval/core';
import { DynoDialog, useApplet, useAppletNavigate, useRealm } from '@celmino/platform';
import { AddDocumentDialog } from './dialogs/AddDocumentDialog';


export class TreeController extends UIController {

    public override LoadView(): UIView {

        const { navigate } = useAppletNavigate();

        const [isEditing, setIsEditing] = useState(false);
        const isLoading = false;
        const { items } = this.props.data || {};
        const {  item } = this.props.config || {};
        const { realm } = useRealm();
        const { applet } = useApplet();
      

        const { updateDocument } = useUpdateDocument(realm.$id);


        return (

            UIViewBuilder(() => {

                return (
                    UIWidget('com.celmino.widget.applet-tree')
                        .config({
                            node: item,
                            workspaceId: realm.$id,
                            appletId: item.appletId,
                            appletName: item.name,
                            iconName: item.iconName,
                            iconCategory: item.iconCategory,
                            //isSelected: isAppletSettings(appletId) || isAppletOnly(appletId),
                            isEditing: isEditing,
                            editingChanged: (status) => setIsEditing(status),
                            titleChanged: (title) => {

                                updateDocument({
                                    databaseId: 'workspace',
                                    collectionId: 'applets',
                                    documentId: applet.$id,
                                    data: {
                                        name: title
                                    }
                                }, () => {
                                    updateDocument({
                                        databaseId: 'workspace',
                                        collectionId: 'ws_tree',
                                        documentId: item.$id,
                                        data: {
                                            name: title
                                        }
                                    }, () => {
                                        EventBus.Default.fire('applet.added', { treeItem: item })
                                    })
                                })
                            },
                            subNodes: (TreeNode, level, nodeType, parentId, workspaceId, appletId) => {
                                //  return subNodes(TreeNode, level, nodeType, parentId, workspaceId, appletId, onItemSelected)
                            },
                            requestMenu: () => {
                                return [
                                    {
                                        title: 'Add view',
                                        type: 'Title'
                                    },
                                    {
                                        title: 'Table',
                                        icon: Icon(TableIcon).foregroundColor('#7C828D'),
                                        //onClick: () => DynoDialog.Show(AddDocumentDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                                    },

                                    {
                                        title: 'Board',
                                        icon: Icon(BoardIcon).foregroundColor('#7C828D'),
                                        //onClick: () => DynoDialog.Show(AddBoardDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                                    },
                                    {
                                        title: 'List',
                                        icon: Icon(ListIcon).foregroundColor('#7C828D'),
                                        //onClick: () => DynoDialog.Show(AddWhiteboardDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                                    },
                                    {
                                        title: 'Timeline',
                                        icon: Icon(TimelineIcon).foregroundColor('#7C828D'),
                                        //onClick: () => DynoDialog.Show(AddWhiteboardDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                                    },
                                    {
                                        title: 'Calendar',
                                        icon: Icon(CalendarIcon).foregroundColor('#7C828D'),
                                        //onClick: () => DynoDialog.Show(AddWhiteboardDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                                    },
                                    {
                                        title: 'Report',
                                        icon: Icon(ReportIcon).foregroundColor('#7C828D'),
                                        //onClick: () => DynoDialog.Show(AddWhiteboardDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                                    },
                                    {
                                        title: 'Feed',
                                        icon: Icon(FeedIcon).foregroundColor('#7C828D'),
                                        //onClick: () => DynoDialog.Show(AddWhiteboardDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                                    },
                                    {
                                        type: 'Divider'
                                    },
                                    {
                                        title: 'Document',
                                        icon: Icon(DocumentIcon).foregroundColor('#7C828D'),
                                        onClick: () => DynoDialog.Show(AddDocumentDialog(realm.$id, applet.$id, item.$id, `${item.path}/${item.$id}`))
                                    },
                                    {
                                        title: 'Whiteboard',
                                        icon: Icon(ReportIcon).foregroundColor('#7C828D'),
                                        //onClick: () => DynoDialog.Show(AddWhiteboardDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                                    },
                                    {
                                        title: 'Form',
                                        icon: Icon(FormIcon).foregroundColor('#7C828D'),
                                        //onClick: () => DynoDialog.Show(AddWhiteboardDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                                    },
                                    {
                                        type: 'Divider'
                                    },

                                    {
                                        title: 'Folder',
                                        icon: SvgIcon('cu3-icon-sidebarFolderOpen', '#151719', '18px', '18px'),
                                        //onClick: () => DynoDialog.Show(AddFolderDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                                    },
                                    {
                                        title: 'Applet',
                                        icon: SvgIcon('cu3-icon-sidebarFolderOpen', '#151719', '18px', '18px'),
                                        /*  onClick: () => {
                                             SelectAppletDialog.Show(workspaceId, appletId).then((applet) => {
                                                 createTreeItem({
                                                     documentId: applet.$id,
                                                     data: {
                                                         name: applet.name,
                                                         path: "/",
                                                         parent: '-1',
                                                         type: 'applet'
                                                     }
                                                 }, () => void 0)
                                             });
                                         } */
                                    },



                                ]


                            },
                            requestNavigation: () => {
                                navigate(``)
                            },
                            requestEditMenu: () => [

                                {
                                    title: 'Rename',
                                    icon: SvgIcon('svg-sprite-global__edit', '#151719', '18px', '18px'),
                                    onClick: () => setIsEditing(true)
                                },
                                {
                                    title: 'Collections',
                                    icon: SvgIcon('svg-sprite-global__settings', '#151719', '18px', '18px'),
                                    onClick: () => navigate(`collections`)
                                },
                                {
                                    title: 'Applet settings',
                                    icon: SvgIcon('svg-sprite-global__settings', '#151719', '18px', '18px'),
                                    onClick: () => navigate(`settings/general`)
                                }


                            ]

                        })
                )
            }
            )
        )
    }
}

//FormBuilder.injectAction('saveSpace', SaveSpaceAction);