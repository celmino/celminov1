import { useAccount } from "@celmino/platform";
import { useCreateDatabase, useListAccountMemberships } from "@realmocean/sdk";
import { Button, Fragment, Text, UINavigate, UIView, VStack } from "@tuval/forms";
import { CelminoController } from "../../CelminoController";
import { useGetSubdomain } from "../../hooks/useGetSubdomain";
import { CreateOrganizationView } from "../../views/CreateOrganizationView";

//@Guard(OrganizationGuard)
export class DefaultWorkspaceController extends CelminoController {
  public override LoadView(): UIView {
    const { account } = useAccount();
    const { memberships, isLoading: isMembershipLoading } = useListAccountMemberships('console');
    return (
      isMembershipLoading ? Fragment() :
        account.prefs?.organization != null ? UINavigate(`/app/organization-${account.prefs?.organization}`) :
          memberships.length > 0 ? UINavigate(`/app/organization-${memberships[0].teamId}`) :
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
