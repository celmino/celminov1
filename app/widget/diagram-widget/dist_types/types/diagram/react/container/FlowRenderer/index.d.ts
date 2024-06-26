import { type ReactNode } from 'react';
import { GraphViewProps } from '../GraphView';
import type { Node } from '../../types';
import React from 'react';
export type FlowRendererProps<NodeType extends Node = Node> = Omit<GraphViewProps<NodeType>, 'snapToGrid' | 'nodeTypes' | 'edgeTypes' | 'snapGrid' | 'connectionLineType' | 'connectionLineContainerStyle' | 'arrowHeadColor' | 'onlyRenderVisibleElements' | 'selectNodesOnDrag' | 'defaultMarkerColor' | 'rfId' | 'nodeOrigin'> & {
    isControlledViewport: boolean;
    children: ReactNode;
};
declare function FlowRendererComponent<NodeType extends Node = Node>({ children, onPaneClick, onPaneMouseEnter, onPaneMouseMove, onPaneMouseLeave, onPaneContextMenu, onPaneScroll, deleteKeyCode, selectionKeyCode, selectionOnDrag, selectionMode, onSelectionStart, onSelectionEnd, multiSelectionKeyCode, panActivationKeyCode, zoomActivationKeyCode, elementsSelectable, zoomOnScroll, zoomOnPinch, panOnScroll: _panOnScroll, panOnScrollSpeed, panOnScrollMode, zoomOnDoubleClick, panOnDrag: _panOnDrag, defaultViewport, translateExtent, minZoom, maxZoom, preventScrolling, onSelectionContextMenu, noWheelClassName, noPanClassName, disableKeyboardA11y, onViewportChange, isControlledViewport, }: FlowRendererProps<NodeType>): React.JSX.Element;
declare namespace FlowRendererComponent {
    var displayName: string;
}
export declare const FlowRenderer: typeof FlowRendererComponent;
export {};
