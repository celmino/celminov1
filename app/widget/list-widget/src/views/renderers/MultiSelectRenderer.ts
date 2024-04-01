import { EventBus, TMath, is } from "@tuval/core"
import { DialogPosition, ForEach, Fragment, HStack, PopupButton, Text, UIViewBuilder, VStack, cLeading, cTopLeading, useOptions, useState } from "@tuval/forms"
import { TextField } from '@realmocean/vibe'

export const MultiSelectRenderer = (item, fields, field) => {

    return (
        HStack({ alignment: cLeading })(
            UIViewBuilder(() => {

                const { onItemChanged } = useOptions();

                //const { updateDocument } = useUpdateDocument(workspaceId);

                const [isEdit, setIsEdit] = useState(null);
                const [value, setValue] = useState(item[field.key]?.split(','));

                if (is.string(field.fieldInfo)) {
                    field.fieldInfo = JSON.parse(field.fieldInfo) ?? {};
                    field.fieldInfo.options = field.fieldInfo.options?.map((option) => {
                        return {
                            label: option.key,
                            value: option.value
                        }
                    })
                }





                let _hideHandle = null;

                const values: string[] = item[field.key]?.split(',') ?? [];
debugger;
               


                return (

                    HStack({ alignment: cLeading })(
                        HStack({ alignment: cLeading })(
                            PopupButton(
                                values.length === 0 ? Text(values.length.toString()): 
                                HStack({ alignment: cLeading, spacing: 5 })(
                                    ...ForEach(values)(value => {
                                        const label = field.fieldInfo.options?.find((option) => option.value === value)?.label;
                                        return (
                                            HStack(
                                                Text(label)
                                            )
                                                .cornerRadius(4)
                                                .padding(5)
                                                .border({ default: 'solid 1px #E9EBED', hover: 'solid 1px #D7DCDF' })
                                                .width()
                                        )
                                    })
                                )
                                    .cursor('pointer')
                                    .cornerRadius(6)
                                    //.padding()
                                    //.border('1px solid #E8EAED')
                                    .height(30)

                            )(
                                VStack({ alignment: cTopLeading, spacing: 5 })(
                                    HStack({ alignment: cLeading, spacing: 5 })(
                                        ...ForEach(values)(value => {
                                            const label = field.fieldInfo.options?.find((option) => option.value === value)?.label;
                                            return (
                                                HStack(
                                                    HStack(
                                                        Text(label)
                                                    )
                                                        .cornerRadius(4)
                                                        .padding(5)
                                                        .border({ default: 'solid 1px #E9EBED', hover: 'solid 1px #D7DCDF' })
                                                        .width(),
                                                    HStack(
                                                        Text('x')
                                                    )
                                                        .width(16).height(16)
                                                        .onClick(() => {
                                                            const index = values.indexOf(value);
                                                            if (index > -1) {
                                                                values.splice(index, 1);
                                                                onItemChanged(item.$id, {
                                                                    [field.key]: values.length === 0 ? '' : values.join(',')
                                                                });

                                                                item[field.key] = values.length === 0 ? '' : values.join(',');
                                                                EventBus.Default.fire('tasks.updated', { task: item })

                                                            }
                                                        })
                                                )
                                            )
                                        })
                                    )
                                        .cursor('pointer')
                                        .cornerRadius(6)
                                        //.padding()
                                        //.border('1px solid #E8EAED')
                                        .height(30),
                                    HStack(
                                        Text('SELECT AN OPTION')
                                    )
                                        .height(30)
                                        .padding('0 12px'),
                                    HStack(
                                        TextField()
                                            .fontSize(10)
                                            .background('transparent')
                                            .border('none')
                                            .placeHolder('Type to search or add..')
                                    )
                                        .background('#f9f9f9')
                                        .height(30)
                                        .padding('0 12px'),
                                    ...ForEach([...field.fieldInfo.options].filter(option => values.findIndex(value => value === option.value) === -1))((option: any) =>
                                        HStack(
                                            HStack({ alignment: cLeading })(
                                                Text(option.label)
                                            )
                                                .cursor('pointer')
                                                .cornerRadius(6)
                                                .padding()
                                                .border('1px solid #e0e0e0')
                                                .height(30)
                                                .onClick(() => {
                                                    if (option.value !== option[field.key]) {
                                                        values.push(option.value);
                                                        onItemChanged(item.$id, {
                                                            [field.key]: values.join(',')
                                                        });

                                                        item[field.key] = values.join(',');
                                                        EventBus.Default.fire('tasks.updated', { task: item })
                                                        _hideHandle();

                                                    } else {
                                                        _hideHandle();
                                                        setIsEdit(false);
                                                    }
                                                })
                                        )
                                            .height()
                                            .padding('2px 10px')
                                            .background({ hover: '#f9f9f9' })
                                            .transition('all .2s cubic-bezier(.785,.135,.15,.86) 0s')
                                    )

                                ).width(200)
                                    .minHeight(100)
                                    .height(70 + field.fieldInfo.options.length * 40)
                                    .maxHeight(400)
                                //.padding()
                            )
                                .hideHandle(hideHandle => _hideHandle = hideHandle)
                                .dialogPosition(DialogPosition.BOTTOM_START)
                        )



                    )
                        .cornerRadius(6)
                        .border(isEdit ? '2px solid #e0e0e0' : '')
                        .height(38)

                )
            })
        )
    )
}

