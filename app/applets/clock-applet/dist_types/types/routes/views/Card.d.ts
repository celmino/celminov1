import React from "react";
export declare class Card extends React.Component<any, any> {
    state: {
        time: Date;
    };
    intervalID: any;
    componentDidMount(): void;
    componentWillUnmount(): void;
    getCurrentTime(): Date;
    tick(): void;
    render(): React.JSX.Element;
}
