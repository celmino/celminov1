import {
    Icon,
    SvgIcon,
    UIController, UIView, UIViewBuilder, UIWidget,
    useState
} from '@tuval/forms';

import { useCreateDocument, useGetDocument, useUpdateDocument } from '@realmocean/sdk';


import { EventBus } from '@tuval/core';
//import { AddDocumentDialog } from './dialogs/AddDocumentDialog';
import { AboutDialog, DynoDialog, FeedApplet, useAppletNavigate, useOrganization, useRealm } from '@celmino/ui';


export class TreeController extends UIController {

    public override LoadView(): UIView {

        const { navigate } = useAppletNavigate();

        const [isEditing, setIsEditing] = useState(false);
        const isLoading = false;
        const { items } = this.props.data || {};
        const { organizationId, workspaceId, appletId, onItemSelected, item } = this.props.config || {};
        const { realm } = useRealm();

        const organization = useOrganization(); // useGetCurrentOrganization();

       
        const { updateDocument } = useUpdateDocument(workspaceId);

        const { createDocument: createTreeItem } = useCreateDocument(workspaceId, appletId, 'wm_tree');

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
                                    title: 'Applet settings',
                                    icon: SvgIcon('svg-sprite-global__settings', '#151719', '18px', '18px'),
                                    onClick: () => navigate(`settings/general`)
                                },
                                {
                                    title: 'About',
                                    icon: SvgIcon('svg-sprite-global__settings', '#151719', '18px', '18px'),
                                    onClick: () => AboutDialog.Show(FeedApplet)
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