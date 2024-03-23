/// <reference types="react" />
import { Editor } from '@tiptap/core';
export declare const useData: () => {
    currentNode: Node;
    currentNodePos: number;
    setCurrentNode: import("react").Dispatch<import("react").SetStateAction<Node>>;
    setCurrentNodePos: import("react").Dispatch<import("react").SetStateAction<number>>;
    handleNodeChange: (data: {
        node: Node | null;
        editor: Editor;
        pos: number;
    }) => void;
};
