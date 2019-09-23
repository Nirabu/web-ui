import * as React from 'react';

interface CategoryProps {
    title: string;
}

const TitleSmall: React.FC<CategoryProps> = (props) => {
    return (
        <>
            <h6>{props.title}</h6>
        </>
    )
};

export default TitleSmall;