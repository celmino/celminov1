/// <reference types="react" />
import type { FlowRendererProps } from '../FlowRenderer';
type ZoomPaneProps = Omit<FlowRendererProps, 'deleteKeyCode' | 'selectionKeyCode' | 'multiSelectionKeyCode' | 'noDragClassName' | 'disableKeyboardA11y' | 'selectionOnDrag'> & {
    isControlledViewport: boolean;
};
export declare function ZoomPane({ onPaneContextMenu, zoomOnScroll, zoomOnPinch, panOnScroll, panOnScrollSpeed, panOnScrollMode, zoomOnDoubleClick, panOnDrag, defaultViewport, translateExtent, minZoom, maxZoom, zoomActivationKeyCode, preventScrolling, children, noWheelClassName, noPanClassName, onViewportChange, isControlledViewport, }: ZoomPaneProps): import("react").JSX.Element;
export {};
