import { ConfigContext, Fragment, HStack, ReactView, Spinner, Text, UIController, UIView, UIWidget, VStack, cLeading, cTopLeading, nanoid, useConfig, useDialogStack, useRenderInfo, useState } from '@tuval/forms';


import React from 'react';
import { IConfig } from './IConfig';
import { WidgetController } from './WidgetController';
import { SelectViewDialog } from './dialogs/SelectViewDialog';
import { ActionPanel } from './views/ActionPanel';
import { FieldContainer } from './views/FieldContainer';
import { ObjectHeader } from './views/ObjectHeader';
import { useApplet, useRealm } from '@celmino/ui';
import { useListDocuments } from '@realmocean/sdk';


export class MyTestController extends UIController {
    public override LoadView(): UIView {

        const {realm} = useRealm();
        const {applet} = useApplet();

        const { documents: applets, isLoading: isAppletsLoading } = useListDocuments(realm.$id, 'workspace', 'applets');

        const { documents: treeItems, isLoading: isTreeItemsLoading } = useListDocuments(realm.$id, 'workspace', 'ws_tree');
        
        const { objectId, fields, views = [], powerUps = [], selectedViewIndex = 0,objectViews = [],
            description = null, onDescriptionChange = void 0 }: IConfig = this.props.config || {};

      

        const { openDialog } = useDialogStack();

        const [widgetController, setWidgetController] = useState<any>({ controller: WidgetController });

        const _WidgetController = widgetController.controller;

        return (
           (isAppletsLoading || isTreeItemsLoading) ? Spinner() :
            ConfigContext(() =>
                VStack({ alignment: cTopLeading })(
                    //    Text(JSON.stringify(description)),
                    ActionPanel(),
                    VStack({ alignment: cTopLeading })(
                        HStack({ alignment: cTopLeading, spacing: 12 })(
                            VStack({ alignment: cTopLeading })(
                                ObjectHeader(),
                             
                             
                                    UIWidget('com.tuvalsoft.widget.blocknote')
                                    .config({
                                        defaultValue:null,
                                        clamp: true,
                                        workspaceId: realm.$id,
                                        appletId: applet.$id,
                                        applets,
                                        treeItems,
                                      
                                        onChange: (data) => {
                                            console.log(data)
                                           /*  updateDocument({
                                                databaseId: appletId,
                                                collectionId: 'documentContent',
                                                documentId: documentId,
                                                data: {
                                                    content: JSON.stringify(data)
                                                }
                                            }) */
                                        }
                                    })
                                 /*    UIWidget('com.celmino.widget.tab-view')
                                        .config({
                                            allViews: views,
                                            views: objectViews,
                                           
                                            onChange: (index) => {
                                                  setWidgetController({
                                                    controller: class extends WidgetController { }
                                                });
                                              },
                                            actions: [
                                                {
                                                    title: 'View',
                                                    onClick: () => {
                                                        SelectViewDialog.Show(views, powerUps).then((view) => {
                                                         
                                                        });
                                                    }
                                                }
                                            ]
                                        }) */
                             

                                /* objectViews?.length > 0 ?

                                    ReactView(
                                        <_WidgetController
                                            objectId={objectId}
                                            view={objectViews?.[selectedViewIndex]?.view}
                                            defaultValue={selectedViewIndex === 0 ? description : objectViews?.[selectedViewIndex]?.data || {}}
                                            onChange={(data) => {
                                                if (selectedViewIndex === 0) {
                                                    onDescriptionChange(data);
                                                }
                                                else {
                                                   
                                                }
                                            }}
                                        ></_WidgetController>
                                    )


                                    : Fragment() */
                            )
                                .width(null)
                                .flexBasis('0')
                                .flexGrow('1')
                                .flexShrink('0')
                                .overflowX('auto'),
                            FieldContainer(fields)
                        )
                    )
                    //.padding('4px 36px 12px')



                )
            ).config(this.props.config)

        )
    }

}

