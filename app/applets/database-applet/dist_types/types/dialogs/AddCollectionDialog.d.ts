export declare const SaveDocumentAction: (formMeta: any, action: any) => import("@tuval/forms").UIViewBuilderClass;
export declare const SaveCollectionAction: {
    (formMeta: any, action: any): import("@tuval/forms").UIViewBuilderClass;
    Id: string;
};
export declare const AddCollectionDialog: (workspaceId: string, appletId: string) => {
    title: string;
    appletId: string;
    actions: {
        label: string;
        type: string;
    }[];
    fieldMap: {
        workspaceId: {
            name: string;
            type: string;
            value: string;
        };
        databaseId: {
            name: string;
            type: string;
            value: string;
        };
        name: {
            label: string;
            type: string;
            name: string;
        };
    };
};
