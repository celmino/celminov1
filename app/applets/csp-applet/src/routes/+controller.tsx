import { useApplet, useAppletNavigate } from "@celmino/platform";

import { EmptyState } from "@realmocean/atlaskit";
import { moment } from "@tuval/core";
import {
    DialogStack,
    ForEach,
    Fragment,
    HStack,
    ReactView,
    Spinner,
    Text,
    UIController,
    UIView,
    UIViewBuilder,
    VStack,
    cLeading,
    cTop,
    cTopLeading,
    useDocumentTitle,
    useLocalStorage
} from "@tuval/forms";
import React from "react";
import { useListFlows, useListProcesses } from "../hooks/useListFlows";
import { ActionPanel } from "../views/ActionPanel";
import { ViewHeader } from "../views/ViewHeader";



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