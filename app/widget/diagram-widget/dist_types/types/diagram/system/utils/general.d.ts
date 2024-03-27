import type { Dimensions, XYPosition, CoordinateExtent, Box, Rect, NodeBase, NodeOrigin, SnapGrid, Transform } from '../types';
import { type Viewport } from '../types';
export declare const clamp: (val: number, min?: number, max?: number) => number;
export declare const clampPosition: (position: XYPosition, extent: CoordinateExtent) => {
    x: number;
    y: number;
};
export declare const calcAutoPan: (pos: XYPosition, bounds: Dimensions) => number[];
export declare const getBoundsOfBoxes: (box1: Box, box2: Box) => Box;
export declare const rectToBox: ({ x, y, width, height }: Rect) => Box;
export declare const boxToRect: ({ x, y, x2, y2 }: Box) => Rect;
export declare const nodeToRect: (node: NodeBase, nodeOrigin?: NodeOrigin) => Rect;
export declare const nodeToBox: (node: NodeBase, nodeOrigin?: NodeOrigin) => Box;
export declare const getBoundsOfRects: (rect1: Rect, rect2: Rect) => Rect;
export declare const getOverlappingArea: (rectA: Rect, rectB: Rect) => number;
export declare const isRectObject: (obj: any) => obj is Rect;
export declare const isNumeric: (n: any) => n is number;
export declare const devWarn: (id: string, message: string) => void;
export declare const getPositionWithOrigin: ({ x, y, width, height, origin, }: {
    x: number;
    y: number;
    width: number;
    height: number;
    origin?: NodeOrigin;
}) => XYPosition;
export declare const snapPosition: (position: XYPosition, snapGrid?: SnapGrid) => XYPosition;
export declare const pointToRendererPoint: ({ x, y }: XYPosition, [tx, ty, tScale]: Transform, snapToGrid?: boolean, snapGrid?: SnapGrid) => XYPosition;
export declare const rendererPointToPoint: ({ x, y }: XYPosition, [tx, ty, tScale]: Transform) => XYPosition;
/**
 * Returns a viewport that encloses the given bounds with optional padding.
 * @public
 * @remarks You can determine bounds of nodes with {@link getNodesBounds} and {@link getBoundsOfRects}
 * @param bounds - Bounds to fit inside viewport
 * @param width - Width of the viewport
 * @param height  - Height of the viewport
 * @param minZoom - Minimum zoom level of the resulting viewport
 * @param maxZoom - Maximum zoom level of the resulting viewport
 * @param padding - Optional padding around the bounds
 * @returns A transforned {@link Viewport} that encloses the given bounds which you can pass to e.g. {@link setViewport}
 * @example
 * const { x, y, zoom } = getViewportForBounds(
  { x: 0, y: 0, width: 100, height: 100},
  1200, 800, 0.5, 2);
 */
export declare const getViewportForBounds: (bounds: Rect, width: number, height: number, minZoom: number, maxZoom: number, padding: number) => Viewport;
export declare const isMacOs: () => boolean;
export declare function isCoordinateExtent(extent?: CoordinateExtent | 'parent'): extent is CoordinateExtent;
export declare function getNodeDimensions<NodeType extends NodeBase = NodeBase>(node: NodeType): {
    width: number;
    height: number;
};
export declare function nodeHasDimensions<NodeType extends NodeBase = NodeBase>(node: NodeType): boolean;
