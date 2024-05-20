import {  UIController } from '@tuval/forms';
import { MyTestController } from './AppController';
import { SaveSpaceAction } from './dialogs/AddSpaceDialog';
import { SaveFolderAction } from './dialogs/AddFolderDialog';
import { SaveDocumentAction } from './dialogs/AddDocumentDialog';
import { SaveWhiteboardAction } from './dialogs/AddWhiteboardDialog';
import { AppController2 } from './AppController2';

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
export class RatingWidget {
    public GetMainController() {
       return AppController2;
    }
}

/* FormBuilder.injectAction('saveSpace', SaveSpaceAction);
FormBuilder.injectAction('dm_saveFolder', SaveFolderAction);
FormBuilder.injectAction('saveDocument', SaveDocumentAction);
FormBuilder.injectAction('saveWhiteboard', SaveWhiteboardAction);
 */




