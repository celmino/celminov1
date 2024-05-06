import { DialogView } from "@tuval/forms";
export declare class SelectTasklistDialog extends DialogView {
    private applets;
    constructor();
    BindRouterParams(applets: any): void;
    OnOK(applet: any): void;
    OnCancel(): void;
    LoadView(): import("@tuval/forms").VStackClass | import("@tuval/forms").UISpinnerClass;
    static Show(applets: any): Promise<any>;
}
