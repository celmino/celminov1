import { UIController, UIRoute, UIRoutes, UIView, UIViewBuilder, VStack } from "@tuval/forms";
import { AppletController } from "./+controller";

import { SettingsController } from "./settings/+controller";
import { FeatureSettingsController } from "./settings/features/+controller";
import { GeneralSettingsController } from "./settings/general/+controller";
import { MembersController } from "./settings/members/+controller";
import { StatusesController } from "./settings/statuses/+controller";
import { TabsController } from "./settings/tabs/+controller";


export class RouteController extends UIController {

    private routeView() {
        return (
            UIViewBuilder(() =>
                VStack(
                    UIRoutes(
                        UIRoute('/', AppletController).children(
                          //  UIRoute('', ListController ),
                          //  UIRoute(':viewId',  ViewController ),
                       
                        ),
                        UIRoute('/settings', SettingsController).children(
                            UIRoute('features', FeatureSettingsController),
                            UIRoute('general', GeneralSettingsController),
                            UIRoute('members', MembersController),
                            UIRoute('tabs', TabsController),
                            UIRoute('statuses', StatusesController)
                        )
                    )
                )
                    .background('var(--primary-background-color)')
            )


        )
    }
    public LoadView(): UIView {



        return this.routeView();




    }
}