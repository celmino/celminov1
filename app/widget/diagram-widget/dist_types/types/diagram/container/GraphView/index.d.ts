/// <reference types="react" />
import type { Edge, Node, ReactFlowProps } from '../../types';
export type GraphViewProps<NodeType extends Node = Node, EdgeType extends Edge = Edge> = Omit<ReactFlowProps<NodeType, EdgeType>, 'onSelectionChange' | 'nodes' | 'edges' | 'onMove' | 'onMoveStart' | 'onMoveEnd' | 'elevateEdgesOnSelect'> & Required<Pick<ReactFlowProps<NodeType, EdgeType>, 'selectionKeyCode' | 'deleteKeyCode' | 'multiSelectionKeyCode' | 'connectionLineType' | 'onlyRenderVisibleElements' | 'translateExtent' | 'minZoom' | 'maxZoom' | 'defaultMarkerColor' | 'noDragClassName' | 'noWheelClassName' | 'noPanClassName' | 'defaultViewport' | 'disableKeyboardA11y' | 'nodeOrigin'>> & {
    rfId: string;
};
declare function GraphViewComponent<NodeType extends Node = Node, EdgeType extends Edge = Edge>({ nodeTypes, edgeTypes, onInit, onNodeClick, onEdgeClick, onNodeDoubleClick, onEdgeDoubleClick, onNodeMouseEnter, onNodeMouseMove, onNodeMouseLeave, onNodeContextMenu, onSelectionContextMenu, onSelectionStart, onSelectionEnd, connectionLineType, connectionLineStyle, connectionLineComponent, connectionLineContainerStyle, selectionKeyCode, selectionOnDrag, selectionMode, multiSelectionKeyCode, panActivationKeyCode, zoomActivationKeyCode, deleteKeyCode, onlyRenderVisibleElements, elementsSelectable, defaultViewport, translateExtent, minZoom, maxZoom, preventScrolling, defaultMarkerColor, zoomOnScroll, zoomOnPinch, panOnScroll, panOnScrollSpeed, panOnScrollMode, zoomOnDoubleClick, panOnDrag, onPaneClick, onPaneMouseEnter, onPaneMouseMove, onPaneMouseLeave, onPaneScroll, onPaneContextMenu, onEdgeUpdate, onEdgeContextMenu, onEdgeMouseEnter, onEdgeMouseMove, onEdgeMouseLeave, edgeUpdaterRadius, onEdgeUpdateStart, onEdgeUpdateEnd, noDragClassName, noWheelClassName, noPanClassName, disableKeyboardA11y, nodeOrigin, nodeExtent, rfId, viewport, onViewportChange, }: GraphViewProps<NodeType, EdgeType>): import("react").JSX.Element;
declare namespace GraphViewComponent {
    var displayName: string;
}
export declare const GraphView: typeof GraphViewComponent;
export {};
