import * as React from 'react';

interface CategoryProps {
    content: string;
}

const SubContent: React.FC<CategoryProps> = (props) => {
    return (
        <>
            <p>
                {props.content}
            </p>
        </>
    )
};

export default SubContent;