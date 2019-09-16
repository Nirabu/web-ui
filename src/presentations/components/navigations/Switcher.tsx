import * as React from 'react';

interface SwitcherProps {
    genre1: string;
    genre2: string;
}

const Switcher: React.FC<SwitcherProps> = (props) => {
    return (
        <>
            <button>{props.genre1}</button>
            <button>{props.genre2}</button>
        </>
    )
};

export default Switcher;