import { AnonymousContext, RealmContext, useRealm } from '@celmino/platform';
import { ProjectContext } from "@realmocean/sdk";
import { Text, UIController, UIRouteOutlet, UIView, UIViewBuilder, useNavigate } from "@tuval/forms";

let _hideHandle = null;
export class PublicWorkspaceLayoutController extends UIController {


    public BindRouterParams() {

    }

    public _LoadView(): UIView {

        return (
            Text('sdfsdfsdf')
        )
    }
    public LoadView(): UIView {


        const navigate = useNavigate();

        return (
            AnonymousContext(() =>
                RealmContext(() =>
                    UIViewBuilder(() => {
                        const { realm } = useRealm();

                        return (
                            ProjectContext(() =>
                                UIRouteOutlet().width('100%').height('100%')
                            ).projectId(realm.$id)
                        )
                    })


                )
            )


        )
    }
}