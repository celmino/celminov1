import { is } from "@tuval/core";
import { UIController, UIView } from "@tuval/forms";
import React, { Fragment } from "react";
import { WidgetContextClass } from "./WidgetContextClass";
import { WidgetContextProvider } from "./context";


class Controller extends UIController {
    public override LoadView(): UIView {
        const { control } = this.props;
        return control.vp_ChildFunc();
    }
}


const Proxy = ({ control }) => (
    control.vp_ChildFunc().render()
)



function WidgetContextRenderer({ control }: { control: WidgetContextClass }) {

   return (

        is.function(control.vp_ChildFunc) ?
            (
                <WidgetContextProvider.Provider value={{ isWidget: true }}>

                    <Proxy  control={control}></Proxy>

                </WidgetContextProvider.Provider >
            ) : <Fragment />
    )

}


export default WidgetContextRenderer;