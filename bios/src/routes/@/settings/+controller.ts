import { RealmContext } from "@celmino/ui";
import { UIController, UIRouteOutlet, UIView } from "@tuval/forms";



export class SettingsController extends UIController {
    public override LoadView(): UIView {
        return (
            RealmContext(() =>
                UIRouteOutlet().width('100%').height('100%')
            )
        )
    }
}