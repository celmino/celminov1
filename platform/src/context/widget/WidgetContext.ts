import { UIView } from "@tuval/forms";
import { WidgetContextClass } from "./WidgetContextClass";



export function WidgetContext(childFunc:()=> UIView): WidgetContextClass {
    return new WidgetContextClass().childFunc(childFunc);
}