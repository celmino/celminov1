import { DatePickerRenderer } from '@realmocean/antd';
export declare const SaveMeetingAction: {
    (formMeta: any, action: any): import("@tuval/forms").UIViewBuilderClass;
    Id: string;
};
export declare const AddMeetingDialog: (workspaceId: string, appletId: string, parent: string) => {
    title: string;
    workspaceId: string;
    appletId: string;
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
        start_at: {
            label: string;
            type: string;
            datePickerRenderer: typeof DatePickerRenderer;
            timePickerRenderer: typeof DatePickerRenderer;
            name: string;
            defaultValue: any;
            onChange: (controller: any, value: any) => void;
        };
        end_at: {
            label: string;
            type: string;
            datePickerRenderer: typeof DatePickerRenderer;
            timePickerRenderer: typeof DatePickerRenderer;
            name: string;
            defaultValue: any;
        };
    };
};
