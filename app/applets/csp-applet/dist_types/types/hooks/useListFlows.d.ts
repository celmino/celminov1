import { Process } from "@realmocean/sdk";
export declare const useListFlows: (accessKey: string, projectSecretKey: string, projectId: string) => {
    flows: import("@realmocean/sdk").Flow[];
    isLoading: boolean;
};
export declare const useListProcesses: (accessKey: string, projectId: string, flowId: string) => {
    processes: Process[];
    isLoading: boolean;
};
