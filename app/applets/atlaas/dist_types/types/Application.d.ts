import { RouteController } from './routes/+routes';
import { WorkspaceTreeWidgetController } from './TreeController';
export declare class ProcessMining {
    GetMainController(): {
        tree: typeof WorkspaceTreeWidgetController;
        applet: typeof RouteController;
    };
}
