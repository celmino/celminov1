import { AppletContext, useApplet, useGetApplet, WidgetContext } from "@celmino/ui";
import { Spinner, Text, UIController, UIView, UIViewBuilder, VStack, cTop } from "@tuval/forms";
import { ViewHeader } from "../../views/ViewHeader";
import { ListView } from "../../routes/lists/view-[viewId]/views/ListView";
import { useListViews } from "../../hooks/useListViews";


export class TaskListViewWidget extends UIController {
    LoadView(): UIView {

        const { realmId, appletId } = this.props.config;

        // const { applet, isLoading } = useGetApplet(realmId, appletId);
        return (

            WidgetContext(() =>
                AppletContext((applet) =>
                    UIViewBuilder(() => {
                        const { views, isLoading } = useListViews();
                        return (
                            isLoading ? Spinner() :
                                VStack({ alignment: cTop })(
                                    //   ActionPanel(),
                                    ViewHeader(applet.name, (name) => {
                                        /* updateAppletName(name, () => {
                                            EventBus.Default.fire('applet.added', { treeItem: applet })
                                        }) */
                                    }),

                                    VStack(
                                        VStack(
                                            ListView(views[0].$id)
                                        )
                                            .background('#F8FAFC')
                                    )
                                )
                        )
                    })

                )
                    .appletId(appletId)
            )


        )
    }
}