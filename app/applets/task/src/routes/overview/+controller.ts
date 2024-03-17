import { useApplet } from "@celmino/ui";
import { UIController, UIView, useState, Text, VStack, cTop } from "@tuval/forms";
import { AppletTabMenu } from "../../views/AppletTabMenu";


export class OverviewController extends UIController {
    public override LoadView(): UIView {

        return (
            VStack({ alignment: cTop })(
                AppletTabMenu('overview'),
                Text('Overview')
            )
        )

    }
}