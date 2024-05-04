import {
  HStack,
  OptionsContext,
  ReactView,
  ScrollView,
  UIController, UIView,
  cTop,
  cTopLeading,
  cVertical,
  useMemo,
  useState
} from '@tuval/forms';

import React from 'react';

import { BlockNoteEditor, BlockNoteSchema, defaultBlockSpecs, filterSuggestionItems } from '@blocknote/core';
import { Alert, getCustomSlashMenuItems } from "./extensions/Alert";
import { RiAlertFill } from "react-icons/ri";

import {
  BlockNoteView,
  FormattingToolbar,
  FormattingToolbarController,
  useCreateBlockNote,
  blockTypeSelectItems,
  BlockTypeSelectItem,
  SuggestionMenuController,
} from "@blocknote/react";

let filterTimeout;

export class EditorJsController extends UIController {
  public override LoadView(): UIView {




    // Our schema with block specs, which contain the configs and implementations
    // for blocks that we want our editor to use.
    const schema = BlockNoteSchema.create({
      blockSpecs: {
        // Adds all default blocks.
        ...defaultBlockSpecs,
        // Adds the Alert block.
        alert: Alert,
      },
    });


    const { onChange = void 0, defaultValue = null, tools, scrollable = true, clamp = false } = this.props.config || {};
    const editor = useCreateBlockNote({
      schema,
      initialContent: defaultValue
    });

    /*   const editor = useMemo(() => {
        return BlockNoteEditor.create({ initialContent: defaultValue });
      }, [defaultValue]); */

    return (
      OptionsContext(() =>
        ScrollView({ axes: cVertical, alignment: cTop })(
          HStack({ alignment: cTop })(
            ReactView(
              <BlockNoteView editor={editor} formattingToolbar={false} slashMenu={false} editable={false}
                onChange={() => {
                  clearTimeout(filterTimeout)
                  filterTimeout = setTimeout(() => {
                    onChange(editor.document);
                  }, 5000)

                }}
              >
                <SuggestionMenuController
                  triggerCharacter={"/"}
                  // Replaces the default Slash Menu items with our custom ones.
                  getItems={async (query) =>
                    filterSuggestionItems(getCustomSlashMenuItems(editor as any), query)
                  }
                />
                <FormattingToolbarController
                  formattingToolbar={() => (
                    <FormattingToolbar
                      blockTypeSelectItems={[
                        ...blockTypeSelectItems,
                        {
                          name: "Alert",
                          type: "alert",
                          icon: RiAlertFill,
                          isSelected: (block) => block.type === "alert",
                        } satisfies BlockTypeSelectItem,
                      ]}
                    />
                  )}
                />
              </BlockNoteView>
            )
          )
            .maxWidth('1000px')
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

