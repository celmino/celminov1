import { FormHeader, TextField } from "@realmocean/atlaskit";
import { DialogView, ForEach, Spinner, VStack, ViewProperty, cTopLeading, Text, HStack, UIImage, cLeading, useState, UIViewBuilder } from "@tuval/forms";
import { Connectors } from "./Connectors";
import { DynoDialog, FormBuilder, useRealm } from "@celmino/ui";



export class SelectConnectionTypeDialog extends DialogView {

    @ViewProperty()
    private form: any;

    public constructor() {
        super();
        this.Header = 'Form'
        this.Width = '624px';
        this.Position = 'right';
        this.Height = '100%'
    }

    public BindRouterParams() {
    }

    public OnOK() {
        this.ShowDialogAsyncResolve();
        this.Hide();
    }

    public OnCancel() {
        this.Hide();
    }

    public override LoadView() {
        const [form, setForm] = useState<any>();
        return (
            form == null ?
                VStack({ alignment: cTopLeading, spacing: 10 })(
                    FormHeader('Select Connection Provider'),
                    TextField().label('Application')
                        .placeholder('Start typing to browse applications'),
                    VStack({ alignment: cTopLeading })(
                        ...ForEach(Connectors)((connector, index) =>
                            HStack({ alignment: cLeading, spacing: 10 })(
                                UIImage(connector.image).width(32).height(32),
                                Text(connector.name)
                            )
                                .cursor('pointer')
                                .padding(5)
                                .borderTop(index === 0 ? 'solid 1px #d6e4ed' : '')
                                .borderBottom('solid 1px #d6e4ed')
                                .borderLeft('solid 1px #d6e4ed')
                                .borderRight('solid 1px #d6e4ed')
                                .background({ hover: '#d6e4edcc' })
                                .height()
                                .onClick(() => {
                                    setForm(connector.dialog('1'));
                                    //  DynoDialog.Show(connector.dialog('1'))
                                })

                        )
                    )
                )
                    .padding()
                :
                UIViewBuilder(() =>
                    VStack({alignment:cTopLeading})(
                        FormBuilder.render(form)
                    )
                    .padding()
                )

        )
    }

    public static Show() {
        const dialog = new SelectConnectionTypeDialog();
        dialog.ShowHeader = false;
        dialog.BindRouterParams();
        return dialog.ShowDialogAsync();
    }
}