import { useGetOrganization } from "@realmocean/sdk";
import React from "react";
import { createContext } from "react";

export const OrganizationContextProvider = createContext<any>({});

export const useOrganization = (): any => {
    const organization = React.useContext(OrganizationContextProvider);
    
    return organization;
}

