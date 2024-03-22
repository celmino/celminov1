import React, { useEffect, useRef, Fragment } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Table from '@editorjs/table';
import NestedList from '@editorjs/nested-list';
import ToggleBlock from 'editorjs-toggle-block';

const DEFAULT_INITIAL_DATA = {
    "time": new Date().getTime(),
    "blocks": [
        {
            "type": "header",
            "data": {
                "text": "This is my awesome editor!",
                "level": 1
            }
        },
    ]
}

const EditorComponent = ({ defaultValue, onChange }) => {
    const ejInstance: any = useRef();

    const initEditor = () => {

        const editor = new EditorJS({
            holder: 'editorjs',
            onReady: () => {
                ejInstance.current = editor;

            },
            autofocus: true,
            data: defaultValue ?? DEFAULT_INITIAL_DATA,
            onChange: async () => {
                editor.saver.save().then((outputData) => {
                    onChange(outputData);
                })
            },
            tools: {
                header: Header,
                list: {
                    class: NestedList,
                    inlineToolbar: true,
                    config: {
                        defaultStyle: 'unordered'
                    }
                },
                
                table: {
                    class: Table,
                    inlineToolbar: true,
                    config: {
                        rows: 2,
                        cols: 3,
                    },
                },
                toggle: {
                    class: ToggleBlock,
                    inlineToolbar: true,
                  },
            },
        });
    };

    // This will run only once
    useEffect(() => {

        if (ejInstance.current == null) {
            initEditor();
        }

        return () => {
            ejInstance?.current?.destroy();
            ejInstance.current = null;
        };
    }, []);

    return <Fragment><div id='editorjs' style={{ width: '100%' }} ></div></Fragment>;
}

export default EditorComponent;