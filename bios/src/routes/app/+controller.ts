import { UIController, UIRouteOutlet, UIView, Text } from "@tuval/forms";
import { CelminoController, Guard } from "../../CelminoController";
import { LoginGuard, MembershipGuard, OrganizationGuard } from "../../guards/LoginGuard";
//import { LoginGuard } from "../../guards/LoginGuard";


@Guard(LoginGuard)
export class LayoutController extends CelminoController {
    public override LoadView(): UIView {
        return (
            UIRouteOutlet().width("100%").height("100%")
        )
    }
}
