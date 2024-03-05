import {
    ForEach, FormBuilder, Fragment, HStack,
    Icon,
    SvgIcon,
    UIController, UIView, UIViewBuilder, UIWidget, VStack,
    cLeading, cTopLeading,
    useNavigate, useParams, useState
} from '@tuval/forms';

import { SelectAppletDialog } from '@celmino/ui';
import { Query, useCreateDocument, useGetDocument, useGetRealm, useListDocuments, useUpdateDatabase, useUpdateDocument } from '@realmocean/sdk';
import { DynoDialog } from '@realmocean/ui';
import { EventBus, is } from '@tuval/core';
import { AddBoardDialog } from './dialogs/AddBoardDialog';
import { AddDocumentDialog } from './dialogs/AddDocumentDialog';
import { AddFolderDialog } from './dialogs/AddFolderDialog';
import { AddListDialog } from './dialogs/AddListDialog';
import { SaveSpaceAction } from './dialogs/AddSpaceDialog';
import { AddWhiteboardDialog } from './dialogs/AddWhiteboardDialog';
import { AppletIcon, BoardIcon, CalendarIcon, FeedIcon, ListIcon, ReportIcon, TableIcon, TimelineIcon } from './resources/Icons';
import { getAppletId, getDocumentId, getListId, getViewId, isAppletOnly, isAppletSettings } from './utils';


const subNodes = (TreeNode, level, nodeType, parentId, workspaceId, appletId, onItemSelected) => UIViewBuilder(() => {

    const { documents: items, isLoading } = useListDocuments(workspaceId, appletId, 'wm_tree', [
        Query.equal('parent', parentId)
    ]);


    const navigate = useNavigate();

    return (
        VStack({ alignment: cTopLeading })(
            ...ForEach(items)(item =>
                item.type === 'applet' ? HStack({ alignment: cLeading })(
                    UIViewBuilder(() => {
                        const { document: applet, isLoading } = useGetDocument({ projectId: workspaceId, databaseId: 'workspace', collectionId: 'applets', documentId: item.$id })
                        return (
                            isLoading ? Fragment() :
                                UIWidget(applet['opa'])
                                    .config({
                                        ...(useParams() || {}),
                                        appletId: applet.$id
                                    })
                        )
                    })


                ).paddingLeft(`${20 * level}px`) :
                    TreeNode({
                        title: item.name,
                        level: level,
                        nodeType: item.type,
                        isSelected: getListId() === item.$id || getDocumentId() === item.$id || getViewId() === item.$id,
                        subNode: (nodeType) => subNodes(TreeNode, level + 1, nodeType, item.$id, workspaceId, appletId, onItemSelected),
                        requestIcon: (nodeType, selected, expanded) => {

                            switch (nodeType) {
                                case 'list':
                                    return Icon(SvgIcon('cu3-icon-sidebarList', selected ? '#7b68ee' : '#151719', '18px', '18px')).foregroundColor('#7C828D');
                                case 'board':
                                    return Icon(BoardIcon).foregroundColor('#7C828D');
                                case 'folder':
                                    return Icon(expanded ? SvgIcon('cu3-icon-sidebarFolderOpen', '#151719', '18px', '18px') : SvgIcon('cu3-icon-sidebarFolder', '#151719', '18px', '18px')).foregroundColor('#7C828D');

                                default:
                                    return (
                                        Icon(SvgIcon('cu3-icon-sidebarDoc', selected ? '#7b68ee' : '#151719', '18px', '18px'))
                                    )
                            }


                        },
                        requestNavigation: () => {
                            if (onItemSelected == null) {
                                switch (item.type) {
                                    case 'folder':
                                        navigate(`/app/workspace/${workspaceId}/applet/${appletId}/folder/${item.$id}`);
                                        break;
                                    case 'list':
                                        navigate(`/app/workspace/${workspaceId}/applet/${appletId}/list/${item.$id}`);
                                        break;
                                    case 'board':
                                        navigate(`/app/workspace/${workspaceId}/applet/${appletId}/list/${item.parent}/view/${item.$id}`);
                                        break;
                                    case 'document':
                                        navigate(`/app/workspace/${workspaceId}/applet/${appletId}/document/${item.$id}`);
                                        break;
                                    case 'whiteboard':
                                        navigate(`/app/workspace/${workspaceId}/applet/${appletId}/whiteboard/${item.$id}`);
                                        break;

                                }
                            } else {

                                onItemSelected({
                                    workspaceId: workspaceId,
                                    appletId: appletId,
                                    item
                                })
                            }
                        },
                        requestMenu: () => {
                            switch (item.type) {
                                case 'folder':
                                    return [
                                        {
                                            title: 'List',
                                            icon: SvgIcon('cu3-icon-sidebarList', '#151719', '18px', '18px'),
                                            onClick: () => DynoDialog.Show(AddListDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                                        },
                                        {
                                            type: 'Divider'
                                        },
                                        {
                                            title: 'Document',
                                            icon: SvgIcon('cu3-icon-sidebarDoc', '#151719', '18px', '18px'),
                                            onClick: () => DynoDialog.Show(AddDocumentDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                                        },
                                        {
                                            title: 'Whiteboard',
                                            icon: SvgIcon('cu3-icon-sidebarWhiteboards', '#151719', '18px', '18px'),
                                            onClick: () => DynoDialog.Show(AddWhiteboardDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                                        },
                                        {
                                            type: 'Divider'
                                        },
                                        {
                                            title: 'Folder',
                                            icon: SvgIcon('cu3-icon-sidebarFolderOpen', '#151719', '18px', '18px'),
                                            onClick: () => DynoDialog.Show(AddFolderDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                                        },
                                    ]
                                case 'list':
                                    return [
                                        {
                                            title: 'Add view',
                                            type: 'Title'
                                        },
                                        {
                                            title: 'Table',
                                            icon: Icon(TableIcon).foregroundColor('#7C828D'),
                                            onClick: () => DynoDialog.Show(AddListDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                                        },

                                        {
                                            title: 'Board',
                                            icon: Icon(BoardIcon).foregroundColor('#7C828D'),
                                            onClick: () => DynoDialog.Show(AddBoardDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                                        },
                                        {
                                            title: 'List',
                                            icon: Icon(ListIcon).foregroundColor('#7C828D'),
                                            onClick: () => DynoDialog.Show(AddWhiteboardDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                                        },
                                        {
                                            title: 'Timeline',
                                            icon: Icon(TimelineIcon).foregroundColor('#7C828D'),
                                            onClick: () => DynoDialog.Show(AddWhiteboardDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                                        },
                                        {
                                            title: 'Calendar',
                                            icon: Icon(CalendarIcon).foregroundColor('#7C828D'),
                                            onClick: () => DynoDialog.Show(AddWhiteboardDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                                        },
                                        {
                                            title: 'Report',
                                            icon: Icon(ReportIcon).foregroundColor('#7C828D'),
                                            onClick: () => DynoDialog.Show(AddWhiteboardDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                                        },
                                        {
                                            title: 'Feed',
                                            icon: Icon(FeedIcon).foregroundColor('#7C828D'),
                                            onClick: () => DynoDialog.Show(AddWhiteboardDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                                        },
                                        {
                                            type: 'Divider'
                                        },
                                        {
                                            title: 'Folder',
                                            icon: SvgIcon('cu3-icon-sidebarFolderOpen', '#151719', '18px', '18px'),
                                            onClick: () => DynoDialog.Show(AddFolderDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                                        },
                                    ]
                            }

                            return null;
                        }

                    })

            )
        )
    )

})

function process(value) {
    if (is.string(value)) {
        return value == undefined ? '' : value.replace(/[^a-z0-9_]+/gi, '-').replace(/^-|-$/g, '').toLowerCase()
    } else {
        return '';
    }
}

export class WorkspaceTreeWidgetController extends UIController {

    public override LoadView(): UIView {

        const navigate = useNavigate();

        const [isEditing, setIsEditing] = useState(false);
        const isLoading = false;
        const { items } = this.props.data || {};
        const { workspaceId, appletId, onItemSelected, item } = this.props.config || {};


        const [isOpen, setIsOpen] = useState(getAppletId() === appletId);

        let listId = getListId();

        const { updateDocument } = useUpdateDocument(workspaceId);
        const { updateDatabase } = useUpdateDatabase(workspaceId);

        const { createDocument: createTreeItem } = useCreateDocument(workspaceId, appletId, 'wm_tree');
        const { realm } = useGetRealm({ realmId: workspaceId, enabled: true });
        const { document: applet, isLoading: isAppletLoading } = useGetDocument({ projectId: workspaceId, databaseId: 'workspace', collectionId: 'applets', documentId: appletId });

        return (
            isAppletLoading ? Fragment() :
                UIWidget('com.celmino.widget.applet-tree')
                    .config({
                        node: item,
                        workspaceId,
                        appletId,
                        appletName: item.name,
                        iconName: item.iconName,
                        iconCategory: item.iconCategory,
                        isEditing: isEditing,
                        isSelected: isAppletSettings(appletId) || isAppletOnly(appletId),
                        editingChanged: (status) => setIsEditing(status),
                        titleChanged: (title) => {

                            updateDatabase({
                                databaseId: appletId,
                                name: title
                            }, () => {
                                updateDocument({
                                    databaseId: 'workspace',
                                    collectionId: 'applets',
                                    documentId: appletId,
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
                            })

                        },
                        subNodes: (TreeNode, level, nodeType, parentId, workspaceId, appletId) => {
                            return subNodes(TreeNode, level, nodeType, parentId, workspaceId, appletId, onItemSelected)
                        },
                        requestMenu: (node) => {
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
                                    title: 'Applet',
                                    icon: Icon(AppletIcon).foregroundColor('#7C828D'),
                                    onClick: () => {
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
                                    }
                                },



                            ]


                        },
                        requestNavigation: () => {

                            if (onItemSelected == null) {
                                switch (item.type) {
                                    case 'applet':
                                        navigate(`/app/${process(realm?.name)}-${workspaceId}/${process(applet.name)}-${appletId}`);
                                        break;
                                    case 'list':
                                        navigate(`/app/${process(realm?.name)}-${workspaceId}/${process(applet)}-${appletId}/list/${item.$id}`);
                                        break;
                                    case 'board':
                                        navigate(`/app/workspace/${workspaceId}/applet/${appletId}/list/${item.parent}/view/${item.$id}`);
                                        break;
                                    case 'document':
                                        navigate(`/app/workspace/${workspaceId}/applet/${appletId}/document/${item.$id}`);
                                        break;
                                    case 'whiteboard':
                                        navigate(`/app/workspace/${workspaceId}/applet/${appletId}/whiteboard/${item.$id}`);
                                        break;

                                }
                            } else {

                                onItemSelected({
                                    workspaceId: workspaceId,
                                    appletId: appletId,
                                    item
                                })
                            }
                        },

                        requestEditMenu: () => [

                            {
                                title: 'Rename',
                                icon: SvgIcon('svg-sprite-global__edit', '#151719', '18px', '18px'),
                                onClick: () => setIsEditing(true)
                            },

                            {
                                title: 'Applet settings',
                                icon: SvgIcon('svg-sprite-global__settings', '#151719', '18px', '18px'),
                                onClick: () => navigate(`/app/workspace/${workspaceId}/applet/${appletId}/settings/general`)
                            }
                        ]

                    })
        )
    }
}

FormBuilder.injectAction('saveSpace', SaveSpaceAction);