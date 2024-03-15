import { Fields as _Fields} from "../../../applet";
import { ListItemsCollectionFields } from "./documents/ListItems";
import { ListStatusesFields } from "./documents/ListStatuses";
import { ViewContentsFields } from "./documents/ViewContents";
import { ViewsFields } from "./documents/Views";

export const Fields =
{
    ..._Fields,
    "documents": [
        ...ListItemsCollectionFields,
        ...ListStatusesFields,
        ...ViewsFields,
        ...ViewContentsFields

    ]
}