
import { InputRenderer, SelectRenderer , Select} from "@realmocean/antd";
import { VStack, Text, cTopLeading, Spinner } from "@tuval/forms"
import { PropertyLabel } from "../PropertyLabel";

export const SelectField = (textFieldInfo) => {
    const { label, value, onChange, placeholder, options = [] } = textFieldInfo;
    return (
        VStack({ alignment: cTopLeading, spacing: 2 })(
            PropertyLabel(label),
            /*   Select()
                  .options(options)
                  .renderer(SelectRenderer) */
            Select().placeHolder('Select Collection')
                .dropdownRenderer(() => {
                   // const { documents, isLoading } = useListDocuments(workspaceId, 'workspace', 'applets');
                    return (
                      
                            Text(JSON.stringify('sdfsdfds')) as any
                    )
                })
                .options([{
                    value: 1,
                    label: 'One'
                }]) as any
        )
    )
}