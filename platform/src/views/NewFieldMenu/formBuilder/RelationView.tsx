//import { Validator } from "jsonschema";


import { ForEach, Fragment, HStack, Icon, ReactView, ScrollView, Spacer, Spinner, Text, UIViewBuilder, VStack, cHorizontal, cLeading, cTopLeading, cVertical, useFormController, useOptions, useState } from "@tuval/forms";
import React from "react";
import { FormField } from "@realmocean/atlaskit";
import { FormBuilder, FormTitle } from "../../../FormBuilder/FormBuilder";
import { useListDocuments, Query } from "@realmocean/sdk";
import { useRealm } from "../../../context";
import { replaceNonMatchingCharacters } from "../../../utils";
import { DialogOkButton } from "../../DialogOkButton";
import { LabeledTextInput } from "../../LabeledText/LabeledText";
import { Select } from "@realmocean/antd";
import { Select as AtlasSelect } from "@realmocean/atlaskit";
import { useListRealmCollections } from "../../../hooks/useListRealmCollections";
import { is } from "@tuval/core";


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



export const RelationView = (fieldInfo: any) => {
    let { label, name, options } = fieldInfo;

    const [fieldValue, setFieldValue] = useState('');
    const [fieldHasError, setFieldHasError] = useState(false);
    const [selectHasError, setSelectHasError] = useState(false);
    const [errorMessageText, setErrorMessageText] = useState('');
    const [messageId, setMessageId] = useState('');

    const { realm } = useRealm();

    const workspaceId = realm.$id;
    const { documents: applets, isLoading } = useListDocuments(workspaceId, 'workspace', 'applets');
    const [selectedCollection, setSelectedCollection] = useState(null);
    const [open, setOpen] = useState(false);
    const { onNewFieldAdded } = useOptions();

    const { collections, isLoading : isRealmCollectionsLoading} = useListRealmCollections(workspaceId);

    let colls =collections;
    if (is.array(collections)) {
        colls = [];
        for(let i=0;i< collections.length;i++) {
            for(let j=0;j< collections[i].options.length;j++) {
                colls.push({
                    label: collections[i].label + ' -> ' + collections[i].options[j].label,
                    value: collections[i].options[j].value
                })
            }
        }
       /*  colls = collections.map(database => (
            database.options.map(collection => ({
                label : collection.name,
                value: collection.$id
            }))
        )) */
    }
   
    return (
        isRealmCollectionsLoading ? Fragment() :
        FormField((props, error, valid, meta) => {
            return (
                AtlasSelect('sdfds')
                    .props(props)
                    .options(colls)
            )
        })
            .label(label)
            .name(name)

    )
}

export const __RelationView = (fieldInfo: any) => {
    let { name } = fieldInfo;

    /*  const formController = useFormController();
     let currentValue = formController.GetValue(name);
 
     if (currentValue !== value){
         formController.SetValue(name, value);
     }
  */
    return (
        FormField((fieldProps) =>
            UIViewBuilder(() => {
                const { realm } = useRealm();

                const workspaceId = realm.$id;
                const { documents: applets, isLoading } = useListDocuments(workspaceId, 'workspace', 'applets');
                const [selectedCollection, setSelectedCollection] = useState(null);
                const [open, setOpen] = useState(false);
                const { onNewFieldAdded } = useOptions();
                const [name, setName] = useState();

                return (
                    VStack({ alignment: cTopLeading, spacing: 10 })(
                        AtlasSelect('sdf'),
                        VStack({ alignment: cTopLeading, spacing: 5 })(
                            Text('COLLECTION')
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

                                        ).height(300) as any
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
                                }) as any
                        ).height(),
                        Spacer(),
                        HStack({ alignment: cLeading })(
                            DialogOkButton('Add field')
                                .onClick(() => {
                                    onNewFieldAdded({
                                        key: replaceNonMatchingCharacters(name),
                                        name: name,
                                        type: 'relation',
                                        fieldInfo: {
                                            relatedDatabaseId: selectedCollection?.applet?.$id,
                                            relatedCollectionId: selectedCollection?.collection?.$id,
                                        }
                                    })
                                })
                        ).height()
                    )
                )
            }
            )
        )
            .name(name)

    )



}