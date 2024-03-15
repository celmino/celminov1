import { UIController, UIRoute, UIRoutes, UIView, UIViewBuilder, VStack } from "@tuval/forms";
import { AppletController } from "./+controller";
import { SettingsController } from "./settings/+controller";
import { GeneralSettingsController } from "./settings/general/+controller";


export class RouteController extends UIController {

    private routeView() {
        return (
            UIViewBuilder(() =>
                VStack(
                    UIRoutes(
                        UIRoute('/', AppletController).children(
                           /*  UIRoute('list/:listId', ListController).children(
                                UIRoute('view/:viewId', class extends  ViewController {}),
                            ), */
                           /*  UIRoute('folder/:folderId',   class extends  FolderController {} ),
                            UIRoute('document/:documentId',   class extends  DocumentController {} ),
                            UIRoute('whiteboard/:whiteboardId',   class extends  WhiteboardController {} ),
                            UIRoute(':view_id', ViewController),
                            UIRoute(':view_id/*', ViewController) */
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