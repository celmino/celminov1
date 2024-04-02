export declare const initialContent: {
    type: string;
    content: ({
        type: string;
        attrs: {
            textAlign: string;
            level: number;
            class?: undefined;
            language?: undefined;
            src?: undefined;
            width?: undefined;
            align?: undefined;
        };
        content: ({
            type: string;
            attrs: {
                name: string;
            };
            text?: undefined;
        } | {
            type: string;
            text: string;
            attrs?: undefined;
        })[];
    } | {
        type: string;
        attrs: {
            class: any;
            textAlign: string;
            level?: undefined;
            language?: undefined;
            src?: undefined;
            width?: undefined;
            align?: undefined;
        };
        content: ({
            type: string;
            text: string;
            marks?: undefined;
        } | {
            type: string;
            marks: {
                type: string;
                attrs: {
                    href: string;
                    target: string;
                    class: any;
                };
            }[];
            text: string;
        })[];
    } | {
        type: string;
        attrs: {
            language: any;
            textAlign?: undefined;
            level?: undefined;
            class?: undefined;
            src?: undefined;
            width?: undefined;
            align?: undefined;
        };
        content: {
            type: string;
            text: string;
        }[];
    } | {
        type: string;
        content: {
            type: string;
            content: {
                type: string;
                attrs: {
                    class: any;
                    textAlign: string;
                };
                content: ({
                    type: string;
                    text: string;
                    marks?: undefined;
                } | {
                    type: string;
                    marks: {
                        type: string;
                        attrs: {
                            fontSize: string;
                            fontFamily: any;
                            color: any;
                        };
                    }[];
                    text: string;
                } | {
                    type: string;
                    marks: {
                        type: string;
                    }[];
                    text: string;
                } | {
                    type: string;
                    marks: {
                        type: string;
                        attrs: {
                            fontSize: any;
                            fontFamily: string;
                            color: any;
                        };
                    }[];
                    text: string;
                } | {
                    type: string;
                    marks: {
                        type: string;
                        attrs: {
                            fontSize: any;
                            fontFamily: any;
                            color: string;
                        };
                    }[];
                    text: string;
                } | {
                    type: string;
                    marks: {
                        type: string;
                        attrs: {
                            color: string;
                        };
                    }[];
                    text: string;
                })[];
            }[];
        }[];
        attrs?: undefined;
    } | {
        type: string;
        attrs: {
            src: string;
            width: string;
            align: string;
            textAlign?: undefined;
            level?: undefined;
            class?: undefined;
            language?: undefined;
        };
        content?: undefined;
    } | {
        type: string;
        attrs: {
            class: any;
            textAlign: string;
            level?: undefined;
            language?: undefined;
            src?: undefined;
            width?: undefined;
            align?: undefined;
        };
        content?: undefined;
    })[];
};
