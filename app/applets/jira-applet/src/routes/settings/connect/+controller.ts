import { LoadingButton, TextField } from "@realmocean/atlaskit";
import { HStack, Text, UIController, VStack, cHorizontal, cLeading, cTopLeading, cVertical, useState } from "@tuval/forms";

export class ConnectController extends UIController {
    public LoadView() {

        const [host, setHost] = useState();
        const [email, setEmail] = useState();
        const [token, setToken] = useState();

        return (
            VStack({ alignment: cTopLeading })(
                VStack({ alignment: cTopLeading })(
                    HStack({ alignment: cLeading })(
                        Text('Connect To Jira').fontSize(18).fontWeight('500')
                            .fontFamily('Inter Variable,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial')
                            .foregroundColor('rgb(42, 46, 52)')
                            .lineHeight(32)
                    )
                        .padding(cHorizontal, 16)
                        .padding(cVertical, 20)
                        .borderBottom('solid 1px #E2E8F0')
                        .height()
                        .margin('0 0 30px'),
                    VStack({ alignment: cTopLeading, spacing: 10 })(
                        TextField().label('Jira Host')
                            .helpMessage('Your Jira cloud host address. For example "https://my-jira.atlassian.net"')
                            .onChange((e: any)=> setHost(e.target.value)),
                        TextField().label('Email')
                            .helpMessage('Email you are using for logging to Jira')
                            .onChange((e: any)=> setEmail(e.target.value)),
                        TextField().label('Token')
                            .helpMessage('Your Jira token created for Celmino')
                            .onChange((e: any)=> setToken(e.target.value)),
                        LoadingButton().label('Connect').appearance('primary')
                            .isDisabled(host == null || email == null || token == null)
                    )
                        .maxWidth('600px')
                        .paddingLeft('40px')
                        .paddingRight('40px')
                        .paddingBottom('40px')
                        .height()
                )
                    .height()
                    .background('white')
                    .cornerRadius(8)
                    .shadow('rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px')
                    .border('solid 1px #E2E8F0'),


            )
                .padding('20px')
                .background('#F8FAFC')
        )
    }
}