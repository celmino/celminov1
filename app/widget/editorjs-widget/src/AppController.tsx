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


import { TiptapCollabProvider } from '@hocuspocus/provider';
import React from 'react';
import * as Y from 'yjs';
import { BlockEditor } from './components/BlockEditor';



export class EditorJsController extends UIController {
  public override LoadView(): UIView {
    const ydoc = useMemo(() => new Y.Doc(), []);
    const [provider, setProvider] = useState<TiptapCollabProvider | null>(null)
    const { onChange = void 0, defaultValue = null, tools, scrollable = true, clamp = false } = this.props.config || {};
    return (
      OptionsContext(() =>
        ScrollView({ axes: cVertical, alignment: cTopLeading })(
          HStack({ alignment: cTopLeading })(
            ReactView(
              <div style={{ width: '100%', fontSize: '1.4rem' }}>
                <BlockEditor aiToken='' hasCollab={false} ydoc={ydoc} provider={provider} />
              </div>
            )
          )
            .fontSize('14px')
            .height()
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

