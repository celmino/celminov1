/**
 * The nodes selection rectangle gets displayed when a user
 * made a selection with on or several nodes
 */
import { type MouseEvent } from 'react';
import type { Node } from '../../types';
import React from 'react';
export type NodesSelectionProps<NodeType> = {
    onSelectionContextMenu?: (event: MouseEvent, nodes: NodeType[]) => void;
    noPanClassName?: string;
    disableKeyboardA11y: boolean;
};
export declare function NodesSelection<NodeType extends Node>({ onSelectionContextMenu, noPanClassName, disableKeyboardA11y, }: NodesSelectionProps<NodeType>): React.JSX.Element;
