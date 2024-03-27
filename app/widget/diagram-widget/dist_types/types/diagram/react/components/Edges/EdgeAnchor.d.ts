import type { MouseEvent as ReactMouseEvent, SVGAttributes } from 'react';
import { Position } from '../../../system';
import React from 'react';
export interface EdgeAnchorProps extends SVGAttributes<SVGGElement> {
    position: Position;
    centerX: number;
    centerY: number;
    radius?: number;
    onMouseDown: (event: ReactMouseEvent<SVGGElement, MouseEvent>) => void;
    onMouseEnter: (event: ReactMouseEvent<SVGGElement, MouseEvent>) => void;
    onMouseOut: (event: ReactMouseEvent<SVGGElement, MouseEvent>) => void;
    type: string;
}
export declare function EdgeAnchor({ position, centerX, centerY, radius, onMouseDown, onMouseEnter, onMouseOut, type, }: EdgeAnchorProps): React.JSX.Element;
