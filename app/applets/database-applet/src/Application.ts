
import { FormBuilder } from '@celmino/platform';
import { TreeController } from './TreeController';
import { RouteController } from './routes/+routes';
import { SaveCollectionAction } from './dialogs/AddCollectionDialog';

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
            tree: TreeController,
            applet: RouteController
        };
    }
}


//FormBuilder.injectView('liststatus', ListStatusWidget)

FormBuilder.injectAction(SaveCollectionAction)



