import { ReactView, css,  } from "@tuval/forms";
import React, {useCallback} from "react";


const EditorComponent = () => {

    const className = css`
   
        width: 500px;
        background: #f5f5f5;
        border: 1px solid #ddd;
        padding: 5px;
        font-size:1.4rem;
    `

    const onKeyDown = useCallback((e) => {
        console.log(e.key);
        if (e.key === 'Enter') {
            e.preventDefault()
            document.execCommand('insertHTML', false, '<br><br>');
        } 
        if (e.key === 'Tab') {
            e.preventDefault()
            document.execCommand('insertHTML', false, '&emsp;');
        }
        if (e.key === '/') {
            e.preventDefault()
            document.execCommand('insertHTML', false, '&emsp;&emsp;');
        }


    },[])
    return (

        <div
            contentEditable={true}
            className={className}
            onKeyDown={onKeyDown}
        >
        </div>

    )
}

export const Editor = () => (
    ReactView(


        <EditorComponent />
    )
)