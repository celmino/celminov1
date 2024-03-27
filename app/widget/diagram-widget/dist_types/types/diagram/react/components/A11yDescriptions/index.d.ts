import React from 'react';
export declare const ARIA_NODE_DESC_KEY = "react-flow__node-desc";
export declare const ARIA_EDGE_DESC_KEY = "react-flow__edge-desc";
export declare const ARIA_LIVE_MESSAGE = "react-flow__aria-live";
export declare function A11yDescriptions({ rfId, disableKeyboardA11y }: {
    rfId: string;
    disableKeyboardA11y: boolean;
}): React.JSX.Element;
