import { Node } from '@tiptap/core';
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        aiImage: {
            setAiImage: () => ReturnType;
        };
    }
}
export declare const AiImage: Node<any, any>;
export default AiImage;
