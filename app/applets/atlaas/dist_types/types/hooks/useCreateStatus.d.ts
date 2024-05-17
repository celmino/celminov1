import { Optional } from "@tuval/core";
import { ITaskStatus } from "./models/ITaskStatus";
export declare const useCreateStatus: () => {
    createStatus: (status: Optional<Omit<ITaskStatus, '$id'>>, onSuccess?: Function) => void;
    isLoading: boolean;
};
