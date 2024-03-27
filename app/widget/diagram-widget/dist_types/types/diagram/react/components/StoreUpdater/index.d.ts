import type { Node, Edge, ReactFlowProps } from '../../types';
declare const reactFlowFieldsToTrack: readonly ["nodes", "edges", "defaultNodes", "defaultEdges", "onConnect", "onConnectStart", "onConnectEnd", "onClickConnectStart", "onClickConnectEnd", "nodesDraggable", "nodesConnectable", "nodesFocusable", "edgesFocusable", "edgesUpdatable", "elevateNodesOnSelect", "elevateEdgesOnSelect", "minZoom", "maxZoom", "nodeExtent", "onNodesChange", "onEdgesChange", "elementsSelectable", "connectionMode", "snapGrid", "snapToGrid", "translateExtent", "connectOnClick", "defaultEdgeOptions", "fitView", "fitViewOptions", "onNodesDelete", "onEdgesDelete", "onDelete", "onNodeDrag", "onNodeDragStart", "onNodeDragStop", "onSelectionDrag", "onSelectionDragStart", "onSelectionDragStop", "onMoveStart", "onMove", "onMoveEnd", "noPanClassName", "nodeOrigin", "autoPanOnConnect", "autoPanOnNodeDrag", "onError", "connectionRadius", "isValidConnection", "selectNodesOnDrag", "nodeDragThreshold", "onBeforeDelete", "debug"];
type ReactFlowFieldsToTrack = (typeof reactFlowFieldsToTrack)[number];
type StoreUpdaterProps<NodeType extends Node = Node, EdgeType extends Edge = Edge> = Pick<ReactFlowProps<NodeType, EdgeType>, ReactFlowFieldsToTrack> & {
    rfId: string;
};
export declare function StoreUpdater<NodeType extends Node = Node, EdgeType extends Edge = Edge>(props: StoreUpdaterProps<NodeType, EdgeType>): any;
export {};
