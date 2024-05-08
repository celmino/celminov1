import { OrganizationContext } from "@celmino/platform";
import { UIFormController, UIRouteOutlet, UIView, useParams } from "@tuval/forms";
import { CreateWorkspaceView } from "../../../../views/CreateWorkspaceView";



export class OrganizationController extends UIFormController {

    public override LoadView(): UIView {
        const { workspaceId } = useParams();
        return (
            OrganizationContext(() =>
            workspaceId == null ? CreateWorkspaceView() :
                UIRouteOutlet().width('100%').height('100%')
            )
        )

    }

}