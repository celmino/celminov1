import { ForEach, HStack, Text, UIController, UIRouteOutlet, UIView, VStack, useState } from "@tuval/forms";


const menu = [
    {
        key: 'overview',
        title: 'Overview'
    },
    {
        key: 'meetings',
        title: 'Meetings'
    }
]

export class AppletController extends UIController {
    public override LoadView(): UIView {
        const [selected, setSelected] = useState('overview')
        return (
            VStack(
                HStack(
                    HStack().borderBottom('solid 1px #E2E8F0').background('white'),
                    ...ForEach(menu)(mennuItem =>
                        HStack(
                            HStack().width(10).borderBottom('solid 1px #E2E8F0'),
                            HStack(
                                Text(mennuItem.title)
                                .fontFamily('Inter Variable,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial')
                            )
                                .padding()
                                .width()
                                
                                .border(selected === mennuItem.key ? 'solid 1px #E2E8F0' : 'solid 1px white')
                                .borderBottom(selected === mennuItem.key ? 'solid 1px #F8FAFC' : 'solid 1px #E2E8F0')
                                .background(selected === mennuItem.key ? '#F8FAFC' : 'white')
                        ).width().border('none')
                        .onClick(()=> setSelected(mennuItem.key))
                        ,
                    ),

                    HStack().borderBottom('solid 1px #E2E8F0').background('white'),
                ).height(40)
                    .background('white'),
                VStack(
                    UIRouteOutlet().width('100%').height('100%')
                )
                    .background('#F8FAFC')
            )
        )
    }
}