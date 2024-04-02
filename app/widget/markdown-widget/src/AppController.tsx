import {
  HStack,
  OptionsContext,
  ReactView,
  RenderingTypes,
  ScrollView,
  Text,
  TextField,
  UIController, UIView,
  VStack,
  cTop,
  cTopLeading,
  cVertical,
  useMemo,
  useState
} from '@tuval/forms';
import MarkdownEditor from '@uiw/react-markdown-editor';


import React from 'react';



export class EditorJsController extends UIController {
  public override LoadView(): UIView {

    const { onChange = void 0, defaultValue = null, tools, scrollable = true, clamp = false } = this.props.config || {};

    const [markdown, setMarkdown] = useState(defaultValue ?? {
      content: ''
    });

    return (
      OptionsContext(() =>
        VStack(
          ScrollView({ axes: cVertical, alignment: cTop })(
            VStack({ alignment: cTopLeading })(
              Text(markdown.content).renderingType(RenderingTypes.Markdown),
              TextField().value(markdown.content).multiline(true).onChange((e) => {
                setMarkdown({
                  content: e
                });
                onChange({
                  content: e
                })
              })
              /*  ReactView(
                <div style={{ width: '100%', fontSize: '1.4rem' }}>
                  <MarkdownEditor
                    value={markdown}
                    height="200px"
                    onChange={(value, viewUpdate) => setMarkdown(value)}
                  />
                </div>
              )  */
            )
              .fontSize('14px')
              .width()
              .height()
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

