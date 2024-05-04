import {
    HStack,
    MenuButton,
    SvgIcon,
    Text, TextField, UIController, UIView,
    cLeading, cVertical,
    useState
} from '@tuval/forms';

import { useApplet, useAppletNavigate, useDeleteApplet, useRealm } from '@celmino/ui';
import { useUpdateDocument } from '@realmocean/sdk';
import { EventBus, is } from '@tuval/core';
import React from 'react';

export const EditIcon = () => (
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M6.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"></path></svg>
)

export class TreeController extends UIController {

    public override LoadView(): UIView {
        const { realm } = useRealm();
        const { applet } = useApplet();
        const workspaceId = realm.$id;
        const appletId = applet.$id;

        const { onItemSelected, item } = this.props.config || {};

        const [isEditing, setIsEditing] = useState(false);
        const [title, setTitle] = useState(item?.name);
        const { updateDocument } = useUpdateDocument(workspaceId);

        const { navigate } = useAppletNavigate();
        const { deleteApplet, isLoading } = useDeleteApplet();

        return (
            HStack({ alignment: cLeading, spacing: 2 })(
                // Title
                (isEditing && is.string(item?.name)) ?
                    HStack({ alignment: cLeading })(
                        TextField()
                            .border('0')
                            .fontSize(14)
                            // .fontWeight('500')
                            .marginLeft(-2)
                            .padding(cVertical, 3)
                            .value(title)
                            .onChange((value) => setTitle(value))
                            .outline({ focus: 'none' })
                            .onBlur(() => {

                                updateDocument({
                                    databaseId: 'workspace',
                                    collectionId: 'applets',
                                    documentId: item.$id,
                                    data: {
                                        name: title
                                    }
                                }, () => {
                                    updateDocument({
                                        databaseId: 'workspace',
                                        collectionId: 'ws_tree',
                                        documentId: item.$id,
                                        data: {
                                            name: title
                                        }
                                    }, () => {
                                        EventBus.Default.fire('applet.added', { treeItem: item })
                                    })
                                })

                            })
                    )
                        .draggable(true)
                        .onDragStart((e) => {
                            e.preventDefault();
                            e.stopPropagation();
                        })
                        .height()
                        .onClick((e) => e.stopPropagation())


                        .onClickAway(() => {
                            setTimeout(() => {
                                setIsEditing(false);
                            }, 100);
                            //setIsEditing(false);
                        })



                    :
                    HStack({ alignment: cLeading })(
                        HStack({ alignment: cLeading })(
                            HStack(
                                // HDivider().background('#E4EAE2').height(1),
                                Text(item?.name)
                                    .foregroundColor('white')
                                    .fontSize(12)
                                    .fontWeight('500')
                                    .textTransform('uppercase'),
                                // HDivider().background('#E4EAE2').height(1),
                            )
                                .width()
                                .height(24)
                                .padding('4px 8px 4px 5px')
                                .cornerRadius(6)
                                //  .background('rgb(16, 144, 224)')
                                .background(applet?.themeColor ?? 'rgb(16, 144, 224)')
                        )
                        ,
                        HStack(
                            MenuButton()
                                .model([
                                    {
                                        title: 'DIVIDER APPLET',
                                        type: 'Title'
                                    },
                                    {
                                        title: 'Rename',
                                        icon: SvgIcon('svg-sprite-global__edit', '#151719', '18px', '18px'),
                                        onClick: () => setIsEditing(true)
                                    },
                                    {
                                        title: 'Applet settings',
                                        icon: SvgIcon('svg-sprite-global__settings', '#151719', '18px', '18px'),
                                        onClick: () => navigate(`settings/general`)
                                    },
                                    {
                                        title: 'Delete Applet',
                                        icon: SvgIcon('svg-sprite-global__delete', '#bc4841', '18px', '18px'),
                                        color:'#bc4841',
                                        onClick: () =>{
                                            deleteApplet(applet.$id , ()=>{
                                               // alert('deleted')
                                                EventBus.Default.fire('applet.added', { treeItem: item })
                                            })
                                        }
                                    },

                                ])
                                .icon(EditIcon)
                        )
                            .width().height()
                            .onClick((e) => e.stopPropagation())
                    )
                        .height(30)

                        //.marginVertical(5)
                        //  .padding()
                        // .background('#E4EAE2')
                        .cornerRadius(5)
                //.clipPath('polygon(95% 0, 100% 50%, 95% 100%, 0 100%, 0 50%, 0 0)')
            )


                .onClick(() => {
                    navigate(``);
                })
        )
    }
}
