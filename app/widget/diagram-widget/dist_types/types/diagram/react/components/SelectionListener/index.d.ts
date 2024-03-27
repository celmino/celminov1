import type { OnSelectionChangeFunc } from '../../types';
import React from 'react';
type SelectionListenerProps = {
    onSelectionChange?: OnSelectionChangeFunc;
};
export declare function SelectionListener({ onSelectionChange }: SelectionListenerProps): React.JSX.Element;
export {};
