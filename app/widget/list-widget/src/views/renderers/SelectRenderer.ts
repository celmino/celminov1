import { EventBus, TMath, is } from "@tuval/core"
import { DialogPosition, ForEach, HStack, PopupButton, Text, TextField, UIViewBuilder, VStack, cLeading, cTopLeading, useOptions, useState } from "@tuval/forms"


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
                                    item[field.key] == null ?
                                        Text('Select ' + field.name) :
                                        Text(field.fieldInfo.options?.find((option) => option.value === item[field.key])?.label || '')
                                )
                                    .width()
                                    .cornerRadius(6)
                                    .padding()
                                    .border('1px solid #e0e0e0')
                                    .height(30)

                            )(
                                VStack({ alignment: cTopLeading, spacing: 5 })(
                                    ...ForEach(field.fieldInfo.options)((option: any) =>
                                        HStack({ alignment: cLeading })(
                                            Text(option.label)
                                        )
                                            .width()
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
                                                    EventBus.Default.fire('tasks.changed', { task: item })
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

                                ).width(200)
                                    .height(TMath.max(field.fieldInfo.options.length * 40, 100))
                                    .padding()
                            )
                                .hideHandle(hideHandle => _hideHandle = hideHandle)
                                .dialogPosition(DialogPosition.BOTTOM_START)
                        )



                    )
                        .cornerRadius(6)
                        .border(isEdit ? '2px solid #e0e0e0' : '')
                        .height(38)
                    /* .onClick(() => {
                        isEdit ? void 0 :
                            EventBus.Default.fire('editCell', { editingCell: field.$id, editingRow: row.$id });
                    }) */

                    /* :
                    HStack({ alignment: cLeading })(
                        Text(field.fieldInfo.options?.find((option) => option.value === row[field.key])?.label || '')

                    )

                        .onClick(() => {
                         
                            EventBus.Default.fire('editCell', { editingCell: field.$id, editingRow: row.$id });

                        })
                        .paddingLeft('8px')
                        .height(38)) */
                )
            })
        )
    )
}

