import { type ReactNode } from 'react';
import type { Node, Edge } from '../../types';
import React from 'react';
export declare function ReactFlowProvider({ children, initialNodes, initialEdges, defaultNodes, defaultEdges, initialWidth, initialHeight, fitView, }: {
    children: ReactNode;
    initialNodes?: Node[];
    initialEdges?: Edge[];
    defaultNodes?: Node[];
    defaultEdges?: Edge[];
    initialWidth?: number;
    initialHeight?: number;
    fitView?: boolean;
}): React.JSX.Element;
