import { useApplet } from "@celmino/ui";
import {
    DialogStack,
    ReactView,
    UIController,
    UIFormController,
    UIRouteOutlet,
    UIView,
    VStack,
    cTop,
    useState
} from "@tuval/forms";
import { ActionPanel } from "../views/ActionPanel";
import { ViewHeader } from "../views/ViewHeader";
import React, { Fragment } from "react";


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
                                VStack(
                                    UIRouteOutlet().width('100%').height('100%')
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