
import { EditableHeader, EditableHeadingSizes, Fragment, HStack, UIViewBuilder, UIWidget, VStack, cHorizontal, cLeading, cTopLeading, useDialogStack } from "@tuval/forms";

import { useApplet, useRealm } from "@celmino/platform";
import { useUpdateDocument } from "@realmocean/sdk";
import { is } from "@tuval/core";
import React from "react";
import { HeaderButton } from "./HeaderButton";

const AutomationIcon = () => (
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
        aria-hidden="true">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.114 1.055a.75.75 0 0 1 .463.79l-.726 5.738h4.437c.2 0 .398 0 .56.015.153.014.43.05.67.243.279.223.44.562.436.92-.003.307-.15.544-.237.672-.09.134-.216.287-.343.443l-.008.009L9.767 18.7a.75.75 0 0 1-1.344-.544l.726-5.74H4.712c-.2 0-.398 0-.56-.014-.153-.014-.43-.05-.67-.243a1.167 1.167 0 0 1-.436-.92c.003-.307.15-.544.237-.672.09-.134.216-.287.343-.443l.008-.009 6.599-8.814a.75.75 0 0 1 .881-.246Zm-6.207 9.862H10a.75.75 0 0 1 .744.844l-.477 3.768 4.826-6.446H10a.75.75 0 0 1-.744-.844l.477-3.768-4.826 6.446Z"></path></svg>
)

const AccessTemplatesIcon = () => (
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" width="18" height="18"  fill="currentColor" aria-hidden="true" 
   ><path fill-rule="evenodd" clip-rule="evenodd" d="M9 2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h.25v1.25H6.667a2.417 2.417 0 0 0-2.417 2.417V12H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-.25v-.333a.917.917 0 0 1 .917-.917h6.666a.917.917 0 0 1 .917.917V12H14a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-.25v-.333a2.417 2.417 0 0 0-2.417-2.417H10.75V8H11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H9Zm-.5 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H9a.5.5 0 0 1-.5-.5V4ZM4 13.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5Zm10 0a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-2Z"></path></svg>
)


const RelationsIcon = () => (
<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" aria-hidden="true"><g><path d="M7.303 7.774a.75.75 0 0 1 0-.577A.75.75 0 0 1 8 6.732h4.652a.75.75 0 0 1 .287.064.703.703 0 0 1 .402.402.75.75 0 0 1 .064.287v4.55a.753.753 0 0 1-1.505.001l.004-2.743-4.025 4.025a.75.75 0 0 1-1.06-1.06l4.025-4.025-2.845.005a.75.75 0 0 1-.696-.464Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M5.555 3.348a8 8 0 1 1 8.89 13.304 8 8 0 0 1-8.89-13.304Zm.89 11.973a6.4 6.4 0 1 0 7.11-10.643 6.4 6.4 0 0 0-7.11 10.643Z"></path></g></svg>

)


const fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", roboto, "Helvetica Neue", helvetica, arial, sans-serif'
export const ViewHeader = (header, onHeaderChange: any = void 0) => UIViewBuilder(() => {

    const { openDialog } = useDialogStack();
    const { realm } = useRealm();
    const { applet } = useApplet();
    const { updateDocument } = useUpdateDocument(realm.$id);


    return (
        VStack({ alignment: cTopLeading })(
            HStack({ alignment: cTopLeading })(
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
                    .height(),
                HStack({spacing: 5})(
                    HeaderButton('Automations', AutomationIcon),
                    HeaderButton('Access Templates', AccessTemplatesIcon),
                    HeaderButton('Relations', RelationsIcon)
                    
                ).width()
                .background('white')
                .padding(cHorizontal, 20)

            ).height()


        )
            .height()


    )

})