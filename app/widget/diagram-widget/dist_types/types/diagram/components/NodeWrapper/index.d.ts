/// <reference types="react" />
import type { Node, NodeWrapperProps } from '../../types';
export declare function NodeWrapper<NodeType extends Node>({ id, onClick, onMouseEnter, onMouseMove, onMouseLeave, onContextMenu, onDoubleClick, nodesDraggable, elementsSelectable, nodesConnectable, nodesFocusable, resizeObserver, noDragClassName, noPanClassName, disableKeyboardA11y, rfId, nodeTypes, nodeExtent, nodeOrigin, onError, }: NodeWrapperProps<NodeType>): import("react").JSX.Element;
