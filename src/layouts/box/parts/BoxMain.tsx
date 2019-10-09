import * as React from 'react';
import TitleMedium from "../../../components/titles/TitleMedium";

interface RecipesProps {
    content: string;
    footer?: string;
}

const BoxMain: React.FC<RecipesProps> = (props) => {
    return (
        <main className='box-main'>
            <p className='box-main-content'>{props.content}</p>
        </main>
    )
};

export default BoxMain;