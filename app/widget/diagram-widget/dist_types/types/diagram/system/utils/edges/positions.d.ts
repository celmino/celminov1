import { EdgePosition } from '../../types/edges';
import { ConnectionMode, OnError } from '../../types/general';
import { NodeBase } from '../../types/nodes';
export type GetEdgePositionParams = {
    id: string;
    sourceNode: NodeBase;
    sourceHandle: string | null;
    targetNode: NodeBase;
    targetHandle: string | null;
    connectionMode: ConnectionMode;
    onError?: OnError;
};
export declare function getEdgePosition(params: GetEdgePositionParams): EdgePosition | null;
