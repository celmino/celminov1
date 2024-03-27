/// <reference types="react" />
import type { EdgeTextProps } from '../../types';
declare function EdgeTextComponent({ x, y, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, children, className, ...rest }: EdgeTextProps): import("react").JSX.Element;
declare namespace EdgeTextComponent {
    var displayName: string;
}
export declare const EdgeText: import("react").MemoExoticComponent<typeof EdgeTextComponent>;
export {};
