import { OrganizationContext } from "@celmino/ui";
import { useCreateRealm } from "@realmocean/sdk";
import { UIFormController, UIRouteOutlet, UIView, useNavigate, useParams, useState } from "@tuval/forms";
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