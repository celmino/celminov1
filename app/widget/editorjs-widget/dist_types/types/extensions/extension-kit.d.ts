import { HocuspocusProvider } from '@hocuspocus/provider';
export declare class API {
    static uploadImage: () => Promise<string>;
}
interface ExtensionKitProps {
    provider?: HocuspocusProvider | null;
    userId?: string;
    userName?: string;
    userColor?: string;
}
export declare const ExtensionKit: ({ provider, userId, userName }: ExtensionKitProps) => (import("@tiptap/core").Node<any, any> | import("@tiptap/core").Extension<any, any> | import("@tiptap/core").Mark<import("@tiptap/extension-subscript").SubscriptExtensionOptions, any>)[];
export default ExtensionKit;
