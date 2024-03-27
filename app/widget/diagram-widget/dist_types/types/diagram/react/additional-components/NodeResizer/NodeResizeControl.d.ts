import type { ResizeControlProps, ResizeControlLineProps } from './types';
import React from 'react';
declare function ResizeControl({ nodeId, position, variant, className, style, children, color, minWidth, minHeight, maxWidth, maxHeight, keepAspectRatio, shouldResize, onResizeStart, onResize, onResizeEnd, }: ResizeControlProps): React.JSX.Element;
export declare function ResizeControlLine(props: ResizeControlLineProps): React.JSX.Element;
export declare const NodeResizeControl: React.MemoExoticComponent<typeof ResizeControl>;
export {};
