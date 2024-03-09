import { useGetOrganization } from "@realmocean/sdk";
import React from "react";
import { createContext } from "react";

export const RealmContextProvider = createContext<any>({});

export const useRealm = (): any => {
    const { realm } = React.useContext(RealmContextProvider);

    return { realm };
}

