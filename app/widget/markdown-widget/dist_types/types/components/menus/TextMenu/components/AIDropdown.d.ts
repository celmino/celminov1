import React from 'react';
export type AIDropdownProps = {
    onSimplify: () => void;
    onFixSpelling: () => void;
    onMakeShorter: () => void;
    onMakeLonger: () => void;
    onEmojify: () => void;
    onTldr: () => void;
    onTranslate: (language: string) => void;
    onTone: (tone: string) => void;
    onCompleteSentence: () => void;
};
export declare const AIDropdown: ({ onCompleteSentence, onEmojify, onFixSpelling, onMakeLonger, onMakeShorter, onSimplify, onTldr, onTone, onTranslate, }: AIDropdownProps) => React.JSX.Element;
