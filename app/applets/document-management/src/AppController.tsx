import {
    ReactView,
    UIFormController,
    UIRouteOutlet,
    useState
} from "@tuval/forms";


export class MyTestController extends UIFormController {


    public LoadView() {
       
        return (
            /* ReactView(
                <PopoverDemo></PopoverDemo>
            ) */
            UIRouteOutlet().width('100%').height('100%')
        )
    }

}