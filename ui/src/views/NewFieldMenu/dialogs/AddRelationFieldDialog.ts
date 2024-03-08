import { UIViewBuilder, VStack, FormBuilder, Text, Spinner, HStack, ForEach, cTopLeading } from "@tuval/forms";
import { AddMultiSelectFieldDialog } from "./AddMultiSelectDialog";
import { Select } from "@realmocean/antd";
import { Query, useListDocuments } from "@realmocean/sdk";


export const RelationFieldAttributesView = () => (
    UIViewBuilder(() => {

        const { documents, isLoading } = useListDocuments('65e576becf3312efde15', 'workspace', 'applets');
        return (

            VStack(
                Select().placeHolder('Select Collection')
                    .dropdownRenderer(() => {
                        return (
                            HStack(
                                isLoading ? Spinner() :
                                    VStack({ alignment: cTopLeading })(
                                        ...ForEach(documents)(doc =>
                                            VStack({ alignment: cTopLeading })(
                                                Text(doc.name).fontSize('1.2rem').fontWeight('500').foregroundColor('gray'),
                                                UIViewBuilder(() => {
                                                    const { documents, isLoading } = useListDocuments('65e576becf3312efde15', doc.$id, 'Collections',[
                                                        Query.orderAsc('name')
                                                    ]);
                                                    return (
                                                        VStack({ alignment: cTopLeading })(
                                                            ...ForEach(documents)(doc =>
                                                                Text(doc.name)
                                                            )
                                                        ).padding()
                                                    )
                                                })
                                            )

                                        )
                                    )

                            ).height()
                        )
                    })
                    .options([{
                        value: 1,
                        label: 'One'
                    }])
            )

                .padding(20)
                .width(380)
                .height(515)
        )
    }
    )
)
