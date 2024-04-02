import {
  HStack,
  OptionsContext,
  ReactView,
  RenderingTypes,
  ScrollView,
  Text,
  UIController, UIView,
  VStack,
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

    const mdStr = `<p align="center">
  <a href="https://github.com/uiwjs/react-markdown-editor/actions">
    <img alt="Build & Deploy" src="https://github.com/uiwjs/react-markdown-editor/actions/workflows/ci.yml/badge.svg">
  </a>
  <a href="https://www.npmjs.com/package/@uiw/react-markdown-editor">
    <img alt="NPM Download" src="https://img.shields.io/npm/dm/@uiw/react-markdown-editor.svg?style=flat">
  </a>
  <a href="https://www.npmjs.com/package/@uiw/react-markdown-editor">
    <img alt="npm version" src="https://img.shields.io/npm/v/@uiw/react-markdown-editor.svg">
  </a>
</p>

<p align="center">
  A markdown editor with preview, implemented with React.js and TypeScript.
</p>

<!--rehype:ignore:start-->
[![React Markdown Editor](https://user-images.githubusercontent.com/1680273/191638380-55abdad5-09b8-45f2-952e-6b9879fcf4fa.png)](https://uiwjs.github.io/react-markdown-editor/)

<!--rehype:ignore:end-->


> Migrate from @uiw/react-markdown-editor [4.x to 5.x.](https://github.com/uiwjs/react-markdown-editor/releases/tag/v5.0.0)

## Install


<!--rehype:ignore:start-->

## Document

Official document [demo preview](https://uiwjs.github.io/react-markdown-editor/) ([🇨🇳中国镜像网站](http://uiw.gitee.io/react-markdown-editor/))

<!--rehype:ignore:end-->

    `;

    const [markdown, setMarkdown] = useState(mdStr);

    return (
      OptionsContext(() =>

        VStack({ alignment: cTopLeading })(
          Text(mdStr).renderingType(RenderingTypes.Markdown),
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

