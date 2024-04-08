
import { ForEach, HStack, Text, TextField, UIController, UIRouteOutlet, UIView, VStack, cLeading, cTopLeading, useState } from "@tuval/forms";
import { SettingsMenu } from "../views/SettingsMenu";
import { Query, Services, useListUsers, useInviteMemberToOrganization, Role } from "@realmocean/sdk";
import { useRealm } from "@celmino/ui";
import { LoadingButton } from '@realmocean/atlaskit'



export class UsersController extends UIController {
    public override LoadView(): UIView {
        const { realm } = useRealm();
        const { users, isLoading } = useListUsers(realm.$id);

        const { createOrganizationMembership } = useInviteMemberToOrganization(realm.teamId);

        const [email, setEmail] = useState();
        return (
            HStack({ alignment: cTopLeading })(
                SettingsMenu('users'),
                VStack(
                    ...ForEach(users)(user =>
                        HStack({ alignment: cLeading, spacing: 10 })(
                            Text(user.name),
                            Text(user.email)
                        )
                    ),
                    TextField().onChange((e) => setEmail(e)),
                    LoadingButton().label('Invite').appearance('primary')
                        .onClick(() => {
                            Services.Accounts.list([
                                Query.equal('email', email)
                            ]).then(result => {
                                if (result.total === 0) {
                                    createOrganizationMembership({
                                        organizationId: realm.teamId,
                                        email: email,
                                        name: email,
                                        url: `${window.location.origin}/invite?teamId=${realm.teamId}&realmId=${realm.$id}`,
                                        roles: [Role.any()]
                                    })
                                } else {
                                    alert('User already exist.')
                                }
                            })
                        })
                )
            )

        )
    }
}