export interface ITaskStatus {
    $id: string;
    name: string;
    description: string;
    type: string;
    bgColor: string;
    fgColor: string;
    orderBy: number;
}
export declare const useTaskStatus: () => {
    statuses: ITaskStatus[];
    isLoading: boolean;
};
