import { Position } from '../../../system';
import type { SimpleBezierEdgeProps } from '../../types';
import React from 'react';
export interface GetSimpleBezierPathParams {
    sourceX: number;
    sourceY: number;
    sourcePosition?: Position;
    targetX: number;
    targetY: number;
    targetPosition?: Position;
}
export declare function getSimpleBezierPath({ sourceX, sourceY, sourcePosition, targetX, targetY, targetPosition, }: GetSimpleBezierPathParams): [path: string, labelX: number, labelY: number, offsetX: number, offsetY: number];
declare const SimpleBezierEdge: React.MemoExoticComponent<({ id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, style, markerEnd, markerStart, interactionWidth, }: SimpleBezierEdgeProps) => React.JSX.Element>;
declare const SimpleBezierEdgeInternal: React.MemoExoticComponent<({ id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, style, markerEnd, markerStart, interactionWidth, }: SimpleBezierEdgeProps) => React.JSX.Element>;
export { SimpleBezierEdge, SimpleBezierEdgeInternal };
