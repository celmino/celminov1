import { AnonymousContext, RealmContext } from '@celmino/ui';
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

        const { workspaceId } = useParams();
        const navigate = useNavigate();

        return (
            AnonymousContext(() =>
                ProjectContext(() =>
                    RealmContext(() =>
                        UIViewBuilder(() => {
                            return (

                                UIViewBuilder(() =>
                                    UIScene(

                                        VStack(
                                            HStack(
                                                Button(
                                                    Icon(Icons.Add).fontSize(20)
                                                )
                                                    .width(50).height(50)
                                                    .cornerRadius('50%')
                                                    .onClick(() => {
                                                    })
                                            ).width().height().position('absolute').right('10px').bottom('10px')
                                                .zIndex(100000),
                                            HStack({ alignment: cLeading })(

                                                HStack({ alignment: cLeading })(
                                                    HStack(
                                                        ReactView(
                                                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" data-name="Glyph Icon" viewBox="7.210000038146973 4 49.58000183105469 56" x="409.4248" y="0" data-fill-palette-color="accent" id="s-0"><path d="M49.13 20.84l-16-9.26V4L55.7 17.05ZM32 50.52L16 41.26V22.74l16-9.26 16 9.26V41.26ZM30.91 11.58l-16 9.26L8.3 17.05 30.91 4ZM13.77 22.74V41.26L7.21 45.05V19Zm1.1 20.42l16 9.26V60L8.3 47Zm18.22 9.26l16-9.26L55.7 47 33.09 60ZM50.23 41.26V22.74L56.79 19v26.1Z" fill="#8bd8bc" data-fill-palette-color="accent" /></svg>
                                                        ).frame(true).paddingLeft('15px')
                                                    ).width(),
                                                    Spacer(),
                                                    HStack(
                                                        PopupButton(
                                                            HStack({ alignment: cLeading, spacing: 5 })(
                                                                HStack(
                                                                    Text('ST').fontSize(10)
                                                                )
                                                                    .background('rgb(255, 87, 34)')
                                                                    .cornerRadius('50%')
                                                                    .width(20)
                                                                    .height(20)


                                                            ).height(30).cursor('pointer').padding(cHorizontal, 10)
                                                        )(
                                                            UIViewBuilder(() => {


                                                                return (
                                                                    VStack({ spacing: 0 })(

                                                                        HStack({ alignment: cLeading })(
                                                                            VibeText('ORGANIZATION(S)').fontSize(12)
                                                                        ).padding(cVertical, 5),

                                                                        HStack({ alignment: cLeading })(
                                                                            Icon(SvgIcon('cu3-icon-logout')),
                                                                            VibeText('Logout').fontSize(14)
                                                                        ).allHeight(32)
                                                                            .cursor('pointer')
                                                                            .background({ hover: '#F0F1F3' })
                                                                            .padding('7px 0')

                                                                            .onClick(() => {
                                                                                _hideHandle();
                                                                                navigate('/logout');
                                                                            })
                                                                        ,
                                                                    ).padding().width(256)
                                                                )
                                                            })
                                                        )

                                                            .hideHandle(hideHandle => _hideHandle = hideHandle)
                                                            .dialogPosition(DialogPosition.BOTTOM_END)
                                                    ).width(),


                                                ),


                                            )
                                                .fontSize('1.2rem')
                                                .height(40).minHeight('40px')
                                                .foregroundColor('white'),

                                            HStack({ alignment: cTop })(
                                                VStack({ alignment: cTopLeading })(
                                                    HStack(
                                                        // UIRouteOutlet().width('100%').height('100%')
                                                        //Desktop('')
                                                        UIRouteOutlet().width('100%').height('100%')
                                                        // UIRouteOutlet().width('100%').height('100%')
                                                    )
                                                        .overflow('hidden')
                                                        .cornerRadius(20)
                                                )

                                                    .background('#F6F7FB')
                                                    .overflow('hidden')
                                                    .width('100%'),
                                            ),
                                            HStack({ alignment: cLeading })(

                                                HStack(
                                                    HStack(
                                                        Icon(SvgIcon('cu3-icon-circleCheckFilled', '16px', '16px', 'white'))
                                                    ).width(),
                                                    HStack(
                                                        PopupButton(
                                                            HStack({ alignment: cLeading, spacing: 5 })(
                                                                Icon(SvgIcon('cu3-icon-nineDots', '16px', '16px', 'white'))


                                                            ).height(30).cursor('pointer').padding(cHorizontal, 10)
                                                        )(
                                                            UIViewBuilder(() => {


                                                                return (
                                                                    VStack({ spacing: 0 })(
                                                                        HStack(
                                                                            HStack({ alignment: cLeading, spacing: 5 })(
                                                                                HStack().allWidth(30).allHeight(30).cornerRadius('50%').background('gray'),
                                                                                VStack({ alignment: cLeading })(
                                                                                )
                                                                            ).padding(5)
                                                                                .cornerRadius(6)
                                                                                .background({ hover: '#ECEEEF' })
                                                                        ).padding(5),
                                                                        HStack({ alignment: cLeading })(
                                                                            VibeText('ORGANIZATION(S)').fontSize(12)
                                                                        ).padding(cVertical, 5),

                                                                        HStack({ alignment: cLeading })(
                                                                            Icon(SvgIcon('cu3-icon-logout')),
                                                                            VibeText('Logout').fontSize(14)
                                                                        ).allHeight(32)
                                                                            .cursor('pointer')
                                                                            .background({ hover: '#F0F1F3' })
                                                                            .padding('7px 0')

                                                                            .onClick(() => {
                                                                                _hideHandle();
                                                                                navigate('/logout');
                                                                            })
                                                                        ,
                                                                    ).padding().width(256)
                                                                        .marginBottom('10px')
                                                                )
                                                            })
                                                        )



                                                            .hideHandle(hideHandle => _hideHandle = hideHandle)
                                                            .dialogPosition(DialogPosition.TOP)
                                                    ).width(),


                                                ),


                                            )
                                                .fontSize('1.2rem')
                                                .height(40).minHeight('40px')
                                                .foregroundColor('white'),

                                        )

                                            .overflow('hidden')

                                            .background('#323452')
                                    )
                                )
                            )
                        })
                    )

                ).projectId(workspaceId)
            )


        )
    }
}