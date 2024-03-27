import {
  ReactView,
  Text,
  UIController,
  UIView,
  useState, Fragment
} from '@tuval/forms';
import React from 'react';
import { CustomNodeFlow } from './views/CustomNodeFlow';
import { Flow } from './views/Flow';
import { useRealm } from '@celmino/ui';
import { useListDocuments } from '@realmocean/sdk';
import { ReactFlowProvider } from './diagram/react';




export class MyTestController extends UIController {


  public override LoadView(): UIView {

    const { realm } = useRealm();
    const { documents, isLoading } = useListDocuments(realm.$id, 'workspace', 'applets');
    return (
      isLoading ? Fragment() :
        ReactView(
          <ReactFlowProvider>
            <Flow applets={documents}></Flow>
          </ReactFlowProvider>
        )
    )
  }
}

