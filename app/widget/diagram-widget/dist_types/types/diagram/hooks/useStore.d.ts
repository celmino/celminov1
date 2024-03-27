import type { Edge, Node, ReactFlowState } from '../types';
/**
 * Hook for accessing the internal store. Should only be used in rare cases.
 *
 * @public
 * @param selector
 * @param equalityFn
 * @returns The selected state slice
 *
 * @example
 * const nodes = useStore((state: ReactFlowState<MyNodeType>) => state.nodes);
 *
 */
declare function useStore<StateSlice = unknown>(selector: (state: ReactFlowState) => StateSlice, equalityFn?: (a: StateSlice, b: StateSlice) => boolean): any;
declare function useStoreApi<NodeType extends Node = Node, EdgeType extends Edge = Edge>(): {
    getState: any;
    setState: any;
    subscribe: any;
    destroy: any;
};
export { useStore, useStoreApi };
