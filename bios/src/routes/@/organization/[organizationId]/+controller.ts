import { ID, Models, Services, useCreateDatabase, useCreateRealm } from "@realmocean/sdk";
import { ButtonRenderer, InputRenderer } from "@realmocean/antd";
import { HStack, UIFormController, UIRouteOutlet, UIView, cTopLeading, useParams, Text, VStack, Input, Button, useState, useNavigate } from "@tuval/forms";
import { CreateWorkspaceView } from "../../../../views/CreateWorkspaceView";
import { Guard } from "../../../../CelminoController";
import { MembershipGuard, OrganizationGuard } from "../../../../guards/LoginGuard";
import { OrganizationContext } from "@celmino/ui";


@Guard(OrganizationGuard, MembershipGuard)
export class OrganizationController extends UIFormController {

    public override LoadView(): UIView {
        const { organizationId, workspaceId } = useParams();
        const [workspaceName, setWorkspaceName] = useState();
        const { createRealm } = useCreateRealm();
        const navigate = useNavigate();

        return (
            OrganizationContext(() =>
                workspaceId != null ? UIRouteOutlet().width('100%').height('100%') :
                    CreateWorkspaceView()
            )
        )

    }

}