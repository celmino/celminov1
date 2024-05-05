import { createReactInlineContentSpec } from "@blocknote/react";
import { useAppletNavigate } from "@celmino/ui";
import { ReactView, UIViewBuilder, urlFriendly, useNavigate } from "@tuval/forms";
import React from "react";

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
                return (
                    ReactView(
                        <span style={{cursor:'pointer'}} onClick={()=> navigate(`/@realm/${urlFriendly(props.inlineContent.props.user.name)}-[${props.inlineContent.props.user.$id}]`)}>
                            <b>
                                {`Task list → ${props.inlineContent.props.user.name}`}
                            </b>
                        </span>
                    )
                )
            }).render()

        ),
    }
);
