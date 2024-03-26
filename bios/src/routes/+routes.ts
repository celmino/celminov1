import { HStack, UIController, UIRoute, UIRouteOutlet, UIRoutes, UIView, cTopLeading } from "@tuval/forms"

import { LogoutController } from "./logout/+controller"
import { WorkspaceLayoutController } from "./@/workspace/+controller"

import { OrganizationController } from "./@/organization/[organizationId]/+controller"
import { AppletController } from "./@/workspace/[workspaceId]/applet/[appletId]/+controller"
import { RedirectToAppController } from "./RedirectToAppController"
import { LoginController } from "./login/+controller"
import { SignupController } from "./signup/+controller"
import { WorkspaceSelectController } from "./@/workspace/select/+controller"
import { OrganizationSelectController } from "./@/organization/select/+controller"
import { LayoutController, PersonelRealmLayoutController, PublicLayoutController, RealmLayoutController } from "./@/+controller"
import { PersonelWorkspaceController, WorkspaceController } from "./@/workspace/[workspaceId]/+controller"
import { DefaultWorkspaceController, TestDefaultWorkspaceController } from "./@/+default"
import { ResetPasswordController } from "./reset-password/+controller"
import { UpdatePasswordController } from "./update-password/+controller"
import { LandingController } from "./LandingController"
import { PublicWorkspaceLayoutController } from "./@/workspace/@controller"
import { LoginSuccess } from "./@/login-success/+controller"
import { LeftSideMenuView } from "./@/*/views/LeftSideMenu"
import { SettingsController } from "./@/settings/+controller"
import { GeneralSettingController } from "./@/settings/general/+controller"
import { SecuritySettingController } from "./@/settings/security/+controller"


export class HomeController extends UIController {
    public override LoadView(): UIView {
        return (
            HStack({ alignment: cTopLeading })(
                LeftSideMenuView('Home'),
                UIRouteOutlet().width("100%").height("100%")
            )
        )
    }
}


export const Routes = () => {
    return (
        UIRoutes(

            // Console Routes
            UIRoute('/app', LayoutController).children(
                UIRoute('', DefaultWorkspaceController),
                UIRoute('login-success', LoginSuccess),
                UIRoute('*', HomeController),
                UIRoute(':organizationId', OrganizationController).children(
                    UIRoute(':workspaceId', WorkspaceLayoutController).children(
                        UIRoute('', WorkspaceController).children(
                            UIRoute('applet/:appletId/*', AppletController),
                            UIRoute(':appletId/*', AppletController)
                        )
                    ),
                    UIRoute('workspace/select', WorkspaceSelectController)
                ),
                UIRoute('organization/select', OrganizationSelectController),
                /*  UIRoute('workspace/', WorkspaceLayoutController).children(
                     UIRoute(':workspaceId', WorkspaceController).children(
                         UIRoute('applet/:appletId/*', AppletController),
                         UIRoute(':appletId/*', AppletController)
                     )
                 ), */


            ),

            // Team Routes
            UIRoute('/@realm', RealmLayoutController).children(
                UIRoute('', WorkspaceController).children(
                    UIRoute('applet/:appletId/*', AppletController),
                    UIRoute(':appletId/*', AppletController)
                ),
                UIRoute('settings', SettingsController).children(
                    UIRoute('general', GeneralSettingController),
                    UIRoute('security', SecuritySettingController)
                )
            ),

            // Personel Routes
            UIRoute('/@private', RealmLayoutController).children(
                UIRoute('', PersonelWorkspaceController).children(
                    UIRoute('applet/:appletId/*', AppletController),
                    UIRoute(':appletId/*', AppletController)
                ),
                UIRoute('settings', SettingsController).children(
                    UIRoute('general', GeneralSettingController),
                    UIRoute('security', SecuritySettingController)
                )
            ),


            UIRoute('/@public', PublicWorkspaceLayoutController).children(
                //  UIRoute(':workspaceId', PublicWorkspaceLayoutController).children(
                UIRoute('', WorkspaceController).children(
                    //          UIRoute('applet/:appletId/*', AppletController),
                    UIRoute(':appletId/*', AppletController)
                )
                //  )
            ),

            UIRoute('/', LandingController),
            UIRoute('/login', LoginController),
            UIRoute('/signup', SignupController),
            UIRoute('/logout', LogoutController),
            UIRoute('/reset-password', ResetPasswordController),
            UIRoute('/update-password', UpdatePasswordController)
        )
    )
}