import { EventBus, TMath, is } from "@tuval/core"
import { DialogPosition, ForEach, Fragment, HStack, PopupButton, Text, UIViewBuilder, VStack, cLeading, cTopLeading, useOptions, useState } from "@tuval/forms"
import { TextField } from '@realmocean/vibe'

export const SelectRenderer = (item, fields, field) => {

    return (
        HStack({ alignment: cLeading })(
            UIViewBuilder(() => {

                const { onItemChanged } = useOptions();

                //const { updateDocument } = useUpdateDocument(workspaceId);

                const [isEdit, setIsEdit] = useState(null);
                const [value, setValue] = useState(item[field.key]);

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


                return (

                    HStack({ alignment: cLeading })(
                        HStack({ alignment: cLeading })(
                            PopupButton(
                                HStack({ alignment: cLeading })(
                                    (item[field.key] == null || item[field.key] == '-1') ?
                                        Text('-') :
                                        Text(field.fieldInfo.options?.find((option) => option.value === item[field.key])?.label || '')
                                )
                                    .cursor('pointer')
                                    .cornerRadius(6)
                                    //.padding()
                                    //.border('1px solid #E8EAED')
                                    .height(30)

                            )(
                                VStack({ alignment: cTopLeading, spacing: 5 })(
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
                                    ...ForEach([{ label: '-', value: '-1' }, ...field.fieldInfo.options])((option: any) =>
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

                                                        onItemChanged(item.$id, {
                                                            [field.key]: option.value
                                                        });

                                                        item[field.key] = option.value;
                                                        EventBus.Default.fire('tasks.updated', { task: item })
                                                        _hideHandle();
                                                        /*  updateDocument({
                                                             databaseId,
                                                             collectionId,
                                                             documentId: row.$id,
                                                             data: {
                                                                 [field.key]: item.value
                                                             }
                                                         }, () => {
                                                             
                                                             setIsEdit(false);
                                                         }) */
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

