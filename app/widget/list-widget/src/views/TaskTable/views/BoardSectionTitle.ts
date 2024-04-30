import { Button, DialogPosition, HStack, PopupButton, Spacer, Text, TextField, UIViewBuilder, VStack, cLeading, cTopLeading, cTrailing, useOptions, useState } from "@tuval/forms";

import { ColorView } from '@celmino/ui';


export const BoardSectionTitle = (status) => {
    const { onStagePropsChanged = () => void 0 } = useOptions();
    const [isEdit, setIsEdit] = useState(false);
    return (
        HStack({ alignment: cLeading })(

            PopupButton(
                HStack({ alignment: cLeading, spacing: 5 })(
                    Text(status.name).fontSize(11).fontWeight('600')
                        .whiteSpace('nowrap')
                        .fontFamily('-apple-system, "system-ui", "Segoe UI", roboto, "Helvetica Neue", helvetica, arial, sans-serif'),
                    /*  HStack(
                         Icon(Icons.Edit),
                         Icon(Icons.Menu),
                     ).display('var(--show-rename)') */
                )

                    .height(22)
                    .cursor('pointer')
                    .padding('0 7px')
                    .cornerRadius(3)
                    .border('1px solid transparent')
                    .foregroundColor(status.fgColor || 'blue')
                    .background(status.bgColor || 'blue')
                    .width()
            )(
                UIViewBuilder(() => {
                    const [statusName, setStatusName] = useState(status.name);
                    const [color, setColor] = useState(status.bgColor);
                    return (
                        VStack({ alignment: cTopLeading, spacing: 10 })(
                            TextField()
                                .value(statusName)
                                .onChange((value) => {
                                    setStatusName(value);
                                })
                                .width('100%'),
                            Text('COLOR'),
                            ColorView().selectedColor(color)
                                .onChange((color) => {

                                    // onStatusNameChanged(status.id, { bgColor: color })
                                    setColor(color);
                                }),
                            Spacer(),
                            HStack({ alignment: cTrailing })(
                                Button(
                                    Text('Save')
                                ).onClick(() => {

                                    onStagePropsChanged(status.id, {
                                        name: statusName,
                                        color: color
                                    })
                                })
                                  
                            )  .height()
                        )
                            .width(380).height(400)
                            .padding()

                    )
                })

            )
                .dialogPosition(DialogPosition.BOTTOM_START)
        )
            .height(22).width().paddingRight('10px')
            .variable('--show-rename', { default: 'none', hover: 'flex' })
    )
}