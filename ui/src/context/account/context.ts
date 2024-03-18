import { useGetOrganization } from "@realmocean/sdk";
import React from "react";
import { createContext } from "react";
import { AnonymousContextProvider } from "../anonymous";
import { UserContextProvider } from "../user/context";

export const AccountContextProvider = createContext<any>({});

export const useAccount = (): any => {
    

    const { account = null } = React.useContext(AccountContextProvider);
    const { user = null } = React.useContext(UserContextProvider);
    const { account: anonymousAccount } = React.useContext(AnonymousContextProvider);
    

    return { account: account ?? user ?? anonymousAccount };
}

