
import { useAppletNavigate } from "@celmino/platform";
import { ForEach, HStack, Heading, Icon, Text, UIFormController, UIRouteOutlet, VStack, cLeading, cTopLeading } from "@tuval/forms";
import { MembersIcon, SettingsIcon, StatusesIcon, TabsIcon } from "../../resources/Icons";

export function getSettingsName() {
    var url = window.location.href;

    // Regex deseni
    var regexPattern = /\/settings\/([^\/]+)/;

    // Regex eşleşmesi
    var matches = url.match(regexPattern);

    // Eğer eşleşme varsa, list parametresini al
    if (matches && matches.length > 1) {
        return matches[1];

    } else {
        return;
    }

}

export class SettingsController extends UIFormController {


    public LoadView() {

        const { navigate } = useAppletNavigate();

        const menu = [
            {
                id: 'general',
                title: 'General',
                url: `settings/general`,
                icon: SettingsIcon
            },
            {
                id: 'connect',
                title: 'Connect To Jira',
                url: `settings/connect`,
                icon: MembersIcon
            },
            {
                id: 'tabs',
                title: 'Tabs',
                url: `settings/tabs`,
                icon: TabsIcon
            },
            {
                id: 'statuses',
                title: 'Statuses',
                url: `settings/statuses`,
                icon: StatusesIcon
            }
        ]

        // 
        return (
            HStack(
                VStack({ alignment: cTopLeading })(
                    HStack({ alignment: cLeading })(
                        Heading('TASK LIST APPLET').h3().foregroundColor('rgb(101, 111, 125)')
                            .fontSize(11).fontWeight('600')
                    ).padding('16px 8px 8px').height()
                    ,
                    ...ForEach(menu)(item =>
                        HStack({ alignment: cLeading, spacing: 8 })(
                            Icon(item.icon),

                            Text(item.title)
                                .fontSize('1.5rem')
                                .fontFamily('-apple-system, "system-ui", "Segoe UI", roboto, "Helvetica Neue", helvetica, arial, sans-serif')
                                .fontWeight('500')
                                .lineHeight(16)


                        ).height()
                            .foregroundColor(item.id === getSettingsName() ? 'rgb(84, 77, 201)' : '#94A3B8')

                            .cornerRadius(6)
                            .background({ default: item.id === getSettingsName() ? '#E5E4FC' : '', hover: '#E8EAED' })
                            .padding(/* cHorizontal, 8) */)
                            .cursor('pointer')

                            .onClick(() => {
                                navigate(item.url);
                            })
                    )
                ).padding()
                .background('white')
                    .borderRight('solid 1px #E2E8F0')
                    .allWidth(240)
                 ,
                UIRouteOutlet().width('100%').height('100%')
            )

        )
    }

}