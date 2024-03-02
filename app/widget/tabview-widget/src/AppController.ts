import {
    ForEach, HStack, Icon, Icons, Spinner, Text, UIController,
    UINavigate, UIView, WorkProtocol, cHorizontal, cLeading,
    getAppFullName, useNavigate, useProtocol, useState, str2rgb, MenuButton, cTrailing
} from '@tuval/forms';
import { TabItem } from './views/TabItem';
import { SelectAnalyseDialog } from './SelectAnalyseDialog';
import { is } from '@tuval/core';
import { Models } from '@realmocean/sdk';
import { DynoDialog } from './DynoDialog';

const colors = [
   
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
    '#595D66',
    '#4A4A4A',
    '#6A849B',
    '#BEC5CC',
    '#D40915',
    '#E72065'

]
export class MyTestController extends UIController {


    public override LoadView(): UIView {

        const { views, view_id, actions, selectedIndex = 0,
            onChange = void 0, isLoading = false, menu=[] } = this.props.config || {};

        const [selectedIndexState, setSelectedIndexState] = useState(selectedIndex);

        //const selectedIndex = views?.findIndex(view => view.id === view_id);

        return (
            HStack({ alignment: cLeading })(
                isLoading ? HStack(Spinner()).height().padding(cHorizontal, 20) :
                    HStack({ alignment: cLeading, spacing: 10 })(
                        ...ForEach(views as any[])((view: any, index) =>
                            TabItem(view, menu,index, selectedIndexState, colors[index] ?? '#AAAAAA', () => { setSelectedIndexState(index); onChange?.(index); })
                        )
                    ).width(),
                ...ForEach(actions)((action: any, index) =>
                    HStack({ spacing: 5 })(
                        Icon(Icons.Add).fontSize(10),
                        Text(action.title).lineHeight('1'),
                       
                    )
                        .width().height().cursor('pointer').padding(5)
                        .background({ hover: '#fafbfc' })
                        .onClick(() => {
                            if (is.function(action.onClick)) {
                                action.onClick();
                            }
                        })
                )
            )
                .width()
                .padding(cHorizontal, 20)
        )
    }
}

