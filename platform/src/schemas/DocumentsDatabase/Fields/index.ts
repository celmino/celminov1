import { Fields as _Fields} from "../../applet";
import { DocumentCollectionFields } from "./documents/DocumentCollectionFields";
import { FolderCollectionFields } from "./documents/FolderCollectionFields";

export const Fields =
{
    ..._Fields,
    "documents": [
        ...FolderCollectionFields,
        ...DocumentCollectionFields,
        ...DocumentCollectionFields
      

    ]
}