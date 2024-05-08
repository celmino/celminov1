import { TabMenu, useAppletNavigate } from "@celmino/platform";
import { SvgIcon, UIViewBuilder } from "@tuval/forms";
import { OverviewIcon, TaskIcon } from "../resources/Icons";


export const AppletTabMenu = (selectedKey: string) => UIViewBuilder(() => {
    const { navigate } = useAppletNavigate();
    return (
        TabMenu().menuItems([
            {
                key: 'overview',
                icon: OverviewIcon,
                title: 'Overview'
            },
            {
                key: 'tasks',
                icon: TaskIcon,
                title: 'Tasks',
                contextMenu: [
                    {
                        title: 'Set as template',
                        onClick: () => {
                            //  updateMeeting(meeting.$id, { is_template: 1 })
                        }
                    }
                ]
            },
            {
                key: 'team',
                icon: SvgIcon('svg-sprite-cu2-view-3', 'var(--icon-color)'),
                title: 'Team'

            }
        ])
            .selectedKey(selectedKey)
            .onSelect(item => navigate(item.key))
    )
})
