import type { CoordinateExtent, NodeLookup, NodeOrigin, Transform, XYPosition } from '../types';
import type { OnResize, OnResizeEnd, OnResizeStart, ShouldResize, ControlPosition } from './types';
declare const initChange: {
    x: number;
    y: number;
    width: number;
    height: number;
    isXPosChange: boolean;
    isYPosChange: boolean;
    isWidthChange: boolean;
    isHeightChange: boolean;
};
export type XYResizerChange = typeof initChange;
export type XYResizerChildChange = {
    id: string;
    position: XYPosition;
    extent?: 'parent' | CoordinateExtent;
};
type XYResizerParams = {
    domNode: HTMLDivElement;
    nodeId: string;
    getStoreItems: () => {
        nodeLookup: NodeLookup;
        transform: Transform;
        snapGrid?: [number, number];
        snapToGrid: boolean;
        nodeOrigin: NodeOrigin;
    };
    onChange: (changes: XYResizerChange, childChanges: XYResizerChildChange[]) => void;
    onEnd?: () => void;
};
type XYResizerUpdateParams = {
    controlPosition: ControlPosition;
    boundaries: {
        minWidth: number;
        minHeight: number;
        maxWidth: number;
        maxHeight: number;
    };
    keepAspectRatio: boolean;
    onResizeStart: OnResizeStart | undefined;
    onResize: OnResize | undefined;
    onResizeEnd: OnResizeEnd | undefined;
    shouldResize: ShouldResize | undefined;
};
export type XYResizerInstance = {
    update: (params: XYResizerUpdateParams) => void;
    destroy: () => void;
};
export declare function XYResizer({ domNode, nodeId, getStoreItems, onChange }: XYResizerParams): XYResizerInstance;
export {};
