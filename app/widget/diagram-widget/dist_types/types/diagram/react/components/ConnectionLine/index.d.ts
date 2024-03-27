import { CSSProperties } from 'react';
import { ConnectionLineType } from '../../../system';
import type { ConnectionLineComponent } from '../../types';
import React from 'react';
type ConnectionLineWrapperProps = {
    type: ConnectionLineType;
    component?: ConnectionLineComponent;
    containerStyle?: CSSProperties;
    style?: CSSProperties;
};
export declare function ConnectionLineWrapper({ containerStyle, style, type, component }: ConnectionLineWrapperProps): React.JSX.Element;
export {};
