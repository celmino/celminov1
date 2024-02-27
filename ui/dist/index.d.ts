// Generated by dts-bundle v0.7.3
// Dependencies for this module:
//   ../../@tuval/forms

import { DialogView, UIView } from "@tuval/forms";

import './exports';

export class SelectAppletDialog extends DialogView {
    BindRouterParams({ workspaceId, parent }: {
        workspaceId: any;
        parent: any;
    }): void;
    constructor();
    OnOK(applet: any): void;
    OnCancel(): void;
    LoadView(): UIView;
    static Show(workspaceId: string, parent?: string): Promise<any>;
}

export const ColorSelect: ({ onSelect }: {
    onSelect: any;
}) => import("@tuval/forms").HStackClass;

