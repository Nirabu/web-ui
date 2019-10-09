import * as React from 'react';
import {TitleBig, TitleMedium} from "../../../components/Titles";

interface BoxHeaderProps {
    title: string;
}

const BoxHeader: React.FC<BoxHeaderProps> = (props) => {
    return (
        <header className='box-header'>
            <TitleMedium title={props.title}/>
        </header>
    )
};

export default BoxHeader;