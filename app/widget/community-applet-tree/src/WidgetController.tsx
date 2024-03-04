import {
    ForEach, FormBuilder,
    Fragment,
    HStack,
    Icon,
    Spinner, SvgIcon,
    UIController, UIView, UIViewBuilder, UIWidget, VStack,
    cLeading,
    cTopLeading,
    useNavigate, useParams, useState
} from '@tuval/forms';

import { Query, useCreateDocument, useGetDocument, useGetRealm, useListDocuments, useUpdateDocument } from '@realmocean/sdk';
import { DynoDialog } from '@realmocean/ui';
/* import { AddBoardDialog } from './dialogs/AddBoardDialog';
import { AddDocumentDialog } from './dialogs/AddDocumentDialog';
import { AddFolderDialog } from './dialogs/AddFolderDialog';
import { AddListDialog } from './dialogs/AddListDialog';
import { SaveSpaceAction } from './dialogs/AddSpaceDialog';
import { AddWhiteboardDialog } from './dialogs/AddWhiteboardDialog'; */
import { AppletIcon, BoardIcon, CalendarIcon, ChatIcon, CourceIcon, DocumentIcon, EventsIcon, FeedIcon, FormIcon, ImagesIcon, ListIcon,  MembersIcon,  PostsIcons, ReportIcon, TableIcon, TimelineIcon } from './resources/Icons';
import { getAppletId, getDocumentId, getListId, getViewId } from './utils';
//import { SelectAppletDialog } from '@celmino/ui';
import { EventBus } from '@tuval/core';
import { AddDocumentDialog } from './dialogs/AddDocumentDialog';


export class CustomAppletTreeModuleController extends UIController {

    public override LoadView(): UIView {

        const navigate = useNavigate();

        const [isEditing, setIsEditing] = useState(false);
        const isLoading = false;
        const { items } = this.props.data || {};
        const { workspaceId, appletId, onItemSelected, item } = this.props.config || {};
        const { realm } = useGetRealm({ realmId: workspaceId, enabled: true });

        const { document: applet } = useGetDocument({
            projectId: workspaceId,
            databaseId: 'workspace',
            collectionId: 'applets',
            documentId: appletId
        });

        const [isOpen, setIsOpen] = useState(getAppletId() === appletId);

        let listId = getListId();


        /*     const { document: list, isLoading: isListLoading } = useGetDocument({
                projectId: workspaceId,
                databaseId: appletId,
                collectionId: 'wm_lists',
                documentId: listId
            }, { enabled: listId != null }); */



        /*  useEffect(() => {
             if (list! + null) {
                 setExpanded(true);
             }
         }, []); */

        // const [expanded, setExpanded] = useLocalStorageState('work_management_tree', false);
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
                                    {
                                        title: 'Add space',
                                        type: 'Title'
                                    },
                                    {
                                        title: 'Posts',
                                        icon: Icon(PostsIcons).foregroundColor('#7C828D'),
                                        //onClick: () => DynoDialog.Show(AddDocumentDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                                    },

                                    {
                                        title: 'Events',
                                        icon: Icon(EventsIcon).foregroundColor('#7C828D'),
                                        //onClick: () => DynoDialog.Show(AddBoardDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                                    },
                                    {
                                        title: 'Chat',
                                        icon: Icon(ChatIcon).foregroundColor('#7C828D'),
                                        //onClick: () => DynoDialog.Show(AddWhiteboardDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                                    },
                                    {
                                        title: 'Course',
                                        icon: Icon(CourceIcon).foregroundColor('#7C828D'),
                                        //onClick: () => DynoDialog.Show(AddWhiteboardDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                                    },
                                    {
                                        title: 'Members',
                                        icon: Icon(MembersIcon).foregroundColor('#7C828D'),
                                        //onClick: () => DynoDialog.Show(AddWhiteboardDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                                    },
                                    {
                                        title: 'Images',
                                        icon: Icon(ImagesIcon).foregroundColor('#7C828D'),
                                        //onClick: () => DynoDialog.Show(AddWhiteboardDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                                    },
                                    {
                                        title: 'Applet',
                                        icon:  Icon(AppletIcon).foregroundColor('#7C828D'),
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
                                navigate(`/app/${realm?.name}-${workspaceId}/${applet?.name}-${appletId}`)
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
                                    onClick: () => navigate(`/app/${realm?.name}-${workspaceId}/${applet?.name}-${appletId}/collections`)
                                },
                                {
                                    title: 'Applet settings',
                                    icon: SvgIcon('svg-sprite-global__settings', '#151719', '18px', '18px'),
                                    onClick: () => navigate(`/app/workspace/${workspaceId}/applet/${appletId}/settings`)
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