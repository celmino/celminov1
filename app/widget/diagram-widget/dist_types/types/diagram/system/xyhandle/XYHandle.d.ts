import { ConnectionMode, type OnConnect, type OnConnectStart, type HandleType, type Connection, type PanBy, type NodeBase, type Transform, type ConnectingHandle, type OnConnectEnd, type UpdateConnection, type IsValidConnection, type ConnectionHandle } from '../types';
export type OnPointerDownParams = {
    autoPanOnConnect: boolean;
    connectionMode: ConnectionMode;
    connectionRadius: number;
    domNode: HTMLDivElement | null;
    handleId: string | null;
    nodeId: string;
    isTarget: boolean;
    nodes: NodeBase[];
    lib: string;
    flowId: string | null;
    edgeUpdaterType?: HandleType;
    updateConnection: UpdateConnection;
    panBy: PanBy;
    cancelConnection: () => void;
    onConnectStart?: OnConnectStart;
    onConnect?: OnConnect;
    onConnectEnd?: OnConnectEnd;
    isValidConnection?: IsValidConnection;
    onEdgeUpdateEnd?: (evt: MouseEvent | TouchEvent) => void;
    getTransform: () => Transform;
    getConnectionStartHandle: () => ConnectingHandle | null;
};
export type IsValidParams = {
    handle: Pick<ConnectionHandle, 'nodeId' | 'id' | 'type'> | null;
    connectionMode: ConnectionMode;
    fromNodeId: string;
    fromHandleId: string | null;
    fromType: HandleType;
    isValidConnection?: IsValidConnection;
    doc: Document | ShadowRoot;
    lib: string;
    flowId: string | null;
};
export type XYHandleInstance = {
    onPointerDown: (event: MouseEvent | TouchEvent, params: OnPointerDownParams) => void;
    isValid: (event: MouseEvent | TouchEvent, params: IsValidParams) => Result;
};
type Result = {
    handleDomNode: Element | null;
    isValid: boolean;
    connection: Connection | null;
    endHandle: ConnectingHandle | null;
};
export declare const XYHandle: XYHandleInstance;
export {};
