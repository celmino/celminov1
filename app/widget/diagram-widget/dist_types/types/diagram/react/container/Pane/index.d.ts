/**
 * The user selection rectangle gets displayed when a user drags the mouse while pressing shift
 */
import { type ReactNode } from 'react';
import type { ReactFlowProps } from '../../types';
import React from 'react';
type PaneProps = {
    isSelecting: boolean;
    children: ReactNode;
} & Partial<Pick<ReactFlowProps, 'selectionMode' | 'panOnDrag' | 'onSelectionStart' | 'onSelectionEnd' | 'onPaneClick' | 'onPaneContextMenu' | 'onPaneScroll' | 'onPaneMouseEnter' | 'onPaneMouseMove' | 'onPaneMouseLeave'>>;
export declare function Pane({ isSelecting, selectionMode, panOnDrag, onSelectionStart, onSelectionEnd, onPaneClick, onPaneContextMenu, onPaneScroll, onPaneMouseEnter, onPaneMouseMove, onPaneMouseLeave, children, }: PaneProps): React.JSX.Element;
export {};
