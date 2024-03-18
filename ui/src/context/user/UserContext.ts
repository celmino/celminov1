import { UIView } from "@tuval/forms";
import { UserContextClass as UserContextClass } from "./UserContextClass";



export function UserContext(childFunc:()=> UIView): UserContextClass {
    return new UserContextClass().childFunc(childFunc);
}