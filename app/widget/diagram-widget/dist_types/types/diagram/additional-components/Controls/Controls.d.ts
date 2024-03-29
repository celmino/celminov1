/// <reference types="react" />
import type { ControlProps } from './types';
declare function ControlsComponent({ style, showZoom, showFitView, showInteractive, fitViewOptions, onZoomIn, onZoomOut, onFitView, onInteractiveChange, className, children, position, 'aria-label': ariaLabel, }: ControlProps): import("react").JSX.Element;
declare namespace ControlsComponent {
    var displayName: string;
}
export declare const Controls: import("react").MemoExoticComponent<typeof ControlsComponent>;
export {};