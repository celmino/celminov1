import { useListRealms, Query, useGetOrganization } from "@realmocean/sdk";
import { is } from "@tuval/core";
import { Fragment, Text, UINavigate, UIViewBuilder, useParams } from "@tuval/forms"
import { useGetCurrentOrganization } from "../hooks/useGetCurrentOrganization";
import { CreateWorkspaceView } from "../views/CreateWorkspaceView";
import { Release, Wait } from "../views/WaitViewClass";


export const WorkspaceGuard = () => {
    const { workspaceId } = useParams();
    return {
        release: workspaceId,
        view: (
            UINavigate('/@/workspace/select')
        )
    }
}

export const DefaultWorkspaceGuard = () => {
    const { organizationId } = useParams();
    const { organization, isLoading } = useGetOrganization({ organizationId, hookEnabled: true }) //useGetCurrentOrganization();
    const { realms, isLoading: isRealmsLoading } = useListRealms(organization != null, [
        Query.equal('teamId', organization?.$id)
    ])
    const { workspaceId } = useParams();

    return (
        workspaceId != null ? Release() :
            isLoading ? Text('fdsfsdf') :
                isRealmsLoading ? Wait() :
                    (realms?.length === 0) ? UINavigate(`/@/${organization.name}-${organization.$id}/workspace/select`) :
                        UINavigate(`/@/${organization.name}-${organization.$id}/${realms[0].name}-${realms[0].$id}`)



    )
}

