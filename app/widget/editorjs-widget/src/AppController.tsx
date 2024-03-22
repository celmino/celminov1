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
      HStack({ alignment: cTop })(
        ReactView(
          <EditorComponent defaultValue={defaultValue} onChange={onChange}></EditorComponent>
        )
      )
    )
  }

}

