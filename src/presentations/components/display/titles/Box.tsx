import * as React from 'react';

interface BoxProps {
    title: string;
}

const Box: React.FC<BoxProps> = (props) => {
    return (
        <>
            <h2>{props.title}</h2>
        </>
    )
};

export default Box;