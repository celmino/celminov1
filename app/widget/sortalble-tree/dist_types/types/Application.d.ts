import React from 'react';
import { UIFormController, UIView } from '@tuval/forms';
export declare class Tree extends React.Component<any, any> {
    constructor(props: any);
    render(): React.JSX.Element;
}
export declare class MyTestController extends UIFormController {
    LoadView(): UIView;
}
export declare class RatingWidget {
    GetMainController(): typeof MyTestController;
}
