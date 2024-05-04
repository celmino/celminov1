import { Editor as CoreEditor } from '@tiptap/core';
import React from 'react';
export type TableOfContentsProps = {
    editor: CoreEditor;
    onItemClick?: () => void;
};
export declare const TableOfContents: React.MemoExoticComponent<({ editor, onItemClick }: TableOfContentsProps) => React.JSX.Element>;
