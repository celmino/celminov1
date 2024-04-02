import { Editor } from '@tiptap/react';
type Node = any;
declare const useContentItemActions: (editor: Editor, currentNode: Node | null, currentNodePos: number) => {
    resetTextFormatting: () => void;
    duplicateNode: () => void;
    copyNodeToClipboard: () => void;
    deleteNode: () => void;
    handleAdd: () => void;
};
export default useContentItemActions;
