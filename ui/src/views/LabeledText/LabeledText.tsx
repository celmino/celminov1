import { HStack, UIView, Text, UIViewBuilder, VStack, ViewProperty, cLeading, HStackClass, VStackClass } from "@tuval/forms"
import { TextField } from "@realmocean/vibe"
import { useOrganization } from "../../context";



/* export function HoverStack(...views: (UIView)[]): VStackClass;
export function HoverStack(value: any): any;
export function HoverStack(...args: any[]): VStackClass | any {
    class _ extends VStackClass {
        public constructor() {
            super();
            this.background({ hover: 'hsl(209, 12%, 93%)' });

        }
    }

    if (args.length === 1 && typeof args[0] === 'object' && args[0].constructor === Object && !(args[0] instanceof UIView)) {
        const params: any = args[0];
        return (...views: UIView[]) => {
            return new (_ as any)().children(...views).alignment(params.alignment).spacing(params.spacing)
        }
    } else {
        return new _().children(...args);
    }

} */

type FunctionValue<View, T> = (value: T) => View;

export interface ILabeledText extends UIView {
    label: FunctionValue<ILabeledText, string>;
    value: FunctionValue<ILabeledText, string>;
    onChange: FunctionValue<ILabeledText, Function>;
    autoFocus: FunctionValue<ILabeledText, boolean>;
}

export const LabeledTextInput = (): ILabeledText => {
    class _ extends UIView implements ILabeledText {

        /** @internal */
        @ViewProperty() _Label: string;

        public label(value: string) {
            this._Label = value;
            return this;
        }

         /** @internal */
         @ViewProperty() _AutoFocus: boolean;

         public autoFocus(value: boolean) {
             this._AutoFocus = value;
             return this;
         }

        /** @internal */
        @ViewProperty() _Value: string;

        public value(value: string) {
            this._Value = value;
            return this;
        }

        /** @internal */
        @ViewProperty() _OnChange: Function;

        public onChange(value: Function) {
            this._OnChange = value;
            return this;
        }

        public constructor() {
            super();
            this.onChange(() => void 0);
        }

        public override render() {
            return (
                VStack({ alignment: cLeading, spacing: 5 })(
                    Text(this._Label).fontSize('1.2rem').textTransform('uppercase'),
                    TextField()
                    .autoFocus(this._AutoFocus)
                        .value(this._Value)
                        .onChange((e) => this._OnChange(e)) as any
                )
                    .height()
                    .render()
            )
        }
    }

    return new _();
}



