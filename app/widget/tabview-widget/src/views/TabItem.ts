import { Fragment, HStack, Icon, Icons, MenuButton, UIViewBuilder, VDivider, cHorizontal, Text, useState, TextField, HDivider, cLeading, useProtocol, WorkProtocol, SvgIcon, confirmDialog, UIImage, useNavigate, getAppFullName, useParams, str2rgb, hex2rgb, cTrailing } from "@tuval/forms";

import { DynoDialog } from "../DynoDialog";
import { PowerUps } from "../PowerUps";
import { Models } from "@realmocean/sdk";


export function TabItem(objectView: any, menu, index, selectedIndex, selectedColor, onClick) {
    return (
        UIViewBuilder(() => {

            const navigate = useNavigate();
            const [mode, setMode] = useState('readonly');
            const [name, setName] = useState(null);
            const [newName, setNewName] = useState(null);
            const selectedColorRGB = hex2rgb(selectedColor);
            console.log(`rgba(${selectedColorRGB?.r},${selectedColorRGB?.g},${selectedColorRGB?.b},0.1)`)

            return (
                HStack(
                    index === 0 ? VDivider().width(1).height('60%').background('#E8EAED') : Fragment(),
                    HStack({ spacing: 5 })(
                        HStack({ alignment: cLeading, spacing: 5 })(
                            HStack({ alignment: cLeading, spacing: 5 })(

                                HStack(
                                    Text((name || objectView?.name || ' ')[0])
                                        .fontFamily('ui-sans-serif,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol')
                                        .foregroundColor('white')
                                        .fontSize(11)
                                        .textTransform('uppercase')
                                ).allWidth(16).allHeight(16)
                                    .cornerRadius(4)
                                    .background(selectedColor)
                                    .opacity(selectedIndex === index ? '.95' : '.25'),
                                //HStack().allWidth(18).allHeight(18),
                                Text(name || objectView?.name).whiteSpace('nowrap')
                                    // .fontFamily('source sans pro semibold')
                                    .fontWeight(selectedIndex === index ? '600' : '500')
                                    .fontSize(14)
                                    .opacity(mode === 'readonly' ? '1' : '0')
                                    .foregroundColor('var(--text-color)'),
                                selectedIndex === index ?
                                    HStack({ alignment: cTrailing })(
                                        MenuButton()
                                            .model(menu)
                                            .icon(Icons.Menu)
                                    )
                                        .width() : Fragment()

                            )
                                .allHeight(30)
                                .padding(10)
                                .cornerRadius(5)
                                .background({
                                    default: selectedIndex === index ?
                                        `rgba(${selectedColorRGB?.r},${selectedColorRGB?.g},${selectedColorRGB?.b},0.15)` : '', hover: `rgba(${selectedColorRGB?.r},${selectedColorRGB?.g},${selectedColorRGB?.b},0.25)`
                                }),

                        )

                            .onClick(() => onClick())
                    )


                        .variable('--showMenu', { hover: 'block', default: 'none' }),
                    VDivider().width(1).height('60%').background('#E8EAED'),

                    /* HDivider().position('absolute')
                        .width('100%')
                        .height(3)
                        .bottom('0px')
                        .cornerRadius('3px 3px 0 0')
                        .background(selectedColor)
                        .transition('opacity .1s cubic-bezier(.785,.135,.15,.86) 0s')
                        .opacity(selectedIndex === index ? '1' : '0'), */


                )
                    .allHeight(50)
                    .cursor('pointer')
                    .variable('--show-bar', { hover: '1', default: '0' })
                    .variable('--text-color', { default: selectedIndex === index ? 'rgb(33, 37, 38)' : 'rgb(33, 37, 38)', hover: 'rgb(33, 37, 38)' })

            )

        })
    )
}