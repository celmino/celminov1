import { type BackgroundProps } from './types';
import React from 'react';
declare function BackgroundComponent({ id, variant, gap, size, lineWidth, offset, color, bgColor, style, className, patternClassName, }: BackgroundProps): React.JSX.Element;
declare namespace BackgroundComponent {
    var displayName: string;
}
export declare const Background: React.MemoExoticComponent<typeof BackgroundComponent>;
export {};
