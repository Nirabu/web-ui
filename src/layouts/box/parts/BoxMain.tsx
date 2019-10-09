import * as React from 'react';
import TitleMedium from "../../../components/titles/TitleMedium";

interface RecipesProps {
    title: string;
    content: string;
    footer?: string;
}

const BoxMain: React.FC<RecipesProps> = (props) => {
    return (
        <main className='box-main'>
            <header className='box-main-header'>
                <TitleMedium title={props.title}/>
            </header>

            <p className='box-main-content'>{props.content}</p>
        </main>
    )
};

export default BoxMain;