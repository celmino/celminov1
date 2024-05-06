
import { LoadingButton } from "@realmocean/atlaskit";
import { DialogView, ForEach, FormBuilder, HStack, Spinner, Text, VStack, ViewProperty } from "@tuval/forms";


export class SelectTasklistDialog extends DialogView {

    @ViewProperty()
    private applets: any[];

    public constructor() {
        super();
        this.ShowHeader = false;
        this.Header = 'Form'
        this.Width = '924px';
        this.Height = '600px'
    }

    public BindRouterParams(applets) {
     this.applets = applets;
    }

    public OnOK(applet) {
        this.ShowDialogAsyncResolve(applet);
        this.Hide();
    }

    public OnCancel() {
        this.Hide();
    }

    public override LoadView() {
        return (
            this.applets == null ? Spinner() :
            VStack(
                ...ForEach(this.applets)(applet => 

                    HStack(
                        Text(applet.name)
                    )
                    .height(30)
                    .onClick(()=> {
                        this.OnOK(applet);
                    })
                ),
                LoadingButton() .label('OK').appearance("default")
                .onClick(()=> {
                    //this.OnOK();
                })
            )
        )
    }

    public static Show(applets) {
        const dialog = new SelectTasklistDialog();
        dialog.ShowHeader = false;
       
        dialog.BindRouterParams(applets);
        return dialog.ShowDialogAsync();
    }
}