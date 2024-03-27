import type { Node } from '../../types';
import type { MiniMapNodes as MiniMapNodesProps } from './types';
import React from 'react';
declare function MiniMapNodes<NodeType extends Node>({ nodeStrokeColor, nodeColor, nodeClassName, nodeBorderRadius, nodeStrokeWidth, nodeComponent: NodeComponent, onClick, }: MiniMapNodesProps<NodeType>): React.JSX.Element;
declare const _default: typeof MiniMapNodes;
export default _default;
