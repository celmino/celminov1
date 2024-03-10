import { UIRoute, UIRoutes } from "@tuval/forms"

import { LogoutController } from "./logout/+controller"
import { WorkspaceLayoutController } from "./app/workspace/+controller"
import { HomeController } from "./app/*/+controller"
import { OrganizationController } from "./app/organization/[organizationId]/+controller"
import { AppletController } from "./app/workspace/[workspaceId]/applet/[appletId]/+controller"
import { RedirectToAppController } from "./RedirectToAppController"
import { LoginController } from "./login/+controller"
import { SignupController } from "./signup/+controller"
import { WorkspaceSelectController } from "./app/workspace/select/+controller"
import { OrganizationSelectController } from "./app/organization/select/+controller"
import { LayoutController, PublicLayoutController } from "./app/+controller"
import { WorkspaceController } from "./app/workspace/[workspaceId]/+controller"
import { DefaultWorkspaceController } from "./app/+default"
import { ResetPasswordController } from "./reset-password/+controller"
import { UpdatePasswordController } from "./update-password/+controller"
import { LandingController } from "./LandingController"
import { PublicWorkspaceLayoutController } from "./app/workspace/@controller"


export const Routes = () => {
    return (
        UIRoutes(
            UIRoute('/@', LayoutController).children(
                UIRoute('', DefaultWorkspaceController),
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