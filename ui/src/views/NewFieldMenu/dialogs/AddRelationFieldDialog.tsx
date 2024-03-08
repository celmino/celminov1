import { UIViewBuilder, VStack, FormBuilder, Text, Spinner, HStack, ForEach, cTopLeading, ScrollView, cVertical, cLeading, Icon, useOptions, useState, cHorizontal } from "@tuval/forms";
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
        const { workspaceId } = useOptions();
        const { documents: applets, isLoading } = useListDocuments(workspaceId, 'workspace', 'applets');
        const [selectedCollection, setSelectedCollection] = useState(null);
        const [open, setOpen] = useState(false);
        return (

            VStack({ alignment: cTopLeading, spacing: 5 })(
                Text('DATABASES')
                    .fontFamily('ui-sans-serif, -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"')
                    .fontSize(12)
                    .foregroundColor('rgb(33, 37, 38)'),
                Select()
                    .open(open)
                    .placeHolder('Select Collection')
                    .dropdownRenderer(() => {
                        return (
                            HStack({ alignment: cTopLeading })(
                                isLoading ? Spinner() :
                                    ScrollView({ axes: cVertical, alignment: cTopLeading })(
                                        VStack({ alignment: cTopLeading })(
                                            ...ForEach(applets)(applet =>
                                                VStack({ alignment: cTopLeading })(
                                                    Text(applet.name).fontSize('1.2rem').fontWeight('500').foregroundColor('gray'),
                                                    UIViewBuilder(() => {
                                                        const { documents: collections, isLoading } = useListDocuments(workspaceId, applet.$id, 'Collections', [
                                                            Query.orderAsc('name')
                                                        ]);
                                                        return (
                                                            VStack({ alignment: cTopLeading })(
                                                                ...ForEach(collections)((collection, index) =>
                                                                    HStack({ alignment: cLeading, spacing: 5 })(
                                                                        HStack(
                                                                            Icon(Marker)
                                                                        ).width(20).height(20).foregroundColor(colors[index % 3]),
                                                                        Text(collection.name)
                                                                    )
                                                                        .cursor('pointer')
                                                                        .background({ hover: 'hsl(209, 12%, 93%)' })
                                                                        .height(32)
                                                                        .onClick(() => {
                                                                            setSelectedCollection({ applet, collection });
                                                                        })
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
                    .value(selectedCollection?.collection?.$id)
                    .options([{

                        value: selectedCollection?.collection?.$id,
                        label: <div>
                            {
                                HStack({ alignment: cLeading })(
                                    HStack(
                                        Icon(Marker)
                                    ).width(20).height(20).foregroundColor(colors[10 % 3]),
                                    Text(selectedCollection?.applet?.name).fontSize('1.4rem').fontWeight('500').foregroundColor('gray'),
                                    Text('->').fontSize('1.4rem').fontWeight('500').foregroundColor('gray')
                                        .padding(cHorizontal, 5),
                                    Text(selectedCollection?.collection?.name).fontSize('1.3rem').fontWeight('400').foregroundColor('gray')
                                ).render()
                            }
                        </div>
                    }])
                    .onClick(() => {
                        setOpen(!open)
                    })
            )
                .padding(20)
                .width(380)
                .height(515)
        )
    }
    )
)