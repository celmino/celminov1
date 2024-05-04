import { BlockNoteEditor, PartialBlock, defaultProps } from "@blocknote/core";
import { DefaultReactSuggestionItem, createReactBlockSpec, getDefaultReactSlashMenuItems } from "@blocknote/react";
import { Menu } from "@mantine/core";
import { MdCancel, MdCheckCircle, MdError, MdInfo } from "react-icons/md";

import "./style.scss";

import React from "react";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { UIWidget, VStack } from "@tuval/forms";

// The types of alerts that users can choose from.
export const alertTypes = [
    {
        title: "Warning",
        value: "warning",
        icon: MdError,
        color: "#e69819",
        backgroundColor: {
            light: "#fff6e6",
            dark: "#805d20",
        },
    },
    {
        title: "Error",
        value: "error",
        icon: MdCancel,
        color: "#d80d0d",
        backgroundColor: {
            light: "#ffe6e6",
            dark: "#802020",
        },
    },
    {
        title: "Info",
        value: "info",
        icon: MdInfo,
        color: "#507aff",
        backgroundColor: {
            light: "#e6ebff",
            dark: "#203380",
        },
    },
    {
        title: "Success",
        value: "success",
        icon: MdCheckCircle,
        color: "#0bc10b",
        backgroundColor: {
            light: "#e6ffe6",
            dark: "#208020",
        },
    },
] as const;

// The Alert block.
export const Alert = createReactBlockSpec(
    {
        type: "alert",
        propSchema: {
            textAlignment: defaultProps.textAlignment,
            textColor: defaultProps.textColor,
            type: {
                default: "warning",
                values: ["warning", "error", "info", "success"],
            },
        },
        content: "inline",
    },
    {
        render: (props) => {
            const alertType = alertTypes.find(
                (a) => a.value === props.block.props.type
            )!;
            const Icon = alertType.icon;

            return (
                VStack(
                    VStack(
                        <div className={"alert"} data-alert-type={props.block.props.type}>
                            {/*Icon which opens a menu to choose the Alert type*/}
                            <Menu withinPortal={false} zIndex={999999}>
                                <Menu.Target>
                                    <div className={"alert-icon-wrapper"} contentEditable={false}>
                                        <Icon
                                            className={"alert-icon"}
                                            data-alert-icon-type={props.block.props.type}
                                            size={32}
                                        />
                                    </div>
                                </Menu.Target>
                                {/*Dropdown to change the Alert type*/}
                                <Menu.Dropdown>
                                    <Menu.Label>Alert Type</Menu.Label>
                                    <Menu.Divider />
                                    {alertTypes.map((type) => {
                                        const ItemIcon = type.icon;

                                        return (
                                            <Menu.Item
                                                key={type.value}
                                                leftSection={
                                                    <ItemIcon
                                                        className={"alert-icon"}
                                                        data-alert-icon-type={type.value}
                                                    />
                                                }
                                                onClick={() =>
                                                    props.editor.updateBlock(props.block, {
                                                        type: "alert",
                                                        props: { type: type.value },
                                                    })
                                                }>
                                                {type.title}
                                            </Menu.Item>
                                        );
                                    })}
                                </Menu.Dropdown>
                            </Menu>
                            {/*Rich text field for user to type in*/}
                            <div className={"inline-content"} ref={props.contentRef} />
                        </div>
                    ).display('block')
                ).render()
            );
        },
    }
);


// Custom Slash Menu item to insert a block after the current one.
const insertAlertItem = (editor: BlockNoteEditor) => ({
    title: "Insert Hello World",
    onItemClick: () => {
        // Block that the text cursor is currently in.
        const currentBlock = editor.getTextCursorPosition().block;

        // New block we want to insert.
        const helloWorldBlock: PartialBlock = {
            type: "alert" as any,
            content: 'Notice the new ',
        };

        // Inserting the new block after the current one.
        editor.insertBlocks([helloWorldBlock], currentBlock);
    },
    aliases: ["helloworld", "hw"],
    group: "Other",
    icon: <HiOutlineGlobeAlt size={18} />,
    subtext: "Used to insert a block with 'Hello World' below.",
});

// List containing all default Slash Menu Items, as well as our custom one.
export const getCustomSlashMenuItems = (
    editor: BlockNoteEditor
): DefaultReactSuggestionItem[] => [
        ...getDefaultReactSlashMenuItems(editor),
        insertAlertItem(editor),
    ];