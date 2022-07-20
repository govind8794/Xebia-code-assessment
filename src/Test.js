import React, {useState} from "react";

export const Test = () =>{
    const[ text, setText] = useState(0);

    const addHandler = () => {

        setText( text++);
    }
    const subHandler = () => {
        console.log('test', text )

        setText(text--);
    }

    return(
        <div>
            <h2>
                {text}
            </h2>
            <button onClick={() => setText(text++)} >
            add
            </button>
            <button onClick={() => subHandler} >
            sub
            </button>
        </div>
    )
}