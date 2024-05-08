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
    '#B04E31',
    '#8077F1',
    '#6A85FF',
    '#40A6E5',
    '#3FB1B2',
    '#64C6A2',
    '#F9BE34',
    '#E78845',
    '#DC646A',
    '#F17EAD',
    '#C580E6',
    '#BBA399',
    '#595D66'

]

export const ColorSelect = ({ onSelect }) =>
    HStack({ alignment: cTopLeading, spacing: 2 })(
        ...ForEach(colors)((color) => (
            ColorItemView(color)
                .onClick(() => onSelect(color))
        )
        )
    ).wrap('wrap')