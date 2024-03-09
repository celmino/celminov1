import { UIView } from "@tuval/forms";
import { TreeContextClass as TreeContextClass } from "./TreeContextClass";



export function TreeContext(childFunc:()=> UIView): TreeContextClass {
    return new TreeContextClass().childFunc(childFunc);
}