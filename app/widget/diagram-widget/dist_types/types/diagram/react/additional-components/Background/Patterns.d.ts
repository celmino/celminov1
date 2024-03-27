import { BackgroundVariant } from './types';
import React from 'react';
type LinePatternProps = {
    dimensions: [number, number];
    variant: BackgroundVariant;
    lineWidth?: number;
    className?: string;
};
export declare function LinePattern({ dimensions, lineWidth, variant, className }: LinePatternProps): React.JSX.Element;
type DotPatternProps = {
    radius: number;
    className?: string;
};
export declare function DotPattern({ radius, className }: DotPatternProps): React.JSX.Element;
export {};
