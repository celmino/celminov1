import { RouteController } from './routes/+routes';
import { TreeController } from './TreeController';
export declare class ProcessMining {
    GetMainController(): {
        applet: typeof RouteController;
        tree: typeof TreeController;
    };
}
