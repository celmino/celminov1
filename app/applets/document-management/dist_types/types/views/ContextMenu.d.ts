export declare const ContextMenu: (workspaceId: string, appletId: string, parent?: string, path?: string) => ({
    title: string;
    icon: () => JSX.Element;
    onClick: () => Promise<any>;
    type?: undefined;
} | {
    type: string;
    title?: undefined;
    icon?: undefined;
    onClick?: undefined;
} | {
    title: string;
    icon: () => JSX.Element;
    onClick?: undefined;
    type?: undefined;
})[];
export declare const EditContextMenu: (workspaceId: string, appletId: string, parent?: string, path?: string) => ({
    title: string;
    icon: () => JSX.Element;
    onClick: () => Promise<any>;
    type?: undefined;
} | {
    type: string;
    title?: undefined;
    icon?: undefined;
    onClick?: undefined;
} | {
    title: string;
    icon: () => JSX.Element;
    onClick?: undefined;
    type?: undefined;
})[];
