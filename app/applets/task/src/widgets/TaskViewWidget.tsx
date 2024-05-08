import { useApplet, useRealm } from "@celmino/platform";
import { useListDocuments } from "@realmocean/sdk";
import { ConfigContext, HStack, Icon, Spinner, SvgIcon, Text, UIController, UIView, UIWidget, VStack, cTopLeading, cVertical, useDialogStack } from "@tuval/forms";
import { useGetTask } from "../hooks/useGetTask";
import { ActionPanel } from "../views/ActionPanel";
import { TaskHeader } from "../views/TaskHeader";
import { InlineTitle } from "./views/InlineTitle";
import React from "react";


const DescriptionIcon = () => (
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" aria-hidden="true" ><g><path d="M10.7 6.571h5.6a.664.664 0 0 0 .495-.23.837.837 0 0 0 .205-.555.837.837 0 0 0-.205-.556A.664.664 0 0 0 16.3 5h-5.6a.664.664 0 0 0-.495.23.837.837 0 0 0-.205.556c0 .208.074.408.205.555.131.148.31.23.495.23Zm0 7.857h-7a.664.664 0 0 0-.495.23.837.837 0 0 0-.205.556c0 .209.074.409.205.556.131.147.31.23.495.23h7a.664.664 0 0 0 .495-.23.837.837 0 0 0 .205-.556.837.837 0 0 0-.205-.555.664.664 0 0 0-.495-.23Zm5.6-3.142H3.7a.663.663 0 0 0-.495.23.837.837 0 0 0-.205.555c0 .209.074.409.205.556.131.147.31.23.495.23h12.6a.664.664 0 0 0 .495-.23.837.837 0 0 0 .205-.556.837.837 0 0 0-.205-.555.663.663 0 0 0-.495-.23Zm0-3.143h-5.6a.664.664 0 0 0-.495.23.837.837 0 0 0-.205.556c0 .208.074.408.205.555.131.147.31.23.495.23h5.6a.664.664 0 0 0 .495-.23A.837.837 0 0 0 17 8.93a.837.837 0 0 0-.205-.556.664.664 0 0 0-.495-.23ZM8.6 3.314H3.8a.8.8 0 1 0 0 1.6h1.6v4a.8.8 0 1 0 1.6 0v-4h1.6a.8.8 0 0 0 0-1.6Z"></path></g></svg>)
export class TaskViewWidget extends UIController {
    public override LoadView(): UIView {

        const { realm } = useRealm();

        const { applet } = useApplet();
        const { documents: applets, isLoading: isAppletsLoading } = useListDocuments(realm.$id, 'workspace', 'applets');

        const { documents: treeItems, isLoading: isTreeItemsLoading } = useListDocuments(realm.$id, 'workspace', 'ws_tree');

        const { taskId, fields, views = [], powerUps = [], selectedViewIndex = 0, objectViews = [],
            description = null, onDescriptionChange = void 0 } = this.props.config || {};

        const { task, isLoading } = useGetTask(taskId);

        const { openDialog } = useDialogStack();

        //  const [widgetController, setWidgetController] = useState<any>({ controller: WidgetController });

        // const _WidgetController = widgetController.controller;

        return (
            (isAppletsLoading || isTreeItemsLoading || isLoading) ? Spinner() :
                ConfigContext(() =>
                    VStack({ alignment: cTopLeading })(
                        //    Text(JSON.stringify(description)),
                        ActionPanel(),
                        VStack({ alignment: cTopLeading })(
                            HStack({ alignment: cTopLeading, spacing: 12 })(
                                VStack({ alignment: cTopLeading })(
                                    TaskHeader(task.name, () => void 0, null),
                                    HStack(
                                        VStack({ alignment: cTopLeading, spacing: 10 })(
                                            InlineTitle(SvgIcon('cu3-icon-userStatus'), 'Status'),
                                            InlineTitle(SvgIcon('cu3-icon-calendar'), 'Dates'),
                                            InlineTitle(SvgIcon('cu3-icon-timeTracking'), 'Track Time')
                                        ),
                                        VStack({ alignment: cTopLeading, spacing: 10 })(
                                            InlineTitle(SvgIcon('cu3-icon-userStatus'), 'Status'),
                                            InlineTitle(SvgIcon('cu3-icon-calendar'), 'Dates'),
                                            InlineTitle(SvgIcon('cu3-icon-timeTracking'), 'Track Time')
                                        )
                                    ).height()
                                        .padding(20),

                                    VStack({ alignment: cTopLeading })(
                                        HStack({spacing: 5})(
                                            Icon(DescriptionIcon),
                                            Text('Description').foregroundColor('rgb(101, 111, 125)')
                                        ).width().height(),
                                        VStack({ alignment: cTopLeading })(
                                            UIWidget('com.tuvalsoft.widget.blocknote')
                                                .config({
                                                    defaultValue: null,
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
                                        )
                                            .border('solid 1px #E8EAED')
                                            .cornerRadius(6)
                                            .padding(cVertical, 20)
                                    )
                                        .minHeight(300)

                                        .padding(20)
                                        .height()

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
                                // FieldContainer(fields)
                            )
                        )
                        //.padding('4px 36px 12px')



                    )
                ).config(this.props.config)

        )
    }

}
