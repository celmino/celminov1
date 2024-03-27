/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentType, memo, Fragment } from 'react';
import { NodeOrigin, getNodeDimensions, getNodePositionWithOrigin, nodeHasDimensions } from '../../../system';
import { shallow } from 'zustand/shallow';

import { useStore } from '../../hooks/useStore';
import { MiniMapNode } from './MiniMapNode';
import type { ReactFlowState, Node } from '../../types';
import type { MiniMapNodes as MiniMapNodesProps, GetMiniMapNodeAttribute, MiniMapNodeProps } from './types';
import React from 'react';

declare const window: any;

const selector = (s: ReactFlowState) => s.nodeOrigin;
const selectorNodeIds = (s: ReactFlowState) => s.nodes.map((node) => node.id);
const getAttrFunction = <NodeType extends Node>(func: any): GetMiniMapNodeAttribute<NodeType> =>
  func instanceof Function ? func : () => func;

function MiniMapNodes<NodeType extends Node>({
  nodeStrokeColor,
  nodeColor,
  nodeClassName = '',
  nodeBorderRadius = 5,
  nodeStrokeWidth,
  // We need to rename the prop to be `CapitalCase` so that JSX will render it as
  // a component properly.
  nodeComponent: NodeComponent = MiniMapNode,
  onClick,
}: MiniMapNodesProps<NodeType>) {
  const nodeIds = useStore(selectorNodeIds, shallow);
  const nodeOrigin = useStore(selector);
  const nodeColorFunc = getAttrFunction<NodeType>(nodeColor);
  const nodeStrokeColorFunc = getAttrFunction<NodeType>(nodeStrokeColor);
  const nodeClassNameFunc = getAttrFunction<NodeType>(nodeClassName);

  const shapeRendering = typeof window === 'undefined' || !!window.chrome ? 'crispEdges' : 'geometricPrecision';

  return (
    <Fragment>
      {nodeIds.map((nodeId) => (
        // The split of responsibilities between MiniMapNodes and
        // NodeComponentWrapper may appear weird. However, it’s designed to
        // minimize the cost of updates when individual nodes change.
        //
        // For more details, see a similar commit in `NodeRenderer/index.tsx`.
        <NodeComponentWrapper<NodeType>
          key={nodeId}
          id={nodeId}
          nodeOrigin={nodeOrigin}
          nodeColorFunc={nodeColorFunc}
          nodeStrokeColorFunc={nodeStrokeColorFunc}
          nodeClassNameFunc={nodeClassNameFunc}
          nodeBorderRadius={nodeBorderRadius}
          nodeStrokeWidth={nodeStrokeWidth}
          NodeComponent={NodeComponent}
          onClick={onClick}
          shapeRendering={shapeRendering}
        />
      ))}
    </Fragment>
  );
}

function NodeComponentWrapperInner<NodeType extends Node>({
  id,
  nodeOrigin,
  nodeColorFunc,
  nodeStrokeColorFunc,
  nodeClassNameFunc,
  nodeBorderRadius,
  nodeStrokeWidth,
  shapeRendering,
  NodeComponent,
  onClick,
}: {
  id: string;
  nodeOrigin: NodeOrigin;
  nodeColorFunc: GetMiniMapNodeAttribute<NodeType>;
  nodeStrokeColorFunc: GetMiniMapNodeAttribute<NodeType>;
  nodeClassNameFunc: GetMiniMapNodeAttribute<NodeType>;
  nodeBorderRadius: number;
  nodeStrokeWidth?: number;
  NodeComponent: ComponentType<MiniMapNodeProps>;
  onClick: MiniMapNodesProps['onClick'];
  shapeRendering: string;
}) {
  const { node, x, y } = useStore((s) => {
    const node: any = s.nodeLookup.get(id) as NodeType;
    const { x, y } = getNodePositionWithOrigin(node, node?.origin || nodeOrigin).positionAbsolute;

    return {
      node,
      x,
      y,
    };
  }, shallow);

  if (!node || node.hidden || !nodeHasDimensions(node)) {
    return null;
  }

  const { width, height } = getNodeDimensions(node);

  return (
    <NodeComponent
      x={x}
      y={y}
      width={width}
      height={height}
      style={node.style}
      selected={!!node.selected}
      className={nodeClassNameFunc(node)}
      color={nodeColorFunc(node)}
      borderRadius={nodeBorderRadius}
      strokeColor={nodeStrokeColorFunc(node)}
      strokeWidth={nodeStrokeWidth}
      shapeRendering={shapeRendering}
      onClick={onClick}
      id={node.id}
    />
  );
}

const NodeComponentWrapper = memo(NodeComponentWrapperInner) as typeof NodeComponentWrapperInner;

export default memo(MiniMapNodes) as typeof MiniMapNodes;
