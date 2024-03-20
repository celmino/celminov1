import { HStack, Text, UIController, UIRouteOutlet, UIView, cTopLeading } from "@tuval/forms";
import { SettingsMenu } from "../views/SettingsMenu";



export class SecuritySettingController extends UIController {
    public override LoadView(): UIView {
        return (
            HStack({alignment:cTopLeading})(
                SettingsMenu('security'),
                Text('security')
            )
           
        )
    }
}