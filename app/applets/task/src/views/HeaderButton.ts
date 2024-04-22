import { HStack, Icon, Text, cHorizontal } from "@tuval/forms";


export const HeaderButton = (label: string, icon)=> (
    HStack({ spacing: 5 })(
        Icon(icon),
        Text(label)
            .fontFamily('ui-sans-serif, -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"')
            .fontSize(14)
            .fontWeight('500')




    )
    .transition('all .15s ease-out')
        .height(28)
        .foregroundColor('rgb(109, 122, 131)')
        .width()
        .background({ hover: 'rgba(109,122,131,0.15)' })
        .cursor('pointer')
        .cornerRadius(6)
        .padding(cHorizontal, 10)
)