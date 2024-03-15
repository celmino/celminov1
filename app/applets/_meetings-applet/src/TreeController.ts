import {
    ForEach, FormBuilder, Fragment, HStack,
    Icon,
    ReactView,
    SvgIcon,
    UIController, UIView, UIViewBuilder, UIWidget, VStack,
    cLeading, cTopLeading,
    useNavigate, useParams, useState
} from '@tuval/forms';

import { AboutDialog,   SelectAppletDialog, useAppletNavigate, useRealmTree, ListApplet } from '@celmino/ui';
import { Query, useCreateDocument, useGetDocument, useGetOrganization, useGetRealm, useListDocuments, useUpdateDatabase, useUpdateDocument } from '@realmocean/sdk';

import { EventBus, is } from '@tuval/core';
/* import { AddBoardDialog } from './dialogs/AddBoardDialog';
import { AddDocumentDialog } from './dialogs/AddDocumentDialog';
import { AddFolderDialog } from './dialogs/AddFolderDialog';
import { AddListDialog } from './dialogs/AddListDialog';
import { SaveSpaceAction } from './dialogs/AddSpaceDialog';
import { AddWhiteboardDialog } from './dialogs/AddWhiteboardDialog'; */
import { AppletIcon, BoardIcon, CalendarIcon, FeedIcon, ListIcon, ReportIcon, TableIcon, TimelineIcon } from './resources/Icons';
import { getAppletId, getDocumentId, getListId, getViewId, isAppletOnly, isAppletSettings } from './utils';
import React from 'react';



export class WorkspaceTreeWidgetController extends UIController {

    public override LoadView(): UIView {

        const { navigate } = useAppletNavigate();

        const [isEditing, setIsEditing] = useState(false);
        const isLoading = false;
        const { items } = this.props.data || {};
        const { organizationId, workspaceId, appletId, onItemSelected, item } = this.props.config || {};

        const { organization, isLoading: isOrganizationLoading } = useGetOrganization({ organizationId, hookEnabled: true }); // useGetCurrentOrganization();


        const [isOpen, setIsOpen] = useState(getAppletId() === appletId);

        let listId = getListId();

        const { updateDocument } = useUpdateDocument(workspaceId);
        const { updateDatabase } = useUpdateDatabase(workspaceId);

        const { createDocument: createTreeItem } = useCreateDocument(workspaceId, appletId, 'wm_tree');
        const { realm } = useGetRealm({ realmId: workspaceId, enabled: true });
        const { document: applet, isLoading: isAppletLoading } = useGetDocument({ projectId: workspaceId, databaseId: 'workspace', collectionId: 'applets', documentId: appletId });

        const { setCanDrag } = useRealmTree();

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
                            return []
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
                                        navigate(``);
                                        break;
                                    case 'list':
                                        //  navigate(`/@/${process(realm?.name)}-${workspaceId}/${process(applet)}-${appletId}/list/${item.$id}`);
                                        break;
                                    case 'board':
                                        navigate(`/@/workspace/${workspaceId}/applet/${appletId}/list/${item.parent}/view/${item.$id}`);
                                        break;
                                    case 'document':
                                        navigate(`/@/workspace/${workspaceId}/applet/${appletId}/document/${item.$id}`);
                                        break;
                                    case 'whiteboard':
                                        navigate(`/@/workspace/${workspaceId}/applet/${appletId}/whiteboard/${item.$id}`);
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
                                onClick: () => {
                                    // setCanDrag(false);
                                    setIsEditing(true);

                                }
                            },

                            {
                                title: 'Applet settings',
                                icon: SvgIcon('svg-sprite-global__settings', '#151719', '18px', '18px'),
                                onClick: () => navigate(`settings/general`)
                            },
                            {
                                title: 'About',
                                icon: SvgIcon('svg-sprite-global__settings', '#151719', '18px', '18px'),
                                onClick: () => AboutDialog.Show(ListApplet)
                            }


                        ]

                    })

        )


    }
}

//FormBuilder.injectAction('saveSpace', SaveSpaceAction);