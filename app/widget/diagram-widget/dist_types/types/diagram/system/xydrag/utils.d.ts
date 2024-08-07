import { type NodeDragItem, type XYPosition, NodeBase } from '../types';
export declare function wrapSelectionDragFunc(selectionFunc?: (event: MouseEvent, nodes: NodeBase[]) => void): (event: MouseEvent, _: NodeBase, nodes: NodeBase[]) => void;
export declare function isParentSelected<NodeType extends NodeBase>(node: NodeType, nodes: NodeType[]): boolean;
export declare function hasSelector(target: Element, selector: string, domNode: Element): boolean;
export declare function getDragItems<NodeType extends NodeBase>(nodes: NodeType[], nodesDraggable: boolean, mousePos: XYPosition, nodeId?: string): NodeDragItem[];
export declare function getEventHandlerParams<NodeType extends NodeBase>({ nodeId, dragItems, nodeLookup, }: {
    nodeId?: string;
    dragItems: NodeDragItem[];
    nodeLookup: Map<string, NodeType>;
}): [NodeType, NodeType[]];
