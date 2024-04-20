import { DatabaseService } from "./DatabaseService";
import { SchemaService } from "./SchemaService";


 declare global {
 
    export class RealmoceanService {
        Name: string;
        services: any;
        databaseService: DatabaseService;
        schemaService: SchemaService;
    }
   
}