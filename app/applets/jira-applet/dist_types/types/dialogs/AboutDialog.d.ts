import { DialogView } from "@tuval/forms";
export declare class AboutDialog extends DialogView {
    private form;
    constructor();
    BindRouterParams(): void;
    OnOK(): void;
    OnCancel(): void;
    LoadView(): import("@tuval/forms").VStackClass;
    static Show(): Promise<any>;
}
