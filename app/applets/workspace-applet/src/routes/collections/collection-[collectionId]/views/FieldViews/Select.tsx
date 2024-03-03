import { useCreateDocument, useUpdateCollection, useUpdateDocument } from "@realmocean/sdk";
import { HStack, cLeading, UIViewBuilder, nanoid, Text, useState, useEffect } from "@tuval/forms";
import { TextField } from "@realmocean/vibe";
import { useCallback } from 'react'
import { EventBus, is } from "@tuval/core";
import { Dropdown } from "@realmocean/vibe";
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
                                .defaultValue(field.fieldInfo.options?.find((option) => option.value === row[field.key]))
                                .options(field.fieldInfo.options ?? [])
                                .onChange(({ label, value }) => {
                                    if (value !== row[field.key]) {

                                        updateDocument({
                                            databaseId,
                                            collectionId,
                                            documentId: row.$id,
                                            data: {
                                                [field.key]: value
                                            }
                                        }, () => {
                                            //setEditingCell(null);
                                            //setEditingRow(null);
                                        })

                                        setIsEdit(false);
                                    } else {
                                        //setEditingCell(null);
                                        //setEditingRow(null);
                                    }
                                }) as any
                            /* TextField()
                                .placeHolder(field.name)
                                .autoFocus(true)
                                .value(value)
                                .onKeyDown((e) => {
                                    if (e.code === 'Enter' && row.nextRowId == null) {
                                     
                                        updateDocument({
                                            databaseId,
                                            collectionId,
                                            documentId: row.$id,
                                            data: {
                                                [field.key]: e.target.value
                                            }
                                        }, () => {

                                        });

                                        const id = nanoid();
                                        createDocument({
                                            documentId: id,
                                            data: {
                                                name: ''
                                            }
                                        }, (document) => {
                                            EventBus.Default.fire('editCell', { editingCell: field.$id, editingRow: id });
                                        });

                                        setValue(e.target.value);
                                     
                                      
                                        
                                        e.preventDefault();
                                        e.stopPropagation();

                                    } else if ((e.code === 'Enter' || e.code === 'ArrowDown') && row.nextRowId != null) {
                                        //setEditingCell(null);
                                        if (row[field.key] !== e.target.value) {
                                            updateDocument({
                                                databaseId,
                                                collectionId,
                                                documentId: row.$id,
                                                data: {
                                                    [field.key]: e.target.value
                                                }
                                            });
                                        }

                                        EventBus.Default.fire('editCell', { editingCell: field.$id, editingRow: row.nextRowId });

                                        setValue(e.target.value);
                                        e.preventDefault();
                                        e.stopPropagation();

                                    } else if (e.code === 'ArrowUp' && row.prevRowId != null) {
                                        EventBus.Default.fire('editCell', { editingCell: field.$id, editingRow: row.prevRowId });
                                        setValue(e.target.value);
                                        e.preventDefault();
                                        e.stopPropagation();

                                    } else if (e.code === 'ArrowLeft' && fields[index - 1]?.$id != null) {
                                        EventBus.Default.fire('editCell', { editingCell: fields[index - 1]?.$id, editingRow: row.$id });

                                        e.preventDefault();
                                        e.stopPropagation();

                                    } else if (e.code === 'ArrowRight' && fields[index + 1]?.$id != null) {
                                        EventBus.Default.fire('editCell', { editingCell: fields[index + 1]?.$id, editingRow: row.$id });

                                        e.preventDefault();
                                        e.stopPropagation();

                                    }


                                })
                                .onBlur((e) => {
                                    if (e.target.value !== row[field.key]) {

                                        updateDocument({
                                            databaseId,
                                            collectionId,
                                            documentId: row.$id,
                                            data: {
                                                [field.key]: e.target.value
                                            }
                                        }, () => {
                                            //setEditingCell(null);
                                            //setEditingRow(null);
                                        })
                                    } else {
                                        //setEditingCell(null);
                                        //setEditingRow(null);
                                    }
                                }) as any  */:
                            HStack({ alignment: cLeading })(
                                Text(field.fieldInfo.options?.find((option) => option.value === row[field.key])?.label || '')

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