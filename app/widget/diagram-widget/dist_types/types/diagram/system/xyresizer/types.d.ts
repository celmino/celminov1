import type { D3DragEvent, SubjectPosition } from 'd3-drag';
export type XYResizerParams = {
    x: number;
    y: number;
    width: number;
    height: number;
};
export type XYResizerParamsWithDirection = XYResizerParams & {
    direction: number[];
};
export type ControlLinePosition = 'top' | 'bottom' | 'left' | 'right';
export type ControlPosition = ControlLinePosition | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
export declare enum ResizeControlVariant {
    Line = "line",
    Handle = "handle"
}
export declare const XY_RESIZER_HANDLE_POSITIONS: ControlPosition[];
export declare const XY_RESIZER_LINE_POSITIONS: ControlLinePosition[];
type OnResizeHandler<Params = XYResizerParams, Result = void> = (event: ResizeDragEvent, params: Params) => Result;
export type ResizeDragEvent = D3DragEvent<HTMLDivElement, null, SubjectPosition>;
export type ShouldResize = OnResizeHandler<XYResizerParamsWithDirection, boolean>;
export type OnResizeStart = OnResizeHandler;
export type OnResize = OnResizeHandler<XYResizerParamsWithDirection>;
export type OnResizeEnd = OnResizeHandler;
export {};
