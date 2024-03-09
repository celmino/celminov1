import { UIView } from "@tuval/forms";
import { AppletContextClass as AppletContextClass } from "./AppletContextClass";



export function AppletContext(childFunc:()=> UIView): AppletContextClass {
    return new AppletContextClass().childFunc(childFunc);
}