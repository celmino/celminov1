import { type ReactNode } from 'react';
import type { Node, Edge } from '../../types';
export declare function ReactFlowProvider({ children, initialNodes, initialEdges, defaultNodes, defaultEdges, initialWidth, initialHeight, fitView, }: {
    children: ReactNode;
    initialNodes?: Node[];
    initialEdges?: Edge[];
    defaultNodes?: Node[];
    defaultEdges?: Edge[];
    initialWidth?: number;
    initialHeight?: number;
    fitView?: boolean;
}): import("react").JSX.Element;
