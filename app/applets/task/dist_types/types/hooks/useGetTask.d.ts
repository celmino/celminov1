import { ITask } from "./models/ITask";
export declare const useGetTask: (taskId: string) => {
    task: ITask;
    isLoading: boolean;
};
