import { ConnectionStatus, type HandleType, type NodeHandleBounds, type XYPosition, type NodeBase, type ConnectionHandle } from '../types';
export declare function getHandles(node: NodeBase, handleBounds: NodeHandleBounds, type: HandleType, currentHandle: string): ConnectionHandle[];
export declare function getClosestHandle(pos: XYPosition, connectionRadius: number, handles: ConnectionHandle[]): ConnectionHandle | null;
type GetHandleLookupParams = {
    nodes: NodeBase[];
    nodeId: string;
    handleId: string | null;
    handleType: string;
};
export declare function getHandleLookup({ nodes, nodeId, handleId, handleType }: GetHandleLookupParams): ConnectionHandle[];
export declare function getHandleType(edgeUpdaterType: HandleType | undefined, handleDomNode: Element | null): HandleType | null;
export declare function getConnectionStatus(isInsideConnectionRadius: boolean, isHandleValid: boolean): ConnectionStatus;
export {};
