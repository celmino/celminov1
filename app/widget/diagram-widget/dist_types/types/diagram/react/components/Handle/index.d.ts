import { type HTMLAttributes } from 'react';
import { type HandleProps } from '../../../system';
import React from 'react';
export interface HandleComponentProps extends HandleProps, Omit<HTMLAttributes<HTMLDivElement>, 'id'> {
}
/**
 * The Handle component is a UI element that is used to connect nodes.
 */
export declare const Handle: React.MemoExoticComponent<(props: HandleComponentProps & React.RefAttributes<HTMLDivElement>) => React.ReactNode>;
