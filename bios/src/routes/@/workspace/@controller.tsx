import { AnonymousContext, RealmContext, useRealm } from '@celmino/ui';
import { ProjectContext, useCreateAnonymousSession } from "@realmocean/sdk";
import { Text as VibeText } from "@realmocean/vibe";
import { Button, DialogPosition, Fragment, HStack, Icon, Icons, PopupButton, ReactView, Spacer, SvgIcon, Text, UIController, UIRouteOutlet, UIScene, UIView, UIViewBuilder, VStack, cHorizontal, cLeading, cTop, cTopLeading, cVertical, useEffect, useNavigate, useParams, useState } from "@tuval/forms";
import React from "react";

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