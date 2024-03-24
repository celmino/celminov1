import { ForEach, HStack, Icon, SvgIcon, Text, UIViewBuilder, cLeading } from "@tuval/forms";


const views = [
    {
        $id: '1',
        name: 'Board',
        type: 'board',
        icon: 'svg-sprite-cu2-view-2'
    },
    {
        $id: '2',
        name: 'List',
        type: 'list',
        icon: 'svg-sprite-cu2-view-2'
    }
]

export const ViewsTab = (selectedId: string) => UIViewBuilder(() => {
    return (
        HStack({ alignment: cLeading, spacing: 4 })(
            ...ForEach(views)(view =>
                HStack({ alignment: cLeading, spacing: 4 })(
                    Icon(SvgIcon(view.icon)),
                    Text(view.name)
                )
                    .cursor('pointer')
                    .background({ hover: 'rgb(240, 241, 243)' })
                    .cornerRadius(6)
                    .padding('0 7px 0 6px')
                    .height(28)
                    .width()
            )

        )
            .paddingLeft('16px')
            .background('white')
            .allHeight(45)
    )

}) 