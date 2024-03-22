import {
    ReactView,
    UIFormController,
    UIRouteOutlet,
    useState
} from "@tuval/forms";
import React from "react";
import PopoverDemo from "./Test";


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