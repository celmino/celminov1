export declare const SaveDocumentAction: {
    (formMeta: any, action: any): import("@tuval/forms").UIViewBuilderClass;
    Id: string;
};
export declare const AddDocumentDialog: (workspaceId: string, appletId: string, parent: string, path: string, type?: string, viewer?: string) => {
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
export declare const AddWhiteboardDialog: (workspaceId: string, appletId: string, parent: string, path: string, type?: string) => {
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
