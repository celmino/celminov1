import {
    DialogPosition,
    ForEach,
    Fragment,
    HStack, Icon, OptionsContext, PopupButton,
    ReactView,
    ScrollView,
    Segmented,
    Spinner,
    SvgIcon,
    Text, TextField,
    UIController, UIFormController, UIView, UIViewBuilder, UIWidget, VStack,
    cAll,
    cBottom,
    cLeading,
    cTopLeading, cVertical, useEffect,
    useState
} from '@tuval/forms';
import { TuRectangle, TuShape, TuView, TuViewGridStyle, TuViewSnapStyle, ViewRenderingMode } from '@realmocean/diagram';
import { CGRectangle, CGSize } from "@tuval/cg";

import { useGetAccount, useGetTenantAccounts } from '@celmino/directoryprotocol';
import { is } from '@tuval/core';
import { useClickAway } from "@uidotdev/usehooks";
import { CuIcons, Icons } from './Icons';
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import React from 'react';
import { SegmentedRenderer } from '@realmocean/antd';
import { TaskTable2 } from './views/TaskTable/TaskTable2';
import { Brushes, Pens } from '@tuval/graphics';
import { evaluateExpression, parseExpression, printExpression, tokenizeExpression } from './expression';


const TuViewComponent = ({ shapes }) => {
    const [myView, setMyView] = useState<any>(Fragment());

    useEffect(() => {
        const tuView = new TuView();
        tuView.GridSnapDrag = TuViewSnapStyle.Jump;
        tuView.GridCellSize = new CGSize(10, 10)

        tuView.Width = 3000;
        tuView.Height = 3000;
        tuView.RenderingMode = ViewRenderingMode.Html;
        tuView.ResizeHandleSize = new CGSize(10, 10);

        shapes.forEach((shape) => {
            const rect = new TuRectangle();
            rect.Left = shape.x;
            rect.Top = shape.y;
            rect.Width = shape.width;
            rect.Height = shape.height;
            rect.CustomRenderer = Renderers[shape.type](tuView, shape);

            tuView.Document.Add(rect);
        });




        setMyView(tuView);
    }, shapes);
    return (
        UIViewBuilder(() =>
            myView
        ).render()
    )

}

const EditorjsRenderer = (view: TuView, shape) =>
    ({ diagramObject }: { diagramObject: TuRectangle }) => UIViewBuilder(() => {

        const [color, setColor] = useState('#9A0707');
        return (
            HStack({ alignment: cBottom })(
                HStack().width(32).height(32)
                    .background('gray')
                    .onClick(() => {
                        shape.config = {
                            ...shape.config,
                            color: 'gray'
                        }
                        alert(JSON.stringify(shape.config));
                    })
                ,
                HStack({ alignment: cLeading })(
                    UIWidget('com.celmino.widget.tldraw')
                        .config({})
                ).height(diagramObject.Height - 20)
                    .shadow('rgba(0, 0, 0, 0.35) 0px 5px 15px')
                    .onMouseDown((e) => {
                        //e.preventDefault()
                        e.stopPropagation();
                        e.nativeEvent.stopImmediatePropagation();
                    })
                    .onClick((e) => {
                        console.log(diagramObject);
                        console.log(view.Selection.Primary);
                        console.log(diagramObject === view.Selection.Primary);


                    })
                    .padding()
                    .background('white')
                    .outline(view.Selection.Primary === diagramObject ? 'solid 2px yellow' : '')
            )
        )
    }).render();

const Renderers = {
    'editor': EditorjsRenderer,
}

const HStackRenderer = (view: TuView) =>
    ({ diagramObject }: { diagramObject: TuRectangle }) => UIViewBuilder(() => {

        const [color, setColor] = useState('#9A0707');
        return (
            HStack({ alignment: cLeading })(
                Text(diagramObject.Width.toString()).foregroundColor('white').fontSize(20)
            )
                .onClick(() => {
                    console.log(diagramObject);
                    console.log(view.Selection.Primary);
                    console.log(diagramObject === view.Selection.Primary);
                })
                .padding()
                .background(color)
                .outline(view.Selection.Primary === diagramObject ? 'solid 2px yellow' : '')
        )
    }).render();

export class MyTestController extends UIFormController {

    public override LoadView(): UIView {



        const { fields, items, groupBy, onItemClick , groups} = this.props.config;
        const field = fields.find((field) => field.key === groupBy);
        /* let groups = [];

        if (field?.type === 'dropdown') {
            const { options = [] } = JSON.parse(field.type_content ?? '{}');
            groups = options;
        } */

        return (

            OptionsContext(() =>
                ScrollView({ axes: cAll, alignment: cTopLeading })(
                    VStack({ alignment: cTopLeading })(
                        TaskTable2(items, groups)
                        /*    ReactView(
                               <TuViewComponent shapes={[
                                   {
                                       type: 'editor',
                                       x: 50,
                                       y: 50,
                                       width: 550,
                                       height: 705,
                                       config: {
                                           color: 'white',
                                           borderColor: 'black'
                                       }
   
                                   },
                                   {
                                       type: 'editor',
                                       x: 750,
                                       y: 50,
                                       width: 550,
                                       height: 705,
                                       config: {
                                           color: 'white',
                                           borderColor: 'black'
                                       }
                                   }
                               ]}></TuViewComponent>
                           ), */

                        /* ScrollView({ axes: cVertical, alignment: cTopLeading })(
                            VStack({ alignment: cTopLeading })(
                                VStack({ alignment: cTopLeading })(

                                    VStack({ alignment: cTopLeading })(
                                        TaskTable2(items, groups)
                                    )
                                )
                            )
                                .cornerRadius(10)
                                .padding(20),

                            HStack().height(50)
                        ) */
                    ).height()
                )
            )
                .options(this.props.config)


        )
    }
}

