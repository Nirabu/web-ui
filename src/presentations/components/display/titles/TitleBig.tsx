import * as React from 'react';

interface BiggestProps {
    title: string;
}

const TitleBig: React.FC<BiggestProps> = (props) => {
    return (
        <>
            <h1>{props.title}</h1>
        </>
    )
};

export default TitleBig;