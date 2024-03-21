
import { Collections } from "./Collections";
import { DocumentContentCollection } from "./DocumentContent";
import { DocumentCollection } from "./Documents";
import { Fields } from "./Fields";
import { FoldersCollection } from "./Folders";

export const DocumentsDatabase = [
    {
        "name": "Document Management",
        "id": "document_management",
        "category": "app",
        "collections": [
            Collections,
            Fields,
            FoldersCollection,
            DocumentCollection,
            DocumentContentCollection
        ]
    }
]

