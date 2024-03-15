import { DialogView, FormBuilder, Spinner, Text, VStack, ViewProperty } from "@tuval/forms";
import { AboutApplet } from "../AboutApplet";


export class AboutDialog extends DialogView {

    @ViewProperty()
    private form: any;

    public constructor() {
        super();
        this.ShowHeader = false;
        this.Header = 'Form'
        this.Width = '424px';
        this.Height = '200px'
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
     
        return (
            VStack(
                Text(AboutApplet.name),
                Text(AboutApplet.description),
                Text(AboutApplet.version),
            )
        )
           
    }

    public static Show() {
        const dialog = new AboutDialog();
        dialog.ShowHeader = false;
        
        dialog.BindRouterParams()
        return dialog.ShowDialogAsync();
    }
}