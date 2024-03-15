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
export const FormTitle: (title: string) => import("@tuval/forms").HStackClass;
export class FormBuilder {
    static viewFactories: {};
    static actionFactories: {};
    static layoutFactories: {};
    static containerFactories: {};
    static injectView(viewType: string, viewFactory: any): void;
    static injectAction(actionFactory: any): any;
    static injectAction(actionType: string, actionFactory: any): any;
    static injectLayout(layoutType: string, viewFactory: any): void;
    static injectContainer(containerType: string, viewFactory: any): void;
    static getViewFactory(type: string): any;
    static getView(fieldInfo: any): any;
    static canRender(fieldInfo: any, formController?: UIFormController): boolean;
    static render(_formMeta: string | object | object[]): import("@tuval/forms").FragmentClass | import("@tuval/forms").TextClass | import("@tuval/forms").ConfigContextClass;
    static compileFormula(formula: any): string;
}

export class DynoDialog extends DialogView {
    constructor();
    BindRouterParams(formData: any): void;
    OnOK(): void;
    OnCancel(): void;
    LoadView(): import("@tuval/forms").UISpinnerClass | import("@tuval/forms").VStackClass;
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

export interface IColorView extends UIView {
    selectedColor(value: string): any;
    onChange(value: Function): any;
}
export const ColorView: () => IColorView;

export const useAppletNavigate: () => {
    navigate: (url: string) => void;
};

export const useRealmNavigate: () => {
    navigate: (url: string) => void;
};

export const ColorSelect: ({ onSelect }: {
    onSelect: any;
}) => import("@tuval/forms").HStackClass;

export class SelectSiderDialog extends DialogView {
    constructor();
    BindRouterParams({ siders }: {
        siders: any;
    }): void;
    OnOK(applet: any): void;
    OnCancel(): void;
    LoadView(): import("@tuval/forms").VStackClass;
    static Show(): Promise<any>;
}

export function OrganizationContext(childFunc: () => UIView): OrganizationContextClass;

export const OrganizationContextProvider: React.Context<any>;
export const useOrganization: () => any;

export function RealmContext(childFunc: () => UIView): RealmContextClass;

export const RealmContextProvider: React.Context<any>;
export const useRealm: () => any;

export function AppletContext(childFunc: () => UIView): AppletContextClass;

export const AppletContextProvider: React.Context<any>;
export const useApplet: () => any;

export function TreeContext(childFunc: () => UIView): TreeContextClass;

export const TreeContextProvider: React.Context<any>;
export const useRealmTree: () => any;

export function AccountContext(childFunc: () => UIView): AccountContextClass;

export const AccountContextProvider: React.Context<any>;
export const useAccount: () => any;

export function AnonymousContext(childFunc: () => UIView): AnonymousContextClass;

export const AnonymousContextProvider: React.Context<any>;
export const useAnonymousAccount: () => any;

export class OrganizationContextClass extends UIView {
    /** @internal */
    vp_ChildFunc: () => UIView;
    childFunc(value: () => UIView): this;
    render(): React.JSX.Element;
}

export class RealmContextClass extends UIView {
    /** @internal */
    vp_ChildFunc: () => UIView;
    childFunc(value: () => UIView): this;
    render(): React.JSX.Element;
}

export class AppletContextClass extends UIView {
    /** @internal */
    vp_AppletId: string;
    appletId(value: string): this;
    /** @internal */
    vp_ChildFunc: () => UIView;
    childFunc(value: () => UIView): this;
    render(): React.JSX.Element;
}

export class TreeContextClass extends UIView {
    /** @internal */
    vp_ChildFunc: () => UIView;
    childFunc(value: () => UIView): this;
    /** @internal */
    vp_SetCanDrag: (value: boolean) => void;
    setCanDrag(value: (value: boolean) => void): this;
    render(): React.JSX.Element;
}

export class AccountContextClass extends UIView {
    /** @internal */
    vp_ChildFunc: () => UIView;
    childFunc(value: () => UIView): this;
    render(): React.JSX.Element;
}

export class AnonymousContextClass extends UIView {
    /** @internal */
    vp_ChildFunc: () => UIView;
    childFunc(value: () => UIView): this;
    render(): React.JSX.Element;
}

