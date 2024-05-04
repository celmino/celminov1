import { WebSocketStatus } from '@hocuspocus/provider';
import { EditorUser } from '../types';
import React from 'react';
export type EditorInfoProps = {
    characters: number;
    words: number;
    collabState: WebSocketStatus;
    users: EditorUser[];
};
export declare const EditorInfo: React.MemoExoticComponent<({ characters, collabState, users, words }: EditorInfoProps) => React.JSX.Element>;
