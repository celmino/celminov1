/// <reference types="react" />
import type { Node } from '../../types';
import type { MiniMapNodes as MiniMapNodesProps } from './types';
declare function MiniMapNodes<NodeType extends Node>({ nodeStrokeColor, nodeColor, nodeClassName, nodeBorderRadius, nodeStrokeWidth, nodeComponent: NodeComponent, onClick, }: MiniMapNodesProps<NodeType>): import("react").JSX.Element;
declare const _default: typeof MiniMapNodes;
export default _default;
