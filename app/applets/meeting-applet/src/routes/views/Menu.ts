import { HStack, ForEach, Icon, UIViewBuilder, Text, MenuButton, Icons, cHorizontal } from "@tuval/forms";
import { OverviewIcon, MeetingsIcon, TaskIcon, FilesIcon, FeedIcon } from "../../assets/Icons";
import { TabMenu, useAppletNavigate } from "@celmino/ui";

const menu = [
    {
        key: 'overview',
        icon: OverviewIcon,
        title: 'Overview'
    },
    {
        key: 'meetings',
        icon: MeetingsIcon,
        title: 'Meetings'
    },
    {
        key: 'tasks',
        icon: TaskIcon,
        title: 'Tasks'
    },
    {
        key: 'files',
        icon: FilesIcon,
        title: 'Files'
    },
    {
        key: 'feed',
        icon: FeedIcon,
        title: 'Feed'
    }
]

export const _Menu = (selected: string) => UIViewBuilder(() => {
    const { navigate } = useAppletNavigate();
    return (
        HStack(
            HStack().borderBottom('solid 1px #E2E8F0').background('white'),
            ...ForEach(menu)(menuItem =>
                HStack(
                    HStack().width(10).borderBottom('solid 1px #E2E8F0'),
                    HStack({ spacing: 5 })(
                        Icon(menuItem.icon),
                        Text(menuItem.title)
                            .fontWeight('500')
                            .fontFamily('Inter Variable,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial')
                    )
                        .cornerRadius('6px 6px 0px 0px')
                        .cursor('pointer')
                        .foregroundColor(selected === menuItem.key ? 'rgb(30, 41, 59)' : 'rgb(100, 116, 139)')
                        .padding('6px')
                        .paddingBottom('11px')
                        .width()
                        .border({ default: selected === menuItem.key ? 'solid 1px #E2E8F0' : 'solid 1px white', hover: 'solid 1px #E2E8F0' })
                        .borderBottom({ default: selected === menuItem.key ? 'solid 1px #F8FAFC' : 'solid 1px #E2E8F0', hover: 'solid 1px #F8FAFC' })
                        .background({ default: selected === menuItem.key ? '#F8FAFC' : 'white', hover: '#F8FAFC' })
                )
                    .width()
                    .border('none')
                    .onClick(() => navigate(menuItem.key))
                ,
            ),

            HStack().borderBottom('solid 1px #E2E8F0').background('white'),
            HStack(
                MenuButton().icon(Icons.Menu)
                    .model([
                        {
                            title: 'Set as template',
                            onClick: () => {
                                //  updateMeeting(meeting.$id, { is_template: 1 })
                            }
                        }
                    ])
            ).width().height()
                .padding(cHorizontal, 10)
                .position('absolute')
                .right('0px')
        ).height(39)

            .background('white')
    )
})

export const Menu = (selected: string) => UIViewBuilder(() => {
    const { navigate } = useAppletNavigate();
    return (
        TabMenu().menuItems(menu).selectedKey(selected)
            .onSelect((menuItem) => {
                navigate(menuItem.key)
            })
    )
})