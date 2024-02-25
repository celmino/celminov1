import { ActionMenuItem, ActionMenuRenderProps } from '@yoopta/action-menu-list';
import s from './NotionActionMenu.module.scss';
import React from 'react';
import { ForEach, HStack, ReactView, Text, UIImage, cTopLeading } from '@tuval/forms';

const NotionActionMenu = (props: ActionMenuRenderProps) => {
    const { groups, isNotFound, getItemProps, getRootProps } = props;

    console.log()
    return (
        <div {...getRootProps()} className={s.dropdown}>
            <div className={s.elementList}>
                {groups.texts.length > 0 && (
                    <div className={s.group}>
                        <div className={s.groupTitle}>Text nodes</div>
                        {
                            HStack({ alignment: cTopLeading, spacing: 5 })(
                                ...ForEach(groups.texts)((item: any) => {
                                    const { onClick } = getItemProps(item.type);
                                    return (
                                        HStack(
                                            UIImage(item.icon).width(50).height(50),
                                        )
                                            .onClick(onClick)
                                            .height(50)
                                            .width(50)
                                            .border('1px solid black')

                                        /*  <button key={item.type} type="button" className={s.item} {...getItemProps(item.type)}>
                                             <div className={s.itemLeft}>
                                                 {typeof item.icon === 'string' && <img src={item.icon} className={s.leftImage} />}
                                             </div>
                                             <div className={s.itemRight}>
                                                 <div className={s.rightTitle}>{item.displayLabel}</div>
                                                 <div className={s.rightDesc}>{item.description}</div>
                                             </div>
                                         </button> */
                                    )
                                }

                                )

                            )
                                .wrap('wrap')
                                .height(500)
                                .width(300)
                                .render()
                        }

                    </div>
                )}
                {groups.voids.length > 0 && (
                    <div className={s.group}>
                        <div className={s.groupTitle}>Void nodes</div>

                        {groups.voids.map((item: any) => (
                            <button key={item.type} type="button" className={s.item} {...getItemProps(item.type)}>
                                <div className={s.itemLeft}>
                                    {typeof item.icon === 'string' && <img src={item.icon} className={s.leftImage} />}
                                </div>
                                <div className={s.itemRight}>
                                    <div className={s.rightTitle}>{item.displayLabel}</div>
                                    <div className={s.rightDesc}>{item.description}</div>
                                </div>
                            </button>
                        ))}
                    </div>
                )}
                {isNotFound && (
                    <button type="button" className={s.item} disabled>
                        <div className={s.itemRight}>
                            <div className={s.rightTitle}>Not found</div>
                        </div>
                    </button>
                )}
            </div>
        </div>
    );
};

export { NotionActionMenu };