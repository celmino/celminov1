
import { HStack, UIViewBuilder } from "@tuval/forms";

export const StatusMarker = (status) => (
    HStack(
        HStack().width(12).height(12).cornerRadius('50%').border('solid 2px white')
    )
   
        .background(status.bgColor || 'gray')
        .allWidth(14).allHeight(14).marginLeft('10px').marginRight('10px').cornerRadius('50%')
)


export const _StatusMarker = (stage_id) => UIViewBuilder(() => {
    //const { stage, isLoading: isStageLoading } = useGetStage( stage_id );
    return (
        HStack()
            .background(/* stage?.color?.split(';')?.[0] ||  */'gray')
            .allWidth(8).allHeight(8).marginLeft('10px').marginRight('10px').cornerRadius(2)
    )
})