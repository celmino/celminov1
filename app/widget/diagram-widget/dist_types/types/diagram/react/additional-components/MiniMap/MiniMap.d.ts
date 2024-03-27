import type { Node } from '../../types';
import type { MiniMapProps } from './types';
import React from 'react';
declare function MiniMapComponent<NodeType extends Node = Node>({ style, className, nodeStrokeColor, nodeColor, nodeClassName, nodeBorderRadius, nodeStrokeWidth, nodeComponent, bgColor, maskColor, maskStrokeColor, maskStrokeWidth, position, onClick, onNodeClick, pannable, zoomable, ariaLabel, inversePan, zoomStep, offsetScale, }: MiniMapProps<NodeType>): React.JSX.Element;
declare namespace MiniMapComponent {
    var displayName: string;
}
export declare const MiniMap: typeof MiniMapComponent;
export {};
