import React from "react";
import type { ReactNode } from "react";
import type { UniqueIdentifier } from "@dnd-kit/core";
import { SortableItem } from "./SortableItem";
interface BaseItem {
    id: UniqueIdentifier;
}
interface Props<T extends BaseItem> {
    items: T[];
    onChange(items: T[]): void;
    renderItem(item: T): ReactNode;
}
export declare function SortableList<T extends BaseItem>({ items, onChange, renderItem }: Props<T>): React.JSX.Element;
export declare namespace SortableList {
    var Item: typeof SortableItem;
    var DragHandle: typeof import("./SortableItem").DragHandle;
}
export {};
