import { GraphViewProps } from '../GraphView';
import type { Node } from '../../types';
import React from 'react';
export type NodeRendererProps<NodeType extends Node> = Pick<GraphViewProps<NodeType>, 'onNodeClick' | 'onNodeDoubleClick' | 'onNodeMouseEnter' | 'onNodeMouseMove' | 'onNodeMouseLeave' | 'onNodeContextMenu' | 'onlyRenderVisibleElements' | 'noPanClassName' | 'noDragClassName' | 'rfId' | 'disableKeyboardA11y' | 'nodeOrigin' | 'nodeExtent' | 'nodeTypes'>;
declare function NodeRendererComponent<NodeType extends Node>(props: NodeRendererProps<NodeType>): React.JSX.Element;
declare namespace NodeRendererComponent {
    var displayName: string;
}
export declare const NodeRenderer: typeof NodeRendererComponent;
export {};