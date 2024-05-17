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
import App from "./view/Page";


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
                             ReactView(
                                <App></App>
                               ) 

                        )
                            .render()
                    }
                </DialogStack>
            )



        )
    }
}