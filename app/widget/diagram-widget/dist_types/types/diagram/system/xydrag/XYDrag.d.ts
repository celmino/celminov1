import type { NodeBase, NodeDragItem, EdgeBase, CoordinateExtent, NodeOrigin, OnError, SnapGrid, Transform, PanBy, OnSelectionDrag, UpdateNodePositions } from '../types';
export type OnDrag = (event: MouseEvent, dragItems: NodeDragItem[], node: NodeBase, nodes: NodeBase[]) => void;
type StoreItems<OnNodeDrag> = {
    nodes: NodeBase[];
    nodeLookup: Map<string, NodeBase>;
    edges: EdgeBase[];
    nodeExtent: CoordinateExtent;
    snapGrid: SnapGrid;
    snapToGrid: boolean;
    nodeOrigin: NodeOrigin;
    multiSelectionActive: boolean;
    domNode?: Element | null;
    transform: Transform;
    autoPanOnNodeDrag: boolean;
    nodesDraggable: boolean;
    selectNodesOnDrag: boolean;
    nodeDragThreshold: number;
    panBy: PanBy;
    unselectNodesAndEdges: (params?: {
        nodes?: NodeBase[];
        edges?: EdgeBase[];
    }) => void;
    onError?: OnError;
    onNodeDragStart?: OnNodeDrag;
    onNodeDrag?: OnNodeDrag;
    onNodeDragStop?: OnNodeDrag;
    onSelectionDragStart?: OnSelectionDrag;
    onSelectionDrag?: OnSelectionDrag;
    onSelectionDragStop?: OnSelectionDrag;
    updateNodePositions: UpdateNodePositions;
};
export type XYDragParams<OnNodeDrag> = {
    getStoreItems: () => StoreItems<OnNodeDrag>;
    onDragStart?: OnDrag;
    onDrag?: OnDrag;
    onDragStop?: OnDrag;
    onNodeMouseDown?: (id: string) => void;
};
export type XYDragInstance = {
    update: (params: DragUpdateParams) => void;
    destroy: () => void;
};
export type DragUpdateParams = {
    noDragClassName?: string;
    handleSelector?: string;
    isSelectable?: boolean;
    nodeId?: string;
    domNode: Element;
};
export declare function XYDrag<OnNodeDrag extends (e: any, nodes: any, node: any) => void | undefined>({ onNodeMouseDown, getStoreItems, onDragStart, onDrag, onDragStop, }: XYDragParams<OnNodeDrag>): XYDragInstance;
export {};
