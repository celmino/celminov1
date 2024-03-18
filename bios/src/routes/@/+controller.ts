import { UIController, UIRouteOutlet, UIView, Text } from "@tuval/forms";
import { CelminoController, Guard } from "../../CelminoController";
import { LoginGuard, MembershipGuard, OrganizationGuard } from "../../guards/LoginGuard";
import { AccountContext, UserContext } from "@celmino/ui";
//import { LoginGuard } from "../../guards/LoginGuard";


@Guard(LoginGuard)
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
