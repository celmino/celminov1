import { ButtonRenderer, InputRenderer } from "@realmocean/antd";
import { Query, Services, useCreateMagicURL, useCreateRealm, useCreateTeam, useDeleteSession, useGetMe, useGetOrganization, useListRealms } from "@realmocean/sdk";

import { Button, ForEach, HStack, Heading, Input, TextField, Text, UINavigate, UIViewBuilder, VStack, useNavigate, useState, Spacer, cLeading, cHorizontal, darken, Icon, Icons, HDivider, useParams } from "@tuval/forms";
import { useGetCurrentOrganization } from "../hooks/useGetCurrentOrganization";
import { urlFriendly } from "../utils/urlFriendly";
import { useAccount, useRealm } from "@celmino/ui";
import { useGetHostName, useGetProtocol } from "../hooks/useGetProtocol";


export const CreateWorkspaceView = () => UIViewBuilder(() => {

    const { organizationId } = useParams();
    const [workspaceName, setWorkspaceName] = useState('');
    const [workspaceId, setWorkspaceId] = useState('');
    const { me } = useGetMe('console');
    const navigate = useNavigate();
    // const { organizationId } = useParams();
    const { organization, isLoading: isOrganizationLoading } = useGetOrganization({ organizationId, hookEnabled: true }); // useGetCurrentOrganization();

    const { createRealm, isLoading } = useCreateRealm();
    const { deleteSession } = useDeleteSession('console');

    const { account } = useAccount();

    return (
        isOrganizationLoading ? Text('Loading...') : organization == null ? UINavigate('/app/organization/select') :
            UIViewBuilder(() => {
                const { realms, isLoading: isRealmsLoading } = useListRealms(organization != null, [
                    Query.equal('teamId', organization.$id)
                ])
                return (
                    VStack(
                        VStack({ spacing: 10 })(
                            Heading(organization?.name).fontSize('2.8rem').foregroundColor('#090e13')
                                .fontFamily('Graphik Medium,sans-serif'),
                                Heading(account.email).fontSize('2.8rem').foregroundColor('#090e13')
                                .fontFamily('Graphik Medium,sans-serif'),
                            HStack(
                                Text('Select another organization')
                                    .fontSize(16)
                            )
                                .height()
                                .onClick(() => {
                                    navigate('/app/organization/select');
                                }),

                            Heading('Realms').fontFamily('"Hagrid", sans-serif').fontSize('6rem').foregroundColor('#090e13').lineHeight(90),

                            VStack(
                                ...ForEach([{$id:'the', name:'the, Celmino'}])(realm =>
                                    UIViewBuilder(() => {
                                        const { createMagicURL } = useCreateMagicURL(realm.$id);
                                        return (
                                            HStack({ alignment: cLeading, spacing: 10 })(
                                                HStack({ alignment: cLeading })(
                                                    Text(realm.name).fontFamily('"Graphik Regular", sans-serif').fontSize('2rem')
                                                ).height(),
                                                Icon(Icons.MoveArrowRight)
                                            )
                                                .cursor('pointer')
                                                .height()
                                                .padding('1.6rem 2rem 1.6rem 0')
                                                .foregroundColor('#242938')
                                                .cornerRadius(6)
                                                .background({ hover: darken('#7FE8D4', 0.05) })
                                                .onClick(() => {
                                                    createMagicURL({
                                                        userId: account.$id,
                                                        email: account.email,
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
                                                    //navigate(`/@/${urlFriendly(organization.name)}-${organization.$id}/${realm.name}-${realm.$id}`)
                                                })
                                        )
                                    })

                                )
                            ).padding(cHorizontal, 20).height().maxWidth('100%'),
                            HDivider().height(1).background('rgba(125, 141, 154, 0.1)'),
                            HStack({ alignment: cLeading })(
                                Text('Create a new realm').fontFamily('"Graphik Regular", sans-serif').fontSize('2rem')
                            ).height().padding('1.6rem 2rem 1.6rem 0'),
                            HStack({ alignment: cLeading })(
                                Text('Log in with another email').fontFamily('"Graphik Regular", sans-serif').fontSize('2rem')
                            ).height().padding('1.6rem 2rem 1.6rem 0')
                                .onClick(() => {
                                    navigate('/logout');
                                }),
                            HStack(
                                TextField()
                                .padding()
                                .border('none')
                                .borderBottom('1px solid #000')
                                .background('transparent')
                                .outline({ focus: 'none' })
                                .maxWidth(300)
                                .onChange((value: string) => {
                                    setWorkspaceName(value)
                                }),
                                HStack().allWidth(20),
                                TextField()
                                    .padding()
                                    .border('none')
                                    .borderBottom('1px solid #000')
                                    .background('transparent')
                                    .outline({ focus: 'none' })
                                    .maxWidth(300)
                                    .onChange((value: string) => {
                                        setWorkspaceId(value)
                                    })

                            ).width('50%')
                                .height(),
                            Button().renderer(ButtonRenderer).label('Submit')
                                .loading(isLoading)
                                .disabled(isLoading)
                                .onClick(async () => {
                                    createRealm({
                                        realmId: workspaceId,
                                        name: workspaceName,
                                        organizationId: organization?.$id,
                                    }, async (workspace) => {

                                        const database = await Services.Databases.create(workspace.$id, 'workspace', 'Workspace', 'workspace');

                                        await Services.Databases.createCollection(workspace.$id, database.$id, 'realmInfo', 'RealmInfo');
                                        await Services.Databases.createStringAttribute(workspace.$id, database.$id, 'realmInfo', 'name', 255, false);
                                        await Services.Databases.createStringAttribute(workspace.$id, database.$id, 'realmInfo', 'teamId', 255, false);


                                        const appletCol = await Services.Databases.createCollection(workspace.$id, database.$id, 'applets', 'Applets');
                                        const nameAttr = await Services.Databases.createStringAttribute(workspace.$id, database.$id, appletCol.$id, 'name', 255, false);
                                        const parent = await Services.Databases.createStringAttribute(workspace.$id, database.$id, appletCol.$id, 'parent', 255, false);
                                        const opaAttr = await Services.Databases.createStringAttribute(workspace.$id, database.$id, appletCol.$id, 'opa', 255, false);
                                        const typeAttr = await Services.Databases.createStringAttribute(workspace.$id, database.$id, appletCol.$id, 'type', 255, false);
                                        const iconName = await Services.Databases.createStringAttribute(workspace.$id, database.$id, appletCol.$id, 'iconName', 255, false);
                                        const iconCategory = await Services.Databases.createStringAttribute(workspace.$id, database.$id, appletCol.$id, 'iconCategory', 255, false);
                                        const themeColor = await Services.Databases.createStringAttribute(workspace.$id, database.$id, appletCol.$id, 'themeColor', 255, false, '-1');

                                        //Tree Collection Creating
                                        const treeCol = await Services.Databases.createCollection(workspace.$id, database.$id, 'ws_tree', 'Workspace Tree');
                                        await Services.Databases.createStringAttribute(workspace.$id, database.$id, treeCol.$id, 'name', 255, false);
                                        await Services.Databases.createStringAttribute(workspace.$id, database.$id, treeCol.$id, 'type', 255, false);
                                        await Services.Databases.createStringAttribute(workspace.$id, database.$id, treeCol.$id, 'parent', 255, false);
                                        await Services.Databases.createStringAttribute(workspace.$id, database.$id, treeCol.$id, 'path', 1255, false);
                                        await Services.Databases.createStringAttribute(workspace.$id, database.$id, treeCol.$id, 'fullPath', 1255, false);
                                        await Services.Databases.createStringAttribute(workspace.$id, database.$id, treeCol.$id, 'spaceId', 255, false);
                                        await Services.Databases.createStringAttribute(workspace.$id, database.$id, treeCol.$id, 'tree_widget', 255, false);
                                        await Services.Databases.createStringAttribute(workspace.$id, database.$id, treeCol.$id, 'appletId', 255, false);
                                        await Services.Databases.createStringAttribute(workspace.$id, database.$id, treeCol.$id, 'iconName', 255, false);
                                        await Services.Databases.createStringAttribute(workspace.$id, database.$id, treeCol.$id, 'iconCategory', 255, false);
                                        await Services.Databases.createStringAttribute(workspace.$id, database.$id, treeCol.$id, 'iconColor', 255, false, '-1');

                                        await Services.Databases.createDocument(workspace.$id, database.$id, 'realmInfo',workspace.$id,  {
                                            name : workspaceName,
                                            teamId: organization?.$id
                                        });

                                        Services.Accounts.createMagicURL( account.$id, account.email).then((data: any)=> {
                                            const params = data?.message?.split('&');
                                            const userName = params[0];
                                            const token = params[1];
                                            const realmId = params[3];


                                            const protocol = useGetProtocol();
                                            const hostName = useGetHostName();
                                            window.open(`${protocol}//${realmId}.${hostName}/@realm/?userId=${userName}&secret=${token}`);
                                        });

                                      
                                       // navigate(`/app/${urlFriendly(organization.name)}-${organization.$id}/${workspace.name}-${workspace.$id}`)
                                    })
                                }),
                                Button().renderer(ButtonRenderer).label('Create Personel Workspace')
                                .loading(isLoading)
                                .disabled(isLoading)
                                .onClick(async () => {
                                    createRealm({
                                        realmId: account.$id,
                                        name: account.name,
                                        organizationId: account.$id,
                                    }, async (workspace) => {


                                        const database = await Services.Databases.create(workspace.$id, 'workspace', 'Workspace', 'workspace');
                                        const appletCol = await Services.Databases.createCollection(workspace.$id, database.$id, 'applets', 'Applets');
                                        const nameAttr = await Services.Databases.createStringAttribute(workspace.$id, database.$id, appletCol.$id, 'name', 255, false);
                                        const parent = await Services.Databases.createStringAttribute(workspace.$id, database.$id, appletCol.$id, 'parent', 255, false);
                                        const opaAttr = await Services.Databases.createStringAttribute(workspace.$id, database.$id, appletCol.$id, 'opa', 255, false);
                                        const typeAttr = await Services.Databases.createStringAttribute(workspace.$id, database.$id, appletCol.$id, 'type', 255, false);
                                        const iconName = await Services.Databases.createStringAttribute(workspace.$id, database.$id, appletCol.$id, 'iconName', 255, false);
                                        const iconCategory = await Services.Databases.createStringAttribute(workspace.$id, database.$id, appletCol.$id, 'iconCategory', 255, false);
                                        const themeColor = await Services.Databases.createStringAttribute(workspace.$id, database.$id, appletCol.$id, 'themeColor', 255, false, '-1');

                                        //Tree Collection Creating
                                        const treeCol = await Services.Databases.createCollection(workspace.$id, database.$id, 'ws_tree', 'Workspace Tree');
                                        await Services.Databases.createStringAttribute(workspace.$id, database.$id, treeCol.$id, 'name', 255, false);
                                        await Services.Databases.createStringAttribute(workspace.$id, database.$id, treeCol.$id, 'type', 255, false);
                                        await Services.Databases.createStringAttribute(workspace.$id, database.$id, treeCol.$id, 'parent', 255, false);
                                        await Services.Databases.createStringAttribute(workspace.$id, database.$id, treeCol.$id, 'path', 1255, false);
                                        await Services.Databases.createStringAttribute(workspace.$id, database.$id, treeCol.$id, 'fullPath', 1255, false);
                                        await Services.Databases.createStringAttribute(workspace.$id, database.$id, treeCol.$id, 'spaceId', 255, false);
                                        
                                        await Services.Databases.createStringAttribute(workspace.$id, database.$id, treeCol.$id, 'tree_widget', 255, false);
                                        await Services.Databases.createStringAttribute(workspace.$id, database.$id, treeCol.$id, 'appletId', 255, false);
                                        await Services.Databases.createStringAttribute(workspace.$id, database.$id, treeCol.$id, 'iconName', 255, false);
                                        await Services.Databases.createStringAttribute(workspace.$id, database.$id, treeCol.$id, 'iconCategory', 255, false);
                                        await Services.Databases.createStringAttribute(workspace.$id, database.$id, treeCol.$id, 'iconColor', 255, false, '-1');



                                        //navigate(`/app/${urlFriendly(organization.name)}-${organization.$id}/${workspace.name}-${workspace.$id}`)
                                    })
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
            })

    )
})
