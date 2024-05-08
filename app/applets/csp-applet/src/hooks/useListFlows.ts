import { CspBroker, Process } from "@realmocean/sdk";
import { useQuery } from "@tuval/forms";

export const useListFlows = (accessKey: string, projectSecretKey: string, projectId: string) => {

    const query = useQuery({
        queryKey: ['csp', 'list', projectId, 'flows'], queryFn: () => {
            const broker = new CspBroker();
            broker.setKey(accessKey);

            return broker.getFlows(projectSecretKey, projectId);
        }
    })

    return { flows: query.data, isLoading: query.isLoading }
}

export const useListProcesses = (accessKey: string, projectId: string, flowId: string): { processes: Process[], isLoading: boolean } => {

    const query = useQuery({
        queryKey: ['csp', 'list', projectId, 'processes'], queryFn: () => {
            const broker = new CspBroker();
            broker.setKey(accessKey);

            return broker.getProcesses(projectId, flowId);
        }
    })

    return { processes: query.data, isLoading: query.isLoading }
}