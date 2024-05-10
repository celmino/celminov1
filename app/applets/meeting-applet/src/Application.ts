
import { FormBuilder } from '@celmino/platform';

import { RouteController } from './routes/+routes';
import { TreeController } from './TreeController';
import { SaveMeetingSpace } from './dialogs/AddMeetingSpace';
import { SaveMeetingAction } from './dialogs/AddMeetingDialog';

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


FormBuilder.injectAction(SaveMeetingSpace);
FormBuilder.injectAction(SaveMeetingAction);

