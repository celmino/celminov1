import { Editor } from '@tiptap/core';
import { SuggestionKeyDownProps, SuggestionProps } from '@tiptap/suggestion';
export declare const emojiSuggestion: {
    items: ({ editor, query }: {
        editor: Editor;
        query: string;
    }) => any;
    allowSpaces: boolean;
    render: () => {
        onStart: (props: SuggestionProps<any>) => void;
        onUpdate(props: SuggestionProps<any>): void;
        onKeyDown(props: SuggestionKeyDownProps): any;
        onExit(): void;
    };
};
export default emojiSuggestion;
