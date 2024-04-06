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
import { EventBus } from "@tuval/core";


export class AppletController extends UIController {
    public override LoadView(): UIView {
        const [selected, setSelected] = useState('overview');
        const { applet, updateAppletName } = useApplet();
        return (
            ReactView(
             
                 <DialogStack>
                    {
                        VStack({ alignment: cTop })(

                            ActionPanel(),
                            ViewHeader(applet.name, (name) => {
                                updateAppletName(name, ()=> {
                                    EventBus.Default.fire('applet.added', { treeItem: applet })
                                })
                            }),
                            
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