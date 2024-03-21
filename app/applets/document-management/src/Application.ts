
import { MyTestController } from './AppController';
import { RouteController } from './routes/+routes';
import { ListStatusWidget } from './widget/ListStatusWidget';
import { TreeController } from './TreeController';
import { SaveFolderAction } from './dialogs/AddFolderDialog';
import { FormBuilder } from '@celmino/ui';
import { SaveDocumentAction } from './dialogs/AddDocumentDialog';

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
            applet: RouteController,
            tree: TreeController
        };
    }
}

FormBuilder.injectAction(SaveFolderAction);
FormBuilder.injectAction(SaveDocumentAction);

FormBuilder.injectView('liststatus', ListStatusWidget)


