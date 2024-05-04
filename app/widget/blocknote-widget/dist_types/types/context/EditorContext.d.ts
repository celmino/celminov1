/// <reference types="react" />
interface IEditorContext {
    isAiLoading: boolean;
    aiError?: string | null;
    setIsAiLoading: Function;
    setAiError: Function;
}
export declare const EditorContext: import("react").Context<IEditorContext>;
export {};
