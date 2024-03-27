import type { ControlProps } from './types';
import React from 'react';
declare function ControlsComponent({ style, showZoom, showFitView, showInteractive, fitViewOptions, onZoomIn, onZoomOut, onFitView, onInteractiveChange, className, children, position, 'aria-label': ariaLabel, }: ControlProps): React.JSX.Element;
declare namespace ControlsComponent {
    var displayName: string;
}
export declare const Controls: React.MemoExoticComponent<typeof ControlsComponent>;
export {};
