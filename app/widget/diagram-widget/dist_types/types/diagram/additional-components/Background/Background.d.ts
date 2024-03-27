/// <reference types="react" />
import { type BackgroundProps } from './types';
declare function BackgroundComponent({ id, variant, gap, size, lineWidth, offset, color, bgColor, style, className, patternClassName, }: BackgroundProps): import("react").JSX.Element;
declare namespace BackgroundComponent {
    var displayName: string;
}
export declare const Background: import("react").MemoExoticComponent<typeof BackgroundComponent>;
export {};
