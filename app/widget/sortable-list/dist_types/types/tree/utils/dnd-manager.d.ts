export default class DndManager {
    treeRef: any;
    constructor(treeRef: any);
    static wrapRoot(el: any): any;
    get startDrag(): any;
    get dragHover(): any;
    get endDrag(): any;
    get drop(): any;
    get treeId(): any;
    get dndType(): any;
    get treeData(): any;
    get getNodeKey(): any;
    get customCanDrop(): any;
    get maxDepth(): any;
    getTargetDepth(dropTargetProps: any, monitor: any, component: any): number;
    canDrop(dropTargetProps: any, monitor: any): any;
    wrapSource(el: any): any;
    wrapTarget(el: any): any;
    wrapPlaceholder(el: any): any;
}
