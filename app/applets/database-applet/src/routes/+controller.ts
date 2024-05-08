import {
    UIFormController,
    UIRouteOutlet,
    VStack,
    cTopLeading,
    useParams
} from "@tuval/forms";


export class AppletController extends UIFormController {
    public LoadView() {
        const { workspaceId, appletId } = useParams();

        return (
            VStack({ alignment: cTopLeading })(
           /*      HStack(
                    HStack({ alignment: cLeading })(
                        Text(database?.name)
                            .fontFamily("ui-sans-serif,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol")
                            .fontSize(18)
                            .fontWeight("500")
                    )
                        .padding('6px 12px 6px 6px')
                )
                    .paddingTop('12px')
                    .paddingBottom('8px')
                    .paddingRight('24px')

                    .background('white')
                    .height(),
 */
                


                UIRouteOutlet().width('100%').height('100%')

            )
        )
    }

}