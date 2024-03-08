import { UIViewBuilder, VStack, FormBuilder, Text, Spinner, HStack, ForEach, cTopLeading, ScrollView, cVertical, cLeading, Icon } from "@tuval/forms";
import { AddMultiSelectFieldDialog } from "./AddMultiSelectDialog";
import { Select } from "@realmocean/antd";
import { Query, useListDocuments } from "@realmocean/sdk";
import React from "react";

const Marker = () => (
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" aria-hidden="true" >
        <path d="M9 6h3c2 0 3 1 3 3v3c0 2-1 3-3 3H9c-2 0-3-1-3-3V9c0-2 1-3 3-3Z"></path>
    </svg>
)

const colors = [
    'rgb(212, 9, 21)',
    'rgb(45, 183, 245)',
    'rgb(21, 151, 137)',
    'rgb(148, 89, 60)',
    'rgb(251, 163, 47)'
]
export const RelationFieldAttributesView = () => (
    UIViewBuilder(() => {

        const { documents, isLoading } = useListDocuments('65e576becf3312efde15', 'workspace', 'applets');
        return (

            VStack({ alignment: cTopLeading })(
                Select().placeHolder('Select Collection')
                    .dropdownRenderer(() => {
                        return (
                            HStack({ alignment: cTopLeading })(
                                isLoading ? Spinner() :
                                    ScrollView({ axes: cVertical, alignment: cTopLeading })(
                                        VStack({ alignment: cTopLeading })(
                                            ...ForEach(documents)(doc =>
                                                VStack({ alignment: cTopLeading })(
                                                    Text(doc.name).fontSize('1.2rem').fontWeight('500').foregroundColor('gray'),
                                                    UIViewBuilder(() => {
                                                        const { documents, isLoading } = useListDocuments('65e576becf3312efde15', doc.$id, 'Collections', [
                                                            Query.orderAsc('name')
                                                        ]);
                                                        return (
                                                            VStack({ alignment: cTopLeading })(
                                                                ...ForEach(documents)((doc, index) =>
                                                                    HStack({ alignment: cLeading, spacing: 5 })(
                                                                        HStack(
                                                                            Icon(Marker)
                                                                        ).width(20).height(20).foregroundColor(colors[index % 3]),
                                                                        Text(doc.name)
                                                                    ).height(32)
                                                                )
                                                            )
                                                        )
                                                    })
                                                )
                                                .padding()

                                            )
                                        ).height()
                                    )

                            ).height(300)
                        )
                    })
                    .options([{
                        value: 1,
                        label: 'One'
                    }])
            )

                .padding(20)
                .width(380)
                .height(515)
        )
    }
    )
)
