import { ITaskStatus } from "./models/ITaskStatus";
import { Optional } from "@tuval/core";
export declare const useCreateStatus: () => {
    createStatus: (status: Optional<Omit<ITaskStatus, '$id'>>, onSuccess?: Function) => void;
    isLoading: boolean;
};
