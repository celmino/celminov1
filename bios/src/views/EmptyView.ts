import { SelectAppletDialog } from "@celmino/ui";
import { HStack, Icon, Text, UIViewBuilder, VStack, cLeading, cTop, cTopLeading } from "@tuval/forms";


export const EmptyView = (workspaceId: string, spaceId: string) => UIViewBuilder(() => {
    return (
        VStack(
            VStack({ alignment: cTop, spacing: 30 })(
                HStack(

                    HStack({ spacing: 5 })(
                        //FontIcon(FontIcons.Add, 'sm', '#656f7d'),
                        Text('Add Applet').fontSize(11).fontWeight('500')
                    )
                        .margin('5px 20px')
                        .cornerRadius(5)
                        .cursor('pointer')
                        .foregroundColor('#7c828d')
                        .background({ default: '#f3f4f7', hover: '#e4e4e4' })
                        .height(24)
                        .transition('background .2s cubic-bezier(.785,.135,.15,.86) 0s')
                        .padding('8px 12px 8px 26px')
                        .onClick(async () => {
                            SelectAppletDialog.Show(workspaceId,'-1', spaceId);
                        })


                ).height(),
                Icon('\\d24d').fontSize(120)
                    .foregroundColor('#CFD6DE'),
                VStack({ alignment: cLeading })(
                    Text("No applet found")
                        .fontFamily('Shadows Into Light Two,serif')
                        .fontSize(25)
                        .foregroundColor('rgb(136, 149, 167)'),
                    Text("add an applet")
                        .fontFamily('Shadows Into Light Two,serif')
                        .fontSize(25)
                        .foregroundColor('rgb(136, 149, 167)')

                ).width().height()

            )
            
                .padding('20px 10px')
                .border('3px dashed #E1E7EC')
                .cornerRadius(10),


        )
    )
})
