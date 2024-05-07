import { useRealm, useApplet } from "@celmino/ui";
import { useListDocuments } from "@realmocean/sdk";
import { ConfigContext, HStack, Icon, Spinner, SvgIcon, Text, UIController, UIView, UIWidget, VStack, cLeading, cTopLeading, cVertical, useDialogStack, useState } from "@tuval/forms";
import { ActionPanel } from "../views/ActionPanel";
import { TaskHeader } from "../views/TaskHeader";
import { useGetTask } from "../hooks/useGetTask";
import { InlineTitle } from "./views/InlineTitle";


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

                                    HStack(
                                        HStack({ alignment: cTopLeading })(
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
                                        .minHeight(200)

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
