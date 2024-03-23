export type SidebarState = {
    isOpen: boolean;
    open: () => void;
    close: () => void;
    toggle: () => void;
};
export declare const useSidebar: () => SidebarState;
