import { useGetDocument, useUpdateDocument } from "@realmocean/sdk";
import { Text as VibeText } from "@realmocean/vibe";
import { EventBus } from "@tuval/core";
import { HStack, ReactView, TextField, UIFormController, UIWidget, VStack, cLeading, cTopLeading, useParams } from "@tuval/forms";
import { ColorSelect, useApplet, useRealm } from '@celmino/ui'
import Circle from '@uiw/react-color-circle';
import React from "react";

export class GeneralSettingsController extends UIFormController {
    public LoadView() {

        const { realm } = useRealm();
        const { applet } = useApplet();
        //  const { workspaceId, appletId } = useParams();

        //  const { document: applet } = useGetDocument({ projectId: workspaceId, databaseId: 'workspace', collectionId: 'applets', documentId: appletId });

        const { updateDocument } = useUpdateDocument(realm.$id);

        return (
            VStack({ alignment: cTopLeading })(
                HStack({ alignment: cLeading })(
                    (VibeText as any)('General').fontSize(24).fontWeight('600')
                        .foregroundColor('rgb(42, 46, 52)')
                        .lineHeight(32)
                )
                    .height()
                    .margin('0 0 30px'),
                HStack({ alignment: cLeading })(
                    (VibeText as any)('Applet').fontSize(20).fontWeight('600')
                        .foregroundColor('rgb(42, 46, 52)')
                        .lineHeight(32)
                )
                    .height()
                    .margin('0 0 30px'),
                HStack({ alignment: cLeading, spacing: 10 })(
                    HStack({ alignment: cLeading })(
                        (VibeText as any)('Name').fontSize(16).fontWeight('600')
                            .foregroundColor('rgb(42, 46, 52)')
                            .lineHeight(32)
                    ).height().width(300),
                    HStack(
                        TextField()
                            .value(applet?.name)
                            .border('0')
                            .outline({ focus: 'none' })
                            .shadow('rgba(224, 227, 230, 0.7) 0px 0px 0px 1px')
                            .padding(12)
                            .cornerRadius(6)
                    ).height().width(400)
                )
                    .height()
                    .margin('0 0 30px'),

                HStack({ alignment: cLeading, spacing: 10 })(
                    HStack({ alignment: cLeading })(
                        (VibeText as any)('Icon').fontSize(16).fontWeight('600')
                            .foregroundColor('rgb(42, 46, 52)')
                            .lineHeight(32)
                    ).height().width(300),
                    HStack(
                        UIWidget("com.tuvalsoft.widget.icons")
                            .config({
                                onChange: (value) => {
                                    updateDocument({
                                        databaseId: 'workspace',
                                        collectionId: 'applets',
                                        documentId: applet.$id,
                                        data: {
                                            iconName: value.iconName,
                                            iconCategory: value.iconCategory
                                        }
                                    }, () => {
                                        updateDocument({
                                            databaseId: 'workspace',
                                            collectionId: 'ws_tree',
                                            documentId: applet.$id,
                                            data: {
                                                iconName: value.iconName,
                                                iconCategory: value.iconCategory
                                            }
                                        }, () => {
                                            EventBus.Default.fire('applet.added', { treeItem: value })
                                        })
                                    })
                                },
                                selectedIcon: applet?.iconName,
                                color: applet?.themeColor,
                                selectedCategory: applet?.iconCategory,
                                width: 32,
                                height: 32
                            })
                    )
                        .border('1px dashed rgba(69,104,251,.3)')
                        .transition('border-color .12s ease-in-out')
                        .cornerRadius(6)
                        .padding(4)
                        //.background('#FCE8E8')
                        .width(44).height(44).cornerRadius(5),


                )
                    .height()
                    .margin('0 0 30px'),
                HStack({ alignment: cTopLeading, spacing: 10 })(
                    HStack({ alignment: cLeading })(
                        (VibeText as any)('Theme Color')
                            .fontSize(16).fontWeight('600')
                            .foregroundColor('rgb(42, 46, 52)')
                            .lineHeight(32),
                    ).height().width(300),
                    HStack(
                        ReactView(
                            <Circle
                                colors={['#4A4A4A',
                                    '#6A849B',
                                    '#BEC5CC',
                                    '#D40915',
                                    '#E72065',
                                    '#9C2BAF',
                                    '#673DB6',
                                    '#3E53B4',
                                    '#2978FB',
                                    '#199EE3',
                                    '#1FBED3',
                                    '#159789',
                                    '#4FAF54',
                                    '#8EC351',
                                    '#FBA32F',
                                    '#FC551F',
                                    '#B04E31',
                                    '#8077F1',
                                    '#6A85FF',
                                    '#40A6E5',
                                    '#3FB1B2',
                                    '#64C6A2',
                                    '#F9BE34',
                                    '#E78845',
                                    '#DC646A',
                                    '#F17EAD',
                                    '#C580E6',
                                    '#BBA399',
                                    '#595D66']}
                                color={applet.themeColor}
                                onChange={(color) => {
                                    updateDocument({
                                        databaseId: 'workspace',
                                        collectionId: 'applets',
                                        documentId: applet.$id,
                                        data: {
                                            themeColor: color.hex
                                        }
                                    }, () => {
                                        updateDocument({
                                            databaseId: 'workspace',
                                            collectionId: 'ws_tree',
                                            documentId: applet.$id,
                                            data: {
                                                iconColor: color.hex
                                            }
                                        }, (item) => {
                                            EventBus.Default.fire('applet.added', { treeItem: item })
                                        })
                                    })
                                }
                                }
                            />
                        )
                    ).maxWidth(500),
                  
                )
                    .height()
                    .margin('0 0 30px'),



            )
                .padding('24px 48px')
        )
    }

}