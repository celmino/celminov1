import { UIView } from "@tuval/forms";
import { AccountContextClass as AnonymousContextClass } from "./AnonymousContextClass";



export function AnonymousContext(childFunc:()=> UIView): AnonymousContextClass {
    return new AnonymousContextClass().childFunc(childFunc);
}