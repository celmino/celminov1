import { useNavigate, urlFriendly } from '@tuval/forms'
import { useApplet, useOrganization, useRealm } from "../context"


export const useAppletNavigate = () => {
    const organization = useOrganization();
    const { realm } = useRealm();
    const { applet } = useApplet();

    const navigate = useNavigate();

    return {
        navigate: (url: string) => {
            if (url?.length > 0 && url?.[0] !== '/') {
                url = '/' + url;
            }

            navigate(`/@/${urlFriendly(organization.name)}-${organization.$id}/${urlFriendly(realm.name)}-${realm.$id}/${urlFriendly(applet.name)}-${applet.$id}${url}`)
        }
    }

}