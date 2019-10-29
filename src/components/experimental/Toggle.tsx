import React, { useState } from "react";

export default function Toggle(props:any) {
    const [state, setState] = useState(false);

    let cover:boolean = true;

    return (
        <button
            onClick={() => {
                setState(cover);
                cover = !cover;
            }}
            data-testid="toggle"
        >
            {state ? "Turn on" : "Turn off"}
        </button>
    );
}
