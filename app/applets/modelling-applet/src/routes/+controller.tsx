import { useApplet } from "@celmino/ui";
import {
    DialogStack,
    ReactView,
    UIController,
    UIView,
    UIWidget,
    VStack,
    cTop,
    useState
} from "@tuval/forms";
import React from "react";
import { ActionPanel } from "../views/ActionPanel";
import { ViewHeader } from "../views/ViewHeader";
import { Button } from "@realmocean/atlaskit";



export class AppletController extends UIController {
    public override LoadView(): UIView {
        const [selected, setSelected] = useState('overview');
        const { applet } = useApplet();
        return (
            ReactView(

                <DialogStack>
                    {
                        VStack({ alignment: cTop })(

                            ActionPanel(),
                            ViewHeader(applet.name, () => void 0),

                            VStack(
                               Button().appearance("default"),
                                VStack(
                                    // UIRouteOutlet().width('100%').height('100%')

                                    UIWidget('com.celmino.widget.flow')
                                        .config({})

                                )
                                    .background('#F8FAFC')
                            )
                        ).render()
                    }
                </DialogStack>
            )
        )
    }
}