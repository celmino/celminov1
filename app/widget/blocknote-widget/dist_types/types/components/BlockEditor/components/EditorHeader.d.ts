import { EditorUser } from '../types';
import { WebSocketStatus } from '@hocuspocus/provider';
import React from 'react';
export type EditorHeaderProps = {
    isSidebarOpen?: boolean;
    toggleSidebar?: () => void;
    characters: number;
    words: number;
    collabState: WebSocketStatus;
    users: EditorUser[];
};
export declare const EditorHeader: ({ characters, collabState, users, words, isSidebarOpen, toggleSidebar, }: EditorHeaderProps) => React.JSX.Element;
