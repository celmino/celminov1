import { ButtonRenderer, InputRenderer } from "@realmocean/antd";
import { Query, Services, useCreateMagicURL, useCreateRealm, useDeleteSession, useGetMe, useListRealms } from "@realmocean/sdk";

import { Button, ForEach, HStack, Heading, Input, TextField, Text, UINavigate, UIViewBuilder, VStack, useNavigate, useState, Spacer, cLeading, cHorizontal, darken, Icon, Icons, HDivider, UIController, UIView } from "@tuval/forms";
import { useGetHostName, useGetProtocol } from "../../hooks/useGetProtocol";





export class InviteController extends UIController {
    /* LoadViewInternal(): UIView {
        const result = (this as any).GetDepends();
        return UIViewBuilder(()=> {
            return (
                VStack(
                    result ,
                    this.LoadView()
                )
            )
        })
    } */
    public override LoadView(): UIView {

        const navigate = useNavigate();

        const params = new URLSearchParams(window.location.search);
        const teamId = params.get('teamId');
        const realmId = params.get('realmId');
        const membershipId = params.get('membershipId');
        const userId = params.get('userId');
        const secret = params.get('secret');

        const { createMagicURL } = useCreateMagicURL(realmId);

        return (

            VStack(
                VStack(
                    VStack({ spacing: 10 })(


                        Heading('Password').fontFamily('"Hagrid", sans-serif').fontSize('6rem').foregroundColor('#090e13').lineHeight(90),
                        VStack({ alignment: cLeading, spacing: 10 })(

                            TextField().fontSize('1.8rem')
                                .allHeight(40)
                                .placeholder('New password')
                                .transition('all 0.3s ease-in-out')
                                .border('none')
                                .borderBottom({ hover: '2px solid #162330' })
                                .background('white')
                                .outline({ focus: 'none' })
                                .padding('0 1.5rem').width(332)

                        ).height().marginBottom('1.5rem'),
                        TextField().fontSize('1.8rem')
                            .allHeight(40)
                            .placeholder('Confirm password')
                            .transition('all 0.3s ease-in-out')
                            .border('none')
                            .borderBottom({ hover: '2px solid #162330' })
                            .background('white')
                            .outline({ focus: 'none' })
                            .padding('0 1.5rem').width(332)

                    ).height().marginBottom('1.5rem'),

                    Button().renderer(ButtonRenderer).label('Submit')

                        .onClick(async () => {

                            Services.Teams.updateMembershipStatus(teamId, membershipId, userId, secret).then((membership)=> {
                                createMagicURL({
                                    userId: membership.userId,
                                    email: membership.userEmail,
                                    url: ''
                                }, (data: any) => {
                                    const params = data?.message?.split('&');
                                    const userName = params[0];
                                    const token = params[1];
                                    const realmId = params[3];


                                    const protocol = useGetProtocol();
                                    const hostName = useGetHostName();
                                    window.open(`${protocol}//${realmId}.${hostName}/@realm/?userId=${userName}&secret=${token}`);
                                    //window.location.href = `${protocol}//${realmId}.${hostName}/@realm/?userId=${userName}&secret=${token}`
                                    // alert(data?.message?.split('&'))
                                })
                            });

                        }),

                    HStack(
                        Text('Log in with another email')
                            .fontSize(16)
                    )
                        .height()
                        .onClick(() => {
                            navigate('/logout');
                        }),
                ).width(),
                HStack().height('9rem')
                    .background('linear-gradient(0deg,#fff 42.67%,hsla(0,0%,100%,.8) 60.67%,hsla(0,0%,100%,0))')
            ).background('#7FE8D4')
        )





    }
}
