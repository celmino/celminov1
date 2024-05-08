import { useGetOrganization, useListDocuments, useUpdateDatabase, useUpdateDocument } from "@realmocean/sdk";
import React from "react";
import { createContext } from "react";
import { useRealm } from "../realm";
import { useMemo } from "@tuval/forms";

export const WidgetContextProvider = createContext<any>({});

export const useWidget = (): { isWidget } => {
    const { isWidget = false } = React.useContext(WidgetContextProvider);

    return { isWidget };

}

