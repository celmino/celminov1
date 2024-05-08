import { UIView } from "@tuval/forms";
import { RealmContextClass } from "./RealmContextClass";



export function RealmContext(childFunc:()=> UIView): RealmContextClass {
    return new RealmContextClass().childFunc(childFunc);
}