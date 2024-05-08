import { ForEach, HStack, Icon, Icons, MenuButton, UIView, ViewProperty, cHorizontal, Text, PopupButton, DialogPosition } from "@tuval/forms";



type FunctionValue<View, T> = (value: T) => View;

export interface ITabMenu extends UIView {
    menuItems: FunctionValue<ITabMenu, any[]>;
    selectedKey: FunctionValue<ITabMenu, string>;
    onSelect: FunctionValue<ITabMenu, Function>;
}

export const TabMenu = (): ITabMenu => {
    class _ extends UIView implements ITabMenu {

        /** @internal */
        @ViewProperty() _MenuItems: any[];

        public menuItems(value: any[]) {
            this._MenuItems = value;
            return this;
        }

        /** @internal */
        @ViewProperty() _SelectedKey: string;

        public selectedKey(value: string) {
            this._SelectedKey = value;
            return this;
        }


        /** @internal */
        @ViewProperty() _OnSelect: Function;

        public onSelect(value: Function) {
            this._OnSelect = value;
            return this;
        }

        public constructor() {
            super();
            this.onSelect(() => void 0);
        }

        public override render() {
            return (
                HStack(
                    HStack().borderBottom('solid 1px #E2E8F0').background('white'),
                    ...ForEach(this._MenuItems)(menuItem =>
                        HStack(
                            HStack().width(10).borderBottom('solid 1px #E2E8F0'),
                            HStack({ spacing: 5 })(
                                (menuItem.contextMenu && this._SelectedKey === menuItem.key) ?
                                    PopupButton(
                                        HStack({ spacing: 5 })(
                                            Icon(menuItem.icon),
                                            Text(menuItem.title)
                                                .fontWeight('500')
                                                .fontFamily('Inter Variable,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial'),
                                        )

                                    )(
                                        HStack(
                                            Text('dfsdfsdf')
                                        )
                                            .cornerRadius(6)
                                            .background('white')
                                            .width(200)
                                            .height(200)
                                            .marginTop(13)
                                            .marginLeft(-10)
                                    )
                                        .dialogPosition(DialogPosition.BOTTOM_START)

                                    :
                                    HStack({ spacing: 5 })(
                                        Icon(menuItem.icon),
                                        Text(menuItem.title)
                                            .fontWeight('500')
                                            .fontFamily('Inter Variable,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial'),
                                    )

                                ,

                            )
                                .cornerRadius('6px 6px 0px 0px')
                                .cursor('pointer')
                                .foregroundColor(this._SelectedKey === menuItem.key ? 'rgb(30, 41, 59)' : 'rgb(100, 116, 139)')
                                .padding('6px')
                                .paddingBottom('11px')
                                .width()
                                .border({ default: this._SelectedKey === menuItem.key ? 'solid 1px #E2E8F0' : 'solid 1px white', hover: 'solid 1px #E2E8F0' })
                                .borderBottom({ default: this._SelectedKey === menuItem.key ? 'solid 1px #F8FAFC' : 'solid 1px #E2E8F0', hover: 'solid 1px #F8FAFC' })
                                .background({ default: this._SelectedKey === menuItem.key ? '#F8FAFC' : 'white', hover: '#F8FAFC' })
                                .variable('--icon-color', { default: this._SelectedKey === menuItem.key ? 'rgb(30, 41, 59)' : 'rgb(100, 116, 139)' })
                        )
                            .width()
                            .border('none')
                            .onClick(() => {
                                if (this._SelectedKey !== menuItem.key) {
                                    this._OnSelect(menuItem);
                                }
                            })

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
                    .render()
            )
        }
    }

    return new _();
}



