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
  useOptions
} from '@tuval/forms';

import { Editor } from '@realmocean/editor';
import { LinkTool } from './tools/link'
import { SimpleImage } from './tools/SimplePlugin';

import EditorJS from '@editorjs/editorjs';
import EditorComponent from './EditorComponent';
import React from 'react';


export class EditorJsController extends UIController {
  public override LoadView(): UIView {
    const { onChange = void 0, defaultValue = null, tools, scrollable = true, clamp = false } = this.props.config || {};
    return (
      ScrollView({ axes: cVertical, alignment: cTopLeading })(
        HStack({ alignment: cTopLeading })(
          ReactView(
            <EditorComponent defaultValue={defaultValue} onChange={onChange}></EditorComponent>
          )
        )
          .height()
          //.width('calc(100% - 40px)')
          // .border({ default: 'solid 1px #E2E2E2' }).tabIndex(0).cornerRadius(5)
          .padding()
          .padding(cHorizontal, 60)
          .paddingLeft(clamp ? 'clamp(84px,50%,calc(50% - 360px))' : '60px')
          .paddingRight(clamp ? 'clamp(84px,50%,calc(50% - 360px))' : '60px')


      
    )
    )
  }

}

