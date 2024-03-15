import { UIController, UIFormController, UIRoute, UIRouteOutlet, UIRoutes, UIView, UIViewBuilder, VStack } from "@tuval/forms";

import { MeetingsController } from "./+controller";
import { SettingsController } from "./settings/+controller";
import { FeatureSettingsController } from "./settings/features/+controller";
import { GeneralSettingsController } from "./settings/general/+controller";
import { MeetingController } from "./metting-[meetingId]/+controller";
import { TopicController } from "./metting-[meetingId]/topic-[topicId]/+controller";




export class RouteController extends UIController {

    private routeView() {
        return (
            UIViewBuilder(() =>
                VStack(
                    UIRoutes(
                        UIRoute('/', MeetingsController).children(
                            UIRoute(':meetingId', MeetingController).children(
                                UIRoute(':topicId', TopicController),
                            ),
                        ),
                        UIRoute('/settings', SettingsController).children(
                            UIRoute('features', FeatureSettingsController),
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