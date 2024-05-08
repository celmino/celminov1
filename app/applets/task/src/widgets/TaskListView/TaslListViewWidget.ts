import { AppletContext, useApplet, useGetApplet, useWidget, WidgetContext } from "@celmino/ui";
import { HStack, Spinner, Text, UIController, UIView, UIViewBuilder, VStack, cLeading, cTop } from "@tuval/forms";
import { ViewHeader } from "../../views/ViewHeader";
import { ListView } from "../../routes/lists/view-[viewId]/views/ListView";
import { useListViews } from "../../hooks/useListViews";
import { ActionPanel } from "../../views/ActionPanel";



const fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", roboto, "Helvetica Neue", helvetica, arial, sans-serif'

export class TaskListViewWidget extends UIController {
    LoadView(): UIView {

        const {applet} = useApplet();
        const { realmId, appletId } = this.props.config;

        // const { applet, isLoading } = useGetApplet(realmId, appletId);
        return (

            WidgetContext(() =>
                UIViewBuilder(() => {
                    const { views, isLoading } = useListViews();
                    return (
                        isLoading ? Spinner() :
                            VStack({ alignment: cTop })(
                                ActionPanel(),
                                HStack({ alignment: cLeading })(
                                    Text(applet.name).fontSmoothing('auto')
                                        .foregroundColor('#212526')
                                        .fontSize(24).fontFamily(fontFamily).fontWeight('500')
                                        .lineHeight('1.25')
                                        .kerning('-0.003em')
                                ).height().padding()
                                    .borderBottom('1px solid rgba(0,0,0,.05)')
                                    .padding('4px 16px 12px')
                                ,

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


        )
    }
}