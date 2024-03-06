// Generated by dts-bundle v0.7.3
// Dependencies for this module:
//   ../../react
//   ../../@tuval/forms

import React from "react";
import { UIFormController } from "@tuval/forms";
import { DialogView } from "@tuval/forms";
import { DialogView, UIView } from "@tuval/forms";
import { UIView } from "@tuval/forms";

import './exports';

export const UIFormBuilderContext: React.Context<any>;
export const useFormBuilder: () => any;
export function compileFormula(formData: any, code: string): string;
export class FormBuilder {
    static viewFactories: {};
    static actionFactories: {};
    static layoutFactories: {};
    static containerFactories: {};
    static injectView(viewType: string, viewFactory: any): void;
    static injectAction(actionType: string, actionFactory: any): void;
    static injectLayout(layoutType: string, viewFactory: any): void;
    static injectContainer(containerType: string, viewFactory: any): void;
    static getViewFactory(type: string): any;
    static getView(fieldInfo: any): any;
    static canRender(fieldInfo: any, formController?: UIFormController): boolean;
    static render(_formMeta: string | object | object[]): import("@tuval/forms").TextClass | import("@tuval/forms").FragmentClass | import("@tuval/forms").ConfigContextClass;
    static compileFormula(formula: any): string;
}

export class DynoDialog extends DialogView {
    constructor();
    BindRouterParams(formData: any): void;
    OnOK(): void;
    OnCancel(): void;
    LoadView(): import("@tuval/forms").VStackClass | import("@tuval/forms").UISpinnerClass;
    static Show(formData: any): Promise<any>;
}

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

export const NewFieldMenuView: ({ view, onNewFieldAdded }: {
    view: (menuIsOpen: boolean) => UIView;
    onNewFieldAdded?: Function;
}) => import("@tuval/forms").ReactViewClass;

export const ColorSelect: ({ onSelect }: {
    onSelect: any;
}) => import("@tuval/forms").HStackClass;

