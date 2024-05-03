import { useApplet, useRealm } from "@celmino/ui";
import { LoadingButton, Radio, Select, TextField } from "@realmocean/atlaskit";
import { CspBroker, Query, useCreateDocument, useListDocuments, useUpdateDocument } from "@realmocean/sdk";
import { Fragment, HStack, Spinner, Text, UIController, UIViewBuilder, VStack, cHorizontal, cLeading, cTopLeading, cVertical, useState } from "@tuval/forms";

export class ConnectController extends UIController {
    public LoadView() {
        const { realm } = useRealm();
        const { applet , settings} = useApplet();

        const [host, setHost] = useState();
        const [email, setEmail] = useState();
        const [token, setToken] = useState();

        const { createDocument } = useCreateDocument(realm.$id, applet.$id, 'settings');
        const { updateDocument } = useUpdateDocument(realm.$id);

        const { documents, isLoading } = useListDocuments(realm.$id, 'workspace', 'connections', [
            Query.equal('type', 'com.celmino.connection.csp')
        ])
        const [selectedConnection, setSelectedConnection] = useState<any>();
        const [projects, setProjects] = useState<any[]>();


        return (
            isLoading ? Spinner() :
                VStack({ alignment: cTopLeading })(
                    VStack({ alignment: cTopLeading })(
                        HStack({ alignment: cLeading })(
                            Text('Connect To Csp').fontSize(18).fontWeight('500')
                                .fontFamily('Inter Variable,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial')
                                .foregroundColor('rgb(42, 46, 52)')
                                .lineHeight(32)
                        )
                            .padding(cHorizontal, 16)
                            .padding(cVertical, 20)
                            .borderBottom('solid 1px #E2E8F0')
                            .height()
                            .margin('0 0 30px'),

                        VStack({ alignment: cTopLeading, spacing: 20 })(
                            VStack({ alignment: cTopLeading, spacing: 10 })(
                                HStack(
                                    Radio('Select Connection').isChecked(true)
                                ).height().marginLeft('-20px'),
                                Select('')
                                    .options(documents?.map(doc => ({
                                        label: doc.name,
                                        value: doc.key
                                    })))
                                    .onChange((value: any) => {
                                        setSelectedConnection({ ...value })
                                    })
                            ),
                            VStack({ alignment: cTopLeading, spacing: 10 })(

                                HStack(
                                    Radio('Create Connection').isChecked(false)
                                ).height().marginLeft('-20px'),
                                TextField().label('Csp Host')
                                    .helpMessage('Your Csp host address. For example "https://dev.bimser.net"')
                                    .onChange((e: any) => setHost(e.target.value)),
                                TextField().label('Token')
                                    .helpMessage('Email you are using for logging to Jira')
                                    .onChange((e: any) => setEmail(e.target.value)),
                                TextField().label('Bimser Encript Data')
                                    .helpMessage('Your Jira token created for Celmino')
                                    .onChange((e: any) => setToken(e.target.value)),
                                LoadingButton().label('Connect').appearance('primary')
                                    .onClick(async () => {
                                        const cspBroker = new CspBroker();
                                        cspBroker.setKey(selectedConnection.value);
                                        const projects = await cspBroker.getProjects();
                                        setProjects(projects);

                                      
                                        if ('key' in settings ) {
                                            updateDocument({
                                                databaseId: applet.$id,
                                                collectionId: 'settings',
                                                documentId: 'key',
                                                data: {
                                                    key: 'key',
                                                    value: selectedConnection.value
                                                }
                                            })
                                        } else {
                                            createDocument({
                                                documentId:'key',
                                                data: {
                                                    key: 'key',
                                                    value: selectedConnection.value
                                                }
                                            })
                                        }
                                    }),
                                (projects == null || settings == null) ? Fragment() :
                                    UIViewBuilder(() => {

                                        const [selectedProject, setSelectedProject] = useState<any[]>(settings.project);
                                        return (
                                            Select('Select Project')
                                                .options(projects?.map(project => ({
                                                    label: project.name,
                                                    value: project
                                                })))
                                                .onChange((item: any) => {

                                                    setSelectedProject(item.value);

                                                    if ('project' in settings ) {
                                                        updateDocument({
                                                            databaseId: applet.$id,
                                                            collectionId: 'settings',
                                                            documentId: 'project',
                                                            data: {
                                                                key: 'project',
                                                                value: JSON.stringify(item.value)
                                                            }
                                                        })
                                                    } else {
                                                        createDocument({
                                                            documentId:'project',
                                                            data: {
                                                                key: 'project',
                                                                value: JSON.stringify(item.value)
                                                            }
                                                        })
                                                    }

                                                  
                                                })
                                        )
                                    })

                                //  .isDisabled(host == null || email == null || token == null)
                            )
                        )
                            .maxWidth('600px')
                            .paddingLeft('40px')
                            .paddingRight('40px')
                            .paddingBottom('40px')
                            .height()
                    )
                        .height()
                        .background('white')
                        .cornerRadius(8)
                        .shadow('rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px')
                        .border('solid 1px #E2E8F0'),


                )
                    .padding('20px')
                    .background('#F8FAFC')
        )
    }
}