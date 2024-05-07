import { HStack, cLeading, Icon, SvgIcon, Text } from "@tuval/forms";


export const InlineTitle = (icon, title) => (
    HStack({ alignment: cLeading, spacing: 5 })(
        Icon(icon),
        Text(title)
    ).foregroundColor('rgb(101, 111, 125)').allWidth(100)
)