import { EventBus } from "@tuval/core"
import { HStack, ReactView, UIView } from "@tuval/forms"
import React from "react"
import Circle from '@uiw/react-color-circle';


export const ColorView = (): UIView => {
    const viewType = class extends UIView {

        private vp_SelectedColor: string;
        public selectedColor(value: string) {
            this.vp_SelectedColor = value;
            return this;
        }

        private vp_OnChange: Function;
        public onChange(value: Function) {
            this.vp_OnChange = value;
            return this;
        }

        public override render() {
            return (
                HStack(
                    ReactView(
                        <Circle
                            colors={['#4A4A4A',
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
                                '#595D66']}
                            color={this.vp_SelectedColor}
                            onChange={(color) => {
                                this.vp_OnChange(color.hex);
                            }
                            }
                        />
                    )
                ).maxWidth(500)
                    .render()
            )
        }
    }
    return new viewType().onChange(() => void 0);
}


