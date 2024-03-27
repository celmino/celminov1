import { Optional } from "@tuval/core";
import { IView } from "./models/IView";
export declare const useCreateView: () => {
    createView: (view: Optional<Omit<IView, '$id'>>, onSuccess?: Function) => void;
    isLoading: boolean;
};
