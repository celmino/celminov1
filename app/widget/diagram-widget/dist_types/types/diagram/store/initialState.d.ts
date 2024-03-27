import type { Edge, Node, ReactFlowStore } from '../types';
declare const getInitialState: ({ nodes, edges, defaultNodes, defaultEdges, width, height, fitView, }?: {
    nodes?: Node[];
    edges?: Edge[];
    defaultNodes?: Node[];
    defaultEdges?: Edge[];
    width?: number;
    height?: number;
    fitView?: boolean;
}) => ReactFlowStore;
export default getInitialState;
