import { ForEach, HStack, ReactView, Text, UIFormController, UIView, VStack, cLeading, cTopLeading } from '@tuval/forms';

const manifest = require('./manifest');


declare var tuval$core;

function App(manifest: any) {
    return <T extends { new(...args: any[]): {} }>(constructor: T) => {
        if (tuval$core['__APPS__'] == null) {
            tuval$core['__APPS__'] = {};
        }
        tuval$core['__APPS__'][manifest.application.name] = constructor;
    }
}


import React, { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import { SortableContext } from '@dnd-kit/sortable';
import { SortableList } from './components/SortableList';
import { is } from '@tuval/core';



export class MyTestController extends UIFormController {

    public override LoadView(): UIView {
        const { items = [], onChange = ()=> void 0 } = this.props.config;



        return (
            HStack({ alignment: 'cTopLeading' })(
                ReactView(
                    <SortableList
                        items={items}
                        onChange={(e) => onChange(e)}
                        renderItem={(item: any) => (
                            <SortableList.Item id={item.id}>
                                {
                                    HStack({ alignment: cLeading })(
                                        ReactView(
                                            <SortableList.DragHandle />
                                        ),
                                        is.function(item.view) ? item.view() :
                                            Text(item.name)
                                    ).height().render()
                                }
                            </SortableList.Item>
                        )}
                    />
                )
            )

        )
    }
}
@App(manifest)
export class RatingWidget {
    public GetMainController() {
        return MyTestController
    }
}





