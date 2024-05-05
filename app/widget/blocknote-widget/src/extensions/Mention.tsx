import { createReactInlineContentSpec } from "@blocknote/react";
import { useAppletNavigate, useRealm } from "@celmino/ui";
import { HStack, PopupButton, ReactView, Text, UIViewBuilder, VStack, urlFriendly, useDialogStack, useNavigate, useState } from "@tuval/forms";
import React from "react";
import { Menu } from "@mantine/core";

const AppletTypes = {
    'com.celmino.applet.csp': 'CSP',
    'com.celmino.applet.task-list': 'Task List',
    'com.celmino.applet.google-drive': 'Google Drive',
    'com.celmino.applet.document-management': 'Documents',
}
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
            user: {
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
                    VStack(
                        Text(`${AppletTypes[props.inlineContent.props.user.type]} → ${props.inlineContent.props.user.name}`)
                    ) 
                    .background('yellow')
                    .borderBottom('1px solid rgba(33,37,38,.3)')
                    .fontWeight('500')
                    .width().height()
                    .display('inline')
                 
                )
            }).render()

        ),
    }
);
