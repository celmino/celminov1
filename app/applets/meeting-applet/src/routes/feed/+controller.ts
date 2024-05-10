import { Text, UIController, UIView, VStack, cTop } from "@tuval/forms";
import { Menu } from "../views/Menu";

export class FeedController extends UIController {
    public override LoadView(): UIView {

        return (
            VStack({ alignment: cTop })(
                Menu('feed'),
                Text('Feed')
            )
        )

    }
}