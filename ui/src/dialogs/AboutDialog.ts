import { DialogView, FormBuilder, HStack, Spinner, Text, VStack, ViewProperty, cLeading, cTopLeading } from "@tuval/forms";
import { ListApplet } from "../applets/TaskListApplet";



export class AboutDialog extends DialogView {

    @ViewProperty()
    private applet: any;

    public constructor() {
        super();
        this.ShowHeader = false;
        this.Header = 'Form'
        this.Width = '724px';
        this.Height = '600px'
    }

    public BindRouterParams({ applet }) {
        this.applet = applet;
    }

    public OnOK() {
        this.ShowDialogAsyncResolve();
        this.Hide();
    }

    public OnCancel() {
        this.Hide();
    }

    public override LoadView() {

        return (
            VStack({ alignment: cTopLeading })(
                HStack({ alignment: cLeading })(
                    Text(this.applet.name)
                        .fontSize('2rem')
                        .fontWeight('500'),
                )
                    .height(),
                HStack({ alignment: cLeading })(
                    Text(this.applet.description)
                )
                    .height(),

                Text(this.applet.version.join('.'))
            )
                .padding()
        )

    }

    public static Show(applet: any) {
        const dialog = new AboutDialog();
        dialog.ShowHeader = false;

        dialog.BindRouterParams({ applet });
        return dialog.ShowDialogAsync();
    }

}