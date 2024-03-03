import { is } from "@tuval/core";
import { ForEach, HStack, TextAlignment, TextField, VStack, cLeading, cTopLeading, useFormController } from "@tuval/forms";


export const KeyValueView = (textData: any) => {
    const formController = useFormController();
    const { visibleWhen, required, multiline, name, description } = textData;
    let canRender = false;

    if (visibleWhen != null && !is.array(visibleWhen)) {
        const field = visibleWhen.field;
        const fieldValue = visibleWhen.is;
        if (field != null) {
            const fieldFormValue = formController.GetValue(field);
            if (fieldValue == fieldFormValue) {
                canRender = true;
            }
        }
    } else if (visibleWhen != null && is.array(visibleWhen)) {
        const fails = []
        for (let i = 0; i < visibleWhen.length; i++) {
            const field = visibleWhen[i].field;
            const fieldValue = visibleWhen[i].is;
            if (field != null) {
                const fieldFormValue = formController.GetValue(field);
                if (fieldValue == fieldFormValue) {

                } else {
                    fails.push(0)
                }
            }
        }
        if (fails.length === 0) {
            canRender = true;
        }

    } else {
        canRender = true;
    }

    const keyValuePairs: any[] = formController.GetValue(name) || [];
    const rows = [...keyValuePairs, { key: '', value: '' }]
    if (canRender) {
        return (
            VStack({ alignment: cTopLeading, spacing: 10 })(
               
                //  Text(JSON.stringify(rows)),
                ...ForEach(rows)((keyValue, index) =>
                    HStack({ alignment: cLeading, spacing: 10 })(
                        TextField()
                            .value(keyValuePairs[index] == null ? '' : keyValuePairs[index].key)
                            .multiline(multiline)
                            .height(multiline ? '' : '38px')
                            .foregroundColor('rgb(51,61,71)')
                            .cornerRadius(2)
                            // .padding('0px 15px')
                            //.formField(textData.name, [])
                            .onChange(text => {
                                if (text == '') {
                                    if (is.nullOrEmpty(keyValuePairs[index].value)) {
                                        keyValuePairs.splice(index, 1);
                                    } else {
                                        keyValuePairs[index] = { key: text, value: keyValue.value }

                                    }
                                    formController.SetValue(name, [...keyValuePairs])


                                } else {
                                    keyValuePairs[index] = { key: text, value: keyValue.value }
                                    formController.SetValue(name, [...keyValuePairs])
                                }
                            })
                            .border('1px solid #D6E4ED')
                            .shadow({ focus: 'none' })
                            .fontSize(15),
                        TextField()
                            .multiline(multiline)
                            .height(multiline ? '' : '38px')
                            .foregroundColor('rgb(51,61,71)')
                            .cornerRadius(2)
                            // .padding('0px 15px')
                            //.formField(textData.name, [])
                            .onChange(text => {
                                keyValuePairs[index] = { key: keyValue.key, value: text }
                                formController.SetValue(name, [...keyValuePairs])
                            })
                            .border('1px solid #D6E4ED')
                            .shadow({ focus: 'none' })
                            .fontSize(15)
                    )

                ),
             

            ).height().marginBottom('16px')
        )
    }
}