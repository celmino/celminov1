import { Icon, Text, UIViewBuilder, VStack, cLeading, cTop, cTopLeading } from "@tuval/forms";


export const EmptyView = () => UIViewBuilder(() => {
    return (
        VStack(
            VStack({ alignment: cTop, spacing: 30 })(
                Icon('\\d24d').fontSize(120)
                    .foregroundColor('#CFD6DE'),
                VStack({ alignment: cLeading })(
                    Text("No applet found")
                        .fontFamily('Shadows Into Light Two,serif')
                        .fontSize(25)
                        .foregroundColor('rgb(136, 149, 167)'),
                    Text("create an applet")
                        .fontFamily('Shadows Into Light Two,serif')
                        .fontSize(25)
                        .foregroundColor('rgb(136, 149, 167)')

                ).width().height()

            )
                .padding('20px 10px')
                .border('3px dashed #E1E7EC')
                .cornerRadius(10)

        )
    )
})
