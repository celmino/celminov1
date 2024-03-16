import { UIController, UIFormController, UIRoute, UIRouteOutlet, UIRoutes, UIView, UIViewBuilder, VStack } from "@tuval/forms";

import { MeetingsController } from "./meetings/+controller";
import { SettingsController } from "./settings/+controller";
import { FeatureSettingsController } from "./settings/features/+controller";
import { GeneralSettingsController } from "./settings/general/+controller";
import { MeetingController } from "./meetings/metting-[meetingId]/+controller";
import { TopicController } from "./meetings/metting-[meetingId]/topic-[topicId]/+controller";
import { AppletController } from "./+controller";
import { OverviewController } from "./overview/+controller";
import { TasksController } from "./tasks/+controller";
import { FilesController } from "./files/+controller";
import { FeedController } from "./feed/+controller";




export class RouteController extends UIController {

    private routeView() {
        return (
            UIViewBuilder(() =>
                VStack(
                    UIRoutes(
                        UIRoute('/', AppletController).children(
                            UIRoute('meetings', MeetingsController).children(
                                UIRoute(':meetingId', MeetingController).children(
                                    UIRoute(':topicId', TopicController),
                                ),
                            ),
                            UIRoute('overview', OverviewController),
                            UIRoute('tasks', TasksController),
                            UIRoute('files', FilesController),
                            UIRoute('feed', FeedController)
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