import { useGetOrganization } from "@realmocean/sdk";
import React from "react";
import { createContext } from "react";
import { AnonymousContextProvider } from "../anonymous";

export const AccountContextProvider = createContext<any>({});

export const useAccount = (): any => {
    

    const { account = null } = React.useContext(AccountContextProvider);
    const { account: anonymousAccount } = React.useContext(AnonymousContextProvider);
    

    return { account: account ?? anonymousAccount };
}

