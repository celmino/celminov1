import { HStack, Text, cHorizontal } from "@tuval/forms";


export const DialogOkButton = (label: string) => (
    HStack(
        Text(label).foregroundColor('white')
            .fontFamily('ui-sans-serif, -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"')
            .fontSize('1.4rem')
            .fontWeight('500')
    ).width().height()
        .cursor('pointer')
        .border({ default: 'solid 1px rgb(64, 101, 221)', hover: 'solid 1px rgb(0, 76, 190)' })
        .background({ default: 'rgb(64, 101, 221)', hover: 'rgb(0, 76, 190)' })
        .cornerRadius(6)
        .minWidth(28)
        .minHeight(28)
        .padding(cHorizontal, 11)
)