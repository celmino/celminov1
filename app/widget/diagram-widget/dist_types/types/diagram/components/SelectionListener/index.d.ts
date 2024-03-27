/// <reference types="react" />
import type { OnSelectionChangeFunc } from '../../types';
type SelectionListenerProps = {
    onSelectionChange?: OnSelectionChangeFunc;
};
export declare function SelectionListener({ onSelectionChange }: SelectionListenerProps): import("react").JSX.Element;
export {};
