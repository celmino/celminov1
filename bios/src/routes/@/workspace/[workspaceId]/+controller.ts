import { PersonelRealmContext, RealmContext, useAccount, useRealm } from "@celmino/ui";
import { useCreateMagicURL } from "@realmocean/sdk";
import { Fragment, HStack, UIController, UIRouteOutlet, UIView, cTopLeading } from "@tuval/forms";
import { LeftSideMenuView } from "../../*/views/LeftSideMenu";

export class WorkspaceController extends UIController {


    public override LoadView(): UIView {

        // const { isAnonymous } = useAccount();

        return (
            RealmContext(() =>
                HStack({ alignment: cTopLeading })(
                    //  isAnonymous ? Fragment() :
                    LeftSideMenuView('Home'),
                    UIRouteOutlet().width("100%").height("100%")
                )
            )
        )
    }
}

export class PersonelWorkspaceController extends UIController {


    public override LoadView(): UIView {

        // const { isAnonymous } = useAccount();

        return (
            HStack({ alignment: cTopLeading })(
                //  isAnonymous ? Fragment() :
                RealmContext(() =>
                    LeftSideMenuView('Home')
                )
                ,
                PersonelRealmContext(() =>
                    UIRouteOutlet().width("100%").height("100%")
                )

            )
        )
    }
}