import {
    ForEach,
    FormBuilder, Fragment, HStack,
    Icon, Icons, Loader,
    LoaderSizes, MenuButton, OptionsContext, Spacer, Spinner, SvgIcon,
    UIController, UIView, UIViewBuilder, UIWidget, VStack, cHorizontal, cLeading, cTopLeading, cTrailing, cVertical, useEffect, useNavigate, useState
} from '@tuval/forms';

import { Query, useGetDocument, useListDocuments, useUpdateDocument } from '@realmocean/sdk';
import { DynoDialog } from '@realmocean/ui';
import { Text, TextField, Text as VibeText } from '@realmocean/vibe';
import { AddFolderDialog } from './dialogs/AddFolderDialog';
import { SaveSpaceAction } from './dialogs/AddSpaceDialog';
import { getAppletId, getDocumentId, getListId, isAppletOnly, isAppletSettings } from './utils';
import { WorkbenchIcons } from './views/WorkbenchIcons';
import { LeftSideMenuView } from './views/WorkspaceTree';
import { useLocalStorageState } from './views/localStorageState';
import { AddDocumentDialog } from './dialogs/AddDocumentDialog';
import { ContextMenu, EditContextMenu } from './ContextMenu';
import { EventBus } from '@tuval/core';



export class AppController2 extends UIController {

    public override LoadView(): UIView {

        const [isEditing, setIsEditing] = useState(false);
        const isLoading = false;
        const { item, workspaceId, appletId, onItemSelected } = this.props.config || {};

        // const [isOpen, setIsOpen] = useState(getAppletId() === appletId);

        let listId = getListId();





        /* useEffect(() => {
            if (list! + null) {
                setExpanded(true);
            }
        }, []); */

        const navigate = useNavigate();

        const [expanded, setExpanded] = useLocalStorageState('work_management_tree', false);

        const { updateDocument } = useUpdateDocument(workspaceId);

        return (

            UIWidget('com.celmino.widget.applet-tree')
                .config({
                    node: item,
                    workspaceId,
                    appletId: item.appletId,
                    appletName: item.name,
                    iconName: item.iconName,
                    iconCategory: item.iconCategory,
                    isEditing: isEditing,
                    //isSelected: isAppletSettings(appletId) || isAppletOnly(appletId),
                    editingChanged: (status) => {
                        item.canDrag = !status;
                        setIsEditing(status)
                    },
                    titleChanged: (title) => {

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
                    },
                    subNodes: (TreeNode, level, nodeType, parentId, workspaceId, appletId) => {
                        return [];
                        // return subNodes(TreeNode, level, nodeType, parentId, workspaceId, appletId, onItemSelected)
                    },
                    requestMenu: (node) => ContextMenu(workspaceId, node.appletId, node.$id),
                    requestEditMenu: (node) => [
                        {
                            title: 'Rename ' + item.name,
                            icon: SvgIcon('svg-sprite-global__edit', '#151719', '18px', '18px'),
                            onClick: () => setIsEditing(true)
                        },

                        {
                            title: 'Applet settings',
                            icon: SvgIcon('svg-sprite-global__settings', '#151719', '18px', '18px'),
                            onClick: () => navigate(`/app/workspace/${workspaceId}/applet/${node.appletId}/settings/general`)
                        }
                    ],
                    requestNavigation: () => {
                        //  alert(JSON.stringify(item));
                        if (onItemSelected == null) {
                            switch (item.type) {
                                case 'folder':
                                    navigate(`/app/workspace/${workspaceId}/applet/${item.appletId}/folder/${item.$id}`);
                                    break;
                                case 'document':
                                    navigate(`/app/workspace/${workspaceId}/applet/${item.appletId}/document/${item.$id}`);
                                    break;

                            }
                        } else {
                            onItemSelected({
                                workspaceId, appletId: item.appletId, item
                            })
                        }
                    },

                })

        )
    }
}

FormBuilder.injectAction('saveSpace', SaveSpaceAction);