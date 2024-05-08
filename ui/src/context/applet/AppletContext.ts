import { UIView } from "@tuval/forms";
import { AppletContextClass } from "./AppletContextClass";
import { IApplet } from "../../models/IApplet";



export function AppletContext(childFunc:(applet: IApplet)=> UIView): AppletContextClass {
    return new AppletContextClass().childFunc(childFunc);
}