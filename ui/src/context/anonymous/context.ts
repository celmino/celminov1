import { useGetOrganization } from "@realmocean/sdk";
import React from "react";
import { createContext } from "react";

export const AccountContextProvider = createContext<any>({});

export const useAccount = (): any => {
    const e = React.useContext(AccountContextProvider);
    
    return { account: e?.account };
}

