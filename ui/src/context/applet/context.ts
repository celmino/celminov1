import { useGetOrganization } from "@realmocean/sdk";
import React from "react";
import { createContext } from "react";

export const AppletContextProvider = createContext<any>({});

export const useApplet = (): any => {
    const { applet } = React.useContext(AppletContextProvider);

    return { applet };
}

