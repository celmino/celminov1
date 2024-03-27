import type { MiniMapNodeProps } from './types';
import React from 'react';
declare function MiniMapNodeComponent({ id, x, y, width, height, style, color, strokeColor, strokeWidth, className, borderRadius, shapeRendering, selected, onClick, }: MiniMapNodeProps): React.JSX.Element;
export declare const MiniMapNode: React.MemoExoticComponent<typeof MiniMapNodeComponent>;
export {};
