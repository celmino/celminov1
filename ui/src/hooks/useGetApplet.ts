import { setUpProject, Services, Models, useGetDocument } from "@realmocean/sdk";
import { useQuery } from "@tuval/forms";
import { IApplet } from "../models/IApplet";

export const useGetApplet = (realmId: string, appletId: string): { applet: IApplet, isLoading: boolean } => {
    const { document, isLoading } = useGetDocument({
        projectId: realmId,
        databaseId: 'workspace',
        collectionId: 'applets',
        documentId: appletId
    });
    return { applet: document, isLoading }
}