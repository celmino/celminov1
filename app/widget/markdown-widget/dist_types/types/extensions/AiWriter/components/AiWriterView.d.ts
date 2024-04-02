import { NodeViewWrapperProps } from '@tiptap/react';
import { AiTone } from '../../../components/BlockEditor/types';
import React from 'react';
export interface DataProps {
    text: string;
    addHeading: boolean;
    tone?: AiTone;
    textUnit?: string;
    textLength?: string;
    language?: string;
}
export declare const AiWriterView: ({ editor, node, getPos, deleteNode }: NodeViewWrapperProps) => React.JSX.Element;
