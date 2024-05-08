import { ButtonRenderer } from "@realmocean/antd";
import { Services, useCreateMagicURL, useCreateRealm, useGetOrganization, useGetRealm } from "@realmocean/sdk";

import { useCreatePersonelRealm } from "@celmino/platform";
import { Button, HStack, Heading, Text, TextField, UIController, UIView, VStack, cLeading, useNavigate } from "@tuval/forms";



function CreateUserRealm(userId: string): Promise<any> {
    return new Promise((resolve, reject) => {
        Services.Projects.create(userId, userId, userId).then(async (workspace) => {
            const database = await Services.Databases.create(userId, 'workspace', 'Workspace', 'workspace');
            const appletCol = await Services.Databases.createCollection(userId, database.$id, 'applets', 'Applets');
            const nameAttr = await Services.Databases.createStringAttribute(userId, database.$id, appletCol.$id, 'name', 255, false);
            const parent = await Services.Databases.createStringAttribute(userId, database.$id, appletCol.$id, 'parent', 255, false);
            const opaAttr = await Services.Databases.createStringAttribute(userId, database.$id, appletCol.$id, 'opa', 255, false);
            const typeAttr = await Services.Databases.createStringAttribute(userId, database.$id, appletCol.$id, 'type', 255, false);
            const iconName = await Services.Databases.createStringAttribute(userId, database.$id, appletCol.$id, 'iconName', 255, false);
            const iconCategory = await Services.Databases.createStringAttribute(userId, database.$id, appletCol.$id, 'iconCategory', 255, false);
            const themeColor = await Services.Databases.createStringAttribute(userId, database.$id, appletCol.$id, 'themeColor', 255, false, '-1');

            //Tree Collection Creating
            const treeCol = await Services.Databases.createCollection(userId, database.$id, 'ws_tree', 'Workspace Tree');
            await Services.Databases.createStringAttribute(userId, database.$id, treeCol.$id, 'name', 255, false);
            await Services.Databases.createStringAttribute(userId, database.$id, treeCol.$id, 'type', 255, false);
            await Services.Databases.createStringAttribute(userId, database.$id, treeCol.$id, 'parent', 255, false);
            await Services.Databases.createStringAttribute(userId, database.$id, treeCol.$id, 'path', 1255, false);
            await Services.Databases.createStringAttribute(userId, database.$id, treeCol.$id, 'fullPath', 1255, false);
            await Services.Databases.createStringAttribute(workspace.$id, database.$id, treeCol.$id, 'spaceId', 255, false);
            await Services.Databases.createStringAttribute(userId, database.$id, treeCol.$id, 'tree_widget', 255, false);
            await Services.Databases.createStringAttribute(userId, database.$id, treeCol.$id, 'appletId', 255, false);
            await Services.Databases.createStringAttribute(userId, database.$id, treeCol.$id, 'iconName', 255, false);
            await Services.Databases.createStringAttribute(userId, database.$id, treeCol.$id, 'iconCategory', 255, false);
            await Services.Databases.createStringAttribute(userId, database.$id, treeCol.$id, 'iconColor', 255, false, '-1');

            alert('created personel realm')
            resolve('')
            /*   createMagicURL({
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
                  window.location.href = `${protocol}//${realmId}.${hostName}/@realm/?userId=${userName}&secret=${token}`;

              }) */
        })
            .catch((error) => {
                console.log(error);
                alert('hata');
                reject(error);
                /*   createMagicURL({
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
                      window.location.href = `${protocol}//${realmId}.${hostName}/@realm/?userId=${userName}&secret=${token}`;

                  }) */
            })
    })
}

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
        const realmName = params.get('realmName');
        const userName = params.get('userName');
        const membershipId = params.get('membershipId');
        const userId = params.get('userId');
        const secret = params.get('secret');

        const { organization: userOrganization } = useGetOrganization({ organizationId: userId });
        const { realm: userRealm } = useGetRealm({ realmId: userId, enabled: true });

        const { createRealm } = useCreateRealm();

        const { createMagicURL } = useCreateMagicURL(realmId);

        const { realm: personelRealm, isLoading: isPersonelRealmLoading, isError, error } = useGetRealm({ realmId: userId, enabled: true });
        
        const { createPersonelRealm } = useCreatePersonelRealm();

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

                            Services.Teams.updateMembershipStatus(teamId, membershipId, userId, secret).then(async (membership) => {

                                if (!isPersonelRealmLoading && isError) {
                                  
                                    createPersonelRealm({
                                        realmId: userId,
                                        name: userName,
                                        organizationId: userId
                                    }, async () => {
                                        alert('var')
                                        await Services.Databases.createDocument(userId, 'workspace', 'membership', realmId, { name: realmName });

                                    })
                                } else {
                                    alert('yok')
                                    await Services.Databases.createDocument(userId, 'workspace', 'membership', realmId, { name: realmName });
                                }

                              /*   createMagicURL({
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
                                    window.location.href = `${protocol}//${realmId}.${hostName}/@realm/?userId=${userName}&secret=${token}`;
                                }) */


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
