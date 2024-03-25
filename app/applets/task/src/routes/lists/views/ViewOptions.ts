import { HStack, Icon, Menu, Spacer, SvgIcon, Text, VStack, cTopLeading } from "@tuval/forms";

const options = [
    {

    }
]

export const ViewOptions = (closeHandle: Function) => (
    VStack
        ({ alignment: cTopLeading })
        (
            HStack
                (
                    Text
                        ('View Options')
                        .fontSize(11)
                        .fontWeight('600')
                        .foregroundColor('rgb(135, 144, 158)')
                        .textTransform("uppercase"),
                    Spacer(),
                    HStack
                        (
                            Icon(SvgIcon('cu3-icon-edit'))
                        )
                        .width()
                )
                .padding()
                .height(),
            Menu().model([
                {
                    title: 'Pin',
                    icon: SvgIcon('svg-sprite-global__pin'),
                    onClick: () => closeHandle()
                },
                {
                    title: 'Add to favorites',
                    icon: SvgIcon('svg-sprite-global__star'),
                    onClick: () => closeHandle()
                },
                {
                    title: 'Dublicate',
                    icon: SvgIcon('svg-sprite-global__copy'),
                    onClick: () => closeHandle()
                },
                {
                    title: 'Move',
                    icon: SvgIcon('svg-sprite-global__move'),
                    onClick: () => closeHandle()
                },
                {
                    title: 'Delete',
                    color: '#bc4841',
                    icon: SvgIcon('svg-sprite-global__delete'),
                    onClick: () => closeHandle()
                },
                {
                    type: 'Divider'
                },
                {
                    title: 'More settings',
                    icon: SvgIcon('svg-sprite-global__ellipsis'),
                    onClick: () => closeHandle(),
                    items: [
                        {
                            title: 'Move',
                            icon: SvgIcon('svg-sprite-global__move'),
                            onClick: () => closeHandle()
                        },
                        {
                            title: 'Delete',
                            color: '#bc4841',
                            icon: SvgIcon('svg-sprite-global__delete'),
                            onClick: () => closeHandle()
                        },
                    ]
                },
            ])
        )
        .padding()
)