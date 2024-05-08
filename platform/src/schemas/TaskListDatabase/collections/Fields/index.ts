import { Fields as _Fields} from "../../../applet";
import { ListFields } from "./documents/List";
import { ListItemsCollectionFields } from "./documents/ListItems";
import { ListStatusesFields } from "./documents/ListStatuses";
import { TaskTypeFields } from "./documents/TaskType";
import { ViewContentsFields } from "./documents/ViewContents";
import { ViewsFields } from "./documents/Views";

export const Fields =
{
    ..._Fields,
    "documents": [
        ...ListFields,
        ...ListItemsCollectionFields,
        ...ListStatusesFields,
        ...ViewsFields,
        ...ViewContentsFields,
        ...TaskTypeFields

    ]
}