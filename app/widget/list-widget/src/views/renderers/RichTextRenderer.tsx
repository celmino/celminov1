import { EventBus, is } from "@tuval/core"
import { Fragment, HStack, Icon, SvgIcon, Text, UIViewBuilder, cLeading, useOptions, useState } from "@tuval/forms"
import { TextField } from '@realmocean/vibe'
import React from "react"

const RichTextIcon = () => (
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" aria-hidden="true">
        <g><path d="M6 4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4.286v-4.286c0-.789.64-1.428 1.428-1.428H16V12h-4v4l4-4V6a2 2 0 0 0-2-2H6Z"></path>
        </g></svg>
)
export const RichTextFieldRenderer = (item, fields, field) => {
    return (
        HStack(
            UIViewBuilder(() => {
                const { onItemChanged } = useOptions();
                const [isEdit, setIsEdit] = useState(false);
                const [value, setValue] = useState(item[field.key]);
                return (
                    HStack({ alignment: cLeading })(
                        Icon(RichTextIcon)
                    )
                    .foregroundColor('#6D7A83')


                    /* .onClick(() => {
                        setIsEdit(true)
                    })
                    .onClickAway(() => {
                        if (isEdit) {
                            onItemChanged(item.$id, {
                                [field.key]: value
                            });

                            item[field.key] = value;
                            EventBus.Default.fire('tasks.updated', { task: item })
                            setIsEdit(false);
                        }
                    }) */
                )
            })
        )

    )
}