import { useApplet } from "@celmino/ui";
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
    UIWidget,
    VStack,
    cLeading,
    cTop,
    cTopLeading,
    cVertical,
    useDialogStack,
    useEffect,
    useLocalStorage,
    useNavigate,
    useState
} from "@tuval/forms";
import React from "react";
import { ActionPanel } from "../views/ActionPanel";
import { ViewHeader } from "../views/ViewHeader";
import { Button } from "@realmocean/atlaskit";
import { FolderView } from "../views/FolderView";
import { useListGDriveFiles, useListGDriveFolders } from "@realmocean/sdk";



export class AppletController extends UIController {
    public override LoadView(): UIView {
        const navigate = useNavigate();

        const [token, setToken] = useLocalStorage('token', null);
        const { folders, isLoading } = useListGDriveFolders('root', token);
        const { files, isLoading: isFilesLoading } = useListGDriveFiles('root', token);

        return (

            ReactView(
                <DialogStack>
                    {
                        VStack({ alignment: cTopLeading })(
                            HStack(
                                UIImage('/images/google_login.svg')
                            ).width().height()
                                .onClick(async () => {

                                    /* const token = await GooleDriveBroker.Default.getUserToken();
                                    GooleDriveBroker.Default.setToken(token);
                                    setToken(token);


                                    const files = await GooleDriveBroker.Default.listFiles('root', token);
                                    const folders = await GooleDriveBroker.Default.listFolders('root', token);
                                    setFolders(folders);
                                    setFiles(files); */
                                }),
                            folders == null ? Fragment() :
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
                                )
                                    .padding()

                        ).render()
                    }
                </DialogStack>
            )



        )
    }
}