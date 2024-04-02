export declare const AddMarkdownDialog: (workspaceId: string, appletId: string, parent: string, path: string, type?: string) => {
    title: string;
    workspaceId: string;
    appletId: string;
    actions: {
        label: string;
        type: string;
    }[];
    fieldMap: {
        list_name: {
            label: string;
            type: string;
            name: string;
        };
        type: {
            name: string;
            type: string;
            value: string;
        };
        parent: {
            name: string;
            type: string;
            value: string;
        };
        path: {
            name: string;
            type: string;
            value: string;
        };
        viewer: {
            name: string;
            type: string;
            value: string;
        };
    };
};
