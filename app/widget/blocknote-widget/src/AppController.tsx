import {
  HStack,
  OptionsContext,
  ReactView,
  ScrollView,
  UIController, UIView,
  cTopLeading,
  cVertical,
  useMemo,
  useState
} from '@tuval/forms';

import React from 'react';
import { BlockNoteView, useCreateBlockNote } from "@blocknote/react";
import { BlockNoteEditor, PartialBlock } from '@blocknote/core';

let filterTimeout;

export class EditorJsController extends UIController {
  public override LoadView(): UIView {

    const { onChange = void 0, defaultValue = null, tools, scrollable = true, clamp = false } = this.props.config || {};
    const editor = useCreateBlockNote({
      initialContent: defaultValue
    });

    /*   const editor = useMemo(() => {
        return BlockNoteEditor.create({ initialContent: defaultValue });
      }, [defaultValue]); */

    return (
      OptionsContext(() =>
        ScrollView({ axes: cVertical, alignment: cTopLeading })(
          HStack({ alignment: cTopLeading })(
            ReactView(
              <BlockNoteView editor={editor}
                onChange={() => {
                  clearTimeout(filterTimeout)
                  filterTimeout = setTimeout(() => {
                    onChange(editor.document);
                  }, 5000)

                }}
              />
            )
          )
        )

        //.width('calc(100% - 40px)')
        // .border({ default: 'solid 1px #E2E2E2' }).tabIndex(0).cornerRadius(5)
        // .padding()
        //    .padding(cHorizontal, 60)
        //  .paddingLeft(clamp ? 'clamp(84px,50%,calc(50% - 360px))' : '60px')
        // .paddingRight(clamp ? 'clamp(84px,50%,calc(50% - 360px))' : '60px')

      ).options(this.props.config || {})
    )
  }

}

