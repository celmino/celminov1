import type { Transform, XYPosition, SnapGrid, Dimensions, NodeOrigin, HandleElement } from '../types';
export type GetPointerPositionParams = {
    transform: Transform;
    snapGrid?: SnapGrid;
    snapToGrid?: boolean;
};
export declare function getPointerPosition(event: MouseEvent | TouchEvent, { snapGrid, snapToGrid, transform }: GetPointerPositionParams): XYPosition & {
    xSnapped: number;
    ySnapped: number;
};
export declare const getDimensions: (node: HTMLDivElement) => Dimensions;
export declare const getHostForElement: (element: HTMLElement) => Document | ShadowRoot;
export declare function isInputDOMNode(event: KeyboardEvent): boolean;
export declare const isMouseEvent: (event: MouseEvent | TouchEvent) => event is MouseEvent;
export declare const getEventPosition: (event: MouseEvent | TouchEvent, bounds?: DOMRect) => {
    x: number;
    y: number;
};
export declare const getHandleBounds: (selector: string, nodeElement: HTMLDivElement, zoom: number, nodeOrigin?: NodeOrigin) => HandleElement[] | null;
