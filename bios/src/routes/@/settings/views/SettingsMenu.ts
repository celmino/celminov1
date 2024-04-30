import { useAppletNavigate, useRealmNavigate } from "@celmino/ui";
import { ForEach, HDivider, HStack, Icon, Text, VStack, cHorizontal, cLeading, cTopLeading } from "@tuval/forms";
import { AISettingsIcon, BackIcon, ExportSettingsIcon, GeneralSettingsIcon, ImportSettingsIcon, SecuritySettingsIcon, UsersSettingIcon } from "./SettingsIcons";



export const SettingsMenu = (selectedId: string) => {

    const { navigate } = useRealmNavigate();
    const menu = [
        {
            name: 'Realm',
            menuItems: [
                {
                    id: 'general',
                    title: 'General',
                    icon: GeneralSettingsIcon,
                },
                {
                    id: 'security',
                    title: 'Security',
                    icon: SecuritySettingsIcon,
                },
                {
                    id: 'import',
                    title: 'Import',
                    icon: ImportSettingsIcon,
                },
                {
                    id: 'export',
                    title: 'Export',
                    icon: ExportSettingsIcon,
                },
                {
                    id: 'ai',
                    title: 'AI',
                    icon: AISettingsIcon,
                },
                {
                    id: 'users',
                    title: 'Users',
                    icon: UsersSettingIcon,
                },
                {
                    id: 'connections',
                    title: 'Connections',
                    icon: UsersSettingIcon,
                },

            ]
        }

    ]





    return (
        VStack({ alignment: cTopLeading })(
            HStack({ alignment: cLeading, spacing: 10 })(
                HStack(
                    Icon(BackIcon)
                )
                    .cursor('pointer')
                    .cornerRadius(4)
                    .padding(4)
                    .width()
                    .height()
                    .background({ hover: 'rgba(109, 122, 131, 0.15)' })
                    .transition('all .15s ease-out')
                    .onClick(() => {
                        navigate('')
                    }),
                VStack({ alignment: cLeading })(
                    Text('Settings')
                        .lineHeight('1.25')
                        .fontSize(16)
                        .fontWeight('500')
                        .fontFamily('ui-sans-serif,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol'),
                    Text('Realm')
                        .fontSize(12)
                        .lineHeight('1.5')
                        .fontFamily('ui-sans-serif,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol'),


                ).height()

            )
                .padding('8px 0 8px 8px')
                .allHeight(73),
            HDivider().background('#ECEDEE').height(1),
            VStack({ alignment: cTopLeading })(


                ...ForEach(menu)(item =>
                    VStack({ alignment: cTopLeading })(
                        HStack({ alignment: cLeading })(
                            Text(item.name)
                                .textTransform("uppercase")
                                .fontSize(12)
                                .fontFamily('ui-sans-serif,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol')
                        )
                            .height(30)
                            .padding(cHorizontal, 5)
                        ,
                        ...ForEach(item.menuItems)(menuItem =>
                            HStack({ alignment: cLeading, spacing: 5 })(
                                Icon(menuItem.icon),
                                Text(menuItem.title)
                                    .fontFamily('ui-sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"!important')
                            )
                                .cornerRadius(6)
                                .cursor(selectedId === menuItem.id ? '' : 'pointer')
                                .background({ default: selectedId === menuItem.id ? '#E6EDFE' : '', hover: selectedId === menuItem.id ? '#E6EDFE' : '#EBEDEF' })
                                .foregroundColor('rgb(21, 23, 25)')
                                .allHeight(30)
                                .padding(cHorizontal, 5)
                                .onClick(() => {
                                    navigate('settings/' + menuItem.id)
                                })
                        )
                    ).height()
                )

            )


                .padding()
        )
            .allWidth(240)
            .background('#F9FAFB')

    )
}