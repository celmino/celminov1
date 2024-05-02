
import { EditableHeader, EditableHeadingSizes, Fragment, HStack, UIViewBuilder, UIWidget, VStack, cLeading, cTopLeading, useDialogStack } from "@tuval/forms";

import { useApplet, useRealm } from "@celmino/ui";
import { useUpdateDocument } from "@realmocean/sdk";
import { is } from "@tuval/core";


const fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", roboto, "Helvetica Neue", helvetica, arial, sans-serif'
export const ViewHeader = (header, onHeaderChange: any = void 0) => UIViewBuilder(() => {

    const { openDialog } = useDialogStack();
    const { realm } = useRealm();
    const { applet } = useApplet();
    const { updateDocument } = useUpdateDocument(realm.$id);
  

    return (
     
         
               
                HStack({ alignment: cLeading })(
                    HStack(
                        UIWidget("com.tuvalsoft.widget.icons")
                            .config({
                                onChange: (value) => {
                                    updateDocument({
                                        databaseId: 'workspace',
                                        collectionId: 'applets',
                                        documentId: applet.$id,
                                        data: {
                                            iconName: value.iconName,
                                            iconCategory: value.iconCategory
                                        }
                                    })
                                },
                                selectedIcon: applet?.iconName,
                                color: applet?.bg_color,
                                selectedCategory: applet?.iconCategory,
                                width: 40,
                                height: 40
                            })
                    ).width().height(),

                    //  _StatusMarker(task?.stage_id),
                    is.string(header) ?
                        EditableHeader(header).size(EditableHeadingSizes.SMALL)
                            .onChange((e) => onHeaderChange(e))
                            .fontSmoothing('auto')
                            .foregroundColor('#212526')
                            .fontSize(24).fontFamily(fontFamily).fontWeight('500')
                            .lineHeight('1.25')
                            .kerning('-0.003em')
                        :
                        is.function(header) ? header() : Fragment(),
                )
                    .background('white')
                    .allHeight(60)
                 

          


    )

})