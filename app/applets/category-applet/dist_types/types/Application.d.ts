import { TreeController } from './TreeController';
import { RouteController } from './routes/+routes';
export declare class ProcessMining {
    GetMainController(): {
        tree: typeof TreeController;
        applet: typeof RouteController;
    };
}
