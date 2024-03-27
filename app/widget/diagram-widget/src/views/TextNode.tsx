import { memo, useState } from "react";
import { Handle, NodeProps, Position, useReactFlow } from "../diagram/react";
import React from "react";


function TextNode({ id, data }: NodeProps) {
    const { updateNodeData } = useReactFlow();
    const [text, setText] = useState(data.text);
    const updateText = (text: string) => {
        // avoid jumping caret with a synchronous update
        setText(text);
        // update actual node data
        updateNodeData(id, { text });
    };

    return (
        <div
            style={{
                background: "#eee",
                color: "#222",
                padding: 10,
                fontSize: 12,
                borderRadius: 10,
            }}
        >
            <div>node {id}</div>
            <div>
                <input
                    onChange={(event) => updateText(event.target.value)}
                    //@ts-ignore
                    value={text} />
            </div>
            <Handle type="source" position={Position.Right} />
        </div>
    );
}

export default memo(TextNode);
