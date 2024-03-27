import type { EdgeTextProps } from '../../types';
import React from 'react';
declare function EdgeTextComponent({ x, y, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, children, className, ...rest }: EdgeTextProps): React.JSX.Element;
declare namespace EdgeTextComponent {
    var displayName: string;
}
export declare const EdgeText: React.MemoExoticComponent<typeof EdgeTextComponent>;
export {};
