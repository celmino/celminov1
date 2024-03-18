import { UIController, UIView, HStack, cTopLeading, UIRouteOutlet, Text, Button } from "@tuval/forms";
import { LeftSideMenuView } from "../../*/views/LeftSideMenu";
import { useAccount, useRealm } from "@celmino/ui";
import { useCreateMagicURL } from "@realmocean/sdk";
import { useGetHostName, useGetOrigin, useGetProtocol } from "../../../../hooks/useGetProtocol";

export class WorkspaceController extends UIController {
    public override LoadView(): UIView {

        const { realm } = useRealm();
        const {account} = useAccount();

        const { createMagicURL } = useCreateMagicURL(realm.$id);
        return (
            HStack({ alignment: cTopLeading })(
                Button(
                    Text('Create url')
                ).onClick(() => {
                    createMagicURL({
                        userId: account.$id,
                        email: account.email,
                        url: 'http://test.localhost/login'
                    },(data: any)=> {
                        const params = data?.message?.split('&');
                        const userName = params[0];
                        const token = params[1];
                        const realmId = params[3];


                        const protocol = useGetProtocol();
                        const hostName = useGetHostName();
                        window.location.href = `${protocol}//${realmId}.${hostName}/@Team/?userId=${userName}&secret=${token}`
                       // alert(data?.message?.split('&'))
                    })
                }),
                LeftSideMenuView('Home'),
                UIRouteOutlet().width("100%").height("100%")
            )
        )
    }
}