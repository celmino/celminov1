import { DialogStack, ForEach, HStack, Icon, ReactView, Text, UIController, UIRouteOutlet, UIView, VStack, cTop, useState } from "@tuval/forms";
import { MeetingsIcon, OverviewIcon } from "../assets/Icons";
import React from "react";
import { ActionPanel } from "./views/ActionPanel";
import { ViewHeader } from "../views/ViewHeader";
import { useApplet } from "@celmino/ui";


const menu = [
    {
        key: 'overview',
        icon: OverviewIcon,
        title: 'Overview'
    },
    {
        key: 'meetings',
        icon: MeetingsIcon,
        title: 'Meetings'
    },
    {
        key: 'tasks',
        icon: MeetingsIcon,
        title: 'Tasks'
    },
    {
        key: 'files',
        icon: MeetingsIcon,
        title: 'Files'
    },
    {
        key: 'feeds',
        icon: MeetingsIcon,
        title: 'Feeds'
    }
]

export class AppletController extends UIController {
    public override LoadView(): UIView {
        const [selected, setSelected] = useState('overview');
        const { applet } = useApplet();
        return (
            ReactView(
                <DialogStack>
                    {
                        VStack({ alignment: cTop })(
                            ActionPanel(),
                            ViewHeader(applet.name, ()=> void 0),
                            VStack(
                                HStack(
                                    HStack().borderBottom('solid 1px #E2E8F0').background('white'),
                                    ...ForEach(menu)(menuItem =>
                                        HStack(
                                            HStack().width(10).borderBottom('solid 1px #E2E8F0'),
                                            HStack({ spacing: 5 })(
                                                Icon(menuItem.icon),
                                                Text(menuItem.title)
                                                    .fontWeight('500')
                                                    .fontFamily('Inter Variable,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial')
                                            )
                                                .cornerRadius('6px 6px 0px 0px')
                                                .cursor('pointer')
                                                .foregroundColor(selected === menuItem.key ? 'rgb(30, 41, 59)' : 'rgb(100, 116, 139)')
                                                .padding()
                                                .width()

                                                .border({ default: selected === menuItem.key ? 'solid 1px #E2E8F0' : 'solid 1px white', hover: 'solid 1px #E2E8F0' })
                                                .borderBottom({ default: selected === menuItem.key ? 'solid 1px #F8FAFC' : 'solid 1px #E2E8F0', hover: 'solid 1px #F8FAFC' })
                                                .background({ default: selected === menuItem.key ? '#F8FAFC' : 'white', hover: '#F8FAFC' })
                                        ).width().border('none')
                                            .onClick(() => setSelected(menuItem.key))
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
                        ).render()
                    }
                </DialogStack>
            )
        )
    }
}