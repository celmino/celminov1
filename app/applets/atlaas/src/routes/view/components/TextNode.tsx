import { HStack, Icon, ReactView, Text, UIImage, VStack, css } from "@tuval/forms";
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
      HStack(
        UIImage(data.service?.icon).allWidth(30).allHeight(30)
      ).width().height()
      ,
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
        Text(data.label).fontSize(12).fontWeight('500')
          .whiteSpace('nowrap')
          .foregroundColor('#33333377')
          .fontFamily('Inter, Helvetica Neue, Helvetica, Arial, sans-serif')
      )
     
        .top('70px')
        .width().height()
        .position('absolute')
        
    )

    .filter('drop-shadow(4px 10px 10px rgba(0, 0, 0, 0.3))')
      .background(data.service?.theme ?? '')
      .allWidth(64)
      .allHeight(64)
      .cornerRadius('50%')
      .border(`solid 3px ${data.service?.theme ?? 'white'}`)
      .render()



  );
}

export default TextNode;