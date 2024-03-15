import { DialogView, FormBuilder, Spinner, Text, VStack, ViewProperty } from "@tuval/forms";
import { ListApplet } from "../applets/TaskListApplet";



export class AboutDialog extends DialogView {

    @ViewProperty()
    private applet: any;

    public constructor() {
        super();
        this.ShowHeader = false;
        this.Header = 'Form'
        this.Width = '424px';
        this.Height = '200px'
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
            VStack(
                Text(this.applet.name),
                Text(this.applet.description),
                Text(this.applet.version.join('.')),
            )
        )

    }

    public static Show(applet: any) {
        const dialog = new AboutDialog();
        dialog.ShowHeader = false;

        dialog.BindRouterParams({ applet });
        return dialog.ShowDialogAsync();
    }
   
}