import { Modifier } from "@dnd-kit/core/dist/modifiers";
import { Fragment, HStack, ReactView, Text, TextField, UIViewBuilder, VStack, cHorizontal, cLeading } from "@tuval/forms";

import React from "react";
import { MultipleContainers } from "./MultipleContainers";
import { useTaskStatus } from "../../../../hooks/useTaskStatus";
import { useCreateStatus } from "../../../../hooks/useCreateStatus";



export const restrictToHorizontalAxis: Modifier = ({ transform, over }) => {
    return {
        ...transform,
        x: 0,
    };

};

const statuses = [
    {
        id: '1',
        title: 'To Do',
        stageId: '1'
    },
    {
        id: '2',
        title: 'In Progress',
        stageId: '1'
    },
    {
        id: '3',
        title: 'Done',
        stageId: '1'
    }
]

const stages = [
    {
        id: "1",
        status_name: "Active Statuses",
        status_background_color: "",
        status_color: ""
    },
    {
        id: "2",
        status_name: "Done Statuses",
        status_background_color: "",
        status_color: ""
    }
]

export const ListStatusView = () => {
    /* const dialog = useDialog();
    const navigate = useNavigate();

    const { columns, resource, filter, sort } = fieldInfo;
    const { getList } = useProtocol(WorkProtocol);
    const { data: workspaces, isLoading } = getList('workspaces', {
        filter: {
            tenant_id: useSessionService().TenantId
        }
    }) */

    const { statuses, isLoading } = useTaskStatus();
    const { createStatus } = useCreateStatus();

    return (
        isLoading ? Fragment() : VStack(
            ReactView(
                <MultipleContainers handle items={{
                    "Opened Status": statuses
                        .filter(statu => statu.type === 'opened')
                        .map(statu => ({
                            id: statu.$id,
                            title: statu.name,
                            type: statu.type,
                            color: statu.bgColor
                        })),
                    "Active Statuses": statuses
                        .filter(statu => statu.type === 'active')
                        .map(statu => ({
                            id: statu.$id,
                            title: statu.name,
                            type: statu.type,
                            color: statu.bgColor
                        })),
                    "Done Statuses": statuses
                        .filter(statu => statu.type === 'done')
                        .map(statu => ({
                            id: statu.$id,
                            title: statu.name,
                            type: statu.type,
                            color: statu.bgColor
                        })),
                    "Closed Status": statuses
                        .filter(statu => statu.type === 'closed')
                        .map(statu => ({
                            id: statu.$id,
                            title: statu.name,
                            type: statu.type,
                            color: statu.bgColor
                        })),
                }} vertical

                    // modifiers={[restrictToHorizontalAxis]}
                    /*  cancelDrop={(args: CancelDropArguments) => {
                         if (args.over.id === "1")
                             return true;
                         return false
                     }} */
                    placeholderTemplate={({ containerId }) => containerId === 'Done Statuses' ?
                        HStack(
                            Text('Move statuses here to consider tasks Done.')
                                .fontSize(11)
                                .foregroundColor('#2229')
                        )
                            .border('1px dashed #cbc9cf')
                            .height(30)
                        :
                        Fragment()
                    }
                    containerLabelTemplate={({ label }) =>
                        HStack({ alignment: cLeading, spacing: 5 })(
                            Text(label)
                        ).textTransform("uppercase").fontSize(9).fontWeight('500').foregroundColor('rgb(107, 119, 140)')
                            .height(30)

                    }
                    template={(args) => {
                        return (
                            UIViewBuilder(() => {
                                return (
                                    HStack({ alignment: cLeading, spacing: 5 })(
                                        (args.value.type !== "opened" && args.value.type !== "closed") ? args.handleView : HStack().width(13).height(20),
                                        HStack().width(10).height(10).background(args.value.color).cornerRadius(2),
                                        HStack({ alignment: cLeading })(
                                            TextField().value(args.value.title)
                                            .border('none')
                                            // Text(args.value.title).fontSize(12).textTransform('uppercase')
                                        ).foregroundColor(args.value.color)
                                    )
                                        .padding(cHorizontal, 5)
                                        .border(args.dragOverlay ? '' : '1px solid #d8d8d8')
                                        .cornerRadius(3)
                                        .height(28).background('white')
                                )
                            }
                            )
                        )
                    }} />
            ).frame(true).width('100%')
        )
    )
}