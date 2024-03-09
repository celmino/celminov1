import { RouteController } from './routes/+routes';
import { TreeController } from './TreeController';
export declare class ProcessMining {
    GetMainController(): {
        tree: typeof TreeController;
        applet: typeof RouteController;
    };
}
