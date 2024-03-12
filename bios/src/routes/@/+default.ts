import { Query, useGetTeamMembership, useListAccountMemberships, useListRealms } from "@realmocean/sdk";
import { Fragment, Text, UIController, UINavigate, UIView, UIViewBuilder } from "@tuval/forms";
import { CreateWorkspaceView } from "../../views/CreateWorkspaceView";
import { useGetCurrentOrganization } from "../../hooks/useGetCurrentOrganization";
import { CelminoController, Guard } from "../../CelminoController";
import { DefaultWorkspaceGuard } from "../../guards/WokspaceGuard";
import { OrganizationGuard } from "../../guards/LoginGuard";
import { useAccount } from "@celmino/ui";
import { CreateOrganizationView } from "../../views/CreateOrganizationView";

//@Guard(OrganizationGuard)
export class DefaultWorkspaceController extends CelminoController {
  public override LoadView(): UIView {
    const { account } = useAccount();
    const { memberships, isLoading: isMembershipLoading } = useListAccountMemberships('console');
    return (
      isMembershipLoading ? Fragment() :
        account.prefs?.organization != null ? UINavigate(`/@/organization-${account.prefs?.organization}`) :
          memberships.length > 0 ? UINavigate(`/@/organization-${memberships[0].teamId}`) :
            CreateOrganizationView()
    )
  }
}
