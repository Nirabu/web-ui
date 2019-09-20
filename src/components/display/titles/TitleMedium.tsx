import * as React from 'react';

interface BoxProps {
    title: string;
}

const TitleMedium: React.FC<BoxProps> = (props) => {
    return (
        <>
            <h3>{props.title}</h3>
        </>
    )
};

export default TitleMedium;