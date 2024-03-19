import { ColorSelect, useApplet, useRealm } from '@celmino/ui';
import { useUpdateDocument } from "@realmocean/sdk";
import { Text as VibeText } from "@realmocean/vibe";
import { EventBus } from "@tuval/core";
import { HStack, TextField, UIFormController, UIWidget, VStack, cLeading, cTopLeading } from "@tuval/forms";

export class GeneralSettingsController extends UIFormController {
    public LoadView() {

        const {realm} = useRealm();
        const {applet} = useApplet();
        const workspaceId = realm.$id;
        const appletId = applet.$id;

     
        const { updateDocument } = useUpdateDocument(workspaceId);

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
                                        documentId: appletId,
                                        data: {
                                            iconName: value.iconName,
                                            iconCategory: value.iconCategory
                                        }
                                    }, () => {
                                        updateDocument({
                                            databaseId: 'workspace',
                                            collectionId: 'ws_tree',
                                            documentId: appletId,
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
                HStack({ alignment: cLeading, spacing: 10 })(
                    HStack({ alignment: cLeading })(
                        (VibeText as any)('Theme Color')
                            .fontSize(16).fontWeight('600')
                            .foregroundColor('rgb(42, 46, 52)')
                            .lineHeight(32),
                    ).height().width(300),
                    ColorSelect({
                        onSelect: (color) => {

                            updateDocument({
                                databaseId: 'workspace',
                                collectionId: 'applets',
                                documentId: appletId,
                                data: {
                                    themeColor: color
                                }
                            }, () => {
                                updateDocument({
                                    databaseId: 'workspace',
                                    collectionId: 'ws_tree',
                                    documentId: appletId,
                                    data: {
                                        iconColor: color
                                    }
                                }, (item) => {
                                    EventBus.Default.fire('applet.added', { treeItem: item })
                                })
                            })


                        }
                    }).width(500) as any
                )
                    .height()
                    .margin('0 0 30px'),



            )
                .padding('24px 48px')
        )
    }

}