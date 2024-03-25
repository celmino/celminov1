import { DialogPosition, ForEach, Fragment, HStack, Icon, PopupButton, SvgIcon, Text, UIViewBuilder, VStack, cLeading, cTopLeading, urlFriendly, useMediaQuery } from "@tuval/forms";
import { useListViews } from "../../../hooks/useListViews";
import { useAppletNavigate } from "@celmino/ui";
import { useCreateView } from "../../../hooks/useCreateView";


/* const views = [
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
] */

const MenuItemText = (text) =>
    Text
        (text)
        .foregroundColor('rgb(101, 111, 125)')
        .fontSize(14)
        .fontWeight("500")
        .fontFamily('-apple-system, "system-ui", "Segoe UI", roboto, "Helvetica Neue", helvetica, arial, sans-serif')


export const ViewsTab = (selectedId: string) => UIViewBuilder(() => {

    const { views, isLoading } = useListViews();
    const { navigate } = useAppletNavigate();

    const matches = useMediaQuery('(min-width: 1000px)');

    return (
        isLoading ?
            HStack
                ()
                .paddingLeft('16px')
                .background('white')
                .allHeight(45)
            :
            HStack
                ({ alignment: cLeading, spacing: 4 })
                (
                    //...ForEach(!matches ? [...views.filter(view => view.$id !== selectedId || views.findIndex(view => view.$id === selectedId) < 4).slice(0, 4), ...(views.findIndex(view => view.$id === selectedId) < 4 ? [] : [views.find(view => view.$id === selectedId)])] : views)(view =>
                    ...ForEach(views)(view =>
                        VStack
                            ({ alignment: cLeading })
                            (
                                HStack
                                    ({ alignment: cLeading, spacing: 4 })
                                    (
                                        Icon
                                            (SvgIcon(view.icon)),
                                        MenuItemText
                                            (view.name),

                                    )
                                    .cursor('pointer')
                                    .background({ hover: 'rgb(240, 241, 243)' })
                                    .cornerRadius(6)
                                    .padding('0 7px 0 6px')
                                    .height(28)
                                    .width(),
                                selectedId !== view.$id ? Fragment() :
                                    HStack
                                        ()
                                        .position('absolute')
                                        .background('rgb(95, 85, 238)')
                                        .height(2)
                                        .bottom('0px')
                                        .left('0px')
                            ).width()
                            .onClick(() => {
                                navigate(`${urlFriendly(view.name)}-${view.$id}`)
                            })
                    ),
                    matches ? Fragment() :
                        // Hidden views...
                        HStack
                            ({ alignment: cLeading })
                            (
                                PopupButton
                                    (
                                        HStack
                                            ({ alignment: cLeading, spacing: 4 })
                                            (
                                                MenuItemText(`${views.length - 4} more...`),

                                            )
                                            .cursor('pointer')
                                            .background({ hover: 'rgb(240, 241, 243)' })
                                            .cornerRadius(6)
                                            .padding('0 7px 0 6px')
                                            .height(28)
                                            .width()
                                    )
                                    (
                                        HStack
                                            (
                                                UIViewBuilder
                                                    (() => {

                                                        return (
                                                            VStack(
                                                                ...ForEach(views.filter(view => view.$id !== selectedId).slice(3, views.length))(view =>
                                                                    HStack(
                                                                        Text(view.name)
                                                                    )
                                                                        .onClick(() => {
                                                                            navigate(`${urlFriendly(view.name)}-${view.$id}`)
                                                                        })

                                                                )
                                                            )


                                                        )

                                                    })

                                            )
                                            .width(200)
                                            .height(300)
                                    )
                                    .dialogPosition(DialogPosition.BOTTOM_START)
                            )
                            .width(),
                    HStack
                        ({ alignment: cLeading })
                        (
                            PopupButton
                                (
                                    HStack
                                        ({ alignment: cLeading, spacing: 4 })
                                        (
                                            Icon(SvgIcon('cu3-icon-addSmall')),
                                            MenuItemText('View'),

                                        )
                                        .cursor('pointer')
                                        .background({ hover: 'rgb(240, 241, 243)' })
                                        .cornerRadius(6)
                                        .padding('0 7px 0 6px')
                                        .height(28)
                                        .width()
                                )
                                (
                                    HStack
                                        (
                                            UIViewBuilder
                                                (() => {
                                                    const { createView } = useCreateView();
                                                    const menu = [
                                                        {
                                                            viewName: 'List',
                                                            viewType: 'list',
                                                            viewIcon: 'svg-sprite-cu2-view-1'
                                                        },
                                                        {
                                                            viewName: 'Kanban',
                                                            viewType: 'kanban',
                                                            viewIcon: 'svg-sprite-cu2-view-2'
                                                        }
                                                    ]
                                                    return (
                                                        VStack
                                                            ({ alignment: cTopLeading })(
                                                                ...ForEach
                                                                    (menu)
                                                                    (menuItem =>
                                                                        HStack
                                                                            ({ alignment: cLeading, spacing: 5 })
                                                                            (
                                                                                Icon(SvgIcon(menuItem.viewIcon)),
                                                                                Text(menuItem.viewName)
                                                                            )
                                                                            .padding()
                                                                            .height(28)
                                                                            .cornerRadius(6)
                                                                            .cursor('pointer')
                                                                            .foregroundColor({ hover: 'white' })
                                                                            .background({ hover: '#7F77F1' })
                                                                            .onClick(() => {
                                                                                createView({
                                                                                    name: menuItem.viewName,
                                                                                    icon: menuItem.viewIcon,
                                                                                    type: menuItem.viewType
                                                                                })
                                                                            })
                                                                    )

                                                            )
                                                            .padding()
                                                    )

                                                })

                                        )
                                        .width(200)
                                        .height(300)
                                )
                                .dialogPosition(DialogPosition.BOTTOM_START)
                        )
                        .width()

                )
                .paddingLeft('16px')
                .background('white')
                .allHeight(45)
    )

})