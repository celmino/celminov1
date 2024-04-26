import { GooleDriveBroker, useListGDriveFiles, useListGDriveFolders } from "@realmocean/sdk";
import { ForEach, Fragment, HStack, Heading, ReactView, ScrollView, Text, UIController, UIImage, UIView, UIViewBuilder, VStack, cLeading, cTopLeading, cVertical, useDialogStack, useEffect, useState } from "@tuval/forms";
import React from "react";
import { ActionPanel } from "./ActionPanel";



export const FolderView = (folderItem) => UIViewBuilder(() => {

    const { folders, isLoading } = useListGDriveFolders(folderItem.id);
    const { files, isLoading: isFilesLoading } = useListGDriveFiles(folderItem.id);

    useEffect(() => {
        /*    GooleDriveBroker.Default.listChild(folderItem.id).then((folders) => {
               setFiles(folders)
           }) */
    }, []);
    return (
        (isLoading || isFilesLoading) ? Fragment() :
            VStack(
                ActionPanel(),
                HStack({ alignment: cLeading })(
                    UIImage(folderItem.iconLink.replace('16', '32')),
                    Heading(folderItem.name)
                        .h2()
                )
                    .padding()
                    .height(60),
                folderItem.mimeType === 'application/vnd.google-apps.folder' ?
                    VStack(
                        ScrollView({ axes: cVertical, alignment: cTopLeading })(
                            VStack(
                                ...ForEach([...folders, ...files])((folder: any) =>
                                    UIViewBuilder(() => {
                                        const { openDialog } = useDialogStack();
                                        return (
                                            HStack({ alignment: cLeading, spacing: 5 })(
                                                UIImage(folder.iconLink.replace('16', '32')),
                                                Text(folder.name)
                                                    .foregroundColor('rgb(31, 31, 31)')
                                            )
                                                .allHeight(50)
                                                .borderBottom('solid 1px #CCCCCC55')
                                                .background({ hover: '#F0F1F1' })
                                                .onClick(() => {
                                                    openDialog({
                                                        title: folder.name,
                                                        view: UIViewBuilder(() =>
                                                            FolderView(folder)
                                                        )
                                                    })
                                                })
                                        )
                                    })

                                )
                            ).height()
                        )
                    )
                        .padding()
                    :
                    ReactView(
                        <iframe src={`${folderItem.webViewLink.replace('/view?', '/preview?')}`} style={{ width: '100%', height: '100%', border: 'none' }}></iframe>
                    )

            )
    )
})

