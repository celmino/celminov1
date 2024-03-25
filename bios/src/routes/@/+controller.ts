import { UIController, UIRouteOutlet, UIView, Text } from "@tuval/forms";
import { CelminoController, Guard } from "../../CelminoController";
import { AccountContext, PersonelRealmContext, RealmContext, UserContext } from "@celmino/ui";
//import { LoginGuard } from "../../guards/LoginGuard";



export class LayoutController extends CelminoController {
    public override LoadView(): UIView {
        return (
            AccountContext(() =>
                UIRouteOutlet().width("100%").height("100%")
            )

        )
    }
}


export class PublicLayoutController extends CelminoController {
    public override LoadView(): UIView {
        return (
            UIRouteOutlet().width("100%").height("100%")
        )
    }
}

export class RealmLayoutController extends CelminoController {
    public override LoadView(): UIView {
        return (
            UserContext(() =>
              
                    UIRouteOutlet().width("100%").height("100%")
                )

            

        )
    }
}

export class PersonelRealmLayoutController extends CelminoController {
    public override LoadView(): UIView {
        return (
            UserContext(() =>
                RealmContext(() =>
                    PersonelRealmContext(() =>
                        UIRouteOutlet().width("100%").height("100%")
                    )
                )
            )
        )
    }
}

