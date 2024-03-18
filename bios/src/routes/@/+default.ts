import { Query, useCreateDatabase, useGetTeamMembership, useListAccountMemberships, useListRealms } from "@realmocean/sdk";
import { Button, Fragment, HStack, Text, UIController, UINavigate, UIView, UIViewBuilder, VStack } from "@tuval/forms";
import { CreateWorkspaceView } from "../../views/CreateWorkspaceView";
import { useGetCurrentOrganization } from "../../hooks/useGetCurrentOrganization";
import { CelminoController, Guard } from "../../CelminoController";
import { DefaultWorkspaceGuard } from "../../guards/WokspaceGuard";
import { OrganizationGuard } from "../../guards/LoginGuard";
import { useAccount, useRealm } from "@celmino/ui";
import { CreateOrganizationView } from "../../views/CreateOrganizationView";
import { useGetSubdomain } from "../../hooks/useGetSubdomain";

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


export class TestDefaultWorkspaceController extends CelminoController {
  public override LoadView(): UIView {

//    const { realm } = useRealm();
    const subdomain = useGetSubdomain();
    const { account } = useAccount();
    const { createDatabase } = useCreateDatabase(subdomain);

    //const { memberships, isLoading: isMembershipLoading } = useListAccountMemberships('console');
    return (
      VStack(
        Text(JSON.stringify(account)),
        Button(
          Text('sdfdsf')
        ).onClick(() => {
           createDatabase({
            name: 'sdfgsd',
            category: 'sdf',
            enabled: true
          }) 
        })
      )

    )
  }
}
