import { useApplet } from "@celmino/platform";

import { EmptyState } from "@realmocean/atlaskit";
import {
    DialogStack,
    ReactView,
    UIController,
    UIView,
    VStack,
    cTopLeading,
    useDocumentTitle,
    useLocalStorage
} from "@tuval/forms";
import React from "react";
import { ActionPanel } from "../views/ActionPanel";
import { ViewHeader } from "../views/ViewHeader";


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