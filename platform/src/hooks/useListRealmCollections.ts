/**
 * Get the list of latest security activity logs for the currently logged in user. Each log returns user IP address, 
 * location and date and time of log.
 */

import { useQuery } from "@tuval/forms";
import { AppletServiceBroker } from "../brokers/AppletServiceBroker";

export function useListRealmCollections(projectId: string, queries: string[] = []): {
    collections: any[],
    isLoading: boolean
} {


    // const search = args[2];
    const query = useQuery({
        queryKey: ['databases', 'list', [...queries]],
        queryFn: () => {
            //setUpProject(args[0], 'admin');
            return AppletServiceBroker.Default
            .setRealmId(projectId)
            .getRealmCollections()
        }
    })

    return { collections: query.data,  isLoading: query.isLoading }

}