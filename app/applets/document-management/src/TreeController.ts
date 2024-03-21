import {
    FormBuilder,
    SvgIcon,
    UIController, UIView,
    UIWidget,
    urlFriendly,
    useNavigate, useState
} from '@tuval/forms';

import { Services, useGetDocument, useGetRealm, useUpdateDocument } from '@realmocean/sdk';
import { EventBus, is } from '@tuval/core';
import { useApplet, useAppletNavigate, useRealm } from '@celmino/ui';
import { ContextMenu } from './views/ContextMenu';


function process(value) {
    if (is.string(value)) {
        return value == undefined ? '' : value.replace(/[^a-z0-9_]+/gi, '-').replace(/^-|-$/g, '').toLowerCase()
    } else {
        return '';
    }
}


export class TreeController extends UIController {

    public override LoadView(): UIView {

        const [isEditing, setIsEditing] = useState(false);
        const isLoading = false;
        const { item, onItemSelected } = this.props.config || {};




        const { realm } = useRealm();
        const { applet } = useApplet();

        const workspaceId = realm.$id;
        const appletId = applet.$id;


        const {navigate} = useAppletNavigate();


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
                            onClick: () => navigate(`settings/general`)
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
                                    navigate(`f/${urlFriendly(item.name)}-${item.$id}`);
                                    break;
                                case 'document':
                                    navigate(`d/${urlFriendly(item.name)}-${item.$id}`);
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

//FormBuilder.injectAction('saveSpace', SaveSpaceAction);