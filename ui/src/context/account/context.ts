import { useGetOrganization } from "@realmocean/sdk";
import React from "react";
import { createContext } from "react";
import { AnonymousContextProvider } from "../anonymous";
import { UserContextProvider } from "../user/context";

export const AccountContextProvider = createContext<any>({});

export const useAccount = (): { account: any, isAnonymous: boolean } => {


    const { account = null } = React.useContext(AccountContextProvider);
    const { user = null } = React.useContext(UserContextProvider);
    const { account: anonymousAccount } = React.useContext(AnonymousContextProvider);

    let isAnonymous = true;
    if (account == null && user == null && anonymousAccount != null) {
        isAnonymous = true;
    } else {
        isAnonymous = false;
    }


    return { account: account ?? user ?? anonymousAccount, isAnonymous };
}

