import { EventBus, TMath, is } from "@tuval/core"
import { DialogPosition, ForEach, Fragment, HStack, PopupButton, ScrollView, Text, TextField, UIViewBuilder, VStack, cLeading, cTopLeading, cVertical, useOptions, useState } from "@tuval/forms"

import { useGetDocument, useListDocuments } from "@realmocean/sdk";


export const RelationFieldRenderer = (item, fields, field) => {

    return (
        HStack({ alignment: cLeading })(
            UIViewBuilder(() => {

                const { onItemChanged } = useOptions();

                //const { updateDocument } = useUpdateDocument(workspaceId);

                const [isEdit, setIsEdit] = useState(null);
                const [value, setValue] = useState(item[field.key]);

                if (is.string(field.fieldInfo)) {
                    field.fieldInfo = JSON.parse(field.fieldInfo) ?? {};
                    /*  field.fieldInfo.options = field.fieldInfo.options?.map((option) => {
                         return {
                             label: option.key,
                             value: option.value
                         }
                     }) */
                }

                const { workspaceId = '', relatedDatabaseId = '', relatedCollectionId = '' } = field.fieldInfo;




                let _hideHandle = null;

                return (

                    HStack({ alignment: cLeading })(
                        HStack({ alignment: cLeading })(
                            PopupButton(
                                HStack({ alignment: cLeading })(
                                    item[field.key] == null ?
                                        Text('-') :
                                        UIViewBuilder(() => {
                                            const { document, isLoading } = useGetDocument({
                                                projectId: workspaceId,
                                                databaseId: relatedDatabaseId,
                                                collectionId: relatedCollectionId,
                                                documentId: item[field.key]
                                            });

                                            return (
                                                Text(document?.name)
                                            )
                                        })

                                )
                                    .cursor('pointer')
                                    .width()
                                    .cornerRadius(6)
                                    // .padding()
                                    // .border('1px solid #E8EAED')
                                    .height(30)

                            )(


                                VStack({ alignment: cTopLeading })(
                                    UIViewBuilder(() => {
                                        const { documents, isLoading } = useListDocuments(workspaceId, relatedDatabaseId, relatedCollectionId);
                                        return (
                                            isLoading ? Fragment() :
                                                UIViewBuilder(() => {
                                                    const [result, setResult] = useState<any[]>(documents);
                                                    return (
                                                        VStack({ alignment: cTopLeading, spacing: 5 })(
                                                            HStack(
                                                                Text(field.name)
                                                            )
                                                                .height(30)
                                                                .padding('0 12px'),
                                                            HStack(
                                                                TextField()
                                                                    .fontSize(10)
                                                                    .background('transparent')
                                                                    .border('none')
                                                                   // .placeHolder('Type to search or add..')
                                                                    .onChange((e) => {
                                                                        const newResults = result.filter(document => document.name?.indexOf(e) > -1)
                                                                        setResult(newResults);
                                                                    })
                                                            )
                                                                .background('#f9f9f9')
                                                                .height(30)
                                                                .padding('0 12px'),
                                                            ScrollView({ axes: cVertical, alignment: cTopLeading })(
                                                                VStack({ alignment: cTopLeading })(
                                                                    ...ForEach(result)((document: any) =>
                                                                        HStack(
                                                                            HStack({ alignment: cLeading, spacing: 5 })(
                                                                                HStack(
                                                                                    Text('?').foregroundColor('white')
                                                                                )
                                                                                    .cornerRadius('50%')
                                                                                    .width(20)
                                                                                    .height(20)
                                                                                    .background('gray')
                                                                                ,
                                                                                is.nullOrEmpty(document.name) ?
                                                                                    Text('Untitled') :
                                                                                    Text(document.name)
                                                                            )
                                                                                .cursor('pointer')
                                                                                .cornerRadius(6)
                                                                                //  .border('1px solid #e0e0e0')
                                                                                .height(30)
                                                                                .onClick(() => {
                                                                                    if (document.$id !== item[field.key]) {

                                                                                        onItemChanged(item.$id, {
                                                                                            [field.key]: document.$id
                                                                                        });

                                                                                        item[field.key] = document.$id;
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
                                                                )
                                                            )

                                                        )
                                                    )
                                                }
                                                )

                                        )
                                    })



                                ).width(200)
                                    .minHeight(100)
                                    .height(70 + 200)
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

