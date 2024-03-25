import { Collections } from "./collections/Collections";
import { Fields } from "./collections/Fields";
import { ListItemsCollection } from "./collections/ListItems";
import { ListStatusesCollection } from "./collections/ListStatuses";
import { ViewContentsCollection } from "./collections/ViewContents";
import { ViewSettings } from "./collections/ViewSettings";
import { ViewsCollection } from "./collections/Views";




export const ListAppletDatabase = [
    {
        "name": "List Applet",
        "id": "world",
        "category": "applet",
        "collections": [
            Collections,
            Fields,
            ListItemsCollection,
            ListStatusesCollection,
            ViewsCollection,
            ViewContentsCollection,
            ViewSettings
        ]
    }
]


