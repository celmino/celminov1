import { FormBuilder, UIController } from '@tuval/forms';
import { MyTestController } from './AppController';
import { RouteController } from './routes/+routes';
import { WorkspaceTreeWidgetController } from './TreeController';
import { TaskViewWidget } from './widgets/TaskViewWidget';
import { TaskListViewWidget } from './widgets/TaskListView/TaslListViewWidget';

const manifest = require('./manifest');

declare var tuval$core;

function App(manifest: any) {
    return <T extends { new(...args: any[]): {} }>(constructor: T) => {
        if (tuval$core['__APPS__'] == null) {
            tuval$core['__APPS__'] = {};
        }
        tuval$core['__APPS__'][manifest.application.name] = constructor;
    }
}



@App(manifest)
export class ProcessMining {
    public GetMainController() {
        return {
            tree: WorkspaceTreeWidgetController,
            applet: RouteController,
            taskView: TaskViewWidget,
            taskListView: TaskListViewWidget
        };
    }
}




