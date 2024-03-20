import { useNavigate, urlFriendly } from '@tuval/forms'
import { useAccount, useApplet, useOrganization, useRealm } from "../context"
import { useGetSubdomain } from '../context/user/userContextRenderer';



export const useAppletNavigate = () => {
    const { account,isAnonymous } = useAccount();
    const organization = useOrganization();
    const { realm } = useRealm();
    const { applet } = useApplet();

    const navigate = useNavigate();

    return {
        navigate: (url: string) => {
            if (url?.length > 0 && url?.[0] !== '/') {
                url = '/' + url;
            }
            const subdomain = useGetSubdomain();
            if (subdomain) {
                navigate(`/@${isAnonymous ? 'public' : 'team'}/${urlFriendly(applet.name)}-${applet.$id}${url}`)
            } else {

                navigate(`/app/${urlFriendly(organization.name)}-${organization.$id}/${urlFriendly(realm.name)}-${realm.$id}/${urlFriendly(applet.name)}-${applet.$id}${url}`)
            }
        }
    }

}