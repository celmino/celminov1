import { is } from "@tuval/core"
import { HStack, Text, TextField, cLeading } from "@tuval/forms"


export const StringRenderer = (item,fields, field) => {
    return (
        HStack({ alignment: cLeading })(
            TextField()
          //  Text(is.nullOrEmpty(item[field.key]) ? '-' : item[field.key]).fontSize(14)
        )
            .allWidth(100)
            .height(30)
    )
}