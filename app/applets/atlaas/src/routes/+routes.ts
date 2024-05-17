import { UIController, UIRoute, UIRoutes, UIView, UIViewBuilder, VStack } from "@tuval/forms";
import { AppletController } from "./+controller";

import { GeneralSettingsController } from "./settings/general/+controller";

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