import { useMarks, useTools } from '@yoopta/editor';
import { ToolbarProps } from '@yoopta/toolbar';
import cx from 'classnames';
import { useState } from 'react';

const CodeIcon = () => (
    <svg viewBox="0 0 30 30" className="code" fill="currentColor" style={{width: '15px', height: '15px', display: 'block', fill: 'inherit', flexShrink: '0', backfaceVisibility: 'hidden'}}>
        <path d="M11.625,4L0,15l11.625,11L13,24.563L2.906,15L13,5.438L11.625,4z M18.375,4L17,5.438L27.094,15L17,24.563L18.375,26L30,15L18.375,4z" />
    </svg>
)

import s from './NotionToolbar.module.scss';
import React from 'react';

const NotionToolbar = (props: ToolbarProps) => {
    const [isChatGPTOpen, setIsChatGPTOpen] = useState(false);
    const { getRootProps } = props;
    const marks = useMarks();
    // const { ChatGPT } = useTools();

    return (
        <div {...getRootProps()}>
            <div className={s.toolbar}>
                <div className={s.group}>
                    <button type="button" className={s.item} onClick={() => setIsChatGPTOpen(true)}>
                        <span className={s.askGPT}>Ask GPT {`[WIP]`}</span>
                        {/* {isChatGPTOpen && <ChatGPT />} */}
                        {/* {tools.ActionMenu.show({ style: { marginLeft: '10px' } })} */}
                    </button>
                </div>
                <div className={s.group}>
                    <button
                        type="button"
                        onClick={() => marks.bold.toggle()}
                        className={cx(s.item, { [s.active]: marks.bold.isActive })}
                    >
                        <span className={s.bold}>B</span>
                    </button>
                    <button
                        type="button"
                        onClick={() => marks.italic.toggle()}
                        className={cx(s.item, { [s.active]: marks.italic.isActive })}
                    >
                        <span className={s.italic}>i</span>
                    </button>
                    <button
                        type="button"
                        onClick={() => marks.underline.toggle()}
                        className={cx(s.item, { [s.active]: marks.underline.isActive })}
                    >
                        <span className={s.underline}>U</span>
                    </button>
                    <button
                        type="button"
                        onClick={() => marks.strike.toggle()}
                        className={cx(s.item, { [s.active]: marks.strike.isActive })}
                    >
                        <span className={s.strike}>S</span>
                    </button>
                    <button
                        type="button"
                        onClick={() => marks.code.toggle()}
                        className={cx(s.item, { [s.active]: marks.code.isActive })}
                    >
                        <span className={s.code}>
                            <CodeIcon />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export { NotionToolbar };