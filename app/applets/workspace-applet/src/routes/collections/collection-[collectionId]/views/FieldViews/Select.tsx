import { useCreateDocument, useUpdateDocument } from "@realmocean/sdk";
import { EventBus, TMath, is } from "@tuval/core";
import { DialogPosition, ForEach, HStack, PopupButton, Text, UIViewBuilder, VStack, cLeading, cTopLeading, useEffect, useState } from "@tuval/forms";
import { useCallback } from 'react';
import { editInfo } from "./Text";


export const SelectFieldView = (workspaceId, databaseId, collectionId, fields, field, index, row) => UIViewBuilder(() => {
    return (
        HStack({ alignment: cLeading })(
            UIViewBuilder(() => {
                const { createDocument } = useCreateDocument(workspaceId, databaseId, collectionId);
                const { updateDocument } = useUpdateDocument(workspaceId);

                const [isEdit, setIsEdit] = useState(null);
                const [value, setValue] = useState(row[field.key]);

                if (is.string(field.fieldInfo)) {
                    field.fieldInfo = JSON.parse(field.fieldInfo) ?? {};
                    field.fieldInfo.options = field.fieldInfo.options?.map((option) => {
                        return {
                            label: option.key,
                            value: option.value
                        }
                    })
                }

                //const [editingRow, setEditingRow] = useState(null);

                const turnOnEditMode = useCallback(({ editingCell, editingRow }) => {
                    // alert(field.name + '  --  ' + editInfo.lastEditCell + ' : ' + editInfo.lastEditRow)
                    if (field.$id === editingCell && row.$id === editingRow) {
                        //  alert(editInfo.lastEditCell + ' : ' + editInfo.lastEditRow)
                        EventBus.Default.fire('editCellOff', { editingCell: editInfo.lastEditCell, editingRow: editInfo.lastEditRow });
                        editInfo.lastEditCell = editingCell;
                        editInfo.lastEditRow = editingRow;
                        setIsEdit(true);
                    }
                }, []);

                const turnOffEditMode = useCallback(({ editingCell, editingRow }) => {

                    if (field.$id === editingCell && row.$id === editingRow) {
                        setIsEdit(false);
                    }
                }, []);

                useEffect(() => {
                    EventBus.Default.on('editCell', turnOnEditMode);
                    EventBus.Default.on('editCellOff', turnOffEditMode);
                    return () => {
                        EventBus.Default.off('editCell', turnOnEditMode);
                        EventBus.Default.on('editCellOff', turnOffEditMode);
                    }
                }, []);

                let _hideHandle = null;


                return (

                    HStack({ alignment: cLeading })(
                        HStack({ alignment: cLeading })(
                            PopupButton(
                                HStack({ alignment: cLeading })(
                                    row[field.key] == null ?
                                    Text('Select ' + field.name) :
                                    Text(field.fieldInfo.options?.find((option) => option.value === row[field.key])?.label || '')
                                )
                                    .width()
                                    .cornerRadius(6)
                                    .padding()
                                    .border('1px solid #e0e0e0')
                                    .height(30)
                                
                            )(
                                VStack({ alignment: cTopLeading, spacing: 5 })(
                                    ...ForEach(field.fieldInfo.options)((item: any) =>
                                        HStack({ alignment: cLeading })(
                                            Text(item.label)
                                        )
                                            .width()
                                            .cornerRadius(6)
                                            .padding()
                                            .border('1px solid #e0e0e0')
                                            .height(30)
                                            .onClick(() => {
                                                if (item.value !== row[field.key]) {

                                                    updateDocument({
                                                        databaseId,
                                                        collectionId,
                                                        documentId: row.$id,
                                                        data: {
                                                            [field.key]: item.value
                                                        }
                                                    }, () => {
                                                        _hideHandle();
                                                        setIsEdit(false);
                                                    })
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
                        .onClick(() => {
                            isEdit ? void 0 :
                                EventBus.Default.fire('editCell', { editingCell: field.$id, editingRow: row.$id });
                        })

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
})