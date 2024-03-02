import { useCreateDocument, useUpdateCollection, useUpdateDocument } from "@realmocean/sdk";
import { HStack, cLeading, UIViewBuilder, nanoid, Text } from "@tuval/forms";
import { TextField } from "@realmocean/vibe";


export const TextFieldView = (workspaceId, databaseId, collectionId, fields, field, index, row, editingCell, editingRow, setEditingCell, setEditingRow) => UIViewBuilder(() => {

    const { createDocument } = useCreateDocument(workspaceId, databaseId, collectionId);
    const { updateDocument } = useUpdateDocument(workspaceId);

    return (
        HStack({ alignment: cLeading })(
            UIViewBuilder(() => {

                console.log(editingCell, field.$id, editingRow, row.$id)
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

                                setEditingCell(field.$id);
                                setEditingRow(document.$id);
                            })

                        })
                    )
                } else {
                    return (
                        field.$id === editingCell && row.$id === editingRow ?
                            TextField()
                                .placeHolder(field.name)
                                .autoFocus(true)
                                .value(row[field.key])
                                .onKeyDown((e) => {
                                    if (e.code === 'Enter' && row.nextRowId == null) {
                                        //setEditingCell(null);

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

                                        });

                                        setEditingRow(id);
                                        setEditingCell(field.$id);




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

                                        setEditingRow(row.nextRowId);
                                        setEditingCell(field.$id);
                                        e.preventDefault();
                                        e.stopPropagation();

                                    } else if (e.code === 'ArrowUp' && row.prevRowId != null) {
                                        setEditingRow(row.prevRowId);
                                        setEditingCell(field.$id);
                                        e.preventDefault();
                                        e.stopPropagation();

                                    } else if (e.code === 'ArrowLeft' && fields[index - 1]?.$id != null) {
                                        setEditingRow(row.$id);
                                        setEditingCell(fields[index - 1]?.$id);
                                        e.preventDefault();
                                        e.stopPropagation();

                                    } else if (e.code === 'ArrowRight' && fields[index + 1]?.$id != null) {
                                        setEditingRow(row.$id);
                                        setEditingCell(fields[index + 1]?.$id);
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
                                }) as any :
                            HStack({ alignment: cLeading })(
                                Text(row[field.key])
                            )

                                .onClick(() => {
                                    setEditingCell(field.$id);
                                    setEditingRow(row.$id);
                                })
                                .paddingLeft('8px')
                                .height(38))
                }
            })

        )
    )
})