import { HStack, Text, UIController, UIRouteOutlet, UIView, VStack, cTopLeading } from "@tuval/forms";
import { SettingsMenu } from "../views/SettingsMenu";
import { Heading, Button } from "@realmocean/atlaskit";
import { useListDocuments } from "@realmocean/sdk";
import { useRealm } from "@celmino/ui";
import { SelectConnectionTypeDialog } from "./dialogs/SelectConnectionDialog";



export class ConnectionsController extends UIController {
    public override LoadView(): UIView {
        const { realm } = useRealm();
        const { documents } = useListDocuments(realm.$id, 'workspace', 'connections');
        return (
            HStack({ alignment: cTopLeading })(
                SettingsMenu('connections'),
                VStack({ alignment: cTopLeading })(
                    Heading('Connections'),
                    Button().label('Create Connection')
                        .appearance('primary')
                        .onClick(() => {
                            SelectConnectionTypeDialog.Show();
                        }),
                    Text(JSON.stringify(documents))
                )
            )

        )
    }
}