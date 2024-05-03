import { useApplet, useAppletNavigate } from "@celmino/ui";

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
    useState, useDocumentTitle,
    Spinner
} from "@tuval/forms";
import React from "react";
import { ActionPanel } from "../views/ActionPanel";
import { ViewHeader } from "../views/ViewHeader";
import { Button, EmptyState } from "@realmocean/atlaskit";
import { FolderView } from "../views/FolderView";
import { GooleDriveBroker, useListGDriveFiles, useListGDriveFolders } from "@realmocean/sdk";
import { Heading, TextField, LoadingButton } from "@realmocean/atlaskit";
import { useListFlows } from "../hooks/useListFlows";


export class AppletController extends UIController {
    public override LoadView(): UIView {
        const { applet, settings, isLoading } = useApplet();
        const { navigate } = useAppletNavigate();

        const [token, setToken] = useLocalStorage(`${applet.$id}-token`, null);
        useDocumentTitle('Celmino | ' + applet.name);



        return (
            isLoading ? Spinner() :
                UIViewBuilder(() => {
                    const { flows } = useListFlows(settings.key, settings.project.secretKey, settings.project.id);
                    return (
                        ReactView(
                            <DialogStack>
                                {
                                    VStack({ alignment: cTopLeading })(
                                        Text(JSON.stringify(flows)),
                                        ActionPanel(),
                                        ViewHeader(applet.name, (name) => {
                                            /* updateAppletName(name, ()=> {
                                                EventBus.Default.fire('applet.added', { treeItem: applet })
                                            }) */
                                        }),
                                        HStack({ alignment: cTop })(
                                            EmptyState()
                                                .imageUrl('/images/CSP.png')
                                                .header('Connect to Csp Project')
                                                .description('We need to have your token to use Jira API for retrieving data. Login to Jira and create token for Celmino. ')
                                                .buttonTitle('Connect')
                                                .onButtonClick(() => {
                                                    navigate('settings/connect');
                                                })
                                        ).padding()

                                    )
                                        .render()
                                }
                            </DialogStack>
                        )
                    )
                })




        )
    }
}