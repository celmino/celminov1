import { Fragment, HStack, Icon, SortableListClass, SortableListView, Text, UIController, UIViewBuilder, VStack, cHorizontal, cLeading, cTopLeading, cVertical, useState } from "@tuval/forms";
import { Icons } from "../../../Icons";
import { useListTaskType } from "../../../hooks/useListTaskType";
import { useUpdateTaskTypeOrder } from "../../../hooks/useUpdateTaskTypeOrder";
import { ITaskType } from "../../../hooks/models/ITaskType";

export class TaskTypesController extends UIController {
    public LoadView() {

        const { taskTypes, isLoading } = useListTaskType();
        const { updateTaskTypeOrder } = useUpdateTaskTypeOrder();

        return (
            isLoading ? Fragment() :
                UIViewBuilder(() => {
                    const [items, setItems] = useState(taskTypes);
                    return (
                        VStack({ alignment: cTopLeading })(
                            VStack({ alignment: cTopLeading })(
                                HStack({ alignment: cLeading })(
                                    Text('Task Types').fontSize(18).fontWeight('500')
                                        .fontFamily('Inter Variable,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial')
                                        .foregroundColor('rgb(42, 46, 52)')
                                        .lineHeight(32)
                                )
                                    .padding(cHorizontal, 16)
                                    .padding(cVertical, 20)
                                    .borderBottom('solid 1px #E2E8F0')
                                    .height()
                                    .margin('0 0 30px'),
                                VStack({ alignment: cTopLeading })(
                                    SortableListView()
                                        .items(items == null ? [] : items.map(item => ({ id: item.$id, ...item })))
                                        .renderItem((item) => {
                                            return (
                                                HStack({ alignment: cLeading, spacing: 5 })(
                                                    HStack(
                                                        Icon(Icons["icon1"])
                                                    )
                                                        .background('#C2EFFF')
                                                        .cornerRadius(4)
                                                        .width(20)
                                                        .height(20),
                                                    Text(item.name)
                                                )
                                                    .background('white')
                                                    .cornerRadius(6)
                                                    .border('solid 1px #F3F3F3')
                                                    .padding(cVertical, 10)
                                                    .padding(cHorizontal, 5)
                                                    .marginBottom(5)

                                            )
                                        })
                                        .width('100%')
                                        .onChange((e: ITaskType[] )=> {
                                            e.forEach((item, index) => {
                                               item.orderBy = index;
                                            })
                                            e.forEach(item => {
                                                const _ = taskTypes.find(taskType => taskType.$id === item.$id);
                                                
                                                if (_.orderBy !== item.orderBy) {
                                                    updateTaskTypeOrder(_.$id, item.orderBy);
                                                }
                                            })

                                            setItems(e)

                                        })
                                )
                                    .padding()
                                    .padding(cHorizontal, 20)

                            )
                                .height()
                                .background('white')
                                .cornerRadius(8)
                                .shadow('rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px')
                                .border('solid 1px #E2E8F0')
                            ,



                        )
                            .padding('20px')
                            .background('#F8FAFC')
                    )
                })

        )
    }
}