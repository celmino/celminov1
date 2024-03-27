/// <reference types="react" />
import type { ResizeControlProps, ResizeControlLineProps } from './types';
declare function ResizeControl({ nodeId, position, variant, className, style, children, color, minWidth, minHeight, maxWidth, maxHeight, keepAspectRatio, shouldResize, onResizeStart, onResize, onResizeEnd, }: ResizeControlProps): import("react").JSX.Element;
export declare function ResizeControlLine(props: ResizeControlLineProps): import("react").JSX.Element;
export declare const NodeResizeControl: import("react").MemoExoticComponent<typeof ResizeControl>;
export {};
