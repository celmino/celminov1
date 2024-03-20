import { UIController, UIRouteOutlet, UIView } from "@tuval/forms";



export class SettingsController extends UIController {
    public override LoadView(): UIView {
        return (
            UIRouteOutlet().width('100%').height('100%')
        )
    }
}