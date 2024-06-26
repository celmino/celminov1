//import { Validator } from "jsonschema";
import { HStack, TextField, VStack, cLeading, cTopLeading, useFormController, Text, InputNumber } from "@tuval/forms";
import { FormBuilder, compileFormula } from "../FormBuilder";


//const v = new Validator();

var schema = {
    "type": "object",
    "properties": {
        "type": {
            "type": "string",
            "value": "text"
        },
    }
}

export interface TextFieldInfo {
    type: 'text';
    label: string;
}


export const NumberView = (fieldInfo: any) => {
    // v.validate(fieldInfo, schema).valid;

    const formController = useFormController();
    let { visibleWhen, required, description, formula, defaultValue, defaultDisabled,
        startAdornment, endAdornment, fieldId, name } = fieldInfo;

    let canRender = FormBuilder.canRender(fieldInfo, formController);

    defaultValue = FormBuilder.compileFormula(defaultValue);

    if (defaultValue == null) {
        defaultValue = formController.GetValue(fieldId);
    }


    if (canRender) {
        return (
            VStack({ alignment: cTopLeading })(
                //Text(FormBuilder.canRender(visibleWhen, formController).toString()),
                //label(fieldInfo),
                HStack({ alignment: cLeading, spacing: 5 })(
                    startAdornment && Text(startAdornment).textTransform('uppercase').foregroundColor('#677A89').fontSize(17).fontFamily('source sans pro').lineHeight(22),
                    InputNumber()
                        .disabled(defaultDisabled)
                        .height('38px')
                        .foregroundColor('rgb(51,61,71)')
                        .background({ disabled: '#F0F5F9' })
                        .cornerRadius(2)
                        .border({ default: '1px solid #D6E4ED', hover: '1px solid #2776C7', focus: '1px solid #2776C7' })
                        .shadow({ focus: 'none' })
                        .fontSize(15)
                        .onChange((value) => {
                            formController.SetValue(name, value);
                        }),
                    endAdornment && endAdornment && Text(endAdornment).foregroundColor('#677A89').fontSize(17).fontFamily('source sans pro').lineHeight(22),

                ).height(),
                /* description &&
                Text(description).multilineTextAlignment(TextAlignment.leading)

                    .foregroundColor('#95ABBC')
                    .fontSize('12px')
                    .fontFamily('"Roboto", "Helvetica", "Arial", sans-serif')
                    .kerning('0.03333em')
                    .lineHeight('20px')
                    .marginTop('4px') */
            ).height().marginBottom('16px')
        )
    }
}