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
    useState, useDocumentTitle
} from "@tuval/forms";
import React from "react";
import { ActionPanel } from "../views/ActionPanel";
import { ViewHeader } from "../views/ViewHeader";
import { Button, EmptyState } from "@realmocean/atlaskit";
import { FolderView } from "../views/FolderView";
import { GooleDriveBroker, useListGDriveFiles, useListGDriveFolders } from "@realmocean/sdk";
import { Heading, TextField, LoadingButton } from "@realmocean/atlaskit";


export class AppletController extends UIController {
    public override LoadView(): UIView {
        const { applet } = useApplet();

        const [token, setToken] = useLocalStorage(`${applet.$id}-token`, null);
        useDocumentTitle('Celmino | ' + applet.name);

        return (

            ReactView(
                <DialogStack>
                    {
                        VStack({ alignment: cTopLeading, spacing: 10 })(
                            ActionPanel(),
                            ViewHeader(applet.name, (name) => {
                                /* updateAppletName(name, ()=> {
                                    EventBus.Default.fire('applet.added', { treeItem: applet })
                                }) */
                            }),
                           EmptyState()
                           .imageUrl('/images/LockClosed.png')
                           .header('Connect to Jira')
                           .description('We need to have your token to use Jira API for retrieving data. Login to Jira and create token for Celmino. ')
                           .buttonTitle('Connect')

                        )
                            .render()
                    }
                </DialogStack>
            )



        )
    }
}