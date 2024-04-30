
import { Button, ButtonSize, ButtonType, DialogView,Text, ForEach, HStack, Icon, Icons, ScrollView, Spacer, TextField, UIImage, UIView, VStack, ViewProperty, cCenter, cLeading, cTopLeading, cVertical, useState } from "@tuval/forms";

import { AttributesMenuItems } from "./Attributes";


const appletMenu = [
    {
        category: 'Attributes',
        items: [
            { name: 'All', icon: 'Apps' },
            { name: 'Featured', icon: 'Star' },
            { name: 'Recent', icon: 'Clock' },
            { name: 'Popular', icon: 'Fire' },
            { name: 'My applets', icon: 'User' }
        ]
    },
    /*  {
         category: 'Data',
         items: [
             { name: 'All', icon: 'Data' },
             { name: 'Design', icon: 'Design' },
             { name: 'Development', icon: 'Development' },
             { name: 'Finance', icon: 'Finance' },
             { name: 'Health', icon: 'Health' }
         ]
     },
     {
         category: 'Solutions',
         items: [
             { name: 'All', icon: 'Data' },
             { name: 'Design', icon: 'Design' },
             { name: 'Development', icon: 'Development' }
         ]
     }, */

]

export class SelectAttributeDialog extends DialogView {

    @ViewProperty()
    private filtered_opas: any[];

    @ViewProperty()
    private workspaceId: string;

    @ViewProperty()
    private parent: string;

    @ViewProperty()
    private space: string;

    public BindRouterParams() {

    }
    public constructor() {
        super();
        this.ShowHeader = true;
        this.Header = 'Form'
        this.Width = '90vw';
        this.Height = '90vh'

        this.filtered_opas = AttributesMenuItems;
    }

    public OnOK(applet) {
        this.ShowDialogAsyncResolve(applet);
        this.Hide();
    }

    public OnCancel() {
        this.Hide();
    }


    public override LoadView(): UIView {


        const [installingOpa, setInstallingOpa] = useState('');
        const [searchText, setSearchText] = useState(null);

        return (
            VStack({ alignment: cTopLeading })(
                HStack(
                    HStack({ alignment: cLeading })(
                        Text('applet').fontSize(20).fontWeight('700') as any,
                        Text('library').fontSize(20).fontWeight('400') as any
                    ).width(),
                    HStack(
                        TextField()
                            .value(searchText)
                            .placeholder('Search applets').minWidth(300).maxWidth(700).height(40).padding()
                            .cornerRadius(6)
                            .border({ default: 'solid 1px #E4EAE2', focus: 'solid 1px #E4EAE2' })
                            .onChange((e) => {
                                setSearchText(e);
                                this.filtered_opas = AttributesMenuItems.filter(opa => opa.title.toLowerCase().indexOf(e.toLowerCase()) > -1);

                            }),
                    ),
                    Icon(Icons.Close).onClick(() => this.OnCancel())
                ).height(50).padding().background('#F9FAFB'),

                /*     Search().width(300).allHeight(70).padding()
                        .onChange((e) => this.filtered_opas = opas.filter(opa => opa.name.toLowerCase().indexOf(e.toLowerCase()) > -1)), */
                HStack({ alignment: cTopLeading })(
                    VStack({ alignment: cTopLeading })(
                        ...ForEach(appletMenu)(menu =>
                            VStack({ alignment: cTopLeading })(
                                Text(menu.category).fontWeight('500').fontSize('var(--font-size-h4)')
                                    .paddingLeft('12px')
                                    .marginBottom('12px') as any,
                                ...ForEach(menu.items)(item =>
                                    VStack({ alignment: cTopLeading })(
                                        Text(item.name).fontSize('var(--font-size-h5)')
                                            .padding('var(--spacing-xs) 0 var(--spacing-xs)')
                                            .paddingLeft('12px')
                                            .cornerRadius('var(--border-radius-small)')
                                            .lineHeight('var(--font-line-height-h2)')
                                            .foregroundColor('#323338') as any
                                    ).height()
                                )
                            ).height().marginBottom('var(--spacing-large)')
                        )
                    )
                        .padding('var(--spacing-medium)')
                        .width(300)
                    ,
                    ScrollView({ axes: cVertical, alignment: cTopLeading })(
                        HStack({ alignment: cTopLeading })(
                            ...ForEach(this.filtered_opas)(attribute =>

                                VStack(
                                    VStack({ alignment: cTopLeading, spacing: 5 })(
                                        HStack({ alignment: cLeading, spacing: 10 })(
                                            attribute.image &&
                                            UIImage(attribute.image).width(50).height(50).cornerRadius('20%')
                                                .filter(attribute.type === 'Applet' ? 'grayscale(1)' : 'none'),
                                            attribute.icon &&
                                            HStack(
                                                Icon(attribute.icon).fontSize(40)
                                                    .foregroundColor('#486EFF')
                                            ).width(50).height(50).padding(10).cornerRadius('20%')
                                                .border('solid 1px #6D7A8344'),

                                            //.background(opa.iconBackColor || '#9A0707'),
                                            Text(attribute.title).fontSize('1.8rem').lineHeight('2rem')
                                            //.maxLines(2) as any
                                            //Text(opa.type).fontSize('1.4rem').fontWeight('500').foregroundColor('hsl(205, 9%, 47%)')
                                        ).height(60)
                                        //    .shadow('0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15)'),
                                        ,


                                        HStack({ alignment: cLeading })(
                                            Text(attribute.description || '')
                                            //.maxLines(3)
                                            .fontSize('1.4rem').foregroundColor('#676879') as any

                                        ).height()

                                        ,
                                        Spacer(),
                                        HStack({ alignment: cCenter })(
                                            Button(
                                                Text('Add') as any
                                            )
                                                // .loading(isLoading && (opa.type === this.last_added_opa_type))
                                                // .disabled(!opa.enabled)
                                                .kind(ButtonType.SECONDARY)
                                                .size(ButtonSize.SMALL)
                                                // .loading(installingOpa === opa.type)
                                                .width('100%')
                                                .onClick(async () => {
                                                    this.OnOK(attribute.dialog);
                                                })
                                        ).height()
                                    )
                                    .height(190).width(210)
                                        .padding()
                                        .shadow({ hover: 'var(--box-shadow-medium)' })
                                        .cornerRadius('var(--border-radius-medium)')
                                        .border({ default: 'solid 1px var(--layout-border-color)', hover: 'solid 1px var(--dialog-background-color)' })
                                ).width().height().padding()
                            )
                        ).wrap('wrap').height()
                    )
                )

            )
        )
    }
    public static Show() {

        const dialog = new SelectAttributeDialog();
        dialog.ShowHeader = false;
        /*  if (width) {
             dialog.Width = width;
         } */
        dialog.BindRouterParams()
        return dialog.ShowDialogAsync();
    }
}