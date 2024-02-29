import { is } from "@tuval/core";
import { HStack, cTrailing, UIViewBuilder, PopupButton, Icon, cHorizontal, VStack, ForEach, cLeading, DialogPosition } from "@tuval/forms";
import { useState } from "react";
import { Icons } from "./Icons";
import { AddTextFieldDialog, TextFieldsAttributesView } from "./dialogs/AddTextAttributeDialog";
import { Text } from "@realmocean/vibe";
import { FormBuilder } from "../../FormBuilder/FormBuilder";
import { NumberFieldsAttributesView } from "./dialogs/AddNumberFieldDialog";


const FieldTypes = {
    'text': TextFieldsAttributesView,
    'richtext': TextFieldsAttributesView,
    'number': NumberFieldsAttributesView
}
export const NewFieldMenuView = (workspaceId: string, databaseId: string, collectionId: string) => (
    HStack({ alignment: cTrailing })(
        UIViewBuilder(() => {
            const [menuIsOpen, setMenuIsOpen] = useState(false);
            const [selectedType, setSelectedType] = useState(null);
            let _hideHandle = null;
            const AttributesMenuItems = [
                {
                    title: 'Text',
                    icon: Icons.TextAttribute,
                    onClick: () => (
                        setSelectedType('text')
                        //DynoDialog.Show(AddTextFieldDialog(workspaceId, databaseId, collectionId))
                    )
                },
                {
                    title: 'Rich Text',
                    icon: Icons.RichTextAttribute,
                    onClick: () => (
                        setSelectedType('richtext')
                        //  DynoDialog.Show(AddNumberFieldDialog(workspaceId, databaseId, collectionId))
                    )
                },
                {
                    title: 'Number',
                    icon: Icons.NumberAttribute,
                    onClick: () => (
                        setSelectedType('number')
                    )
                },
                {
                    title: 'Single Select',
                    icon: Icons.SingleSelectAttribute
                },
                {
                    title: 'Multi Select',
                    icon: Icons.MultiSelectAttribute
                },
                {
                    title: 'Workflow',
                    icon: Icons.WorkflowAttribute
                },
                {
                    title: 'Assignments',
                    icon: Icons.AssignmentAttribute
                },
                {
                    title: 'Date',
                    icon: Icons.DateAttribute,
                    onClick: () => (
                        alert() //DynoDialog.Show(AddDatetimeFieldDialog(workspaceId, databaseId, collectionId))
                    )
                },
                {
                    title: 'Checkbox',
                    icon: Icons.CheckboxAttribute,
                    onClick: () => (
                        alert() // DynoDialog.Show(AddBooleanFieldDialog(workspaceId, databaseId, collectionId))
                    )
                },
                {
                    title: 'URL',
                    icon: Icons.URLAttribute
                },
                {
                    title: 'Email',
                    icon: Icons.EmailAttribute
                },
                {
                    title: 'Phone',
                    icon: Icons.PhoneAttribute
                },
                {
                    title: 'Location',
                    icon: Icons.LocationAttribute
                },
                {
                    title: 'Avatar',
                    icon: Icons.AvatarAttribute
                },
                {
                    title: 'Icon',
                    icon: Icons.IconAttribute
                },
                {
                    title: 'Files',
                    icon: Icons.FilesAttribute
                },
                {
                    title: 'Comments',
                    icon: Icons.CommentsAttribute
                },
                {
                    title: 'Relation to...',
                    icon: Icons.RelationAttribute,
                    onClick: () => {
                        alert() //DynoDialog.Show(AddRelationFieldDialog(workspaceId,databaseId, collectionId))
                    }
                }
            ]
            return (
                PopupButton(
                    HStack(
                        Icon(Icons.Plus).foregroundColor(menuIsOpen ? 'white' : ''),
                        Text('New Field')
                            .foregroundColor(menuIsOpen ? 'white' : '')
                            .fontFamily("ui-sans-serif,-apple-system,BlinkMacSystemFont,'Segoe UI','Helvetica','Arial',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'")
                            .fontSize(14)
                            .fontWeight('500')
                    )
                        .width()

                        .height(30)
                        .padding(cHorizontal, 12)
                        .foregroundColor('hsl(205, 9%, 47%)')
                        .background({ default: menuIsOpen ? '#6D7A83' : '', hover: menuIsOpen ? '#6D7A83' : 'rgba(109,122,131,0.15)' })
                        //.border({ hover: '1px solid rgba(255, 255, 255, 0)' })
                        .cornerRadius(6)
                        .transition('all .15s ease-out')
                        .cursor('pointer')
                        .onClick(() => {
                            setMenuIsOpen(!menuIsOpen);
                        })
                )(
                    selectedType == null ?
                        VStack(
                            ...ForEach(AttributesMenuItems)((item) =>
                                HStack({ alignment: cLeading, spacing: 10 })(
                                    Icon(item.icon),
                                    Text(item.title)
                                )
                                    .background({ hover: 'rgba(81,97,108,.1)' })
                                    .padding()
                                    .cursor('pointer')
                                    .height(32)
                                    .onClick(() => {
                                        //_hideHandle();
                                        is.function(item.onClick) ? item.onClick() : void 0;
                                    })
                            )
                        )
                            .width(200)
                            .marginTop(8)
                            .border('1px solid #EFF0F1')
                            .cornerRadius(6)
                        :
                        FieldTypes[selectedType](workspaceId, databaseId, collectionId)
                )
                    .hideHandle(hideHandle => _hideHandle = hideHandle)
                    .dialogPosition(DialogPosition.BOTTOM_END)
                    .onDidHide(() => {
                        setMenuIsOpen(false);
                        setSelectedType(null);
                    })
            )
        })


    ).width()

)