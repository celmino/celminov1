import { SelectAppletDialog, AppletContext, TreeContext, useAccount, useRealm } from "@celmino/ui";
import { useListDocuments, Query, useDeleteCache, Services } from "@realmocean/sdk";
import { EventBus } from "@tuval/core";
import { UIViewBuilder, useState, Fragment, VStack, Text, cTopLeading, HStack, cLeading, Spacer, Icon, Icons, cHorizontal, cVertical, useParams, useEffect, UIWidget } from "@tuval/forms";
import { UpIcon } from "../../../../assets/Icons";
import { EmptyView } from "../../../../views/EmptyView";

function addZeroDigitToNumberReturnString(number, countOfZero) {
    let str = number + '';
    while (str.length < countOfZero) {
        str = '0' + str;
    }
    return str;
}

function getSelectedId() {
    const regex = /\[(.*?)\]/;
    const match = window.location.href.match(regex);

    if (match && match[1]) {
        return match[1];
    } else {
        return null;
    }
}


function sortByStringField(arr, field) {
    return arr.slice().sort(function (a, b) {
        var nameA = a[field].toUpperCase(); // Büyük/küçük harf duyarlı sıralama için
        var nameB = b[field].toUpperCase(); // Büyük/küçük harf duyarlı sıralama için
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });
}

const expandeds = {};

export const RealmTree = (title: string, workspaceTreeITems, spaceId: string) => UIViewBuilder(() => {
    const { isAnonymous } = useAccount();
    const { realm } = useRealm();
    const workspaceId = realm.$id;

    const [appletsOpen, setAppletsOpen] = useState(true);

    return (

        VStack({ alignment: cTopLeading })(
            VStack({ alignment: cTopLeading })(

                HStack({ alignment: cLeading })(
                    Text(title)
                        .fontSize(14)
                        .fontWeight('500')
                        .foregroundColor('rgb(80, 90, 100)'),
                    Spacer(),
                    isAnonymous ? Fragment() :
                        HStack(
                            Icon(Icons.Add)
                        ).width(20)
                            .onClick(() => SelectAppletDialog.Show(workspaceId)),
                    HStack(
                        Icon(UpIcon)
                    ).width(20)
                        .onClick(() => setAppletsOpen(!appletsOpen))
                )
                    .position('sticky')
                    .top('0px')
                    .zIndex(10)
                    .background({ hover: 'rgba(22, 102, 223, 0.09999999999999998)' })
                    .height(30)
                    .padding(cHorizontal, 15)
                    .padding(cVertical, 5),
                !appletsOpen ? Fragment() :

                    VStack({ alignment: cTopLeading })(
                        (workspaceTreeITems == null || workspaceTreeITems.length === 0) ? EmptyView(workspaceId) :
                            UIViewBuilder(() => {
                                const params = useParams();
                                const { deleteCache } = useDeleteCache(workspaceId);
                                useEffect(() => {
                                    setTreeItems(buildTree(workspaceTreeITems));
                                    EventBus.Default.on('applet.added', ({ treeItem }) => {

                                        deleteCache();
                                        Services.Databases.listDocuments(workspaceId, 'workspace', 'ws_tree', [
                                            Query.limit(250)
                                        ]).then(({ documents }) => {
                                            setTreeItems(buildTree(documents));
                                        });

                                    })
                                }, [])

                                const selectedItem = workspaceTreeITems?.find(item => item.$id === getSelectedId())

                                //const [realms, setRealms] = useState(documents.map(document => ({id: document.$id, ...document })));

                                function findChildsInTree(workspaceTree, parentNode) {
                                    const children = [];
                                    workspaceTree.forEach(item => {
                                        if (item.parent === parentNode?.$id) {
                                            children.push(item);
                                        }
                                    })

                                    return children;
                                }
                                function findItemInTree(tree, id) {
                                    let result;
                                    tree.forEach(item => {
                                        if (item.$id === id) {
                                            result = item;
                                        }

                                    });
                                    return result;
                                }

                                function buildClidren(workspaceTree, parentNode) {
                                    const item = findItemInTree(workspaceTree, parentNode.$id);
                                    let children: any[] = findChildsInTree(workspaceTree, item);

                                    children = sortByStringField(children, "path");

                                    parentNode.children = children.map(child => {
                                        return {
                                            $id: child.$id,
                                            title: child.name,
                                            parent: child.parent,
                                            path: child.path,
                                            fullPath: child.fullPath,
                                            tree_widget: child.tree_widget,
                                            iconName: child.iconName,
                                            iconCategory: child.iconCategory,
                                            iconColor: parentNode.iconColor,
                                            expanded: expandeds?.[child.$id] ? true : selectedItem?.fullPath?.indexOf(child.$id) > -1,
                                            canDrag: true,
                                            view: (node) => {
                                                if (child.type === 'applet') {
                                                    return (
                                                        HStack(
                                                            AppletContext(() =>
                                                                HStack(
                                                                    child.tree_widget != null ?
                                                                        UIWidget(child.tree_widget, 'tree')
                                                                            .config({
                                                                                item: child,
                                                                                ...(params || {}),
                                                                                appletId: child.appletId
                                                                            }) :
                                                                        Text(child.name)
                                                                )
                                                            ).appletId(child.appletId))
                                                    ).width('calc(100% - 32px)')
                                                } else {
                                                    return (
                                                        HStack(
                                                            AppletContext(() =>
                                                                HStack(
                                                                    child.tree_widget != null ?
                                                                        UIWidget(child.tree_widget, 'tree')
                                                                            .config({
                                                                                item: child,
                                                                                ...(params || {}),
                                                                                appletId: child.appletId
                                                                            }) :
                                                                        Text(child.name)
                                                                )

                                                            ).appletId(child.appletId)
                                                        ).width('calc(100% - 32px)')
                                                    )
                                                }
                                            },
                                            children: buildClidren(workspaceTree, child)
                                        }
                                    })

                                    return parentNode.children;
                                }

                                function buildTree(workspaceTree) {
                                    const tree = [];
                                    let rootItems = workspaceTree?.filter(item => item.parent === '-1' && (item.spaceId === '@realm' || item.spaceId == null));
                                    rootItems = sortByStringField(rootItems, "path");
                                    rootItems.forEach(item => {
                                        if (item.parent === '-1') {
                                            const node = {
                                                $id: item.$id,
                                                title: item.name,
                                                parent: item.parent,
                                                path: item.path,
                                                fullPath: item.fullPath,
                                                tree_widget: item.tree_widget,
                                                expanded: expandeds?.[item.$id] ? true : selectedItem?.fullPath?.indexOf(item.$id) > -1,
                                                iconName: item.iconName,
                                                iconCategory: item.iconCategory,
                                                iconColor: item.iconColor,
                                                canDrag: false,
                                                view: (node) => {
                                                    if (item.type === 'applet') {
                                                        return (
                                                            HStack(
                                                                AppletContext(() =>
                                                                    HStack(
                                                                        item.tree_widget != null ?
                                                                            UIWidget(item.tree_widget, 'tree')
                                                                                .config({
                                                                                    item: item,
                                                                                    ...(params || {}),
                                                                                    appletId: item.$id
                                                                                }) :
                                                                            Text(item.name)
                                                                    )
                                                                ).appletId(item.appletId))
                                                        ).width('calc(100% - 32px)')
                                                    } else {
                                                        return (
                                                            HStack(
                                                                AppletContext(() =>
                                                                    HStack(
                                                                        item.tree_widget != null ?
                                                                            UIWidget(item.tree_widget, 'tree')
                                                                                .config({
                                                                                    item: item,
                                                                                    ...(params || {}),
                                                                                    appletId: item.$id
                                                                                }) :
                                                                            Text(item.name)
                                                                    )
                                                                ).appletId(item.appletId)
                                                            ).width('calc(100% - 32px)')
                                                        )
                                                    }
                                                },
                                                children: []
                                            };
                                            tree.push(node);
                                            buildClidren(workspaceTree, node);
                                        }
                                    })
                                    console.log('build tree');
                                    return tree;
                                }

                                const [prevTreeItems, setPrevTreeItems] = useState([]);
                                const [treeItems, setTreeItems] = useState([]);


                                const canDrop = ({ node, nextParent, prevPath, nextPath }) => {
                                    if (prevPath.indexOf('trap') >= 0 && nextPath.indexOf('trap') < 0) {
                                        return false;
                                    }

                                    if (node.isTwin && nextParent && nextParent.isTwin) {
                                        return false;
                                    }

                                    const noGrandkidsDepth = nextPath.indexOf('no-grandkids');
                                    if (noGrandkidsDepth >= 0 && nextPath.length - noGrandkidsDepth > 2) {
                                        return false;
                                    }

                                    return true;
                                };
                                return (
                                    VStack({ alignment: cTopLeading, spacing: 5 })(
                                        HStack({ alignment: cTopLeading })(
                                            TreeContext(() =>
                                                UIWidget('com.celmino.widget.sortable-tree')
                                                    .config({
                                                        // canDrag: isEditable,
                                                        treeItems: treeItems,
                                                        onChange: (_treeItems) => {
                                                            //  setPrevTreeItems([...treeItems]);
                                                            setTreeItems(_treeItems);

                                                        },
                                                        onVisibilityToggle: ({ node, expanded }) => {

                                                            if (expanded) {
                                                                expandeds[node.$id] = true;
                                                            } else {
                                                                delete expandeds[node.$id];
                                                            }

                                                            console.log(expandeds);

                                                        },

                                                        onMoveNode: ({ treeData }) => {
                                                            const newTreeData = [...treeData];


                                                            function reCreateIndex(parentNode) {
                                                                if (parentNode.children) {
                                                                    parentNode.children.forEach((child, index) => {
                                                                        child.prevParent = child.parent;
                                                                        child.prevPath = child.path;
                                                                        child.prevFullPath = child.fullPath;
                                                                        child.path = addZeroDigitToNumberReturnString(index, 3);
                                                                        child.parent = parentNode.$id;
                                                                        child.fullPath = parentNode.fullPath + '/' + child.$id;
                                                                        if (child.prevPath == null) {
                                                                            child.prevPath = child.path;
                                                                        }
                                                                        if (child.prevParent == null) {
                                                                            child.prevParent = child.parent;
                                                                        }
                                                                        reCreateIndex(child);
                                                                    });
                                                                }
                                                            }

                                                            newTreeData.forEach((item, index) => {
                                                                item.prevParent = item.parent;
                                                                item.prevPath = item.path;
                                                                item.prevFullPath = item.fullPath;
                                                                item.path = addZeroDigitToNumberReturnString(index, 3);
                                                                item.fullPath = '/' + item.$id;
                                                                item.parent = '-1';
                                                                reCreateIndex(item);
                                                            });

                                                            const changes = [];
                                                            function getChanges(parentNode) {
                                                                if (parentNode.children) {
                                                                    parentNode.children.forEach((child) => {
                                                                        if (child.parent !== child.prevParent || (child.parent === child.prevParent && child.path !== child.prevPath) || child.fullPath !== child.prevFullPath) {
                                                                            // console.log(child.title, child.prevPath, child.path, child.parent, child.prevParent)
                                                                            changes.push(child);
                                                                        }
                                                                        getChanges(child);
                                                                    });
                                                                }
                                                            }

                                                            newTreeData.forEach((item, index) => {
                                                                if (item.parent !== item.prevParent || (item.parent === item.prevParent && item.path !== item.prevPath) || item.fullPath !== item.prevFullPath) {
                                                                    //console.log('Burada', item.prevPath, item.path, item.title, item.parent, item.prevParent)
                                                                    changes.push(item);
                                                                }
                                                                getChanges(item);
                                                            });


                                                            changes.forEach(item => {
                                                                Services.Databases.updateDocument(workspaceId, 'workspace', 'ws_tree', item.$id, {
                                                                    path: item.path,
                                                                    fullPath: item.fullPath,
                                                                    parent: item.parent
                                                                })
                                                            })

                                                            console.log(newTreeData)


                                                        }
                                                    })
                                            )
                                                .setCanDrag(() => void 0),


                                        )
                                            .cornerRadius(6),


                                    )
                                        .padding(cHorizontal, 8)
                                        .marginBottom(10)
                                        .marginLeft(10)
                                        .background('gray')
                                        .position('sticky')
                                        .top('30px')
                                        .zIndex(10)
                                )
                            }
                            )
                    )
                        .height()

            )

        )
            .height()
    )
}
)