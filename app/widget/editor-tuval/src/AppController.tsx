import { UIController, UIView, ReactView, ScrollView, cVertical, cTopLeading, HStack } from "@tuval/forms";
import React, { useState } from "react";


// TypeScript users only add this code
import { BaseEditor, Descendant, createEditor } from 'slate'
import { Editable, ReactEditor, Slate, withReact } from 'slate-react'

type CustomElement = { type: 'paragraph'; children: CustomText[] }
type CustomText = { text: string }

/* declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: CustomElement
    Text: CustomText
  }
}
 */
const initialValue = [
  {
    type: 'paragraph',
    children: [{ text: 'A line of text in a paragraph.' }],
  },
]

const App = () => {
  const [editor] = useState(() => withReact(createEditor()))
  return (
    // Add the editable component inside the context.
    <div contentEditable={false}>
      <Slate editor={editor} initialValue={initialValue as any}>
        <Editable />
      </Slate>
    </div>
  )
}

import YooptaEditor from '@yoopta/editor';


import Paragraph, { ParagraphElement } from '@yoopta/paragraph';
import Blockquote, { BlockquoteElement } from '@yoopta/blockquote';
import Code, { CodeElement } from '@yoopta/code';
import Embed, { EmbedElement } from '@yoopta/embed';
import Image, { ImageElement } from '@yoopta/image';
import Link, { LinkElement } from '@yoopta/link';
import File from '@yoopta/file';
import Callout, { CalloutElement } from '@yoopta/callout';
import Video, { VideoElement } from '@yoopta/video';
import { NumberedList, BulletedList, TodoList } from '@yoopta/lists';
import { Bold, Italic, CodeMark, Underline, Strike } from '@yoopta/marks';
import { HeadingOne, HeadingOneElement, HeadingThree, HeadingThreeElement, HeadingTwo, HeadingTwoElement } from '@yoopta/headings';

import LinkTool from '@yoopta/link-tool';
import ActionMenu, { ActionMenuItem } from '@yoopta/action-menu-list';
import Toolbar from '@yoopta/toolbar';
import { NotionActionMenu } from "./Notion/NotionActionMenu";
import { NotionToolbar } from "./Notion/NotionToolbar";

export type YooptaValue =
  | ParagraphElement
  | BlockquoteElement
  | CodeElement
  | EmbedElement
  | ImageElement
  | LinkElement
  | CalloutElement
  | VideoElement
  | HeadingOneElement
  | HeadingTwoElement
  | HeadingThreeElement;

const INITIAL_VALUE: YooptaValue[] = [
  {
    id: '_d8RWaRAWV3Z3odUaIElv',
    type: 'heading-three',
    nodeType: 'block',
    children: [
      {
        text: 'With Notion style example',
      },
    ],
  },
  {
    id: 'vPt3vfSb2X6DXauKld1q3',
    type: 'paragraph',
    nodeType: 'block',
    children: [
      {
        text: 'In this example you can see notion-style rendering of ',
      },
      {
        text: 'ActionMenuList',
        bold: true,
        underline: true,
      },
      {
        text: ' (create new block and type ',
      },
      {
        text: '"/"',
        bold: true,
      },
      {
        text: ' to open menu list) and notion-style rendering of ',
      },
      {
        text: 'Toolbar',
        bold: true,
        underline: true,
      },
    ],
  } as any,
];
const plugins = [
  Paragraph,
  Blockquote,
  Callout,
  Code,
  Link,
  NumberedList,
  BulletedList,
  TodoList,
  HeadingOne,
  HeadingTwo,
  HeadingThree,
  Embed.extend({
    options: {
      maxWidth: 650,
      maxHeight: 750,
    },
  }),
  Image.extend({
    options: {
      maxWidth: 650,
      maxHeight: 650,
      onUpload: async (file: File) => {
        // const response = await uploadToCloudinary(file, 'image');
        return { url: '', width: 1, height: 1 };
      },
    },
  }),
  Video.extend({
    options: {
      maxWidth: 650,
      maxHeight: 650,
      onUpload: async (file: File) => {
        //const response = await uploadToCloudinary(file, 'video');
        return { url: '', width: 1, height: 1 };
      },
    },
  }),
];

const actionItems: ActionMenuItem<Record<'label' | 'description' | 'icon', string>>[] = [
  {
    plugin: Paragraph,
    searchString: 'text paragraph',
    label: 'Paragraph',
    description: 'Just start writing with plain text.',
    icon: '/images/text.png',
  },
  {
    plugin: HeadingOne,
    searchString: 'h1 title',
    label: 'Heading 1',
    description: 'Big section heading.',
    icon: '/images/header.png',
  },
  {
    plugin: HeadingTwo,
    searchString: 'h2 subtitle',
    label: 'Heading 2',
    description: 'Medium section heading.',
    icon: '/images/subheader.png',
  },
  {
    plugin: HeadingThree,
    searchString: 'h3 subsubtitle small heading',
    label: 'Heading 3',
    description: 'Small section heading.',
    icon: '/images/subsubheader.png',
  },
  {
    plugin: Image,
    searchString: 'image picture',
    label: 'Image',
    description: 'Upload or embed with a link.',
    icon: '/images/image.png',
  },
  {
    plugin: Video,
    searchString: 'video media',
    label: 'Video',
    description: 'Embed from YouTube, Vimeo...',
    icon: '/images/video.png',
  },
  {
    plugin: Embed,
    searchString: 'Embed media',
    label: 'Embed',
    description: 'Embed from YouTube, Vimeo...',
    icon: '/images/video.png',
  },
  { plugin: Blockquote, label: 'Blockquote', description: 'Capture a quote', icon: '/text.png' },
  { plugin: Callout, label: 'Callout', description: 'Just start writing with plain text.', icon: '/text.png' },
  {
    plugin: Code,
    searchString: 'hello world bug',
    label: 'Code',
    description: 'Write bugs.',
    icon: '/images/text.png',
  },
  {
    plugin: BulletedList,
    label: 'BulletedList',
    description: 'Just start writing with plain text.',
    icon: '/images/text.png',
  },
  {
    plugin: NumberedList,
    label: 'NumberedList',
    description: 'Just start writing with plain text.',
    icon: '/images/text.png',
  },
  {
    plugin: TodoList,
    searchString: 'todo check list',
    label: 'TodoList',
    description: 'Just start writing with plain text.',
    icon: '/images/text.png',
  },
];

const TOOLS = {
  Toolbar: <Toolbar type="bubble" render={NotionToolbar} />,
  ActionMenu: <ActionMenu style={{minWidth:'900px'}} render={NotionActionMenu} items={actionItems} />,
};



// Your custom styles
const styles = { width: 640, margin: '0 auto', padding: '40px 10px' };

export function Editor() {
  const [value, setValue] = useState([]);
  const [editorValue, setEditorValue] = useState<any[]>(initialValue);
  // list of marks should be placed inside your component
  const marks = [Bold, Italic, CodeMark, Underline, Strike];
  return (
    <div style={{ width: '500px', marginLeft: '100px' }}>
      <YooptaEditor<any>
        value={editorValue}
        onChange={(val: YooptaValue[]) => setEditorValue(val)}
        plugins={plugins}
        marks={marks}
        placeholder="Start typing..."
        offline="withNotionExample"
        autoFocus
        tools={TOOLS}
      />
    </div>
  );
}

export class EditorController extends UIController {
  public override LoadView(): UIView {

    return (
      ScrollView({ axes: cVertical, alignment: cTopLeading })(
        HStack(
          ReactView(

            <Editor />
          )
        ).height()
      )
    )

  }

}

