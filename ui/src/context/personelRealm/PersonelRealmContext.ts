import { UIView } from "@tuval/forms";
import { PersonelRealmContextClass as PersonelRealmContextClass } from "./PersonelRealmContextClass";



export function PersonelRealmContext(childFunc:()=> UIView): PersonelRealmContextClass {
    return new PersonelRealmContextClass().childFunc(childFunc);
}