
import { ForEach, HStack, Text, TextField, UIController, UIRouteOutlet, UIView, VStack, cLeading, cTopLeading, urlFriendly, useState } from "@tuval/forms";
import { SettingsMenu } from "../views/SettingsMenu";
import { Query, Services, useListUsers, useInviteMemberToOrganization, Role, useGetMe, setUpProject, useCreateUser } from "@realmocean/sdk";
import { useAccount, useRealm } from "@celmino/ui";
import { LoadingButton } from '@realmocean/atlaskit'
import { htmlEncode } from "../../../../utils/htmlencode";



export class UsersController extends UIController {
    public override LoadView(): UIView {
        const { account } = useAccount();

        const { realm } = useRealm();
        const { users, isLoading } = useListUsers(realm.$id);

        const { createUser } = useCreateUser(realm.$id);

        const { createOrganizationMembership } = useInviteMemberToOrganization(realm.teamId);

        const [name, setName] = useState();
        const [email, setEmail] = useState();
        return (
            HStack({ alignment: cTopLeading })(
                SettingsMenu('users'),
                VStack(
                    Text(JSON.stringify(account)),
                    ...ForEach(users)(user =>
                        HStack({ alignment: cLeading, spacing: 10 })(
                            Text(user.name),
                            Text(user.email)
                        )
                    ),
                    TextField().onChange((e) => setName(e)),
                    TextField().onChange((e) => setEmail(e)),
                    LoadingButton().label('Invite').appearance('primary')
                        .onClick(() => {
                            setUpProject('console', undefined);
                            Services.Teams.listMemberships(realm.teamId).then(result => {
                             //   alert(JSON.stringify(result.memberships))
                                if (result.memberships.findIndex(membership => membership.userEmail === email) > -1) {
                                    createUser({
                                        name: email,
                                        email: name
                                    } as any);
                                } else {

                                    createOrganizationMembership({
                                        organizationId: realm.teamId,
                                        email: email,
                                        name: name,
                                        url: window.location.href.indexOf('localhost') > -1 ?  `http://localhost/invite?teamId=${realm.teamId}&realmId=${realm.$id}&realmName=${encodeURIComponent(realm.name)}&userName=${encodeURIComponent(name)}` : `https://celmino.io/invite?teamId=${realm.teamId}&realmId=${realm.$id}&realmName=${encodeURIComponent(realm.name)}&userName=${encodeURIComponent(name)}`,
                                        roles: [Role.any()]
                                    })

                                }

                            })
                        })
                )
            )

        )
    }
}