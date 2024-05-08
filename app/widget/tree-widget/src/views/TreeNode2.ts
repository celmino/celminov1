import { Text } from "@realmocean/vibe";
import { is } from "@tuval/core";
import {
    Fragment, HStack, IMenuItemModel,
    MenuButton,
    TextField, UIView, UIViewBuilder,
    VStack, cHorizontal, cLeading, cTopLeading,
    cTrailing, cVertical, useState
} from "@tuval/forms";
import { AddIcon, EditIcon } from "../Icons";


export interface TreeNodeProps {
    node?: any;
    nodeType?: string;
    isLoading?: boolean;
    isSelected?: boolean;
    level?: number;
    // isExpand?: boolean;
    // expandChanged?: (isExpand: boolean) => void;
    title?: string | UIView;
    titleChanged?: (title: string) => void;
    isEditing?: boolean;
    editingChanged?: (isEditing: boolean) => void;
    menuModel?: IMenuItemModel[];
    subNode?: (nodeType: string) => UIView;
    iconName?: string;
    iconCategory?: string;
    requestIcon?: (nodeType: string, selected: boolean, expanded: boolean) => UIView;
    requestNavigation?: () => void;
    requestMenu?: (nodeType: string) => IMenuItemModel[];
    requestEditMenu?: (nodeType: string) => IMenuItemModel[];

}
export const TreeNode2 = (treeNodeProps: TreeNodeProps) => UIViewBuilder(() => {
    const { node, isLoading = false, isEditing = false, isSelected = false, title = '', level = 0,
        menuModel = [], subNode = () => Fragment(), nodeType = 'root',
        titleChanged = () => void 0, editingChanged = () => void 0,
        iconName = '', iconCategory = '', requestIcon = () => void 0,
        requestNavigation = () => void 0,
        requestMenu = () => [], requestEditMenu = () => null
    } = treeNodeProps;

    const [expanded, setExpanded] = useState(false);

    const menu = requestMenu(node)
    const editMenu = requestEditMenu(node);

    return (
        VStack({ alignment: cTopLeading })(
            HStack({ alignment: cLeading, spacing: 2 })(
                // Title
                (isEditing && is.string(title)) ? UIViewBuilder(() => {
                    const [newTitle, setNewTitle] = useState<string>( title as any);
                    //  const { updateDocument } = useUpdateDocument(workspaceId);
                    return (
                        HStack({ alignment: cLeading })(
                            TextField()

                                .border('0')
                                .fontSize(14)
                                // .fontWeight('500')
                                .marginLeft(-2)
                                .padding(cVertical, 3)
                                .value(newTitle)
                                .onChange((value) => setNewTitle(value))
                                .outline({ focus: 'none' })
                                .onBlur(() => {
                                    if (title !== newTitle) {
                                        titleChanged(newTitle)
                                    }
                                    editingChanged(false);

                                })






                        )
                            .draggable(true)
                            .height()

                            .onDragStart((e) => {
                                e.preventDefault();
                                e.stopPropagation();
                            })
                            .onDragOver((e) => {
                                e.preventDefault();
                                e.stopPropagation();
                            })
                            .onDragLeave((e) => {
                                e.preventDefault();
                                e.stopPropagation();
                            })
                            .onClickAway(() => {
                                if (title !== newTitle) {
                                    titleChanged(newTitle);
                                    /*  updateDocument({
                                         databaseId: 'workspace',
                                         collectionId: 'applets',
                                         documentId: appletId,
                                         data: {
                                             name: newTitle
                                         }
                                     }); */
                                }
                                editingChanged(false);

                                //setIsEditing(false);
                            })

                    )
                })
                    :

                    HStack({ alignment: cLeading, spacing: 5 })(
                        is.string(title) ?
                            HStack({ alignment: cLeading })(
                                Text(title as any)
                                    .fontWeight(isSelected ? '400' : '400')
                                    .fontSize(nodeType === 'root' ? 14 : 14)
                                    .fontFamily('ui-sans-serif,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol')
                                    .foregroundColor(isSelected ? '#7b68ee' : 'rgb(21, 23, 25)')
                                    .lineHeight(22)
                            )

                                //.width('calc(100% - 40px)')
                                .allHeight(28)
                            : title as UIView
                    )
                        .onClick(() => {
                            requestNavigation();
                        })
                        .overflow('hidden')
                        .height(),
                (menu == null && editMenu == null) ? Fragment() :
                    HStack({ alignment: cTrailing })(

                        (menu == null || menu.length === 0) ? Fragment() :
                            MenuButton()
                                .model(menu)
                                .icon(AddIcon),
                       ( editMenu == null || editMenu.length === 0) ? Fragment() :
                            MenuButton()
                                .model(editMenu)
                                .icon(EditIcon)

                    )
                        .onClick((e) => {
                            e.preventDefault();
                            e.stopPropagation();
                        })

                        .allWidth(64).height(32).padding(cHorizontal, 5)
                        .display('var(--show-space-action-buttons)'),
            )
                .transition('transform .12s ease-in-out')
                //.width('calc(100% - 0px)')
                .transform('translate3d(0px, 0, 0)')
                .fontWeight('500')
                .height()//.padding(5)
                .allHeight(30)
                //.padding(cVertical, isEditing ? 0 : 5)
                .paddingLeft(`${20 * level}px`)
                .background({ default: isSelected ? '#E6EDFE' : '', hover: '#EBEDEF' })
                .cornerRadius(6)
                //.clipPath(isSelected ? 'polygon(95% 0, 100% 50%, 95% 100%, 0 100%, 0 50%, 0 0)' : '')
                .variable('--show-space-action-buttons', { default: 'none', hover: isEditing ? 'none' : 'flex' })
                .variable(`--display-caret`, { default: 'hidden', hover: 'visible' })
                .variable(`--display-icon`, { default: 'visible', hover: 'hidden' })
                .variable(`--opacity-caret`, { default: '0', hover: '1' })
                .variable(`--opacity-icon`, { default: '1', hover: '0' })

            ,
            expanded ?
                HStack({ alignment: cTopLeading })(
                    subNode(nodeType)
                )
                    .height() : Fragment()
        )

            .height()

    )
})
