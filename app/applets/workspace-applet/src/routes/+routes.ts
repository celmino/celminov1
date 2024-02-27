import { UIController, UIRoute, UIRoutes, UIView, UIViewBuilder, VStack } from "@tuval/forms";
import { AppletController } from "./+controller";
import { CollectionController } from "./collection-[collectionId]/+controller";
import { SettingsController } from "./settings/+controller";
import {HomeController}from './*/+controller'
import { GeneralSettingsController } from "./settings/general/+controller";


export class RouteController extends UIController {

    private routeView() {
        return (
            UIViewBuilder(() =>
                VStack(
                    UIRoutes(
                        UIRoute('/', AppletController).children(
                            UIRoute('', HomeController)
                           
                        ),
                        UIRoute('/settings', SettingsController).children(
                            //UIRoute('features', FeatureSettingsController),
                            UIRoute('general', GeneralSettingsController)
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