import { useGetOrganization } from "@realmocean/sdk";
import React from "react";
import { createContext } from "react";
import { PersonelRealmContextProvider } from "../personelRealm";

export const RealmContextProvider = createContext<any>({});

export const useRealm = (): any => {
    const { realm } = React.useContext(RealmContextProvider);
    const { realm: personelRealm } = React.useContext(PersonelRealmContextProvider);

    return { realm: personelRealm ?? realm, isPersonel: personelRealm != null };
}

