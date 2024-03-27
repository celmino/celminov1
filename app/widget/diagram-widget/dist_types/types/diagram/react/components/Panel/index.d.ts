import type { HTMLAttributes, ReactNode } from 'react';
import type { PanelPosition } from '../../../system';
import React from 'react';
export type PanelProps = HTMLAttributes<HTMLDivElement> & {
    /** Set position of the panel
     * @example 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'
     */
    position?: PanelPosition;
    children: ReactNode;
};
export declare function Panel({ position, children, className, style, ...rest }: PanelProps): React.JSX.Element;
