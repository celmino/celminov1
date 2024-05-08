import { is, ModuleLoader } from '@tuval/core';

import * as forms from './index';
let globalObject: any = undefined;

/// #if WEB
if (is.workerContext()) {
    globalObject = self;
} else {
    globalObject = window;
}
/// #endif

/// #if NODE
//globalObject = global;
/// #endif


globalObject['celmino$platform'] = forms;
ModuleLoader.FireModuleLoadedEvent('celmino$platform',forms);
if (is.workerContext()) {
    console.log('celmino ui yüklendi.');
    //console.log(globalObject['tuval$forms']);
}