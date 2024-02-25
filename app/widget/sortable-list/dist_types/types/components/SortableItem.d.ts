import React from "react";
import type { PropsWithChildren } from "react";
import type { UniqueIdentifier } from "@dnd-kit/core";
interface Props {
    id: UniqueIdentifier;
}
export declare function SortableItem({ children, id }: PropsWithChildren<Props>): React.JSX.Element;
export declare function DragHandle(): React.JSX.Element;
export {};
