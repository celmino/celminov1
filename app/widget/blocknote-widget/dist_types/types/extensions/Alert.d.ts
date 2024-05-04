import { BlockNoteEditor } from "@blocknote/core";
import { DefaultReactSuggestionItem } from "@blocknote/react";
import "./style.scss";
export declare const alertTypes: readonly [{
    readonly title: "Warning";
    readonly value: "warning";
    readonly icon: import("react-icons").IconType;
    readonly color: "#e69819";
    readonly backgroundColor: {
        readonly light: "#fff6e6";
        readonly dark: "#805d20";
    };
}, {
    readonly title: "Error";
    readonly value: "error";
    readonly icon: import("react-icons").IconType;
    readonly color: "#d80d0d";
    readonly backgroundColor: {
        readonly light: "#ffe6e6";
        readonly dark: "#802020";
    };
}, {
    readonly title: "Info";
    readonly value: "info";
    readonly icon: import("react-icons").IconType;
    readonly color: "#507aff";
    readonly backgroundColor: {
        readonly light: "#e6ebff";
        readonly dark: "#203380";
    };
}, {
    readonly title: "Success";
    readonly value: "success";
    readonly icon: import("react-icons").IconType;
    readonly color: "#0bc10b";
    readonly backgroundColor: {
        readonly light: "#e6ffe6";
        readonly dark: "#208020";
    };
}];
export declare const Alert: {
    config: {
        readonly type: "alert";
        readonly propSchema: {
            readonly textAlignment: {
                default: "left";
                values: readonly ["left", "center", "right", "justify"];
            };
            readonly textColor: {
                default: "default";
            };
            readonly type: {
                readonly default: "warning";
                readonly values: readonly ["warning", "error", "info", "success"];
            };
        };
        readonly content: "inline";
    };
    implementation: import("@blocknote/core").TiptapBlockImplementation<{
        readonly type: "alert";
        readonly propSchema: {
            readonly textAlignment: {
                default: "left";
                values: readonly ["left", "center", "right", "justify"];
            };
            readonly textColor: {
                default: "default";
            };
            readonly type: {
                readonly default: "warning";
                readonly values: readonly ["warning", "error", "info", "success"];
            };
        };
        readonly content: "inline";
    }, any, import("@blocknote/core").InlineContentSchema, import("@blocknote/core").StyleSchema>;
};
export declare const getCustomSlashMenuItems: (editor: BlockNoteEditor) => DefaultReactSuggestionItem[];
