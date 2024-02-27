import React, { CSSProperties } from 'react';
export interface Props extends React.HTMLAttributes<HTMLButtonElement> {
    active?: {
        fill: string;
        background: string;
    };
    cursor?: CSSProperties['cursor'];
}
export declare const Action: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLButtonElement>>;
