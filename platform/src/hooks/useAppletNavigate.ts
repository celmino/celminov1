import { useNavigate, urlFriendly } from '@tuval/forms'
import { useAccount, useApplet, useOrganization, useRealm } from "../context"
import { useGetSubdomain } from '../context/user/userContextRenderer';
import { is } from '@tuval/core';



export const useAppletNavigate = (): { navigate: Function } => {
    const { account, isAnonymous } = useAccount();
    const organization = useOrganization();
    const { realm, isPersonel } = useRealm();
    const { applet } = useApplet();

    const navigate = useNavigate();

    return {
        navigate: (url: string, selectApplet: boolean = true) => {
            if (url?.length > 0 && url?.[0] !== '/') {
                url = '/' + url;
            }

            const appletId = selectApplet ? `[${applet.$id}]` : applet.$id;
            const subdomain = useGetSubdomain();
            if (isPersonel) {
                navigate(`/@private/${urlFriendly(applet.name)}-${appletId}${url}`)
            } else if (subdomain) {
                navigate(`/@${isAnonymous ? 'public' : 'realm'}/${urlFriendly(applet.name)}-${appletId}${url}`)
            } else {

                navigate(`/app/${urlFriendly(organization.name)}-${organization.$id}/${urlFriendly(realm.name)}-${realm.$id}/${urlFriendly(applet.name)}-${appletId}${url}`)
            }
        }
    }

}