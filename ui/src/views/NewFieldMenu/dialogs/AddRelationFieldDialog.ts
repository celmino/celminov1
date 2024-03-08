import { UIViewBuilder, VStack, FormBuilder, Text, Spinner, HStack } from "@tuval/forms";
import { AddMultiSelectFieldDialog } from "./AddMultiSelectDialog";
import { Select } from "@realmocean/antd";
import { useListDocuments } from "@realmocean/sdk";


export const RelationFieldAttributesView = (workspaceId, databaseId, collectionId) => (
    UIViewBuilder(() => {

        const { documents, isLoading } = useListDocuments(workspaceId, 'workspace', 'applets');
        return (

            VStack(
                Select().placeHolder('Select Collection')
                    .dropdownRenderer(() => {
                        return (
                            HStack(
                            isLoading ? Spinner() :
                                Text(JSON.stringify(workspaceId))
                            ).height(200).width(200)
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
