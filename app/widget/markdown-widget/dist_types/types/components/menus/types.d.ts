import React from 'react';
import { Editor as CoreEditor } from '@tiptap/core';
import { Editor } from '@tiptap/react';
import { EditorState } from '@tiptap/pm/state';
export interface MenuProps {
    editor: Editor;
    appendTo?: React.RefObject<any>;
    shouldHide?: boolean;
}
export interface ShouldShowProps {
    editor?: CoreEditor;
    view: any;
    state?: EditorState;
    oldState?: EditorState;
    from?: number;
    to?: number;
}
