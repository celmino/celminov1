import {
    ReactView,
    Text,
    UIController,
    UIView,
    useState
} from '@tuval/forms';
import { Flow } from './Flow';
import React from 'react';




export class MyTestController extends UIController {


    public override LoadView(): UIView {

        return (
          ReactView(
            <Flow></Flow>
          )
        )
    }
}

