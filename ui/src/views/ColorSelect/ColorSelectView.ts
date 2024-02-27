import { HStack, cTopLeading, ForEach } from "@tuval/forms";
import { ColorItemView } from "./ColorItemView";



const colors = [
    '#4A4A4A',
    '#6A849B',
    '#BEC5CC',
    '#D40915',
    '#E72065',
    '#9C2BAF',
    '#673DB6',
    '#3E53B4',
    '#2978FB',
    '#199EE3',
    '#1FBED3',
    '#159789',
    '#4FAF54',
    '#8EC351',
    '#FBA32F',
    '#FC551F',
    '#B04E31'

]

export const ColorSelect = ({ onSelect }) =>
    HStack({ alignment: cTopLeading, spacing: 2 })(
        ...ForEach(colors)((color) => (
            ColorItemView(color)
                .onClick(() => onSelect(color))
        )
        )
    ).wrap('wrap')