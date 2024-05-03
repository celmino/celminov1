import { useApplet, useRealm } from "@celmino/ui";
import { CspBroker } from "@realmocean/sdk";
import { useQuery } from "@tuval/forms";

export const useListFlows = (accessKey: string, projectSecretKey: string, projectId: string) => {

    const query = useQuery({
        queryKey: ['csp', 'list', projectId, 'flows'], queryFn: () => {
            const broker = new CspBroker();
            broker.setKey(accessKey);

            return broker.getFlows(projectSecretKey,projectId);
        }
    })

    return { flows: query.data, isLoading: query.isLoading }
}