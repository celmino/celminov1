import {
    ForEach,
    FormBuilder, Fragment, HStack,
    Icon, Icons, Loader,
    LoaderSizes, MenuButton, OptionsContext, Spacer, Spinner, SvgIcon,
    UIController, UIView, UIViewBuilder, UIWidget, VStack, cHorizontal, cLeading, cTopLeading, cTrailing, cVertical, useEffect, useNavigate, useState
} from '@tuval/forms';

import { Query, Services, useGetDocument, useGetRealm, useListDocuments, useUpdateDocument } from '@realmocean/sdk';
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
import { EventBus, is } from '@tuval/core';


function process(value) {
    if (is.string(value)) {
        return value == undefined ? '' : value.replace(/[^a-z0-9_]+/gi, '-').replace(/^-|-$/g, '').toLowerCase()
    } else {
        return '';
    }
}


export class AppController2 extends UIController {

    public override LoadView(): UIView {

        const [isEditing, setIsEditing] = useState(false);
        const isLoading = false;
        const { item, workspaceId, appletId, onItemSelected } = this.props.config || {};

        // const [isOpen, setIsOpen] = useState(getAppletId() === appletId);

        let listId = getListId();

        const { realm } = useGetRealm({ realmId: workspaceId, enabled: true });
        const { document: applet, isLoading: isAppletLoading } = useGetDocument({ projectId: workspaceId, databaseId: 'workspace', collectionId: 'applets', documentId: appletId })




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
                            onClick: () => navigate(`/@/workspace/${workspaceId}/applet/${node.appletId}/settings/general`)
                        },
                        
                        {
                            title: 'Applet settings',
                            icon: SvgIcon('svg-sprite-global__settings', '#151719', '18px', '18px'),
                            onClick: () => {
                                Services.Databases.listCollections(workspaceId, appletId).then((collections) => {
                                    alert(collections.collections)
                                    for (let collection of collections.collections) {
                                        Services.Databases.deleteAllDocument(workspaceId, appletId, collection.$id)
                                    }
                                });
                                
                            }
                        },

                        
                    ],
                    requestNavigation: () => {
                        //  alert(JSON.stringify(item));
                        if (onItemSelected == null) {
                            switch (item.type) {
                                case 'folder':
                                    navigate(`/@/${realm?.name}-${workspaceId}/${applet.name}-${applet.$id}/folder/${item.$id}`);
                                    break;
                                case 'document':
                                    navigate(`/@/${realm?.name}-${workspaceId}/${applet.name}-${applet.$id}/document/${item.$id}`);
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