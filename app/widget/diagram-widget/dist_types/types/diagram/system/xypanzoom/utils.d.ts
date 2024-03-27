import { type Viewport } from '../types';
export declare const viewChanged: (prevViewport: Viewport, eventViewport: any) => boolean;
export declare const transformToViewport: (transform: ZoomTransform) => Viewport;
export declare const viewportToTransform: ({ x, y, zoom }: Viewport) => ZoomTransform;
export declare const isWrappedWithClass: (event: any, className: string | undefined) => any;
export declare const isRightClickPan: (panOnDrag: boolean | number[], usedButton: number) => boolean;
export declare const getD3Transition: (selection: D3Selection<Element, unknown, null, undefined>, duration?: number) => any;
export declare const wheelDelta: (event: any) => number;
