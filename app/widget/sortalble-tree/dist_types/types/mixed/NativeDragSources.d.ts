export declare function createNativeDragSource(type: any): {
    new (): {
        item: {
            [x: string]: any;
        };
        mutateItemByReadingDataTransfer(dataTransfer: any): void;
        canDrag(): boolean;
        beginDrag(): {
            [x: string]: any;
        };
        isDragging(monitor: any, handle: any): boolean;
        endDrag(): void;
    };
};
export declare function matchNativeItemType(dataTransfer: any): string;
