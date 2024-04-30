import { HStack, Text, UIController, UIRouteOutlet, UIView, VStack, cTopLeading } from "@tuval/forms";
import { SettingsMenu } from "../views/SettingsMenu";
import { Heading } from "@realmocean/atlaskit";



export class ConnectionsController extends UIController {
    public override LoadView(): UIView {
        return (
            HStack({alignment:cTopLeading})(
                SettingsMenu('connections'),
                VStack({alignment:cTopLeading})(
                    Heading('Connections')
                )
            )
           
        )
    }
}