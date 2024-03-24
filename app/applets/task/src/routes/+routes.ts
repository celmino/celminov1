import { UIController, UIRoute, UIRoutes, UIView, UIViewBuilder, VStack } from "@tuval/forms";
import { MyTestController } from "../AppController";
import { ViewController } from "./lists/view-[viewId]/+controller";
import { DocumentController } from "./document-[documentId]/+controller";
import { ListController, _ListController } from "./lists/+controller.ts";
import { WhiteboardController } from "./whiteboard-[whiteboardId]/+controller";
import { SettingsController } from "./settings/+controller";
import { FeatureSettingsController } from "./settings/features/+controller";
import { GeneralSettingsController } from "./settings/general/+controller";
import { AppletController } from "./+controller";
import { OverviewController } from "./overview/+controller";
import { TeamController } from "./team/+controller";
import { MembersController } from "./settings/members/+controller";
import { TabsController } from "./settings/tabs/+controller";
import { StatusesController } from "./settings/statuses/+controller";


export class RouteController extends UIController {

    private routeView() {
        return (
            UIViewBuilder(() =>
                VStack(
                    UIRoutes(
                        UIRoute('/', AppletController).children(
                            UIRoute('', ListController ),
                            UIRoute(':viewId',  ViewController ),
                         /* 
                            UIRoute('overview', OverviewController),
                            UIRoute('team', TeamController),
                           
                          

                            UIRoute('document/:documentId', class extends DocumentController { }),
                            UIRoute('whiteboard/:whiteboardId', class extends WhiteboardController { }),
                            UIRoute(':view_id', ViewController),
                            UIRoute(':view_id/*', ViewController) */
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