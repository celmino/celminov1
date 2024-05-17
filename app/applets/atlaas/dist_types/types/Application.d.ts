import { RouteController } from './routes/+routes';
import { WorkspaceTreeWidgetController } from './TreeController';
import './styles/global.scss';
export declare class ProcessMining {
    GetMainController(): {
        tree: typeof WorkspaceTreeWidgetController;
        applet: typeof RouteController;
    };
}
