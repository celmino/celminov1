import { HStack, Icon, ReactView, Text, VStack, css } from "@tuval/forms";
import React, { Fragment } from "react";
import { Handle, Position } from "reactflow";
import SvgEvernoteIcon from "../../../icons/Evernote/EvernoteIcon";


const handleLClassName = css`
& {
  width:0px;
  height:0px;
  background:yellow;
  border:none;
  left: -5;
}
`


const handleRClassName = css`
& {
  width:0px;
  height:0px;
  background:yellow;
  border:none;
  left: 60;
}
`
//custome node
function TextNode({ data, selected }) {
  return (
    VStack(
      ReactView(
        <SvgEvernoteIcon fill={"white"} width={'40px'} height={'40px'}></SvgEvernoteIcon>
      ),
      <Fragment>
        <Handle
          id="a"
          type="target"
          position={Position.Left}
          className={handleLClassName}
        />
        <Handle
          id="b"
          type="source"
          position={Position.Right}

          className={handleRClassName}
        />
      </Fragment>,
      HStack(
        Text(data.label)
        .whiteSpace('nowrap')
      )
      .top('60px')
      .width().height()
      .position('absolute')
    )
      .background('#C73A63')
      .allWidth(64)
      .allHeight(64)
      .cornerRadius('50%')
      .border('solid 3px white')
      .render()



  );
}

export default TextNode;