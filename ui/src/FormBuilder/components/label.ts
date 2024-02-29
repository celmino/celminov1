

import { HStack, cLeading, Fragment, Icon, TooltipPositions, Text } from "@tuval/forms";
import { helpIcon } from "../helpIcon";
import { is } from "@tuval/core";


export const label = (fieldInfo: any) => {
    const { label, required, helpText } = fieldInfo;
    return (
        label ?
            HStack({ alignment: cLeading, spacing: 10 })(
                Text(label + (required ? '*' : '')).kerning('0.00938em')
                    .lineHeight('24px').foregroundColor('rgb(101, 111, 125)').fontSize(14)
                    .fontWeight(required ? '600' : '400')
                    // .fontFamily(required ? 'source sans pro semibold' :'source sans pro'),
                    .fontFamily('-apple-system,BlinkMacSystemFont,Segoe UI,roboto,Helvetica Neue,helvetica,arial,sans-serif'),
                is.nullOrEmpty(helpText) ? Fragment() :
                    HStack(
                        Icon(helpIcon).size(24)
                    ).width().height().tooltip(helpText).tooltipPosition(TooltipPositions.RIGHT)
            ).height()
            : Fragment()
    )
}