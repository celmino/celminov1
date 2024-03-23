import { Editor } from '@tiptap/react';
import { TiptapCollabProvider, WebSocketStatus } from '@hocuspocus/provider';
import * as Y from 'yjs';
declare global {
    interface Window {
        editor: Editor | null;
    }
}
export declare const useBlockEditor: ({ aiToken, ydoc, provider, }: {
    aiToken: string;
    ydoc: Y.Doc;
    provider?: TiptapCollabProvider | null | undefined;
}) => {
    editor: Editor;
    users: any;
    characterCount: any;
    collabState: WebSocketStatus;
    leftSidebar: import("./useSidebar").SidebarState;
};
