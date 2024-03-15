import { SelectSiderDialog, useApplet } from "@celmino/ui";
import { Models, useCreateCollection, useGetDatabase, useListCollections } from "@realmocean/sdk";
import {
    UIFormController,
    UIRouteOutlet,
    VStack,
    cTopLeading,
    useNavigate,
    useParams,
    useState, Text, ReactView, DialogStack, Icon, SvgIcon, UIViewBuilder, UIWidget, cTop, useDialogStack, HStack
} from "@tuval/forms";
import React from "react";
import { ActionPanel } from "../views/ActionPanel";
import { ViewHeader } from "../views/ViewHeader";


export class AppletController extends UIFormController {
    public LoadView() {
        const { workspaceId, appletId } = useParams();
        const { database } = useGetDatabase(workspaceId, appletId);
        const { createCollection } = useCreateCollection(workspaceId);
        const { collections } = useListCollections(workspaceId, appletId);

        const [selectedCollection, setSelectedCollection] = useState<Models.Collection>(null);

        const navigate = useNavigate();

        const {applet} = useApplet();

        return (
            VStack({ alignment: cTopLeading })(
                ReactView(
                    <DialogStack>
                        {
                            VStack({ alignment: cTopLeading })(
                                VStack({ alignment: cTopLeading })(
                                    ActionPanel(),
                                    ViewHeader(applet?.name, (e) => {
                                    })
                                ).background('#F9FAFB')




                            ).render()
                        }
                    </DialogStack>
                )

            )
        )
    }

}