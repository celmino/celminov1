import {
    ReactView,
    Text,
    UIController,
    UIView,
    useState
} from '@tuval/forms';
import React from 'react';
import { CustomNodeFlow } from './views/CustomNodeFlow';
import { Flow } from './views/Flow';




export class MyTestController extends UIController {


    public override LoadView(): UIView {

        return (
          ReactView(
            <Flow></Flow>
          )
        )
    }
}

