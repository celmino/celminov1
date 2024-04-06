import React, { useEffect } from "react";
import mermaid from "mermaid";

export interface MermaidProps {
    text: string;
}

export const Mermaid: React.FC<MermaidProps> = ({ text }) => {
    const ref = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        mermaid.mermaidAPI.initialize({
            startOnLoad: true,
            securityLevel: "loose",
            theme: "forest",
            logLevel: 5
        });
    });

    useEffect(() => {
        if (ref.current && text !== "") {

            mermaid.mermaidAPI.render("preview", text, result => {
                ref.current.innerHTML = result;
            });

        }
    }, [text]);

    return <div key="preview" style={{ width: '100%', height: '100%' }} ref={ref} />;
};
