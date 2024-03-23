import { Node } from '@tiptap/core';
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        tableOfContentsNode: {
            insertTableOfContents: () => ReturnType;
        };
    }
}
export declare const TableOfContentsNode: Node<any, any>;
