
import { FormBuilder } from '@celmino/ui';
import { SaveCollectionAction } from './dialogs/AddCollection/actions/SaveCollectionAction';
import { SaveDocumentAction } from './dialogs/AddCollection/actions/SaveDocumentAction';
import { SaveTextFieldAction } from './dialogs/AddTextAttributeDialog';
import { RouteController } from './routes/+routes';
import { TreeController } from './TreeController';

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
FormBuilder.injectAction( SaveDocumentAction)
FormBuilder.injectAction(SaveTextFieldAction) 


