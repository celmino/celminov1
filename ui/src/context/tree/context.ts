import { useGetOrganization } from "@realmocean/sdk";
import React from "react";
import { createContext } from "react";

export const TreeContextProvider = createContext<any>({});

export const useRealmTree = (): any => {
    const e = React.useContext(TreeContextProvider);
    
    return e;
}

