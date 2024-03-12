import { UIRoute, UIRoutes } from "@tuval/forms"

import { LogoutController } from "./logout/+controller"
import { WorkspaceLayoutController } from "./@/workspace/+controller"
import { HomeController } from "./@/*/+controller"
import { OrganizationController } from "./@/organization/[organizationId]/+controller"
import { AppletController } from "./@/workspace/[workspaceId]/applet/[appletId]/+controller"
import { RedirectToAppController } from "./RedirectToAppController"
import { LoginController } from "./login/+controller"
import { SignupController } from "./signup/+controller"
import { WorkspaceSelectController } from "./@/workspace/select/+controller"
import { OrganizationSelectController } from "./@/organization/select/+controller"
import { LayoutController, PublicLayoutController } from "./@/+controller"
import { WorkspaceController } from "./@/workspace/[workspaceId]/+controller"
import { DefaultWorkspaceController } from "./@/+default"
import { ResetPasswordController } from "./reset-password/+controller"
import { UpdatePasswordController } from "./update-password/+controller"
import { LandingController } from "./LandingController"
import { PublicWorkspaceLayoutController } from "./@/workspace/@controller"
import { LoginSuccess } from "./@/login-success/+controller"


export const Routes = () => {
    return (
        UIRoutes(
            UIRoute('/@', LayoutController).children(
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

            UIRoute('/@public', PublicLayoutController).children(
                UIRoute(':workspaceId', PublicWorkspaceLayoutController).children(
                    UIRoute('', WorkspaceController).children(
                        UIRoute('applet/:appletId/*', AppletController),
                        UIRoute(':appletId/*', AppletController)
                    )
                )
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