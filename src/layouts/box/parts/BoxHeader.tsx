import * as React from 'react';
import {TitleBig, TitleMedium, TitleSmall} from "../../../components/Titles";

interface BoxHeaderProps {
    title: string;
}

const BoxHeader: React.FC<BoxHeaderProps> = (props) => {
    return (
        <header className='box-header'>
            <TitleSmall title={props.title}/>
        </header>
    )
};

export default BoxHeader;
