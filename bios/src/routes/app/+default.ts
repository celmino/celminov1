import { Query, useListRealms } from "@realmocean/sdk";
import { Fragment, Text, UIController, UIView, UIViewBuilder } from "@tuval/forms";
import { CreateWorkspaceView } from "../../views/CreateWorkspaceView";
import { useGetCurrentOrganization } from "../../hooks/useGetCurrentOrganization";
import { CelminoController, Guard } from "../../CelminoController";
import { DefaultWorkspaceGuard } from "../../guards/WokspaceGuard";
import { OrganizationGuard } from "../../guards/LoginGuard";

@Guard(OrganizationGuard)
export class DefaultWorkspaceController extends CelminoController {
    public override LoadView(): UIView {
        return (
          Text('Default page')
        )
    }
}
