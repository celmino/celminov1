import { Fragment, Text, UIFormController, UINavigate, urlFriendly, useParams } from "@tuval/forms";
import { useListViews } from "../../../hooks/useListViews";
import { ListView } from "./views/ListView";
import { useGetView } from "../../../hooks/useGetView";
import { is } from "@tuval/core";
import { KanbanView } from "./views/KanbanView";

const types = {
    'list': ListView,
    'kanban': KanbanView
}
export class ViewController extends UIFormController {
    public LoadView() {
        const { viewId } = useParams();
        const { view, isLoading } = useGetView(viewId);
        return (
            isLoading ? Fragment() :
                 is.function(types[view.type]) ?
                    types[view.type]?.() :
                    Text('View type not found')
        )
    }

}
