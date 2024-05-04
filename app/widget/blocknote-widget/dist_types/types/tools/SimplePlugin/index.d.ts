export declare class SimpleImage {
    static get toolbox(): {
        title: string;
        icon: string;
    };
    render(): HTMLInputElement;
    save(blockContent: any): {
        url: any;
    };
}
