import * as React from 'react';
import TitleBig from "../../../components/display/titles/TitleBig";

interface BoxHeaderProps {
    title: string;
}

const BoxHeader: React.FC<BoxHeaderProps> = (props) => {
    return (
        <header className='box-header'>
            <TitleBig title={props.title}/>
        </header>
    )
};

export default BoxHeader;