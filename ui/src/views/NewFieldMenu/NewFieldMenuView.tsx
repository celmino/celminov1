import { is } from "@tuval/core";
import { HStack, cTrailing, UIViewBuilder, PopupButton, Icon, cHorizontal, VStack, ForEach, cLeading, DialogPosition, UIController, ReactView, UIFormController, UIView, OptionsContext, DialogContext } from "@tuval/forms";
import { useState } from "react";
import { Icons } from "./Icons";
import { AddTextFieldDialog, SaveTextFieldAction } from "./dialogs/AddTextAttributeDialog";
import { Text } from "@realmocean/vibe";
import { FormBuilder } from "../../FormBuilder/FormBuilder";
import { AddNumberFieldDialog, SaveNumberFieldAction } from "./dialogs/AddNumberFieldDialog";
import { AddRichTextFieldDialog, SaveRichTextFieldAction } from "./dialogs/AddRichtextFieldDialog";
import { AddSelectFieldDialog, SaveSelectFieldAction } from "./dialogs/AddSelectFieldDialog";
import React from "react";
import { AddMultiSelectFieldDialog, SaveMultiSelectFieldAction } from "./dialogs/AddMultiSelectDialog";
import { AddDateFieldDialog } from "./dialogs/AddDateFieldDialog";
import { AddCheckboxFieldDialog } from "./dialogs/AddCheckboxFieldDialog";
import { AddUrlFieldDialog } from "./dialogs/AddUrlFieldDialog";
import { SelectAttributeDialog } from "./SelectAttributeDialog";
import { AddEmailFieldDialog } from "./dialogs/AddEmailFieldDialog";
import { AddPhoneFieldDialog } from "./dialogs/AddPhoneFieldDialog";
import { AddLocationFieldDialog } from "./dialogs/AddLocationFieldDialog";
import { AddAssigneeFieldDialog } from "./dialogs/AddAssigneeDialog";
import { AddAvatarFieldDialog } from "./dialogs/AddAvatarDialog";
import { AddIconFieldDialog } from "./dialogs/AddIconFieldDialog";
import { AddFilesFieldDialog } from "./dialogs/AddFilesFieldDialog";
import { AddRelationFieldDialog } from "./dialogs/AddRelationFieldDialog";




class Controller extends UIFormController {
    public override LoadView() {
        const { onNewFieldAdded, view } = this.props;
        return (
            OptionsContext(() =>
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
                                    setSelectedType(AddTextFieldDialog(onNewFieldAdded))
                                    //DynoDialog.Show(AddTextFieldDialog(workspaceId, databaseId, collectionId))
                                )
                            },
                            {
                                title: 'Rich Text',
                                icon: Icons.RichTextAttribute,
                                onClick: () => (
                                    setSelectedType(AddRichTextFieldDialog(onNewFieldAdded))
                                    //  DynoDialog.Show(AddNumberFieldDialog(workspaceId, databaseId, collectionId))
                                )
                            },
                            {
                                title: 'Number',
                                icon: Icons.NumberAttribute,
                                onClick: () => (
                                    setSelectedType(AddNumberFieldDialog(onNewFieldAdded))
                                )
                            },
                            {
                                title: 'Single Select',
                                icon: Icons.SingleSelectAttribute,
                                onClick: () => (
                                    setSelectedType(AddSelectFieldDialog(onNewFieldAdded))
                                )
                            },
                            {
                                title: 'Multi Select',
                                icon: Icons.MultiSelectAttribute,
                                onClick: () => (
                                    setSelectedType(AddMultiSelectFieldDialog(onNewFieldAdded))
                                )
                            },
                            {
                                title: 'Workflow',
                                icon: Icons.WorkflowAttribute
                            },
                            {
                                title: 'Assignments',
                                icon: Icons.AssignmentAttribute,
                                onClick: () => (
                                    setSelectedType(AddAssigneeFieldDialog(onNewFieldAdded))
                                )
                            },
                            {
                                title: 'Date',
                                icon: Icons.DateAttribute,
                                onClick: () => (
                                    setSelectedType(AddDateFieldDialog(onNewFieldAdded))
                                )
                            },
                            {
                                title: 'Checkbox',
                                icon: Icons.CheckboxAttribute,
                                onClick: () => (
                                    setSelectedType(AddCheckboxFieldDialog(onNewFieldAdded))
                                )
                            },
                            {
                                title: 'URL',
                                icon: Icons.URLAttribute,
                                onClick: () => (
                                    setSelectedType(AddUrlFieldDialog(onNewFieldAdded))
                                )
                            },
                            {
                                title: 'Email',
                                icon: Icons.EmailAttribute,
                                onClick: () => (
                                    setSelectedType(AddEmailFieldDialog(onNewFieldAdded))
                                )
                            },
                            {
                                title: 'Phone',
                                icon: Icons.PhoneAttribute,
                                onClick: () => (
                                    setSelectedType(AddPhoneFieldDialog(onNewFieldAdded))
                                )
                            },
                            {
                                title: 'Location',
                                icon: Icons.LocationAttribute,
                                onClick: () => (
                                    setSelectedType(AddLocationFieldDialog(onNewFieldAdded))
                                )
                            },
                            {
                                title: 'Avatar',
                                icon: Icons.AvatarAttribute,
                                onClick: () => (
                                    setSelectedType(AddAvatarFieldDialog(onNewFieldAdded))
                                )
                            },
                            {
                                title: 'Icon',
                                icon: Icons.IconAttribute,
                                onClick: () => (
                                    setSelectedType(AddIconFieldDialog(onNewFieldAdded))
                                )
                            },
                            {
                                title: 'Files',
                                icon: Icons.FilesAttribute,
                                onClick: () => (
                                    setSelectedType(AddFilesFieldDialog(onNewFieldAdded))
                                )
                            },
                            {
                                title: 'Comments',
                                icon: Icons.CommentsAttribute
                            },
                            {
                                title: 'Relation to...',
                                icon: Icons.RelationAttribute,
                                onClick: () => {
                                    setSelectedType(AddRelationFieldDialog)
                                }
                            },
                            {
                                title: 'Other',
                                icon: Icons.RelationAttribute,
                                onClick: () => {
                                    setMenuIsOpen(false);
                                    SelectAttributeDialog.Show().then((dialog) => {
                                        setSelectedType(dialog(onNewFieldAdded));
                                        setMenuIsOpen(true);
                                    });
                                }
                            }
                        ]
                        return (
                            (PopupButton as any)(
                                HStack(
                                    view(menuIsOpen)
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
                                        setSelectedType(null);
                                        setMenuIsOpen(!menuIsOpen);
                                    })
                            )(
                                ReactView(
                                    <DialogContext.Provider value={{
                                        Hide: () => {
                                            setMenuIsOpen(false);
                                            setSelectedType(null);
                                        }
                                    }}>
                                        {
                                            selectedType == null ?
                                                VStack(
                                                    ...ForEach(AttributesMenuItems)((item) =>
                                                        HStack({ alignment: cLeading, spacing: 10 })(
                                                            HStack(
                                                                Icon(item.icon)
                                                            ).width(18).height(18)
                                                            ,
                                                            Text(item.title) as any
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
                                                    .render()
                                                :
                                                UIViewBuilder(() => {
                                                    console.log(selectedType);
                                                    return (
                                                        VStack
                                                            (
                                                                FormBuilder.render(selectedType)
                                                            )
                                                            .padding()
                                                    )
                                                }
                                                )

                                                    .render()
                                        }
                                    </DialogContext.Provider>
                                )

                            )
                                .open(menuIsOpen)
                                .hideHandle(hideHandle => _hideHandle = hideHandle)
                                .dialogPosition(DialogPosition.BOTTOM_END)
                                .onDidHide(() => {

                                    setMenuIsOpen(false);
                                    setSelectedType(null);
                                })
                        )
                    })


                ).width()
            ).options(this.props)
        )
    }
}

export const NewFieldMenuView = ({ view, onNewFieldAdded }: { view: (menuIsOpen: boolean) => UIView, onNewFieldAdded?: Function }) => (
    ReactView(
        <Controller onNewFieldAdded={onNewFieldAdded} view={view}></Controller>
    )
)


FormBuilder.injectAction(SaveTextFieldAction);
FormBuilder.injectAction(SaveRichTextFieldAction);
FormBuilder.injectAction(SaveNumberFieldAction);
FormBuilder.injectAction(SaveSelectFieldAction);

FormBuilder.injectAction('com.celmino-ui.actions.saveMultiSelectField', SaveMultiSelectFieldAction);

