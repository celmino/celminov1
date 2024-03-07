import { Query, useGetMe, useGetOrganization, useListTeamMemberships } from "@realmocean/sdk";
import { Fragment, UINavigate, useParams, Text } from "@tuval/forms";
import { Release, Wait } from "../views/WaitViewClass";
import { urlFriendly } from "../utils/urlFriendly";


export const LoginGuard = () => {
    const { me, isLoading } = useGetMe('console');

    return (
        isLoading ? Wait() :
            me == null ? UINavigate('/login') : Release()
    )
}

export const OrganizationGuard = () => {
    const { organizationId } = useParams();

    return (
        organizationId ? Release() : UINavigate('/app/organization/select')
    )
}


export const MembershipGuard = () => {
    const { organizationId } = useParams();
    const { me, isLoading } = useGetMe('console');

    const { organization, isLoading: isOrganizationLoading } = useGetOrganization({ organizationId, hookEnabled: true });

    const { memberships, total, isLoading: isMembershipsLoading } = useListTeamMemberships('console', organizationId, [
        Query.equal('confirm', true)
    ]);

    const isMember = memberships.find(m => m.userId === me?.$id) != null;

    return (
        (isLoading || isOrganizationLoading || isMembershipsLoading) ? Wait() :
            isMember ? UINavigate(`/app/${urlFriendly(organization.name)}-${organization.$id}/workspace/select`)  :
           Text('You are not member of this organization')
              
    )
} 