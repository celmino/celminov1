import { NodeBase, CoordinateExtent, Dimensions, NodeDimensionUpdate, NodeOrigin, PanZoomInstance, Transform, XYPosition, ConnectionLookup, EdgeBase, EdgeLookup } from '../types';
type ParentNodes = Record<string, boolean>;
export declare function updateAbsolutePositions<NodeType extends NodeBase>(nodes: NodeType[], nodeLookup: Map<string, NodeType>, nodeOrigin?: NodeOrigin, parentNodes?: ParentNodes): NodeType[];
type UpdateNodesOptions<NodeType extends NodeBase> = {
    nodeOrigin?: NodeOrigin;
    elevateNodesOnSelect?: boolean;
    defaults?: Partial<NodeType>;
};
export declare function adoptUserProvidedNodes<NodeType extends NodeBase>(nodes: NodeType[], nodeLookup: Map<string, NodeType>, options?: UpdateNodesOptions<NodeType>): NodeType[];
export declare function updateNodeDimensions<NodeType extends NodeBase>(updates: Map<string, NodeDimensionUpdate>, nodes: NodeType[], nodeLookup: Map<string, NodeType>, domNode: HTMLElement | null, nodeOrigin?: NodeOrigin, onUpdate?: (id: string, dimensions: Dimensions) => void): NodeType[] | null;
export declare function panBy({ delta, panZoom, transform, translateExtent, width, height, }: {
    delta: XYPosition;
    panZoom: PanZoomInstance | null;
    transform: Transform;
    translateExtent: CoordinateExtent;
    width: number;
    height: number;
}): boolean;
export declare function updateConnectionLookup(connectionLookup: ConnectionLookup, edgeLookup: EdgeLookup, edges: EdgeBase[]): void;
export {};
