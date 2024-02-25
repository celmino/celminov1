import { UIFormController, UIView } from '@tuval/forms';
export declare class MyTestController extends UIFormController {
    LoadView(): UIView;
}
export declare class RatingWidget {
    GetMainController(): typeof MyTestController;
}
