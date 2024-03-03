import {
    Models, Query, useCreateDocument, useDeleteAttribute, useGetCollection,
    useGetDatabase, useListDocuments, useUpdateCollection, useUpdateDocument
} from "@realmocean/sdk";
import { DatePickerRenderer, InputRenderer } from "@realmocean/antd";
import { ButtonRenderer as TestRenderer } from "@realmocean/elasticui";
import { EventBus, is } from "@tuval/core";
import {
    Button,
    CheckBox,
    DialogPosition,
    DialogStack,
    ForEach,
    Fragment,
    Geometry,
    HStack,
    Icon,
    Input,
    MenuButton,
    PopupButton,
    ReactView,
    ScrollView,
    Text,
    Icons as TuvalIcons,
    UIDataTable,
    UIFormController, UIView,
    UIViewBuilder,
    UIWidget,
    VStack,
    cAll,
    cHorizontal,
    cLeading,
    cTopLeading,
    cTrailing,
    css,
    nanoid,
    useParams
} from "@tuval/forms";
import { useState } from "react";
import { Icons } from "../../../Icons";
import { ColorItemView } from "./views/ColorItemView";
import { AddTextFieldDialog } from "../../../dialogs/AddTextAttributeDialog";
import { DynoDialog, FormBuilder, NewFieldMenuView } from "@celmino/ui";
import { TextField } from "@realmocean/vibe";
import { TextFieldView } from "./views/FieldViews/Text";
import { RichTextFieldView } from "./views/FieldViews/Richtext";
import React from "react";
import { SelectFieldView } from "./views/FieldViews/Select";

/* import { AddBooleanFieldDialog } from "../dialogs/AddBooleanFieldDialog";
import { AddDatetimeFieldDialog } from "../dialogs/AddDatetimeField";
import { AddNumberFieldDialog } from "../dialogs/AddNumberFieldDialog";
import { AddRelationFieldDialog } from "../dialogs/AddRelationDialog";
import { AddTextFieldDialog } from "../dialogs/AddTextFieldDialog"; */

const colors = [
    '#4A4A4A',
    '#6A849B',
    '#BEC5CC',
    '#D40915',
    '#E72065',
    '#9C2BAF',
    '#673DB6',
    '#3E53B4',
    '#2978FB',
    '#199EE3',
    '#1FBED3',
    '#159789',
    '#4FAF54',
    '#8EC351',
    '#FBA32F',
    '#FC551F',
    '#B04E31'
]

const tableStyle = css`
    border-spacing: 0px;
    width: 100%;
`

const headerCell = css`
    font-family:"Inter var", sans-serif;
    font-feature-settings: "cv02", "cv03", "cv04", "cv11";
    text-align: left;
    box-shadow:rgba(193, 200, 205, 0.5) -1px 0px 0px 0px inset, rgba(193, 200, 205, 0.5) 0px -1px 0px 0px inset;
    font-weight: 700;
    color: rgb(109, 122, 131);
    background: #F9FAFB;
    transition: box-shadow 0.2s;
`

const bodyRow = css`
    background: #ffffff;
    color: #4b5563;
    transition: box-shadow 0.2s;
`

const bodyCell = css`
    box-shadow:rgba(193, 200, 205, 0.5) -1px 0px 0px 0px inset, rgba(193, 200, 205, 0.5) 0px -1px 0px 0px inset;
`

const paginator = css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    border-width: 0 0 1px 0;
    border-radius: 0;

    & .p-paginator-first {
        background-color: transparent;
        border: 0 none;
        color: #6b7280;
        min-width: 3rem;
        height: 3rem;
        margin: 0.143rem;
        transition: box-shadow 0.2s;
        border-radius: 50%;
    }

`



function getAttributeIcon(type: string) {
    switch (type) {
        case 'text':
            return Icons.TextAttribute;
        case 'integer':
            return Icons.NumberAttribute;
        case 'boolean':
            return Icons.CheckboxAttribute;
        case 'datetime':
            return Icons.DateAttribute;
        default:
            return Icons.TextAttribute;
    }
}

let _hideHandle = null;
export class CollectionController extends UIFormController {
    public override LoadView(): UIView {
        const { workspaceId, appletId: databaseId, collectionId } = useParams();


        const { database } = useGetDatabase(workspaceId, databaseId);
        const { deleteAttribute } = useDeleteAttribute(workspaceId);

        const { updateCollection } = useUpdateCollection(workspaceId);

        const { createDocument } = useCreateDocument(workspaceId, databaseId, collectionId);
        const { updateDocument } = useUpdateDocument(workspaceId);

        //const { createDocument } = useCreateDocument(workspaceId);
        const { documents: _documents, isLoading } = useListDocuments(workspaceId, databaseId, collectionId, [
            Query.limit(1000)
        ]);
        const { documents: fields } = useListDocuments(workspaceId, databaseId, 'fields', [
            Query.equal('collectionId', collectionId)
        ]);

        const { collection }: { collection: Models.Collection } = useGetCollection(workspaceId, databaseId, collectionId);
        const [collectionName, setCollectionName] = useState<string>(collection?.name ?? 'New Collection');
        const [showDialog, setShowDialog] = useState<boolean>(false);
        let documents = [];
        if (_documents != null) {
            documents = [..._documents];
            documents.push({
                indexNo: _documents.length + 1,
                type: 'addRow'
            })
        }



        let index = 1;
        return (
            isLoading ? Fragment() :

                VStack({ alignment: cTopLeading })(
                    HStack({ alignment: cLeading })(
                        HStack({ alignment: cLeading })(
                            Geometry(({ x, y }) =>
                                HStack({ alignment: cLeading, spacing: 5 })(
                                    showDialog ?
                                        HStack({ alignment: cTopLeading })(
                                            VStack({ alignment: cTopLeading, spacing: 10 })(
                                                //Text(JSON.stringify(params))
                                                Input()
                                                    .autoFocus(true)
                                                    .renderer(InputRenderer)
                                                    .value(collection?.name)
                                                    .fontSize(18)
                                                    .prefix(
                                                        Icon(Icons.Collection)
                                                    )
                                                    .onChange((e: any) => setCollectionName(e.target.value))
                                                    .onBlur(value => {
                                                        if (collectionName !== '' && collectionName !== collection?.name) {
                                                            updateCollection({
                                                                databaseId,
                                                                collectionId,
                                                                name: collectionName
                                                            })
                                                        }

                                                    }),
                                                HStack({ alignment: cTopLeading, spacing: 2 })(
                                                    ...ForEach(colors)((color) => (
                                                        ColorItemView(color)
                                                    )
                                                    )
                                                ).wrap('wrap')
                                            )
                                        )
                                            .onClickAway(() => {
                                                if (collectionName !== '' && collectionName !== collection?.name) {
                                                    updateCollection({
                                                        databaseId,
                                                        collectionId,
                                                        name: collectionName
                                                    })
                                                }
                                                setShowDialog(false);
                                            })
                                            .zIndex(10)
                                            .transform(`translate3d(${x}px, ${y}px, 0px)`)
                                            .position('fixed')
                                            .inset('0px auto auto 0px')
                                            .background('white')
                                            .shadow('0 0 0 1px hsla(205,9%,47%,.1),0 12px 16px -4px hsla(205,9%,47%,.3)')
                                            .width(330)
                                            .height(200)
                                            .cornerRadius(8)
                                            .padding(12)
                                        : Fragment(),
                                    HStack(
                                        Icon(Icons.Collection)
                                    )
                                        // .background('#FCE8E8')
                                        .width(32)
                                        .height(32)
                                        .cornerRadius(5),
                                    Text(collection?.name)
                                        .fontSize(18)
                                        .fontWeight('500')
                                        .foregroundColor('#212526')
                                        .fontFamily('ui-sans-serif,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol')
                                        .onClick(() => {
                                            setCollectionName(collection?.name);
                                            setShowDialog(true);
                                        })
                                )
                                    .width()

                            )
                        ).width(300),

                        HStack({ alignment: cTopLeading })(

                            UIWidget('com.tuvalsoft.widget.editorjs')
                                .config({
                                    scrollable: false
                                })
                        )

                        ,
                        NewFieldMenuView(workspaceId, databaseId, collectionId) as any,


                    )

                        .height()
                        .background('#F9FAFB')
                        .minHeight(60)
                        .paddingLeft('10px')
                        .paddingTop('12px')
                        .paddingRight('24px')
                        .paddingBottom('8px')
                        .borderBottom('1px solid rgba(0,0,0,.05)'),
                    HStack({ alignment: cTopLeading })(
                        ScrollView({ axes: cAll, alignment: cTopLeading })(
                            UIDataTable()
                                .dataTablePT({
                                    table: tableStyle,
                                    bodyRow,
                                    paginator


                                })
                                .columnPT({
                                    headerCell,

                                    bodyCell
                                })
                                .columns([{
                                    field: 'indexNo',
                                    width: '80px',
                                    header: '',
                                    align: 'right',
                                    body: (row) => {
                                        return (
                                            HStack({ alignment: cTrailing })(
                                                row['type'] === 'addRow' ?
                                                    Icon(Icons.Plus) :
                                                    Text(row['indexNo'])
                                            )
                                                .paddingRight('8px')
                                                .height(38)
                                        )
                                    },
                                    editor: (row) => {
                                        return (
                                            Text(row['indexNo'])
                                        )
                                    }
                                }, ...(fields ?? []).map((column: any, index: number) => {
                                    return {
                                        field: column.key,
                                        dataType: column.type,
                                        width: '420px',
                                        header: (data) => (
                                            HStack({ alignment: cLeading, spacing: 5 })(
                                                Icon(getAttributeIcon(column.type))
                                                    .width(20)
                                                    .height(20),
                                                HStack({ alignment: cLeading })(
                                                    Text(column.name)
                                                        .fontFamily('ui-sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"!important')
                                                        .foregroundColor('rgb(109, 122, 131)')
                                                        .fontSize(14)
                                                ),
                                                HStack({ alignment: cTrailing })(
                                                    MenuButton()
                                                        .model([
                                                            {
                                                                title: 'Edit',
                                                                onClick: () => {
                                                                    DynoDialog.Show(AddTextFieldDialog(workspaceId, databaseId, collectionId))
                                                                }
                                                            },
                                                            {
                                                                title: 'Delete',
                                                                onClick: () => {
                                                                    deleteAttribute({
                                                                        databaseId,
                                                                        collectionId,
                                                                        key: column.key
                                                                    })
                                                                    //  DynoDialog.Show(AddTextFieldDialog(databaseId, collectionId))
                                                                }
                                                            }
                                                        ])
                                                        .icon(TuvalIcons.Menu)
                                                )
                                                    .width()
                                                    .opacity('var(--hoverOpacity)')
                                            )
                                                .padding(8)
                                                .variable('--hoverOpacity', {
                                                    default: '0',
                                                    hover: '1'
                                                })
                                        ),
                                        body: (row) => {
                                            if (column.type === 'richtext') {
                                                return RichTextFieldView();

                                            } else if (column.type === 'select') {
                                                return SelectFieldView(workspaceId, databaseId,
                                                    collectionId, fields, column, index, row);

                                            } else if (column.type === 'boolean') {
                                                const values = row[column.key];
                                                return (
                                                    CheckBox().checked(row[column.key])
                                                )
                                            } else if (column.type === 'relationship') {
                                                const values = row[column.key];

                                                return (
                                                    HStack({ alignment: cLeading })(
                                                        ...ForEach(values)((value: any) => (
                                                            HStack({ spacing: 5 })(
                                                                HStack(
                                                                    Icon(Icons.Relation)
                                                                )
                                                                    .width()
                                                                    .height()
                                                                    .foregroundColor('rgb(79, 175, 84)'),
                                                                Text(value.Name),
                                                                Icon(Icons.RightArrow)
                                                            )
                                                                .width()
                                                                .height()
                                                                .border('solid 1px #E9EBED')
                                                                .cornerRadius(6)
                                                                .padding(2)
                                                        )
                                                        )
                                                    )
                                                )
                                            } else {
                                                return (
                                                    HStack({ alignment: cLeading })(
                                                        UIViewBuilder(() => {

                                                            if (row.type === 'addRow' && column.key === 'name') {
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
                                                                            EventBus.Default.fire('editCell', { editingCell: column.$id, editingRow: document.$id });
                                                                            /* setEditingCell(column.$id);
                                                                            setEditingRow(document.$id); */
                                                                        })

                                                                    })
                                                                )
                                                            } else {
                                                                return TextFieldView(workspaceId, databaseId,
                                                                    collectionId, fields, column, index, row);
                                                            }
                                                        })

                                                    )

                                                )


                                            }
                                        }

                                    }
                                })])
                                .model(documents.map((document, index) => {

                                    return {
                                        indexNo: index + 1,
                                        nextRowId: documents[index + 1]?.$id,
                                        prevRowId: documents[index - 1]?.$id,
                                        ...document
                                    }
                                }))
                        )
                    ),

                    Button()
                        .label('Create Document')
                        .renderer(TestRenderer)
                        .onClick(() => {
                            const _fields = {};

                            for (let i = 0; i < fields?.length; i++) {
                                const attribute: any = fields[i];
                                if (attribute.type === 'text') {
                                    _fields[attribute.key] = {
                                        label: attribute.name,
                                        type: 'text',
                                        name: attribute.key
                                    }
                                } else if (attribute.type === 'number') {
                                    _fields[attribute.key] = {
                                        label: attribute.key,
                                        type: 'number',
                                        name: attribute.name
                                    }
                                } else if (attribute.type === 'boolean') {
                                    _fields[attribute.key] = {
                                        label: attribute.key,
                                        type: 'checkbox',
                                        name: attribute.name
                                    }
                                } else if (attribute.type === 'datetime') {
                                    _fields[attribute.key] = {
                                        label: attribute.key,
                                        type: 'datepicker',
                                        name: attribute.key,
                                        value: new Date(),
                                        renderer: DatePickerRenderer
                                    }
                                } else if (attribute.type === 'relationship') {
                                    _fields[attribute.key] = {
                                        label: attribute.key,
                                        type: 'relation',
                                        name: attribute.key,
                                        relatedCollection: attribute.relatedCollection,
                                        relationType: attribute.relationType,
                                    }
                                }
                            }

                            DynoDialog.Show({
                                "title": `Create ${collection?.name}`,
                                "actions": [
                                    {
                                        "label": "Save",
                                        "type": "ca_SaveDocument"
                                    }
                                ],
                                "fieldMap": {
                                    "workspaceId": {
                                        "name": "workspaceId",
                                        "type": "virtual",
                                        "value": workspaceId
                                    },
                                    "databaseId": {
                                        "name": "databaseId",
                                        "type": "virtual",
                                        "value": databaseId
                                    },
                                    "collectionId": {
                                        "name": "collectionId",
                                        "type": "virtual",
                                        "value": collectionId
                                    },
                                    ..._fields

                                }
                            }
                            );

                        }),



                )
        )

    }
}