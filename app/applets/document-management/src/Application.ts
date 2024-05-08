
import { FormBuilder } from '@celmino/platform';
import { TreeController } from './TreeController';
import { SaveDocumentAction } from './dialogs/AddDocumentDialog';
import { SaveFolderAction } from './dialogs/AddFolderDialog';
import { RouteController } from './routes/+routes';
import { DocumentController } from './routes/document-[documentId]/+controller';

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
            tree: TreeController,
            documentView: DocumentController
        };
    }
}

FormBuilder.injectAction(SaveFolderAction);
FormBuilder.injectAction(SaveDocumentAction);



