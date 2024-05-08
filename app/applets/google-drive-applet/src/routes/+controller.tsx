import { useApplet } from "@celmino/platform";

import { GooleDriveBroker, useListGDriveFiles, useListGDriveFolders } from "@realmocean/sdk";
import {
    DialogStack,
    ForEach,
    Fragment,
    HStack,
    ReactView,
    ScrollView,
    Text,
    UIController,
    UIImage,
    UIView,
    UIViewBuilder,
    VStack,
    cLeading,
    cTopLeading,
    cVertical,
    useDialogStack,
    useDocumentTitle,
    useLocalStorage
} from "@tuval/forms";
import React from "react";
import { ActionPanel } from "../views/ActionPanel";
import { FolderView } from "../views/FolderView";
import { ViewHeader } from "../views/ViewHeader";



export class AppletController extends UIController {
    public override LoadView(): UIView {
        const {applet} = useApplet();

        const [token, setToken] = useLocalStorage(`${applet.$id}-token`, null);
       useDocumentTitle('Celmino | ' + applet.name);

        return (

            ReactView(
                <DialogStack>
                    {
                        VStack({ alignment: cTopLeading })(
                            ActionPanel(),
                            ViewHeader(applet.name, (name) => {
                                /* updateAppletName(name, ()=> {
                                    EventBus.Default.fire('applet.added', { treeItem: applet })
                                }) */
                            }),
                            token != null ? Fragment() :
                                HStack(
                                    HStack(
                                        UIImage('/images/google_login.svg')
                                    ).width().height()
                                        .cursor('pointer')
                                        .onClick(async () => {

                                            const token = await GooleDriveBroker.Default.getUserToken();

                                            // GooleDriveBroker.Default.setToken(token);
                                            setToken(token);
                                        })
                                ),
                            token == null ? Fragment() :
                                UIViewBuilder(() => {
                                    const { folders, isLoading } = useListGDriveFolders('root', token);
                                    const { files, isLoading: isFilesLoading } = useListGDriveFiles('root', token);
                                    return (
                                        HStack({ alignment: cTopLeading })(
                                            ScrollView({ axes: cVertical, alignment: cTopLeading })(
                                                VStack({ alignment: cTopLeading })(
                                                    ...ForEach(folders)((folder: any) =>
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
                                                                            title: 'Open',
                                                                            view: UIViewBuilder(() =>
                                                                                FolderView(folder)
                                                                            )
                                                                        })
                                                                    })
                                                            )
                                                        })

                                                    ),
                                                    ...ForEach(files)((file: any) =>
                                                        HStack({ alignment: cLeading, spacing: 5 })(
                                                            HStack(
                                                                UIImage(file.iconLink.replace('16', '32'))
                                                                    .imageHeight(24)
                                                                    .imageWidth(24)
                                                                    .allWidth(24)
                                                                    .allHeight(24)
                                                            )
                                                                .allWidth(32)
                                                                .allHeight(32)
                                                                .padding(),
                                                            Text(file.name)
                                                                .foregroundColor('rgb(31, 31, 31)')
                                                        )
                                                            .background({ hover: '#F0F1F1' })
                                                            .allHeight(50)
                                                            .borderBottom('solid 1px #CCCCCC55')
                                                    )

                                                )
                                            )
                                        ).padding()
                                    )
                                })

                        )
                            .background('white')
                            .render()
                    }
                </DialogStack>
            )



        )
    }
}