import { HStack, Text, UIController, VStack, cHorizontal, cLeading, cTopLeading, cVertical } from "@tuval/forms";

export class MembersController extends UIController {
    public LoadView() {
        return (
            VStack({ alignment: cTopLeading })(
                VStack({ alignment: cTopLeading })(
                    HStack({ alignment: cLeading })(
                        Text('Members').fontSize(18).fontWeight('500')
                            .fontFamily('Inter Variable,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial')
                            .foregroundColor('rgb(42, 46, 52)')
                            .lineHeight(32)
                    )
                        .padding(cHorizontal, 16)
                        .padding(cVertical, 20)
                        .borderBottom('solid 1px #E2E8F0')
                        .height()
                        .margin('0 0 30px')

                )
                    .height()
                    .background('white')
                    .cornerRadius(8)
                    .shadow('rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px')
                    .border('solid 1px #E2E8F0')

            )
                .padding('20px')
                .background('#F8FAFC')
        )
    }
}