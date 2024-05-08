import { UIView } from "@tuval/forms";
import { OrganizationContextClass } from "./OrganizationContextClass";



export function OrganizationContext(childFunc:()=> UIView): OrganizationContextClass {
    return new OrganizationContextClass().childFunc(childFunc);
}