import { useGetOrganization } from "@realmocean/sdk";
import React from "react";
import { createContext } from "react";

export const AnonymousContextProvider = createContext<any>({});

export const useAnonymousAccount = (): any => {
    const e = React.useContext(AnonymousContextProvider);
    
    return { account: e?.account };
}

