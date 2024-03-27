import { type ReactNode } from 'react';
import type { Node, Edge } from '../../types';
export declare function Wrapper({ children, nodes, edges, defaultNodes, defaultEdges, width, height, fitView, }: {
    children: ReactNode;
    nodes?: Node[];
    edges?: Edge[];
    defaultNodes?: Node[];
    defaultEdges?: Edge[];
    width?: number;
    height?: number;
    fitView?: boolean;
}): import("react").JSX.Element;
