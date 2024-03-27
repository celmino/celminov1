import { CSSProperties } from 'react';
import { ConnectionLineType } from '@xyflow/system';
import type { ConnectionLineComponent } from '../../types';
type ConnectionLineWrapperProps = {
    type: ConnectionLineType;
    component?: ConnectionLineComponent;
    containerStyle?: CSSProperties;
    style?: CSSProperties;
};
export declare function ConnectionLineWrapper({ containerStyle, style, type, component }: ConnectionLineWrapperProps): import("react").JSX.Element;
export {};
