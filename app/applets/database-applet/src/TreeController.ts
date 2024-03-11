import {
    Icon,
    SvgIcon,
    UIController, UIView, UIViewBuilder, UIWidget,
    urlFriendly,
    useState
} from '@tuval/forms';

import { useUpdateDocument } from '@realmocean/sdk';


import { DynoDialog, useApplet, useAppletNavigate, useRealm } from '@celmino/ui';
import { EventBus } from '@tuval/core';
import { AddCollectionDialog } from './dialogs/AddCollectionDialog';
import { TableIcon } from './resources/Icons';


export class TreeController extends UIController {

    public override LoadView(): UIView {

        const { navigate } = useAppletNavigate();

        const [isEditing, setIsEditing] = useState(false);

        const { workspaceId, appletId, onItemSelected, item } = this.props.config || {};
        const { realm } = useRealm();
        const { applet } = useApplet();
        const { updateDocument } = useUpdateDocument(workspaceId);

        return (

            UIViewBuilder(() => {

                return (
                    UIWidget('com.celmino.widget.applet-tree')
                        .config({
                            node: item,
                            workspaceId,
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
                                //  return subNodes(TreeNode, level, nodeType, parentId, workspaceId, appletId, onItemSelected)
                            },
                            requestMenu: () => {
                                return [
                                    {
                                        title: 'Add to database',
                                        type: 'Title'
                                    },
                                    {
                                        title: 'Collection',
                                        icon: Icon(TableIcon).foregroundColor('#7C828D'),
                                        onClick: () => DynoDialog.Show(AddCollectionDialog(workspaceId, appletId))
                                    }






                                ]


                            },
                            requestNavigation: () => {
                                //  alert(JSON.stringify(item));
                                if (onItemSelected == null) {
                                    switch (item.type) {
                                        case 'applet':
                                            navigate(``);
                                            break;
                                        case 'collection':
                                            navigate(`${urlFriendly(item.name)}-${item.$id}`);
                                            break;

                                    }
                                } else {
                                    onItemSelected({
                                        workspaceId, appletId: item.appletId, item
                                    })
                                }
                            },
                            requestEditMenu: (item) => {
                                switch (item.type) {
                                    case 'applet':

                                        return (
                                            [

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
                                        )
                                    case 'collection':

                                        return (
                                            [

                                                {
                                                    title: 'Rename',
                                                    icon: SvgIcon('svg-sprite-global__edit', '#151719', '18px', '18px'),
                                                    onClick: () => setIsEditing(true)
                                                }


                                            ]
                                        )
                                }
                            }


                        })
                )
            }
            )
        )
    }
}

//FormBuilder.injectAction('saveSpace', SaveSpaceAction);