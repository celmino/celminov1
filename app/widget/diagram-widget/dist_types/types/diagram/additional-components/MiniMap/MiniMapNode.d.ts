/// <reference types="react" />
import type { MiniMapNodeProps } from './types';
declare function MiniMapNodeComponent({ id, x, y, width, height, style, color, strokeColor, strokeWidth, className, borderRadius, shapeRendering, selected, onClick, }: MiniMapNodeProps): import("react").JSX.Element;
export declare const MiniMapNode: import("react").MemoExoticComponent<typeof MiniMapNodeComponent>;
export {};
