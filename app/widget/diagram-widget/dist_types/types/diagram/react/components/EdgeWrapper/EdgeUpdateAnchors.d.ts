import { EdgePosition } from '../../../system';
import type { EdgeWrapperProps, Edge } from '../../types/edges';
import React from 'react';
type EdgeUpdateAnchorsProps<EdgeType extends Edge = Edge> = {
    edge: EdgeType;
    isUpdatable: boolean | 'source' | 'target';
    edgeUpdaterRadius: EdgeWrapperProps['edgeUpdaterRadius'];
    sourceHandleId: Edge['sourceHandle'];
    targetHandleId: Edge['targetHandle'];
    onEdgeUpdate: EdgeWrapperProps<EdgeType>['onEdgeUpdate'];
    onEdgeUpdateStart: EdgeWrapperProps<EdgeType>['onEdgeUpdateStart'];
    onEdgeUpdateEnd: EdgeWrapperProps<EdgeType>['onEdgeUpdateEnd'];
    setUpdateHover: (hover: boolean) => void;
    setUpdating: (updating: boolean) => void;
} & EdgePosition;
export declare function EdgeUpdateAnchors<EdgeType extends Edge = Edge>({ isUpdatable, edgeUpdaterRadius, edge, targetHandleId, sourceHandleId, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, onEdgeUpdate, onEdgeUpdateStart, onEdgeUpdateEnd, setUpdating, setUpdateHover, }: EdgeUpdateAnchorsProps<EdgeType>): React.JSX.Element;
export {};
