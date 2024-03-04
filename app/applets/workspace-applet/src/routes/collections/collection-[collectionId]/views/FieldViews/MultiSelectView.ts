import { useCreateDocument, useUpdateCollection, useUpdateDocument } from "@realmocean/sdk";
import { HStack, cLeading, UIViewBuilder, nanoid, Text, useState, useEffect, ForEach } from "@tuval/forms";
import { TextField } from "@realmocean/vibe";
import { useCallback } from 'react'
import { EventBus, is } from "@tuval/core";
import { Dropdown } from "@realmocean/vibe";
import { editInfo } from "./Text";


export const MultiSelectFieldView = (workspaceId, databaseId, collectionId, fields, field, index, row) => UIViewBuilder(() => {
    return (
        HStack({ alignment: cLeading })(
            UIViewBuilder(() => {
                const { createDocument } = useCreateDocument(workspaceId, databaseId, collectionId);
                const { updateDocument } = useUpdateDocument(workspaceId);

                const [isEdit, setIsEdit] = useState(null);

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

                if (row.type === 'addRow' && field.key === 'name') {
                    return (
                        HStack({ alignment: cLeading })(
                            Text('To add a new row, press Shift+Enter')
                        ).onClick(() => {
                            createDocument({
                                documentId: nanoid(),
                                data: {
                                    name: ''
                                }
                            }, (document) => {
                                EventBus.Default.fire('editCell', { editingCell: field.$id, editingRow: document.$id });

                            })

                        })
                    )
                } else {
                    return (
                        isEdit ?
                            Dropdown().width('100%')
                                .padding(0)
                                //.defaultValue(field.fieldInfo.options?.find((option) => option.value === row[field.key]))
                                .options(field.fieldInfo.options ?? [])
                                .onChange((values: { label: string, value: string }[]) => {
                                    const valuesForSave = values.map((value) => value.value).join(',');


                                    if (valuesForSave !== row[field.key]) {

                                        updateDocument({
                                            databaseId,
                                            collectionId,
                                            documentId: row.$id,
                                            data: {
                                                [field.key]: valuesForSave
                                            }
                                        }, () => {

                                        })

                                        // setIsEdit(false);
                                    } else {
                                    }
                                }) as any
                            :
                            HStack({ alignment: cLeading })(
                                UIViewBuilder(() => {
                                    let list = [];
                                    if (row[field.key] !== null && is.string(row[field.key])) {
                                        list = row[field.key].split(',');
                                    }
                                    return (
                                        HStack({ alignment: cLeading })(
                                            ...ForEach(list)((item) =>
                                                Text(field.fieldInfo.options?.find((option) => option.value === item)?.label || '')
                                            )
                                        )
                                    )

                                })

                            )

                                .onClick(() => {
                                    // alert(JSON.stringify(editInfo) + ' ----- ' + field.$id + ' : ' + row.$id);
                                    EventBus.Default.fire('editCell', { editingCell: field.$id, editingRow: row.$id });

                                })
                                .paddingLeft('8px')
                                .height(38))
                }
            })

        )
    )
})