import { EventBus, is } from "@tuval/core"
import { Fragment, HStack, Text, UIViewBuilder, cLeading, useOptions, useState, InputNumber } from "@tuval/forms"
import { TextField } from '@realmocean/vibe'

export const NumberFieldRenderer = (item, fields, field) => {
    return (
        HStack(
            UIViewBuilder(() => {
                const { onItemChanged } = useOptions();
                const [isEdit, setIsEdit] = useState(false);
                const [value, setValue] = useState(item[field.key]);
                return (
                    HStack({ alignment: cLeading })(
                        isEdit ?
                            HStack(
                                InputNumber()
                                    .value(value)
                                    .background('transparent')
                                    .border('none')
                                    .outline('none')
                                    .onChange((e) => setValue(e))
                                    .onBlur((e) => {
                                        onItemChanged(item.$id, {
                                            [field.key]: e.target.value
                                        });

                                        item[field.key] = e.target.value;
                                        EventBus.Default.fire('tasks.updated', { task: item })
                                    })
                            )
                                .cornerRadius(6)
                                .border('1px solid #5F55EE')
                            :
                            Text(is.nullOrEmpty(item[field.key]) ? '-' : item[field.key]).fontSize(14)
                    )
                        .onClick(() => {
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
                        })
                )
            })
        )

    )
}