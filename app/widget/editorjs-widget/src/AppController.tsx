import {
  HStack,
  ReactView,
  ScrollView,
  Text,
  UIController, UIView,
  cHorizontal,
  cTop,
  cTopLeading,
  cVertical,
  useMemo,
  useOptions,
  useState
} from '@tuval/forms';

import { LinkTool } from './tools/link'
import { SimpleImage } from './tools/SimplePlugin';

import EditorJS from '@editorjs/editorjs';
import EditorComponent from './EditorComponent';
import React from 'react';
import { Note } from './Tiptap';
import { BlockEditor } from './components/BlockEditor';
import * as Y from 'yjs'
import { TiptapCollabProvider } from '@hocuspocus/provider';



export class EditorJsController extends UIController {
  public override LoadView(): UIView {
    const ydoc = useMemo(() => new Y.Doc(), []);
    const [provider, setProvider] = useState<TiptapCollabProvider | null>(null)
    const { onChange = void 0, defaultValue = null, tools, scrollable = true, clamp = false } = this.props.config || {};
    return (
      ScrollView({ axes: cVertical, alignment: cTopLeading })(
        HStack({ alignment: cTopLeading })(
          ReactView(
            <div style={{width:'100%', fontSize:'1.4rem'}}>
           <BlockEditor aiToken='' hasCollab={false} ydoc={ydoc} provider={provider} />
          </div>
          )
        )
        .fontSize('14px')
          .height()
          //.width('calc(100% - 40px)')
          // .border({ default: 'solid 1px #E2E2E2' }).tabIndex(0).cornerRadius(5)
          .padding()
          .padding(cHorizontal, 60)
        //  .paddingLeft(clamp ? 'clamp(84px,50%,calc(50% - 360px))' : '60px')
         // .paddingRight(clamp ? 'clamp(84px,50%,calc(50% - 360px))' : '60px')
      
    )
    )
  }

}

