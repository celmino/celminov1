import { Text, UIController, UIView, VStack, cTop } from "@tuval/forms";
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