export declare const AddCollectionDialog: (workspaceId: string, appletId: string) => {
    title: string;
    workspaceId: string;
    databaseId: string;
    actions: {
        label: string;
        type: string;
    }[];
    fieldMap: {
        name: {
            label: string;
            type: string;
            name: string;
        };
    };
};
