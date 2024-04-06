import { Fragment, HStack, Icon, SortableListClass, SortableListView, Text, UIController, VStack, cHorizontal, cLeading, cTopLeading, cVertical, useState } from "@tuval/forms";
import { Icons } from "../../../Icons";
import { useListTaskType } from "../../../hooks/useListTaskType";

export class TaskTypesController extends UIController {
    public LoadView() {

        const { taskTypes, isLoading } = useListTaskType();


        return (
            isLoading ? Fragment() :
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
                                .items(taskTypes == null ? [] :taskTypes.map(item => ({ id: item.$id, ...item })))
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
                                //.onChange(e => setItems(e))
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
    }
}