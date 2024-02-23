import {
    DialogPosition,
    ForEach,
    Fragment,
    HStack, Icon, PopupButton,
    ReactView,
    ScrollView,
    Segmented,
    SvgIcon,
    Text, TextField,
    UIController, UIView, VStack,
    cTopLeading, darken, hex2rgb, lighten, useEffect,
    useState
} from '@tuval/forms';

import { useGetAccount, useGetTenantAccounts } from '@celmino/directoryprotocol';
import { is } from '@tuval/core';
import { useClickAway } from "@uidotdev/usehooks";
import { CuIcons, Icons } from './Icons';
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import React from 'react';
import { SegmentedRenderer } from '@realmocean/antd';

function hexToRgb(hex) {
    // Remove '#' if present
    hex = hex.replace(/^#/, '');
    
    // Convert to RGB
    let bigint = parseInt(hex, 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;
    
    return [r, g, b];
}


export class MyTestController extends UIController {
    public override LoadView(): UIView {
        let _hideHandle;

        const light = 0.812;
        const dark = 0.188;

        //#E72065


        const {
            selectedIcon,
            selectedCategory,

            onChange = void 0,
            width = 36,
            height = 36,
            padding = 5,
            tooltip = '',
            color = '#E72065',
            //  backgroundColor = 'transparent',
            readonly = false } = this.props.config || {};

           
        const [ r, g, b ] = hexToRgb('#E72065');
        const backgroundColor = `rgba(${r},${g},${b},${.15})`;
        const foregroundColor = `rgba(${r},${g},${b},${.95})`;


        // const [selectedEmoji, setSelectedEmoji] = useState(this.props.config.selectedEmoji);
        // const [selectedIcon, setSelectedIcon] = useState(this.props.config.selectedIcon);
        // const [selectedCuIcon, setSelectedCuIcon] = useState(this.props.config.selectedCuIcon);

        /*   const { accounts, isLoading } = useGetTenantAccounts({ tenant_id });
          const { account } = useGetAccount(selectedAccountId); */


        /*    useEffect(() => {
               setSelectedAccountId(this.props.config.selectedAccountId);
           }, [this.props.config.selectedAccountId]) */

        const [isOpen, setIsOpen] = useState(false);
        const [mode, setMode] = useState<any>(this.props.config.selectedCategory ?? 'Icons');

        const ref = useClickAway(() => {
            setIsOpen(false);
        });


        return (
            readonly ?
                HStack(
                    (selectedCategory === 'Icons' && selectedIcon) ?
                        Icon(Icons[selectedIcon]?.icon).allWidth(width).allHeight(height) : Fragment(),
                    (selectedCategory === 'CuIcons' && selectedIcon) ?
                        Icon(CuIcons[selectedIcon]?.icon).allWidth(width).allHeight(height) : Fragment(),
                    (selectedCategory === 'Emoji' && selectedIcon) ?
                        Text(selectedIcon).fontSize(width > 20 ? width * 0.70 : width) : Fragment(),

                ).allWidth(width + 4).allHeight(height + 4).padding(padding)
                    // .background('#40BC86')
                    .foregroundColor(foregroundColor)
                    .cornerRadius(5)
                    .background(selectedCategory === 'Emoji' ? '' :backgroundColor)
                :
                PopupButton(
                    HStack(
                        (selectedCategory === 'Icons' && selectedIcon) ?
                            Icon(Icons[selectedIcon]?.icon).allWidth(width).allHeight(height) : Fragment(),
                        (selectedCategory === 'CuIcons' && selectedIcon) ?
                            Icon(CuIcons[selectedIcon]?.icon).allWidth(width).allHeight(height) : Fragment(),
                        (selectedCategory === 'Emoji' && selectedIcon) ?
                            Text(selectedIcon).fontSize(width > 20 ? width * 0.70 : width) : Fragment(),

                    ).allWidth(width + 4).allHeight(height + 4).padding(padding)
                        // .background('#40BC86')
                        .foregroundColor(foregroundColor)
                        .cornerRadius(5)
                        .background(selectedCategory === 'Emoji' ? '' : backgroundColor)
                )(

                    VStack({ alignment: cTopLeading, spacing: 10 })(
                        Segmented().options(["Icons", "CuIcons", "Emoji"]).onChange((value) => {
                            setMode(value);
                        }).renderer(SegmentedRenderer)
                        ,
                        HStack(
                            HStack(
                                TextField().paddingLeft('25px').placeholder('Search...')
                                    .border('none').shadow({ focus: 'none' }),
                                // Icon(Icons.Search).position('absolute').left('8px').top('12px')
                            ).height().padding(5)
                        )
                            .borderBottom('1px solid #E8EAED')
                            .height(),
                        mode === 'Emoji' ?
                            ReactView(
                                <Picker data={data} onEmojiSelect={(e) => {
                                    if (is.function(onChange)) {
                                        onChange({
                                            iconCategory: 'Emoji',
                                            iconName: e.native,
                                        });
                                    }
                                    // setSelectedIcon(e.native);
                                    _hideHandle();
                                }} />
                            ) : Fragment(),
                        mode === 'Icons' ?

                            ScrollView(
                                HStack({ alignment: cTopLeading, spacing: 5 })(

                                    ...ForEach(Object.getOwnPropertyNames(Icons))((key) =>
                                        HStack(
                                            Icon(Icons[key].icon).width(24).height(24),
                                        )
                                            .tooltip(key)
                                            .cursor('pointer')
                                            .width()
                                            .height()
                                            .cornerRadius(4)
                                            .background({ hover: backgroundColor })
                                            .foregroundColor({default: foregroundColor })
                                            .padding(5)
                                            .onClick(() => {
                                                if (is.function(onChange)) {
                                                    onChange({
                                                        iconCategory: 'Icons',
                                                        iconName: key,
                                                    });
                                                }
                                                // setSelectedIcon(key);
                                                _hideHandle();
                                            })
                                    )
                                ).height().wrap('wrap')
                            )
                            : Fragment(),
                        mode === 'CuIcons' ?
                            ScrollView(
                                HStack({ alignment: cTopLeading, spacing: 5 })(

                                    ...ForEach(Object.getOwnPropertyNames(CuIcons))((key) =>
                                        HStack(
                                            Icon(CuIcons[key].icon).width(18).height(18),
                                        )
                                            .tooltip(key)
                                            .cursor('pointer')
                                            .width()
                                            .height()
                                            .cornerRadius(4)
                                            .background({ hover: '#E8EAED' })
                                            .foregroundColor({ hover: 'blue' })
                                            .padding(5)
                                            .onClick(() => {
                                                if (is.function(onChange)) {
                                                    onChange({
                                                        iconCategory: 'CuIcons',
                                                        iconName: key,
                                                    });
                                                }
                                                // setSelectedIcon(key);
                                                _hideHandle();
                                            })
                                    )
                                ).height().wrap('wrap')
                            )
                            : Fragment()
                    ).allWidth(360).allHeight(570).padding(2)

                )
                    //.open(isOpen)
                    .hideHandle(hideHandle => _hideHandle = hideHandle)
                    .dialogPosition(DialogPosition.BOTTOM_START))

    }

}

