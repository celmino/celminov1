import {
  HStack,
  OptionsContext,
  ReactView,
  ScrollView,
  UIController, UIView,
  UIWidget,
  cTop,
  cTopLeading,
  cVertical,
  useDialogStack,
  useMemo,
  useState
} from '@tuval/forms';

import React from 'react';

import { BlockNoteEditor, BlockNoteSchema, defaultBlockSpecs, defaultInlineContentSpecs, filterSuggestionItems, insertOrUpdateBlock } from '@blocknote/core';
import { Alert, getCustomSlashMenuItems } from "./extensions/Alert";
import { RiAlertFill } from "react-icons/ri";

import {
  BlockNoteView,
  FormattingToolbar,
  FormattingToolbarController,
  useCreateBlockNote,
  //blockTypeSelectItems,
  //BlockTypeSelectItem,
  SuggestionMenuController,
  getDefaultReactSlashMenuItems,
  DefaultReactSuggestionItem,
} from "@blocknote/react";
import { Mention, TaskList } from './extensions/Mention';
import { SelectTasklistDialog } from './dialogs/SelectTasklistDialog';
import { HiOutlineGlobeAlt } from 'react-icons/hi';

let filterTimeout;

const schema = BlockNoteSchema.create({
  blockSpecs: {
    // Adds all default blocks.
    ...defaultBlockSpecs,
    // Adds the Alert block.
    alert: Alert,
  },
  inlineContentSpecs: {
    // Adds all default inline content.
    ...defaultInlineContentSpecs,
    // Adds the mention tag.
    mention: Mention,
    tasklist: TaskList,
  },
});


// Function which gets all users for the mentions menu.
const getMentionMenuItems = (
  editor: typeof schema.BlockNoteEditor
): DefaultReactSuggestionItem[] => {
  const users = ["Steve", "Bob", "Joe", "Mike"];

  return users.map((user) => ({
    title: user,
    onItemClick: () => {
      editor.insertInlineContent([
        {
          type: "mention",
          props: {
            user,
          },
        },
        " ", // add a space after the mention
      ]);
    },
  }));
};

const getTaskListMenuItems = (
  editor: typeof schema.BlockNoteEditor, applets
): DefaultReactSuggestionItem[] => {


  return applets.map((applet) => ({
    key: applet.$id,
    id: applet.$id,
    title: applet.name,
    aliases: ["helloworld", "hw"],
    group: "Other",
    icon: UIWidget("com.tuvalsoft.widget.icons")
      .config({
        selectedIcon: applet?.iconName,
        color: applet?.bg_color,
        selectedCategory: applet?.iconCategory,
        width: 24,
        height: 24
      }).render(),
    subtext: "Used to insert a block with 'Hello World' below.",
    onItemClick: () => {
      editor.insertInlineContent([
        {
          type: "tasklist",
          props: {
             applet,
          },
        },
        " ", // add a space after the mention
      ]);
    },
  }));
};

// Slash menu item to insert an Alert block
const insertTaskList = (editor: typeof schema.BlockNoteEditor, applets) => ({
  title: "Task List",
  onItemClick: () => {
    SelectTasklistDialog.Show(applets).then((applet) => {
      alert(JSON.stringify(applet))
      editor.insertInlineContent([
        {
          type: "tasklist",
          props: {
            applet,
          },
        },
        " ", // add a space after the mention
      ]);
    })
  },
  aliases: [
    "alert",
    "notification",
    "emphasize",
    "warning",
    "error",
    "info",
    "success",
  ],
  group: "Other",
  icon: <RiAlertFill />,
});


// Slash menu item to insert an Alert block
const insertAlert = (editor: typeof schema.BlockNoteEditor) => ({
  title: "Alert",
  onItemClick: () => {
    insertOrUpdateBlock(editor, {
      type: "alert",
    });
  },
  aliases: [
    "alert",
    "notification",
    "emphasize",
    "warning",
    "error",
    "info",
    "success",
  ],
  group: "Other",
  icon: <RiAlertFill />,
});



export class EditorJsController extends UIController {
  public override LoadView(): UIView {


    const { onChange = void 0, defaultValue = null, tools, scrollable = true, clamp = false, applets } = this.props.config || {};

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
              <BlockNoteView editor={editor} formattingToolbar={true} slashMenu={false} editable={true}
                onChange={() => {
                  clearTimeout(filterTimeout)
                  filterTimeout = setTimeout(() => {
                    onChange(editor.document);
                  }, 5000)

                }}
              >
                <SuggestionMenuController
                  triggerCharacter={"/"}
                  getItems={async (query) =>
                    // Gets all default slash menu items and `insertAlert` item.
                    filterSuggestionItems(
                      [...getDefaultReactSlashMenuItems(editor), insertAlert(editor),
                      insertTaskList(editor, applets)
                      ],
                      query
                    )
                  }
                />
                <SuggestionMenuController
                  triggerCharacter={"@"}
                  getItems={async (query) => {
                    return filterSuggestionItems([...getMentionMenuItems(editor)], query)
                  }
                  }
                />
                <SuggestionMenuController
                  triggerCharacter={"#"}
                  getItems={async (query) => {
                    return filterSuggestionItems([...getTaskListMenuItems(editor, applets)], query)
                  }
                  }
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

