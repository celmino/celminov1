export declare const SaveListAction: {
    (formMeta: any, action: any): import("@tuval/forms").UIViewBuilderClass;
    Id: string;
};
export declare const AddListDialog: (workspaceId: string, appletId: string, parent: string, path: string) => {
    title: string;
    workspaceId: string;
    appletId: string;
    actions: {
        label: string;
        type: string;
    }[];
    fieldMap: {
        folder_name: {
            label: string;
            type: string;
            name: string;
        };
    };
};
