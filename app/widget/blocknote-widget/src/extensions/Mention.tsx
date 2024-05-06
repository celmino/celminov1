import { createReactInlineContentSpec } from "@blocknote/react";
import { useAppletNavigate, useRealm } from "@celmino/ui";
import { HStack, PopupButton, ReactView, Text, UIViewBuilder, UIWidget, VStack, cHorizontal, urlFriendly, useDialogStack, useNavigate, useState } from "@tuval/forms";
import React from "react";
import { Menu } from "@mantine/core";
import { MdMenu } from "react-icons/md";
import { AppletInfos } from "./AppletInfos";


export const Mention = createReactInlineContentSpec(
    {
        type: "mention",
        propSchema: {
            user: {
                default: "Unknown",
            },
        },
        content: "none",
    },
    {
        render: (props) => (
            <span style={{ backgroundColor: "#8400ff33" }}>
                @{props.inlineContent.props.user}
            </span>
        ),
    }
);


export const TaskList = createReactInlineContentSpec(
    {
        type: "tasklist",
        propSchema: {
            applet: {
                default: "Unknown",
            },
        },
        content: "none",
    },
    {
        render: (props: any) => (
            UIViewBuilder(() => {
                const navigate = useNavigate();
                const { openDialog } = useDialogStack();
                const { realm } = useRealm();
                const [open, setOpen] = useState(false);

                return (

                    VStack({spacing:5})(
                        UIWidget("com.tuvalsoft.widget.icons")
                            .config({
                                readonly: true,
                                selectedIcon: props.inlineContent.props.applet?.iconName,
                                color: props.inlineContent.props.applet?.bg_color,
                                selectedCategory: props.inlineContent.props.applet?.iconCategory,
                                width: 24,
                                height: 24
                            }),
                        VStack(
                            Text(`${AppletInfos[props.inlineContent.props.applet?.type]?.name} → ${props.inlineContent.props.applet?.name}`)
                        )
                            .width().height()
                            .borderBottom('1px solid rgba(33,37,38,.3)')

                        ,
                    )
                        // .background('yellow')
                        .cursor('pointer')
                        .padding(cHorizontal, 2)

                        .fontSize(16)
                        .fontWeight('600')
                        .width().height()
                        .display('-webkit-inline-box')
                        .top('3px')


                )


            }).render()

        ),
    }
);
