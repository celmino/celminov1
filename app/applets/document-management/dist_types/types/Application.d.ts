import { TreeController } from './TreeController';
import { RouteController } from './routes/+routes';
export declare class ProcessMining {
    GetMainController(): {
        applet: typeof RouteController;
        tree: typeof TreeController;
    };
}
