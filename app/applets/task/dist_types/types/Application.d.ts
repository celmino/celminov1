import { RouteController } from './routes/+routes';
import { WorkspaceTreeWidgetController } from './TreeController';
import { TaskViewWidget } from './widgets/TaskViewWidget';
export declare class ProcessMining {
    GetMainController(): {
        tree: typeof WorkspaceTreeWidgetController;
        applet: typeof RouteController;
        taskView: typeof TaskViewWidget;
    };
}
