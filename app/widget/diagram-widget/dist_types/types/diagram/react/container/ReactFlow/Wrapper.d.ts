import { type ReactNode } from 'react';
import type { Node, Edge } from '../../types';
import React from 'react';
export declare function Wrapper({ children, nodes, edges, defaultNodes, defaultEdges, width, height, fitView, }: {
    children: ReactNode;
    nodes?: Node[];
    edges?: Edge[];
    defaultNodes?: Node[];
    defaultEdges?: Edge[];
    width?: number;
    height?: number;
    fitView?: boolean;
}): React.JSX.Element;
