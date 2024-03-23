import { Node } from '@tiptap/core';
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        aiWriter: {
            setAiWriter: () => ReturnType;
        };
    }
}
export declare const AiWriter: Node<any, any>;
export default AiWriter;
