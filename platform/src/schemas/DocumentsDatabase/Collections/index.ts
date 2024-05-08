import { Collections as _Collections} from "../../applet";

export const Collections = {
    ..._Collections,
    "documents": [
        // ---------- List Items Collection --------------------
        {
            "$id": "folders",
            "name": "Folders"
        },

        // ---------- List Status Collection --------------------
        {
            "$id": "listStatuses",
            "name": "List Statuses"
        },
        // ---------- Views Collection --------------------
        {
            "$id": "views",
            "name": "Views"
        },
        // ---------- View Contents Collection --------------------
        {
            "$id": "viewContents",
            "name": "View Contents"
        }
    ]
}