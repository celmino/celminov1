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
import { useListFlows, useListProcesses } from "../hooks/useListFlows";
import { moment } from "@tuval/core";



export class AppletController extends UIController {
    public override LoadView(): UIView {
       
        const { applet, settings, isLoading: isAppletLoading } = useApplet();
        const { navigate } = useAppletNavigate();

        const [token, setToken] = useLocalStorage(`${applet.$id}-token`, null);
        useDocumentTitle('Celmino | ' + applet.name);



        return (
            isAppletLoading ? Spinner() :
                UIViewBuilder(() => {
                    const { flows, isLoading } = useListFlows(settings.key, settings.project.secretKey, settings.project.id);
                    return (
                        isLoading ? Fragment() :
                            UIViewBuilder(() => {
                                const { processes, isLoading } = useListProcesses(settings.key, settings.project.id, flows[0]?.id);
                                return (
                                    isLoading ? Fragment() :
                                        ReactView(
                                            <DialogStack>
                                                {
                                                    VStack({ alignment: cTopLeading })(

                                                        ActionPanel(),
                                                        ViewHeader(`${applet.name} - (${settings.project.name})`, (name) => {
                                                            /* updateAppletName(name, ()=> {
                                                                EventBus.Default.fire('applet.added', { treeItem: applet })
                                                            }) */
                                                        }),
                                                        processes == null ?
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
                                                            :
                                                            VStack({ alignment: cTopLeading })(
                                                                ...ForEach(processes)(process =>
                                                                    HStack({ alignment: cLeading })(
                                                                        Text(process.processId.toString()),
                                                                        Text(`${moment.utc(process.createDate).local().format('dddd, MMMM DD, YYYY • HH:mm')}`)

                                                                    ).height()
                                                                )
                                                            )

                                                    )
                                                        .render()
                                                }
                                            </DialogStack>
                                        )

                                )

                            })
                    )

                })




        )
    }
}