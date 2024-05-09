import {
    UIFormController,
    UIRouteOutlet,
    VStack,
    cTopLeading
} from "@tuval/forms";


export class AppletController extends UIFormController {
    public LoadView() {
   
   


        return (
            VStack({ alignment: cTopLeading })(
                 UIRouteOutlet().width('100%').height('100%')
            )
        )
    }

}