import { Node } from '@tiptap/react';
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        imageUpload: {
            setImageUpload: () => ReturnType;
        };
    }
}
export declare const ImageUpload: Node<any, any>;
export default ImageUpload;
