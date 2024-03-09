import { useNavigate, urlFriendly } from '@tuval/forms'
import { useApplet, useOrganization, useRealm } from "../context"


export const useRealmNavigate = () => {
    const organization = useOrganization();
    const { realm } = useRealm();

    const navigate = useNavigate();

    return {
        navigate: (url: string) => {
            if (url?.[0] !== '/') {
                url += '/';
            }
            navigate(`/app/${urlFriendly(organization.name)}-${organization.$id}/${urlFriendly(realm.name)}-${realm.$id}${url}`)
        }
    }

}