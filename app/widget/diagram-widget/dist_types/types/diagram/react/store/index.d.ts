import type { ReactFlowState, Node, Edge } from '../types';
declare const createRFStore: ({ nodes, edges, defaultNodes, defaultEdges, width, height, fitView, }: {
    nodes?: Node[];
    edges?: Edge[];
    defaultNodes?: Node[];
    defaultEdges?: Edge[];
    width?: number;
    height?: number;
    fitView?: boolean;
}) => import("zustand/traditional").UseBoundStoreWithEqualityFn<import("zustand").StoreApi<ReactFlowState>>;
export { createRFStore };
