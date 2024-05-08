import { TreeController } from './TreeController';
import { RouteController } from './routes/+routes';
import { DocumentController } from './routes/document-[documentId]/+controller';
export declare class ProcessMining {
    GetMainController(): {
        applet: typeof RouteController;
        tree: typeof TreeController;
        documentView: typeof DocumentController;
    };
}
