import { UIView } from "@tuval/forms";
import { AnonymousContextClass as AnonymousContextClass } from "./AnonymousContextClass";



export function AnonymousContext(childFunc:()=> UIView): AnonymousContextClass {
    return new AnonymousContextClass().childFunc(childFunc);
}