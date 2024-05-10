import { DatePickerRenderer } from '@realmocean/antd';
import { useCreateDocument } from "@realmocean/sdk";
import { moment } from "@tuval/core";
import {
    Button,
    Text,
    UIViewBuilder,
    nanoid,
    useDialog,
    useFormBuilder,
    useFormController,
    useNavigate
} from "@tuval/forms";

export const SaveMeetingAction = (formMeta, action) => UIViewBuilder(() => {
    const { label, successAction, successActions } = action;
    const formController = useFormController();
    const dialog = useDialog();
    const formBuilder = useFormBuilder();
    const navigate = useNavigate();

    let invalidateResource = null;
    let formMutate = null;
    let createMutate = null;
    let updateMutate = null;
    let isFormMutateExcuting = false;
    let isFormLoading = false;

    const views = []
    const { workspaceId,appletId } = formMeta;

    const { createDocument, isLoading } = useCreateDocument(workspaceId,appletId, 'meeting');
   
   
    return (
        Button(
            Text('Save meeting space')
        )
            .loading(isLoading)
            .onClick(() => {


                const data = { ...formController.GetFormData() }
              
                
                createDocument(
                    {
                        data: {
                            ...data
                        }
                    },
                    (space) => {
                        dialog.Hide();
                        
                       
                    }
                )

            })
    )
}
)

SaveMeetingAction.Id = nanoid();

const getStartDate = () => {
    const start = moment(new Date());
    const remainder = 15 - (start.minute() % 15);

    const dateTime = moment(start).add(remainder, "minutes").toDate();

    return dateTime;
}

const getEndDate = () => {
    return moment(getStartDate()).add(1, 'hour').toDate()
}
export const AddMeetingDialog = (workspaceId: string, appletId: string, parent: string) => ({
    "title": 'Create meeting',
    workspaceId,appletId,
    "actions": [
        {
            "label": "Save",
            "type":SaveMeetingAction.Id
        }
    ],
    "fieldMap": {
        "name": {
            "label": "Title",
            "type": "text",
            "name": "name"
        },
        "start_at": {
            "label": "From",
            "type": "datetimepicker",
            datePickerRenderer: DatePickerRenderer,
            timePickerRenderer: DatePickerRenderer,
            "name": "start_at",
            defaultValue: getStartDate(),
            onChange: (controller, value) => {
                controller.SetValue('end_at', moment(value).add(1, 'hour').toDate())
                console.log(JSON.stringify(controller.GetFormData()))
            }
        },
        "end_at": {
            "label": "To",
            "type": "datetimepicker",
            datePickerRenderer: DatePickerRenderer,
            timePickerRenderer: DatePickerRenderer,
            "name": "end_at",
            defaultValue: getEndDate()
        },
       /*  "select": {
            "label": "Select Template",
            protocol: MeetingProtocol,
            "resource": 'meetings',
            filter: {
                scope_id: scope_id,
                is_template: 1

            },
            "type": "select",
            "name": "template_id",
            "text": "title",
            "key": "id"
        } */
    }
})