import {
    Icon,
    SvgIcon,
    Text,
    UIController, UIView,
    UIWidget,
    useState
} from '@tuval/forms';

import { AboutDialog, DynoDialog, ListApplet, SelectAppletDialog, useApplet, useAppletNavigate, useRealm, useRealmTree } from '@celmino/platform';
import { useCreateDocument, useGetOrganization, useUpdateDatabase, useUpdateDocument } from '@realmocean/sdk';

import { EventBus } from '@tuval/core';
/* import { AddBoardDialog } from './dialogs/AddBoardDialog';
import { AddDocumentDialog } from './dialogs/AddDocumentDialog';
import { AddFolderDialog } from './dialogs/AddFolderDialog';
import { AddListDialog } from './dialogs/AddListDialog';
import { SaveSpaceAction } from './dialogs/AddSpaceDialog';
import { AddWhiteboardDialog } from './dialogs/AddWhiteboardDialog'; */
import { AddListDialog } from './dialogs/AddListDialog';
import { AppletIcon, ListIcon, SprintIcon } from './resources/Icons';
import { getAppletId, getListId, isAppletOnly, isAppletSettings } from './utils';



export class WorkspaceTreeWidgetController extends UIController {

    public override LoadView(): UIView {

        const { navigate } = useAppletNavigate();

        const [isEditing, setIsEditing] = useState(false);
        const isLoading = false;

        const {realm} = useRealm();
        const {applet, updateAppletName} = useApplet();
        const workspaceId = realm.$id;
        const appletId = applet.$id; 

        const { organizationId,onItemSelected, item } = this.props.config || {};

        const { organization, isLoading: isOrganizationLoading } = useGetOrganization({ organizationId, hookEnabled: true }); // useGetCurrentOrganization();


        const [isOpen, setIsOpen] = useState(getAppletId() === appletId);

        let listId = getListId();

        const { updateDocument } = useUpdateDocument(workspaceId);
        const { updateDatabase } = useUpdateDatabase(workspaceId);

        const { createDocument: createTreeItem } = useCreateDocument(workspaceId, appletId, 'wm_tree');
    
       // const { setCanDrag } = useRealmTree();

        return (
           
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
                            updateAppletName(title, ()=> {
                                EventBus.Default.fire('applet.added', { treeItem: item })
                            })
                        
                        },
                        subNodes: (TreeNode, level, nodeType, parentId, workspaceId, appletId) => {
                            return []
                        },
                        requestMenu: (node) => {
                            return [
                                {
                                    title: 'Add to Task List',
                                    type: 'Title'
                                },
                           
                                {
                                    title: 'List',
                                    icon: Icon(ListIcon).foregroundColor('#7C828D'),
                                 },
                                {
                                    title: 'Sprint',
                                    icon: Icon(SprintIcon).foregroundColor('#7C828D'),
                                    onClick: () => DynoDialog.Show(AddListDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
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