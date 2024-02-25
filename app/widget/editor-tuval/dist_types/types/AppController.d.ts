import { UIController, UIView } from "@tuval/forms";
import React from "react";
import { ParagraphElement } from '@yoopta/paragraph';
import { BlockquoteElement } from '@yoopta/blockquote';
import { CodeElement } from '@yoopta/code';
import { EmbedElement } from '@yoopta/embed';
import { ImageElement } from '@yoopta/image';
import { LinkElement } from '@yoopta/link';
import { CalloutElement } from '@yoopta/callout';
import { VideoElement } from '@yoopta/video';
import { HeadingOneElement, HeadingThreeElement, HeadingTwoElement } from '@yoopta/headings';
export type YooptaValue = ParagraphElement | BlockquoteElement | CodeElement | EmbedElement | ImageElement | LinkElement | CalloutElement | VideoElement | HeadingOneElement | HeadingTwoElement | HeadingThreeElement;
export declare function Editor(): React.JSX.Element;
export declare class EditorController extends UIController {
    LoadView(): UIView;
}
