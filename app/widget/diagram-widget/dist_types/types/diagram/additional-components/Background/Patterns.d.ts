/// <reference types="react" />
import { BackgroundVariant } from './types';
type LinePatternProps = {
    dimensions: [number, number];
    variant: BackgroundVariant;
    lineWidth?: number;
    className?: string;
};
export declare function LinePattern({ dimensions, lineWidth, variant, className }: LinePatternProps): import("react").JSX.Element;
type DotPatternProps = {
    radius: number;
    className?: string;
};
export declare function DotPattern({ radius, className }: DotPatternProps): import("react").JSX.Element;
export {};
